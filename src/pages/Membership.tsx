import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { CheckCircle, MessageCircle, Shield, Gift, Users, CreditCard, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import familyImg from "@/assets/family-banking.jpg";

const steps = [
  { step: "1", title: "Visit Any Branch", desc: "Come to any MMOCCUL branch with your national ID card (CNI) and one passport-size photo. Our staff will guide you through the entire process.", color: "bg-primary" },
  { step: "2", title: "Pay Membership Fees", desc: "Total: 50,500 FCFA — Solidarity Fund (12,000) + Building Fund (8,500) + Share Capital (30,000). Payments can be made in cash or mobile money.", color: "bg-accent" },
  { step: "3", title: "Open Your Account", desc: "Your savings account is created immediately. You'll receive your account number, member card, and mobile banking credentials on the same day.", color: "bg-primary" },
  { step: "4", title: "Access All Benefits", desc: "Mobile banking, loans, money transfers, VISA card, SMS alerts — everything is now available to you. Start your financial journey!", color: "bg-accent" },
];

const benefits = [
  { icon: CreditCard, title: "VISA Debit Card", desc: "Shop and withdraw worldwide" },
  { icon: Smartphone, title: "Mobile Banking", desc: "Bank from anywhere, anytime" },
  { icon: Shield, title: "Insured Deposits", desc: "COBAC-regulated safety" },
  { icon: Gift, title: "Loan Access", desc: "Competitive rates from 1.5%" },
  { icon: Users, title: "Community Network", desc: "26,000+ member community" },
  { icon: CheckCircle, title: "Bill Payments", desc: "ENEO, CAMWATER, & more" },
];

const membershipTypes = [
  { type: "Individual", desc: "For personal savings and loans. Perfect for employees, self-employed, and professionals.", fee: "50,500 FCFA", popular: true },
  { type: "Student", desc: "Special rates for university and college students. Zero minimum balance after shares.", fee: "35,000 FCFA" },
  { type: "Group / Njangi", desc: "For savings groups, tontines, and associations with joint management features.", fee: "75,000 FCFA" },
  { type: "Business", desc: "For entrepreneurs and SMEs with overdraft facilities and business loan access.", fee: "100,000 FCFA" },
];

const Membership = () => {
  return (
    <Layout>
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
            Join 26,000+ Members
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Join <span className="text-gradient-gold">MMOCCUL</span> Today
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-lg animate-fade-up-delay-1">
            Start with just <span className="text-accent font-bold text-2xl">50,500 FCFA</span> — everything included
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Choose Your Plan</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Membership <span className="text-primary">Types</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((m, i) => (
              <ScrollReveal key={m.type} delay={i * 100}>
                <div className={`card-lift p-7 flex flex-col h-full relative ${m.popular ? "ring-2 ring-accent" : ""}`}>
                  {m.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{m.type}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{m.desc}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-bold text-2xl text-primary">{m.fee}</p>
                    <p className="text-xs text-muted-foreground">one-time registration</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
              Member <span className="text-gradient-gold">Benefits</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                    <b.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">{b.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join + Form */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Steps */}
            <div>
              <ScrollReveal>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Step by Step</span>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  How to <span className="text-primary">Join</span>
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <ScrollReveal key={s.step} delay={i * 150}>
                    <div className="flex gap-5 items-start">
                      <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0 font-heading font-bold text-lg ${s.color === "bg-accent" ? "text-accent-foreground" : "text-primary-foreground"}`}>
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground text-lg">{s.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={600}>
                <div className="mt-10 card-lift p-6 bg-secondary">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Fee Breakdown (Individual)</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      ["Solidarity Fund", "12,000 FCFA", "Mutual support fund"],
                      ["Building Fund", "8,500 FCFA", "Branch development"],
                      ["Share Capital (min)", "30,000 FCFA", "Your ownership stake"],
                    ].map(([label, amount, note]) => (
                      <li key={label} className="flex justify-between items-center">
                        <div>
                          <span className="text-foreground font-medium">{label}</span>
                          <span className="text-xs text-muted-foreground block">{note}</span>
                        </div>
                        <span className="font-semibold text-foreground">{amount}</span>
                      </li>
                    ))}
                    <li className="flex justify-between items-center pt-3 border-t border-border">
                      <span className="text-foreground font-bold">Total</span>
                      <span className="font-bold text-primary text-xl">50,500 FCFA</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal delay={200}>
              <div className="card-lift p-8 sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Express Interest</h2>
                <p className="text-muted-foreground text-sm mb-6">Fill out this form and we'll contact you within 24 hours.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="First name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="+237 6XX XXX XXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Email (Optional)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Membership Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                      <option>Individual</option>
                      <option>Student</option>
                      <option>Group / Association</option>
                      <option>Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Preferred Branch</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                      <option>Yaoundé (HQ)</option>
                      <option>Douala Bonaberi</option>
                      <option>Douala Village</option>
                      <option>Bafoussam</option>
                      <option>Bamenda</option>
                      <option>Buea</option>
                      <option>Dschang</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Message (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Any questions or requests?" />
                  </div>
                  <button type="submit" className="btn-gold w-full text-center flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Submit Interest
                  </button>
                </form>
                <a
                  href="https://wa.me/237670000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full text-center block py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Talk to Us on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ParallaxSection backgroundImage={familyImg} className="py-24">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Financial Journey <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              Join the community that helps you save, grow, and achieve your dreams.
            </p>
            <Link to="/branches" className="btn-gold inline-flex items-center gap-2 text-lg">
              Find Your Nearest Branch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Membership;
