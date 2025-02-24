"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sai Krishna Home Care services
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Providing 24/7 care services with affordable prices and reliable workers. Your trusted partner in home
              healthcare.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.location.href = 'tel:+917997531777'}
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call Now: 7997531777
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">★</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by 500+ families</p>
                <p className="text-sm text-muted-foreground">Across Vijayawada</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DHS9E5av6GdPzvzgEm7fF8EtLzm030.png"
                alt="Home Care Services"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
              <p className="text-sm font-medium">Reg No: AP-20-18-001-03691925</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
