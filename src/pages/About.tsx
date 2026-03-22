import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CountUp from "@/components/CountUp";
import directorImg from "@/assets/m logo.png";
import teamImg from "@/assets/m17.png";
import heroImg from "@/assets/hero-building.jpg";
import familyImg from "@/assets/family-banking.jpg";
import communityImg from "@/assets/m11.jpg";
import awardImg from "@/assets/m19.png";
import branchImg from "@/assets/branch-exterior.jpg";
import { Award, Shield, Target, Heart, Eye, Users, Handshake, BookOpen, Star, CheckCircle, Globe, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const timeline = [
  { year: "2016", event: "MMOCKMBIE Credit Union Cooperative Ltd founded in Yaoundé by a group of visionary Cameroonians committed to building an accessible, community-driven financial institution.", icon: "M" },
  { year: "2017", event: "Reached first 1,000 members. Launched inaugural savings and loan products. Established core banking systems and trained first cohort of loan officers.", icon: "M" },
  { year: "2018", event: "Expanded to Douala Bonaberi and Bafoussam. Introduced group savings for njangis and associations. Crossed 3,500 members milestone.", icon: "O" },
  { year: "2019", event: "Strategic partnerships with Western Union and Orange Money for international and mobile money transfers. Reached 7,000 members across 3 regions.", icon: "C" },
  { year: "2020", event: "Launched mobile banking app and SMS alert services. Digital transformation begins despite COVID-19 challenges. Introduced contactless services.", icon: "K" },
  { year: "2021", event: "COBAC License N° D-2021/317 obtained — a landmark achievement. Won prestigious VIIMMA Award for microfinance excellence. Reached 15,000 members.", icon: "M" },
  { year: "2022", event: "Rainbow Award for Excellence in community development. Launched VISA debit cards and ATM services. Introduced business and agricultural loan products.", icon: "B" },
  { year: "2023", event: "Introduced VISA debit cards and ATM services. Business loans launched. Surpassed 23,000 members with 50,000+ loans disbursed since founding.", icon: "I" },
  { year: "2024", event: "Expanded to Buea, Dschang & Bamenda. Surpassed 26,000 active members across 10+ branches. Over 5 billion FCFA disbursed in total loans.", icon: "E" },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with the highest ethical standards, ensuring transparency in every transaction and decision we make. Our books are open, our rates are clear, and our promises are kept." },
  { icon: Users, title: "Community", desc: "Our roots are in the community. Every service we create is designed to uplift and empower our members and their families. We reinvest in the communities we serve." },
  { icon: Handshake, title: "Trust", desc: "Built on a foundation of trust since 2016. Your deposits are safe, regulated by COBAC, and managed with utmost care. We've never missed a withdrawal request." },
  { icon: BookOpen, title: "Education", desc: "We believe in financial literacy. Through workshops, counseling, and tools, we help our members make informed financial decisions that build lasting wealth." },
  { icon: Lightbulb, title: "Innovation", desc: "From mobile banking to VISA cards, we continuously invest in technology that makes financial services more accessible, faster, and more convenient for our members." },
  { icon: Globe, title: "Inclusion", desc: "Banking for everyone — from rural farmers to urban professionals, students to retirees. Our products are designed to serve all segments of Cameroonian society." },
];

const impactStats = [
  { value: 26000, suffix: "+", label: "Active Members" },
  { value: 10, suffix: "+", label: "Branches Nationwide" },
  { value: 50000, suffix: "+", label: "Loans Disbursed" },
  { value: 95, suffix: "%", label: "Member Satisfaction" },
  { value: 5, suffix: "B+", label: "FCFA Total Loans" },
  { value: 100, suffix: "+", label: "Trained Staff" },
];

const loanDistribution = [
  { name: "Business Loans", value: 35, color: "hsl(220,100%,27%)" },
  { name: "Agricultural", value: 20, color: "hsl(43,65%,52%)" },
  { name: "School Fees", value: 18, color: "hsl(275,100%,25%)" },
  { name: "Salary Advance", value: 15, color: "hsl(160,60%,40%)" },
  { name: "Housing", value: 12, color: "hsl(0,70%,50%)" },
];

const leadership = [
  { name: "Managing Director", role: "Founder & CEO", desc: "Visionary leader with 20+ years in cooperative finance. Founded MMOCCUL in 2016 with a mission to bring affordable financial services to every Cameroonian.", img: directorImg },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
                Est. 2016 • Yaoundé, Cameroon
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
                About <span className="text-gradient-gold">MMOCCUL</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 text-lg animate-fade-up-delay-1 leading-relaxed">
                Building financial futures for Cameroonians since 2016. From a small cooperative in Yaoundé to one of Central Africa's most trusted microfinance institutions — licensed by COBAC, trusted by 26,000+ members, and committed to your financial success.
              </p>
              <p className="text-primary-foreground/60 mt-4 text-sm animate-fade-up-delay-2 leading-relaxed">
                MMOCKMBIE Credit Union Cooperative Ltd (MMOCCUL) is a Category 1 Microfinance Institution (MFI) registered with the Ministry of Finance of the Republic of Cameroon and licensed by the Banking Commission of Central Africa (COBAC). We provide savings, credit, money transfer, and digital banking services across 10+ branches in 5 regions of Cameroon.
              </p>
            </div>
            <div className="hidden lg:block animate-fade-up-delay-2">
              <img src={communityImg} alt="MMOCCUL Community" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Who We Are</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Mission, Vision & <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The guiding principles that have driven our growth from 500 founding members to over 26,000 strong</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: "Our Mission", text: "To provide accessible, affordable financial services that empower individuals and communities across Cameroon to achieve economic independence and build lasting wealth. We believe every Cameroonian deserves access to quality banking services regardless of their income level, location, or background." },
              { icon: Eye, title: "Our Vision", text: "To become the leading cooperative credit union in Central Africa, recognized for innovation, member satisfaction, and community impact by 2030. We envision a Cameroon where financial exclusion is eliminated and every citizen has the tools to build a prosperous future." },
              { icon: Heart, title: "Our Motto", text: "\"Save Regularly, Borrow Wisely, Repay Promptly\" — the guiding principle behind everything we do at MMOCCUL since our founding in 2016. This simple yet powerful philosophy has helped thousands of members build financial discipline and achieve their dreams." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="card-lift p-8 text-center h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Core Values */}
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-10">
              Our Core <span className="text-gradient-gold">Values</span>
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-secondary rounded-xl p-6 h-full hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <v.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground">{v.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ParallaxSection backgroundImage={familyImg} className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14">
              Our <span className="text-gradient-gold">Impact in Numbers</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-accent">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-primary-foreground/70 text-xs mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Loan Distribution Chart */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Financial Impact</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where Our Loans <span className="text-gradient-gold">Make Impact</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over 5 billion FCFA disbursed across 50,000+ loans since 2016. Our diverse loan portfolio reflects the varied needs of Cameroonian communities — from smallholder farmers in the Western Highlands to boutique owners in Douala.
              </p>
              <ul className="space-y-3">
                {loanDistribution.map(l => (
                  <li key={l.name} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: l.color }} />
                    <span className="text-sm text-foreground font-medium flex-1">{l.name}</span>
                    <span className="text-sm text-muted-foreground font-heading font-bold">{l.value}%</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card-lift p-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={loanDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} innerRadius={60} paddingAngle={3} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                        {loanDistribution.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                The MMOCCUL <span className="text-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From a small cooperative to Cameroon's trusted microfinance institution — a decade of purposeful growth</p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 80}>
                <div className={`relative flex items-start gap-8 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10 text-xl shadow-lg">
                    {t.icon}
                  </div>
                  <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] card-lift p-6">
                    <span className="font-heading font-bold text-accent text-xl">{t.year}</span>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{t.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our People</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Leadership & <span className="text-primary">Team</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Experienced professionals dedicated to your financial success</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto card-lift p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center mb-12">
              <img src={directorImg} alt="Director" className="w-48 h-48 rounded-2xl object-cover shadow-lg" />
              <div>
                <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">Managing Director</span>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Visionary Leadership</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Under visionary leadership, MMOCCUL has grown from a small cooperative in Yaoundé to one of Cameroon's most trusted microfinance institutions, serving over 26,000 members across 10+ branches. Our leadership team brings decades of experience in finance, community development, and cooperative management.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The founding vision was simple yet powerful: create a financial institution that truly serves the people. One that doesn't just hold money, but actively helps members build wealth, fund education, grow businesses, and achieve dreams that traditional banks deemed too small to support.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="card-lift overflow-hidden rounded-2xl">
                <img src={teamImg} alt="MMOCCUL Team" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Our Dedicated Team</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With over 100 trained staff across all branches, our team is committed to delivering exceptional service. From account officers to loan advisors, every member of our team undergoes rigorous training in customer service, financial products, and regulatory compliance.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card-lift overflow-hidden rounded-2xl">
                <img src={awardImg} alt="Award Ceremony" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Award-Winning Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our commitment to excellence has been recognized nationally and regionally. The 2021 VIIMMA Award and 2022 Rainbow Award for Excellence validate our approach to community-centered financial services and innovation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Awards & Regulation */}
      <section className="py-24 bg-primary">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6">Certified & Recognized</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-14">
              Awards & <span className="text-gradient-gold">Regulation</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Award, title: "2021 VIIMMA Award", desc: "Recognition for excellence in microfinance services and community impact in Central Africa. Awarded for outstanding member growth and innovative financial products." },
              { icon: Award, title: "2022 Rainbow Award", desc: "Outstanding contribution to community development and financial inclusion in Cameroon. Recognized for empowering rural communities through agricultural lending." },
              { icon: Shield, title: "COBAC Licensed", desc: "License N° D-2021/317 — Commission Bancaire de l'Afrique Centrale. Full regulatory compliance with quarterly audits and capital adequacy requirements." },
              { icon: Shield, title: "MINFI Registered", desc: "Registration N° 0000381 — Ministry of Finance, Republic of Cameroon. Fully authorized Category 1 Microfinance Institution operating under Cameroonian law." },
            ].map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 100}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 flex items-start gap-5 text-left hover:bg-primary-foreground/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <a.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary-foreground text-lg">{a.title}</h4>
                    <p className="text-primary-foreground/60 text-sm mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our <span className="text-gradient-gold">Gallery</span></h2>
              <p className="text-muted-foreground">A glimpse into life at MMOCCUL</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[communityImg, branchImg, awardImg, teamImg].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <img src={img} alt="MMOCCUL Gallery" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Be Part of Our <span className="text-gradient-gold">Story?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
              Join 26,000+ members and start building your financial future today. It only takes 50,500 FCFA and a visit to any branch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold text-lg">Join MMOCCUL</Link>
              <Link to="/contact" className="btn-primary-hero border border-primary text-lg">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
