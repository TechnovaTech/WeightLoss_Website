"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Clock, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Comprehensive Weight Loss Program",
      duration: "12 weeks",
      price: "$2,997",
      popular: true,
      features: [
        "Medical evaluation & body composition analysis",
        "Personalized nutrition plan",
        "Weekly coaching sessions",
        "Prescription medications (if appropriate)",
        "Exercise guidance & support",
        "24/7 support access"
      ]
    },
    {
      title: "Quick Start Program",
      duration: "6 weeks",
      price: "$1,497",
      popular: false,
      features: [
        "Initial medical consultation",
        "Basic nutrition guidance",
        "Bi-weekly check-ins",
        "Supplement recommendations",
        "Exercise plan"
      ]
    },
    {
      title: "Maintenance Program",
      duration: "Ongoing",
      price: "$297/month",
      popular: false,
      features: [
        "Monthly consultations",
        "Ongoing support",
        "Plan adjustments",
        "Weight monitoring",
        "Lifestyle coaching"
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-sage/10 to-ivory">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              Weight Loss Programs
            </h1>
            <p className="text-xl text-charcoal/80 mb-8">
              Medically supervised weight loss programs designed to help you achieve lasting results
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-charcoal/70">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>1000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Average 25lbs Lost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className={`relative ${program.popular ? 'ring-2 ring-forest shadow-xl' : 'shadow-lg'}`}>
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-forest text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{program.title}</h3>
                    <div className="flex items-center justify-center gap-2 text-charcoal/70 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-4xl font-bold text-forest mb-2">{program.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${program.popular ? 'bg-forest hover:bg-forest/90' : 'bg-sage hover:bg-sage/90'} text-white`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">How It Works</h2>
            <p className="text-xl text-charcoal/70">Simple steps to your weight loss success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Initial Consultation", desc: "Comprehensive medical evaluation and goal setting" },
              { step: "2", title: "Custom Plan", desc: "Personalized nutrition and exercise program" },
              { step: "3", title: "Weekly Support", desc: "Regular check-ins and plan adjustments" },
              { step: "4", title: "Achieve Goals", desc: "Reach your target weight with ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-forest text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Book your free consultation today</p>
          <Button className="bg-white text-forest hover:bg-ivory text-lg px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}