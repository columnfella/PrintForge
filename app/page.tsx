import HeroImage from "@/public/hero-image.png"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what's possible with 3D Printing
          </h1>
          <p className="text-lg text-gray-600">
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>

          <div className="flex gap-4">
            <button
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              <Link href="/3d-models">
                Browse Models
              </Link>
            </button>
          </div>
        </div>

        <img src={HeroImage.src} className="w-[350px] h-auto rounded-lg" />

      </section>
    </main>
  )
}
