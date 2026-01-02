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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-sage/20 via-forest/10 to-sage/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Center Content */}
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-light text-white/90 mb-8 tracking-wider" style={{ fontFamily: 'serif', color: '#1f3d2b' }}>
              Weight Loss Programs
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
              Conveniently Located To Serve Scottsdale, Phoenix, Chandler, and Glendale
            </p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest/80 via-sage/60 to-forest/90"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/40 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-8">
              Our Weight Loss Programs
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Arizona's Premier Medical Weight Loss Programs at Scottsdale Weight Loss Center. At Scottsdale Weight Loss Center, we treat obesity as a complex medical condition, not a lifestyle choice. We offer data-driven medical weight loss programs led by board-certified specialists in obesity medicine to help you achieve sustainable health. Serving patients across Scottsdale, Phoenix, Chandler, and Glendale, our practice provides physician-supervised weight loss grounded in science.
            </p>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
            Our Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Medical Weight Loss Program",
                description: "Physician-supervised weight loss programs designed for safe, effective, and lasting results",
                link: "/medical-weight-loss"
              },
              {
                name: "Doctor Mentored Program",
                description: "Get personalized guidance from experienced physicians who specialize in weight management",
                link: "/doctor-mentored"
              }
            ].map((treatment, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={index === 0 ? "/medical-injection-syringe-treatment.jpg" : "/modern-medical-consultation-doctor-patient.jpg"}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/40 to-transparent"></div>
                </div>
                
                {/* Default Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold mb-2">{treatment.name}</h3>
                </div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-forest/70">
                  <h3 className="text-3xl font-bold mb-4 text-center">{treatment.name}</h3>
                  <p className="text-center mb-6 leading-relaxed">{treatment.description}</p>
                  <Button className="bg-white text-forest hover:bg-ivory px-8 py-3" asChild>
                    <a href={treatment.link}>Learn More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "What are the common side effects of Ozempic?",
                  answer: "Common side effects include nausea, vomiting, diarrhea, stomach pain, and constipation. These usually improve as your body adjusts to the medication."
                },
                {
                  question: "How effective is Ozempic in controlling blood sugar?",
                  answer: "Ozempic is highly effective in lowering blood sugar levels and HbA1c in people with type 2 diabetes, often reducing HbA1c by 1-2%."
                },
                {
                  question: "Can Ozempic be used for weight loss?",
                  answer: "Yes, Ozempic can help with weight loss as a side benefit. Many patients experience significant weight reduction while using this medication."
                },
                {
                  question: "Is Ozempic safe to use during pregnancy?",
                  answer: "Ozempic is not recommended during pregnancy. If you're planning to become pregnant, consult your doctor about alternative treatments."
                },
                {
                  question: "How is Ozempic different from other GLP-1 agonists?",
                  answer: "Ozempic has a longer duration of action, requiring only once-weekly injections, and has shown superior efficacy in clinical trials compared to some other GLP-1 medications."
                },
                {
                  question: "Can I take Ozempic with other diabetes medications?",
                  answer: "Yes, Ozempic can often be combined with other diabetes medications like metformin. Your doctor will determine the best combination for you."
                },
                {
                  question: "Are there any dietary restrictions while using Ozempic?",
                  answer: "No specific dietary restrictions, but eating smaller, more frequent meals can help reduce gastrointestinal side effects."
                },
                {
                  question: "What should I do if I miss a dose of Ozempic?",
                  answer: "If you miss a dose and it's within 5 days of your scheduled dose, take it as soon as possible. If more than 5 days have passed, skip the missed dose and take your next dose as scheduled."
                }
              ].map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between p-4 bg-sage/10 rounded-lg cursor-pointer hover:bg-sage/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-base font-medium text-charcoal">{faq.question}</h3>
                    </div>
                    <div className="text-forest group-open:rotate-180 transition-transform">
                      ▼
                    </div>
                  </summary>
                  <div className="p-4 bg-white border border-sage/20 rounded-b-lg mt-1">
                    <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                We're Here to Support You in Your Weight Loss Journey
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-sage/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
            Reviews
          </h2>
          
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[
                {
                  name: "Sarah M.",
                  rating: 5,
                  image: "/happy-woman-smiling-confident.jpg",
                  review: "The staff at Wellness Weight Loss Center is amazing! Dr. Smith helped me lose 45 pounds safely and effectively. I finally feel confident in my own skin again."
                },
                {
                  name: "Michael R.",
                  rating: 5,
                  image: "/confident-man-smiling-success-healthy.jpg",
                  review: "Professional, caring, and results-driven. The GLP-1 treatment changed my life. I've lost 38 pounds and my energy levels are through the roof!"
                },
                {
                  name: "Jennifer L.",
                  rating: 5,
                  image: "/happy-confident-woman-smiling-healthy-lifestyle.jpg",
                  review: "I was skeptical at first, but the medical supervision and personalized approach made all the difference. Down 52 pounds and couldn't be happier!"
                },
                {
                  name: "David K.",
                  rating: 5,
                  image: "/happy-man-smiling-healthy-fit-lifestyle.jpg",
                  review: "The doctor-mentored program exceeded my expectations. Lost 41 pounds in 6 months with ongoing support every step of the way."
                },
                {
                  name: "Lisa T.",
                  rating: 5,
                  image: "/smiling-woman-healthy-active-lifestyle-outdoors.jpg",
                  review: "Finally found a weight loss solution that works! The medical team is knowledgeable and supportive. I've maintained my 35-pound weight loss for over a year now."
                },
                {
                  name: "Sarah M.",
                  rating: 5,
                  image: "/happy-woman-smiling-confident.jpg",
                  review: "The staff at Wellness Weight Loss Center is amazing! Dr. Smith helped me lose 45 pounds safely and effectively. I finally feel confident in my own skin again."
                },
                {
                  name: "Michael R.",
                  rating: 5,
                  image: "/confident-man-smiling-success-healthy.jpg",
                  review: "Professional, caring, and results-driven. The GLP-1 treatment changed my life. I've lost 38 pounds and my energy levels are through the roof!"
                }
              ].map((review, index) => (
                <Card key={index} className="flex-shrink-0 w-80 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                      <div>
                        <p className="font-semibold text-forest">{review.name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-charcoal/80 italic text-sm">"{review.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      </div>
      <Footer />
    </>
  )
}