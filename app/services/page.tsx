import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Headphones, Database, FileText, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support Outsourcing",
      description:
        "Professional 24/7 customer support services. We handle customer inquiries, resolve issues, and provide support across multiple channels.",
      benefits: [
        "Multi-channel support (phone, email, chat, social media)",
        "Trained customer service professionals",
        "Scalable solutions for peak demand periods",
        "Detailed reporting and analytics",
      ],
      image: "https://arotog.sirv.com/website/44585.jpg",
    },
    {
      icon: Database,
      title: "Data Processing & Management",
      description:
        "Accurate and efficient data processing services. We handle data entry, validation, database management, and data analysis.",
      benefits: [
        "Data entry and validation services",
        "Database management and maintenance",
        "Data mining and analysis",
        "Quality assurance and error checking",
      ],
      image: "https://arotog.sirv.com/website/114415.jpg",
    },
    {
      icon: FileText,
      title: "Back-Office Support",
      description:
        "Comprehensive back-office support services. We handle administrative tasks, document processing, and operational support.",
      benefits: [
        "Document management and processing",
        "Administrative task automation",
        "Financial data processing",
        "HR support and payroll assistance",
      ],
      image: "https://arotog.sirv.com/website/2149288228.jpg",
    },
    {
      icon: MessageSquare,
      title: "Virtual Assistant Services",
      description:
        "Dedicated virtual assistant services. We provide support for daily tasks, calendar management, research, and coordination.",
      benefits: [
        "Calendar and email management",
        "Research and report preparation",
        "Social media management",
        "Travel arrangements and coordination",
      ],
      image: "https://arotog.sirv.com/website/61978.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">Our Services</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Business process outsourcing solutions for customer support, data processing, back-office operations, and virtual assistance
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto space-y-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm font-light leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
              <div className={`relative h-[400px] lg:h-[500px] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-secondary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Our methodology for seamless integration and results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We analyze your needs and develop a solution strategy",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We create an implementation plan aligned with your goals",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "We execute the plan and ensure smooth transition",
              },
              {
                step: "04",
                title: "Reporting",
                desc: "Continuous monitoring and analytics keep you informed",
              },
            ].map((phase, idx) => (
              <div key={idx} className="glass-dark p-6 space-y-4 text-center">
                <div className="text-5xl font-bold text-accent">{phase.step}</div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-sm text-secondary-foreground/80 font-light leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
