import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CountUp from "@/components/CountUp";
import { MapPin, Phone, Clock, Navigation, Star, Users, Building2, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import branchImg from "@/assets/m11.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";
import { Link } from "react-router-dom";

const branches = [
  { name: "Yaoundé (Head Office)", slug: "yaounde-head-office", address: "Carrefour Nlongkak, Yaoundé, Centre Region", phone: "+237 670 000 000", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", isHQ: true, members: "8,000+", year: "2016", services: ["All Products", "Western Union", "VISA Cards", "ATM"], region: "Centre" },
  { name: "Douala Bonaberi", slug: "douala-bonaberi", address: "Bonaberi Main Road, Douala, Littoral Region", phone: "+237 670 000 001", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "5,000+", year: "2018", services: ["All Products", "Western Union", "Mobile Money"], region: "Littoral" },
  { name: "Douala Village", slug: "douala-village", address: "Village Quarter, Douala, Littoral Region", phone: "+237 670 000 002", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "3,500+", year: "2019", services: ["Savings", "Loans", "Mobile Money", "Bill Payments"], region: "Littoral" },
  { name: "Bafoussam", slug: "bafoussam", address: "Commercial Avenue, Bafoussam, West Region", phone: "+237 670 000 003", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "4,000+", year: "2018", services: ["All Products", "Western Union", "Agricultural Loans"], region: "West" },
  { name: "Bamenda", slug: "bamenda", address: "Commercial Avenue, Bamenda, North-West Region", phone: "+237 670 000 004", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "2,500+", year: "2024", services: ["Savings", "Loans", "Mobile Money"], region: "North-West" },
  { name: "Buea", slug: "buea", address: "Molyko, Buea, South-West Region", phone: "+237 670 000 005", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "2,000+", year: "2024", services: ["Savings", "Student Accounts", "Loans"], region: "South-West" },
  { name: "Dschang", slug: "dschang", address: "Main Market Road, Dschang, West Region", phone: "+237 670 000 006", hours: "Mon–Fri: 7:30 AM – 4:00 PM, Sat: 8:00 AM – 1:00 PM", members: "1,500+", year: "2024", services: ["Savings", "Loans", "Mobile Money"], region: "West" },
];

const Branches = () => {
  return (
    <Layout>
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
                10+ Locations Nationwide
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
                Find Us Across <span className="text-gradient-gold">Cameroon</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 text-lg animate-fade-up-delay-1 leading-relaxed">
                From the economic capital Douala to the political capital Yaoundé, from the Western Highlands to the South-West coast — MMOCCUL branches bring quality financial services closer to you.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-up-delay-2">
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">7</p>
                  <p className="text-primary-foreground/60 text-xs">Branches</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">5</p>
                  <p className="text-primary-foreground/60 text-xs">Regions</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">26K+</p>
                  <p className="text-primary-foreground/60 text-xs">Members</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-up-delay-2">
              <img src={branchImg} alt="Branch" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary py-10">
        <div className="section-container">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              title="MMOCCUL Branches"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510559.5932361567!2d11.3!3d3.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c21!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2s!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Branch List */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                All <span className="text-primary">Branches</span>
              </h2>
              <p className="text-muted-foreground mt-2">Each branch offers personalized service — click to get directions or contact directly</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <ScrollReveal key={b.name} delay={i * 80}>
                <Link to={`/branches/${b.slug}`} className="block">
                  <div className={`card-lift p-7 relative ${b.isHQ ? "ring-2 ring-accent" : ""} hover:shadow-2xl transition-all duration-300`}>
                    {b.isHQ && (
                      <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> Head Office
                      </span>
                    )}
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{b.name}</h3>
                    <div className="space-y-3 text-sm">
                      <p className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {b.address}
                      </p>
                      <p className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <a href={`tel:${b.phone}`} className="hover:text-primary transition-colors font-medium">{b.phone}</a>
                      </p>
                      <p className="flex items-start gap-3 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {b.hours}
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <span className="flex items-center gap-1.5 text-xs bg-secondary px-3 py-1.5 rounded-full">
                          <Users className="w-3 h-3 text-primary" /> {b.members} members
                        </span>
                        <span className="text-xs text-muted-foreground">Since {b.year}</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{b.region}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {b.services.map(s => (
                          <span key={s} className="text-xs bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-5">
                      <a href={`https://wa.me/${b.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-2.5 px-5 flex-1 text-center">WhatsApp</a>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 px-5 rounded-lg border border-primary text-primary text-xs font-semibold hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5" /> Directions
                      </a>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src={bankTellerImg} alt="Branch Service" className="rounded-2xl shadow-xl w-full" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Plan Your Visit</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What to Bring to the Branch</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Prepare the following documents for a smooth and quick account opening experience. Our staff will handle everything else.
              </p>
              <ul className="space-y-3">
                {[
                  "Valid National Identity Card (CNI) or Passport",
                  "Two passport-size photographs (recent)",
                  "Proof of residence (utility bill or attestation)",
                  "Membership fee: 50,500 FCFA (cash or mobile money)",
                  "For business accounts: Business registration document",
                  "For group accounts: Minutes of association meeting",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection backgroundImage={heroImg} className="py-24">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Can't Visit a Branch? <span className="text-gradient-gold">No Problem!</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Start your membership process online or via WhatsApp. Our team will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold text-lg">Start Online</Link>
              <Link to="/contact" className="btn-primary-hero border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Branches;
