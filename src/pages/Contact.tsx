import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe, Headphones, ArrowRight, Users, Shield, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
            We're Here to Help
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-lg animate-fade-up-delay-1 max-w-2xl mx-auto">
            Have questions about our services? Need help with your account? Reach out through any channel — our dedicated support team responds within 24 hours, guaranteed.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-10 z-10 mb-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Phone, title: "Call Us", value: "+237 670 000 000", action: "tel:+237670000000", desc: "Mon-Sat, 7:30AM-4PM" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat Now", action: "https://wa.me/237670000000", desc: "24/7 Available" },
              { icon: Mail, title: "Email", value: "info@mmoccul.com", action: "mailto:info@mmoccul.com", desc: "Response in < 24hrs" },
              { icon: Clock, title: "Hours", value: "Mon-Fri: 7:30-4:00", desc: "Sat: 8:00-1:00" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="bg-card rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                    <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{c.title}</h3>
                  {c.action ? (
                    <a href={c.action} target={c.action.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-primary transition-colors block">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs">{c.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <ScrollReveal>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Head Office</span>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              </ScrollReveal>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", text: "Carrefour Nlongkak, Yaoundé, Centre Region, Cameroon. Located opposite the National Museum, 200m from the central post office." },
                  { icon: Phone, title: "Phone", text: "+237 670 000 000 (Main) / +237 680 000 000 (Support) / +237 690 000 000 (Loans)" },
                  { icon: Mail, title: "Email", text: "info@mmoccul.com (General) / support@mmoccul.com (Support) / loans@mmoccul.com (Loan Inquiries)" },
                  { icon: Globe, title: "Social Media", text: "Facebook: @MMOCCUL / Instagram: @mmoccul_cameroon / LinkedIn: MMOCKMBIE Credit Union" },
                  { icon: Headphones, title: "Customer Support", text: "Available Monday to Friday (7:30 AM – 4:00 PM) and Saturday (8:00 AM – 1:00 PM). WhatsApp support available 24/7 with automated responses after hours." },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 100}>
                    <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={500}>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-xl h-64">
                  <iframe
                    title="MMOCCUL Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510559.5!2d11.3!3d3.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c21!2sYaound%C3%A9!5e0!3m2!1sen!2s!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal delay={200}>
              <div className="card-lift p-8 sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 24 hours — guaranteed.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Full Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Phone *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="+237 6XX XXX XXX" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                      <option>General Inquiry</option>
                      <option>Membership</option>
                      <option>Loan Information</option>
                      <option>Account Issue</option>
                      <option>Complaint</option>
                      <option>Partnership Opportunity</option>
                      <option>Media & Press</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Preferred Branch</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                      <option>Any Branch</option>
                      <option>Yaoundé (Head Office)</option>
                      <option>Douala Bonaberi</option>
                      <option>Douala Village</option>
                      <option>Bafoussam</option>
                      <option>Bamenda</option>
                      <option>Buea</option>
                      <option>Dschang</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Message *</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help you? Please include your member number if applicable." />
                  </div>
                  <button type="submit" className="btn-gold w-full text-center flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                  <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our privacy policy. We never share your data with third parties.</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">Common Questions? Check our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Membership", desc: "How to join, fees, required documents, and account types.", link: "/faq" },
              { icon: Shield, title: "Security", desc: "How we protect your money, COBAC licensing, and deposit safety.", link: "/faq" },
              { icon: Headphones, title: "Support", desc: "Account issues, complaints, and how to reach us 24/7.", link: "/contact" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link to={item.link} className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-all group block">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
