import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl mb-10">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={url}
          alt={`Cover Image for ${title}`}
          width={1216}
          height={498}
          priority="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-700 mix-blend-multiply" />
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
          {title}
        </h1>
      </div>
    </div>
  )

  return (
    <>
      <div className="sm:mx-0">
        {slug ? (
          <Link href={`/blog/${slug}`} aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    </>
  )
}
