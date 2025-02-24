"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Baby, ChefHat, Heart, Home, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Patient Care",
    description: "24/7 professional care for patients with dedicated support staff",
  },
  {
    icon: Baby,
    title: "Baby Care",
    description: "Experienced nannies providing loving care for your little ones",
  },
  {
    icon: Home,
    title: "House Keeping",
    description: "Comprehensive house keeping services to maintain your home",
  },
  {
    icon: ChefHat,
    title: "Cooking",
    description: "Skilled cooks preparing healthy and delicious meals",
  },
  {
    icon: Users,
    title: "Elderly Care",
    description: "Compassionate care services for elderly family members",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need us",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home care services tailored to your needs with trained and reliable professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

