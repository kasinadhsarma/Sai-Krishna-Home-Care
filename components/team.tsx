"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

const team = [
  {
    name: "Chenna kesava Sainadh",
    role: "Senior Care Professional",
  },
  {
    name: "Naga Raju",
    role: "Care Specialist",
  },
  {
    name: "Narasimha Raju",
    role: "Home Care Expert",
  },
  {
    name: "Venkata Sai nadh",
    role: "Patient Care Specialist",
  },
  {
    name: "Suryudra Ramgopal",
    role: "Senior Caregiver",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and dedicated care professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <User className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">Reg No: AP-20-18-001-03691925</p>
        </motion.div>
      </div>
    </section>
  )
}

