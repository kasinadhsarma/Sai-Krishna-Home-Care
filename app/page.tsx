import { Suspense } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Team from "@/components/team"
import ContactSection from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import Loading from "./loading"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Team />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>

      <ScrollToTop />
    </div>
  )
}

