import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Award, Users, Lightbulb, Heart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">About Arcus Remote</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            We handle your back-office tasks, customer support, and data operations so you can focus on growing your business
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 space-y-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                To provide reliable, cost-effective business process outsourcing services that help companies scale without the burden of hiring, training, and managing additional staff. We take care of the operational heavy lifting so our clients can focus on strategy and growth.
              </p>
            </div>

            <div className="glass-card p-8 space-y-6">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center">
                <Eye className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                To become the go-to BPO partner for businesses of all sizes, known for delivering consistent quality, transparent communication, and measurable results. We envision a future where every company can access professional outsourcing services without compromising on service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Arcus Remote Story */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://cdn.clipond.com/Arcus/125823.jpg" alt="Arcus Remote office" className="w-full h-[500px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">The Arcus Remote Story</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Arcus Remote was founded when we noticed a gap in the BPO market. Many companies were struggling with expensive outsourcing providers that delivered inconsistent results, or they were trying to handle everything in-house and burning out their teams. We set out to change that.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Starting with a small team handling customer support and data entry for a few clients, we quickly learned what businesses really needed: reliable service, clear communication, and fair pricing. Today, we support companies across healthcare, retail, technology, and professional services with everything from 24/7 customer support to complex data processing workflows.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                What sets us apart is our hands-on approach. Every client gets a dedicated account manager, regular performance reports, and direct access to our team. We're not just a vendor—we're an extension of your operations, committed to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              The foundation of how we deliver exceptional BPO services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Reliability",
                desc: "We deliver consistent, accurate work on time, every time. Your operations depend on us, and we take that responsibility seriously.",
              },
              {
                icon: Lightbulb,
                title: "Efficiency",
                desc: "We continuously optimize our processes to deliver faster turnaround times and better results for your business.",
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "We're not just a service provider—we're your operational partner, invested in your long-term success.",
              },
              {
                icon: Target,
                title: "Quality First",
                desc: "Every task, every interaction, every deliverable meets our high standards. Quality isn't negotiable.",
              },
              {
                icon: Heart,
                title: "Transparency",
                desc: "Clear communication, honest reporting, and no hidden fees. You always know what's happening and what it costs.",
              },
              {
                icon: TrendingUp,
                title: "Scalability",
                desc: "Whether you need one virtual assistant or a full team, we scale with your business needs seamlessly.",
              },
            ].map((value, idx) => (
              <div key={idx} className="glass-card p-8 space-y-4 text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Meet Our Leadership</h2>
            <p className="text-lg text-secondary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "James Anderson",
                role: "Chief Executive Officer",
                image: "professional executive portrait business suit",
              },
              {
                name: "Maria Santos",
                role: "Chief Operations Officer",
                image: "professional female executive portrait",
              },
              { name: "David Park", role: "Chief Technology Officer", image: "professional tech executive portrait" },
              { name: "Lisa Thompson", role: "Chief Client Officer", image: "professional female executive smiling" },
            ].map((member, idx) => (
              <div key={idx} className="glass-dark p-6 space-y-4 text-center">
                <div className="w-full aspect-square bg-muted/20 flex items-center justify-center mb-4">
                  <img
                    src={`/.jpg?key=mdwcv&height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-secondary-foreground/80 font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
