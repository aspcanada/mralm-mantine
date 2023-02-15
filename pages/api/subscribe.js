export default async function handler(req, res) {
  const { email } = req.body

  if (!email) {
    res.status(401).json({ error: 'Email is required' })
    return
  }

  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      },
    ],
  }

  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
    const URL = `https://us1.api.mailchimp.com/3.0/lists/${audienceId}`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(mailChimpData),
    })

    const data = await response.json()

    // Error handling.
    if (data.errors[0]?.error) {
      if (data.errors[0].error.includes('is already a list member')) {
        res.status(200).json({ success: true })
      } else {
        console.error(data.errors[0].error)
        console.log(data.errors[0].error)
        res.status(401).json({ error: data.errors[0].error })
      }
    } else {
      res.status(200).json({ success: true })
    }
  } catch (e) {
    console.error(e)
    console.log(e)
    res
      .status(401)
      .json({ error: 'Something went wrong, please try again later.' })
  }
}
