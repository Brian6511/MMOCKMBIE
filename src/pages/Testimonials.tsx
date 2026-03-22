import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { Star, Quote, ArrowRight, Users, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-building.jpg";
import farmerImg from "@/assets/farmer-success.jpg";
import businessImg from "@/assets/business-woman.jpg";
import studentImg from "@/assets/student-mobile.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";

const testimonials = [
  { name: "Marie Ngono", role: "Small Business Owner", location: "Douala", text: "MMOCCUL gave me the loan I needed to expand my shop from one to three locations. The process was fast, transparent, and the interest rate is very fair compared to other MFIs. My revenue has tripled since I joined in 2019, and the mobile app makes managing my business account effortless. I recommend MMOCCUL to every entrepreneur I meet.", avatar: "MN", rating: 5, image: businessImg, loanType: "Business Loan", amount: "3,000,000 FCFA" },
  { name: "Jean-Pierre Kamga", role: "High School Teacher", location: "Bamenda", text: "The salary advance service saved me during a family emergency. Within 24 hours, I had the funds. I've been a member since 2018 and I recommend MMOCCUL to all my colleagues at school. The SMS alerts give me peace of mind knowing exactly when money moves in and out of my account. Now my entire department banks with MMOCCUL.", avatar: "JK", rating: 5, loanType: "Salary Advance", amount: "500,000 FCFA" },
  { name: "Esther Tabi", role: "Student", location: "University of Buea", text: "Opening my student account was easy — no minimum balance required! The mobile app is super convenient for checking my savings between classes. I set up automatic weekly savings of 2,000 FCFA, and after two years I was able to pay for my final year fees entirely from my savings. Financial discipline starts here.", avatar: "ET", rating: 5, image: studentImg, loanType: "Student Account", amount: "35,000 FCFA" },
  { name: "Papa Amadou", role: "Farmer", location: "Bafoussam", text: "The agricultural loan helped me buy a tractor and irrigation system. My farm's production has tripled. MMOCCUL truly believes in us farmers. They understood my seasonal income and created a repayment plan aligned with my harvest cycles. No other institution offered that flexibility. My family now eats well and I employ 8 workers.", avatar: "PA", rating: 5, image: farmerImg, loanType: "Agricultural Loan", amount: "5,000,000 FCFA" },
  { name: "Comfort Ndi", role: "Fashion Entrepreneur", location: "Douala", text: "I started my boutique with a 2 million FCFA business loan from MMOCCUL. Today I employ 5 people and have expanded to two locations. The financial advisors helped me create a business plan and the terms were transparent from day one. I'm now applying for my third loan to open a third store in Bonaberi.", avatar: "CN", rating: 5, image: entrepreneurImg, loanType: "Business Loan", amount: "2,000,000 FCFA" },
  { name: "Dr. Fon Tanyi", role: "Medical Doctor", location: "Yaoundé", text: "As a medical professional, I appreciate institutions that operate with integrity. MMOCCUL's COBAC certification and transparent reporting gave me confidence to invest my savings. The term deposit returns are excellent, and the VISA debit card works everywhere I travel for conferences across Africa and Europe.", avatar: "FT", rating: 5, loanType: "Term Deposit", amount: "10,000,000 FCFA" },
  { name: "Mama Grace Etonde", role: "Market Trader", location: "Douala Bonaberi", text: "I use the daily savings service — the agent comes to my market stall every morning to collect my savings. At the end of the month, I have enough to restock my inventory without borrowing. This system has changed my life. Before MMOCCUL, I was stuck in a cycle of borrowing from money lenders at 20% interest.", avatar: "GE", rating: 5, loanType: "Daily Savings", amount: "500 FCFA/day" },
  { name: "Chief Nkwain Ashu", role: "Community Leader", location: "Bamenda", text: "Our community association moved its accounts to MMOCCUL after years of poor service from a commercial bank. The group account management features are excellent — multiple signatories, transparent ledger, and we even qualified for a group loan to build our community hall. MMOCCUL understands njangi culture.", avatar: "NA", rating: 5, loanType: "Group Account", amount: "Association" },
  { name: "Patrice Ngolle", role: "Civil Servant", location: "Yaoundé", text: "I was skeptical about microfinance institutions until a colleague introduced me to MMOCCUL. The COBAC license gave me confidence, and the salary advance feature has been invaluable. The mobile app is surprisingly sophisticated — I can do everything from transfers to bill payments without visiting a branch.", avatar: "PN", rating: 5, loanType: "Salary Advance", amount: "750,000 FCFA" },
  { name: "Aisha Moussa", role: "Restaurant Owner", location: "Bafoussam", text: "My restaurant was just a small roadside stand when I got my first MMOCCUL loan. Three loans later, I now have a proper restaurant with 20 seats, a kitchen, and I employ 4 people. The staff at the Bafoussam branch treat me like family. They celebrated with me when I paid off my second loan early!", avatar: "AM", rating: 5, image: bankTellerImg, loanType: "Business Loan", amount: "4,000,000 FCFA" },
];

const impactNumbers = [
  { icon: Users, value: "26,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Heart, value: "95%", label: "Would Recommend" },
  { icon: TrendingUp, value: "50,000+", label: "Lives Changed" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
            Real Stories, Real Impact
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Member <span className="text-gradient-gold">Success Stories</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg animate-fade-up-delay-1">
            Hear directly from the 26,000+ members whose lives have been transformed by MMOCCUL — from farmers to entrepreneurs, students to professionals.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-10 z-10 mb-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactNumbers.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="bg-card rounded-xl p-5 text-center shadow-lg">
                  <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="card-lift overflow-hidden grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <img src={entrepreneurImg} alt="Comfort Ndi" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">Featured Story</span>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <Quote className="w-8 h-8 text-accent/30 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "I started my boutique with a 2 million FCFA business loan from MMOCCUL. Today I employ 5 people and have expanded to two locations in Douala. The financial advisors helped me create a business plan and the terms were transparent from day one. I'm now applying for my third loan to open a third store. MMOCCUL didn't just give me a loan — they gave me a future."
                </p>
                <div>
                  <p className="font-heading font-semibold text-foreground">Comfort Ndi</p>
                  <p className="text-xs text-muted-foreground">Fashion Entrepreneur • Douala • Business Loan: 2,000,000 FCFA</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
              More <span className="text-primary">Member Stories</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 60}>
                <div className="card-lift p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-accent/20 mb-2" />
                  <p className="text-muted-foreground text-sm italic leading-relaxed mb-5 flex-1">"{t.text}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xs ring-2 ring-primary/30">
                          {t.avatar}
                        </div>
                      )}
                      <div>
                        <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role} • {t.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t.loanType}</span>
                      <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full">{t.amount}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection backgroundImage={heroImg} overlay="bg-primary/90" className="py-24">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Your Success Story <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              Join the community of dreamers and achievers. Whether you need a loan for your business, farm, or education — MMOCCUL is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold inline-flex items-center gap-2 text-lg">
                Join MMOCCUL Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-primary-hero border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Testimonials;
