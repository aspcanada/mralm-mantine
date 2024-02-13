import Image from 'next/image'

export default function Banner({ title, description, image, imageAlt }) {
  return (
    <>
      <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl mb-10">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={imageAlt}
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
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-sky-200 sm:max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
