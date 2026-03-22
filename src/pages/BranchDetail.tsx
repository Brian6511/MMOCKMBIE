import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getBranchBySlug, branchesData } from "@/data/branches";
import { MapPin, Phone, Clock, Navigation, Star, Users, Building2, ArrowLeft, ArrowRight, CheckCircle, Wifi, Car, Accessibility, MessageCircle, Globe, Shield } from "lucide-react";
import branchImg from "@/assets/branch-exterior.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import heroImg from "@/assets/hero-building.jpg";

const BranchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const branch = getBranchBySlug(slug || "");

  if (!branch) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Branch Not Found</h1>
            <Link to="/branches" className="btn-gold">View All Branches</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const otherBranches = branchesData.filter(b => b.slug !== branch.slug).slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <Link to="/branches" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> All Branches
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {branch.isHQ && (
                <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                  <Star className="w-3.5 h-3.5" /> Head Office
                </span>
              )}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground animate-fade-up">
                {branch.fullName}
              </h1>
              <p className="text-primary-foreground/70 mt-4 text-lg animate-fade-up-delay-1 flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-accent" /> {branch.address}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-up-delay-2">
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-xl font-bold text-accent">{branch.members}</p>
                  <p className="text-primary-foreground/60 text-xs">Members</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-xl font-bold text-accent">Since {branch.year}</p>
                  <p className="text-primary-foreground/60 text-xs">Established</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <p className="font-heading text-xl font-bold text-accent">{branch.teamSize.split(" ")[0]}</p>
                  <p className="text-primary-foreground/60 text-xs">Staff</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-up-delay-2">
              <img src={branchImg} alt={branch.name} className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-accent py-4">
        <div className="section-container flex flex-wrap justify-center gap-6 text-sm">
          <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-accent-foreground font-medium hover:opacity-80">
            <Phone className="w-4 h-4" /> {branch.phone}
          </a>
          <span className="flex items-center gap-2 text-accent-foreground">
            <Clock className="w-4 h-4" /> {branch.hours}
          </span>
          <span className="flex items-center gap-2 text-accent-foreground">
            <Clock className="w-4 h-4" /> {branch.saturdayHours}
          </span>
          <a href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent-foreground font-medium hover:opacity-80">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </section>

      {/* About This Branch */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  About This Branch
                </h2>
                <div className="space-y-4">
                  {branch.description.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
              {/* Manager Message */}
              <ScrollReveal delay={200}>
                <div className="mt-10 bg-primary/5 border border-primary/10 rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">A Message from the Branch Manager</h3>
                  <p className="text-muted-foreground leading-relaxed italic">"{branch.managerMessage}"</p>
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={100}>
                <div className="bg-secondary rounded-2xl p-6 sticky top-24 space-y-6">
                  {/* Facilities */}
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">Facilities</h3>
                    <div className="space-y-2">
                      {branch.parkingAvailable && (
                        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Car className="w-4 h-4 text-primary" /> Parking Available</span>
                      )}
                      {branch.atmAvailable && (
                        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Shield className="w-4 h-4 text-primary" /> ATM On-Site</span>
                      )}
                      {branch.wheelchairAccessible && (
                        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Accessibility className="w-4 h-4 text-primary" /> Wheelchair Accessible</span>
                      )}
                    </div>
                  </div>
                  {/* Languages */}
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">Languages Spoken</h3>
                    <div className="flex flex-wrap gap-2">
                      {branch.languages.map(l => (
                        <span key={l} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="space-y-3">
                    <a href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center block text-sm">
                      Chat on WhatsApp
                    </a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 px-5 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-sm">
                      <Navigation className="w-4 h-4 inline mr-1" /> Get Directions
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Services Available at <span className="text-primary">{branch.name}</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {branch.services.map((s, i) => (
              <ScrollReveal key={s} delay={i * 50}>
                <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map & How to Find Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                How to Find Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Nearby Landmarks
                  </h3>
                  <ul className="space-y-2">
                    {branch.nearbyLandmarks.map(l => (
                      <li key={l} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" /> Getting Here
                  </h3>
                  <ul className="space-y-2">
                    {branch.transportAccess.map(t => (
                      <li key={t} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {branch.specialFeatures.length > 0 && (
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" /> Special Features
                    </h3>
                    <ul className="space-y-2">
                      {branch.specialFeatures.map(f => (
                        <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-full min-h-[320px]">
                <iframe
                  title={`${branch.name} Location`}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d9.7!3d4.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(branch.mapQuery)}!5e0!3m2!1sen!2scm!4v1`}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src={communityImg} alt="Community Impact" className="rounded-2xl shadow-xl w-full" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Community <span className="text-gradient-gold">Impact</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At MMOCCUL {branch.name}, we don't just serve members — we invest in the community. Here's how this branch is making a difference:
              </p>
              <ul className="space-y-3">
                {branch.communityImpact.map(c => (
                  <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Visit <span className="text-gradient-gold">{branch.name}</span> Today
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              Our team is ready to welcome you. Walk in during working hours or schedule a visit via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold text-lg">Become a Member</Link>
              <a href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="py-3 px-7 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other Branches */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              Other MMOCCUL <span className="text-primary">Branches</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherBranches.map((b, i) => (
              <ScrollReveal key={b.slug} delay={i * 80}>
                <Link to={`/branches/${b.slug}`} className="card-lift p-5 block group h-full">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{b.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" /> {b.city}, {b.region} Region
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-3 h-3 text-primary" /> {b.members}
                    </span>
                    <span className="text-muted-foreground">Since {b.year}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BranchDetail;
