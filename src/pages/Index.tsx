import { Link } from "react-router-dom";
import { Smartphone, Shield, CreditCard, ArrowRight, Users, Building2, Award, Calendar, Star, ChevronRight, TrendingUp, Clock, CheckCircle2, Calculator, Heart, Globe, Zap, BarChart3, Target, Banknote } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Layout from "@/components/Layout";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroImg from "@/assets/hero-building.jpg";
import familyImg from "@/assets/family-banking.jpg";
import farmerImg from "@/assets/farmer-success.jpg";
import studentImg from "@/assets/student-mobile.jpg";
import businessImg from "@/assets/business-woman.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";
import branchImg from "@/assets/m11.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import mobileImg from "@/assets/m.png";
import entrepreneurImg from "@/assets/entrepreneur.jpg";

const stats = [
  { icon: Users, value: 26000, suffix: "+", label: "Active Members" },
  { icon: Building2, value: 10, suffix: "+", label: "Branches" },
  { icon: Calendar, value: 2016, suffix: "", label: "Founded" },
  { icon: Award, value: 1, suffix: "", label: "COBAC Licensed", displayValue: "✓" },
  { icon: Banknote, value: 5, suffix: "B+", label: "FCFA Disbursed" },
  { icon: Heart, value: 95, suffix: "%", label: "Satisfaction" },
];

const contactStats = [
  { value: 26000, suffix: "+", label: "Members Served" },
  { value: 10, suffix: "+", label: "Branches Nationwide" },
  { value: 200, suffix: "+", label: "Customer Agents" },
  { value: 24, suffix: "/7", label: "Support Availability" },
  { value: 5, suffix: "B+", label: "FCFA Processed" },
  { value: 95, suffix: "%", label: "Satisfaction" },
];

const whyUs = [
  { icon: Smartphone, title: "Mobile Banking App", desc: "Access your account, transfer money, and pay bills 24/7 from your phone. Available on Android and iOS with biometric login and real-time push notifications for every transaction.", badge: "Popular" },
  { icon: Shield, title: "SMS Alerts & Security", desc: "Get instant SMS notifications on every transaction. 256-bit SSL encryption, two-factor authentication, and real-time fraud monitoring keep your money safe around the clock." },
  { icon: CreditCard, title: "ATM & VISA Cards", desc: "Withdraw cash and shop worldwide with your MMOCCUL VISA debit card. Accepted at all ATMs in Cameroon and over 200 countries. Contactless payments supported." },
  { icon: TrendingUp, title: "Competitive Rates", desc: "Our loan interest rates start from just 1.5% per month — among the lowest in Cameroon's MFI sector. No hidden fees, no surprise charges, complete transparency." },
  { icon: Clock, title: "24-Hour Loan Approval", desc: "Salary advance loans processed within 24 hours. Emergency loans in 48 hours. No hidden fees. Our streamlined digital process eliminates paperwork hassles." },
  { icon: CheckCircle2, title: "COBAC Regulated", desc: "Fully licensed by COBAC (N° D-2021/317) and registered with MINFI. Your deposits are protected by Central African banking regulations and quarterly audits." },
  { icon: Globe, title: "International Transfers", desc: "Send and receive money worldwide through our Western Union partnership. Competitive exchange rates, same-day processing, and available at all 10+ branches." },
  { icon: Zap, title: "Instant Bill Payments", desc: "Pay ENEO electricity, CAMWATER, phone airtime, and more from your account or mobile app. Zero service charges and instant confirmation receipts." },
];

const products = [
  { title: "Savings Accounts", desc: "Mobile Savings, Term Deposits, Daily Savings, Children's Savings & more. Start with as low as 1,000 FCFA. Earn competitive interest on your deposits.", link: "/products", icon: "MM" },
  { title: "Loan Services", desc: "School fees, Agricultural, Salary Advance, Plot, Business, and Emergency loans at competitive rates from 1.5%/month with flexible repayment plans.", link: "/loan-calculator", icon: "OC" },
  { title: "Money Transfer & Bills", desc: "Western Union, Orange Money, MTN MoMo, ENEO, CAMWATER bill payments, and international wire transfers all in one convenient place.", link: "/products", icon: "CU" },
  { title: "Digital Banking", desc: "Full-featured mobile app, SMS alerts, online account management, and VISA debit cards for 24/7 access to your finances from anywhere.", link: "/products", icon: "L" },
];

const heroSlides = [
  {
    title: "Savings Accounts",
    subtitle: "Grow Your Money Securely",
    desc: "Start saving with as little as 1,000 FCFA. Multiple savings options including mobile savings, term deposits, and children's accounts with competitive interest rates.",
    image: familyImg,
    link: "/products",
    cta: "Open Savings Account"
  },
  {
    title: "Loan Services",
    subtitle: "Loans That Work For You",
    desc: "From salary advances to agricultural loans, get funding at competitive rates starting from 1.5% per month. Flexible repayment plans designed for your needs.",
    image: farmerImg,
    link: "/loan-calculator",
    cta: "Calculate Your Loan"
  },
  {
    title: "Money Transfer & Bills",
    subtitle: "Send & Pay Instantly",
    desc: "Transfer money worldwide with Western Union, pay bills, buy airtime, and manage all your payments through our secure digital platform.",
    image: mobileImg,
    link: "/products",
    cta: "Transfer Money Now"
  },
  {
    title: "Digital Banking",
    subtitle: "Banking at Your Fingertips",
    desc: "Access your account 24/7 with our mobile app. SMS alerts, VISA debit cards, online banking, and biometric security for complete peace of mind.",
    image: studentImg,
    link: "/products",
    cta: "Download Mobile App"
  }
];

const testimonials = [
  { name: "Marie Ngono", role: "Small Business Owner, Douala", text: "MMOCCUL gave me the loan I needed to expand my shop from one to three locations. The process was fast, transparent, and the interest rate is very fair compared to other MFIs. My revenue has tripled since I joined in 2019, and the mobile app makes managing my business account effortless.", avatar: "MN", rating: 5, image: businessImg },
  { name: "Jean-Pierre Kamga", role: "Teacher, Bamenda", text: "The salary advance service saved me during a family emergency. Within 24 hours, I had the funds. I've been a member since 2018 and I recommend MMOCCUL to all my colleagues. The SMS alerts give me peace of mind knowing exactly when money moves in and out of my account.", avatar: "JK", rating: 5 },
  { name: "Esther Tabi", role: "Student, University of Buea", text: "Opening my student account was easy — no minimum balance required! The mobile app is super convenient for checking my savings between classes. I even set up automatic weekly savings of 2,000 FCFA, and after two years I was able to pay for my final year fees entirely from my savings.", avatar: "ET", rating: 5, image: studentImg },
  { name: "Papa Amadou", role: "Farmer, Bafoussam", text: "The agricultural loan helped me buy a tractor and irrigation system. My farm's production has tripled. MMOCCUL truly believes in us farmers. They understood my seasonal income and created a repayment plan aligned with my harvest cycles. No other institution offered that flexibility.", avatar: "PA", rating: 5, image: farmerImg },
  { name: "Comfort Ndi", role: "Entrepreneur, Douala", text: "I started my boutique with a 2 million FCFA business loan from MMOCCUL. Today I employ 5 people and have expanded to two locations. The financial advisors helped me create a business plan and the terms were transparent from day one. I'm now applying for my third loan to open a third store.", avatar: "CN", rating: 5, image: entrepreneurImg },
  { name: "Dr. Fon Tanyi", role: "Medical Doctor, Yaoundé", text: "As a medical professional, I appreciate institutions that operate with integrity. MMOCCUL's COBAC certification and transparent reporting gave me confidence to invest my savings. The term deposit returns are excellent, and the VISA debit card works everywhere I travel for conferences.", avatar: "FT", rating: 5 },
];

const growthData = [
  { year: "2016", members: 500, loans: 50 },
  { year: "2017", members: 1200, loans: 180 },
  { year: "2018", members: 3500, loans: 520 },
  { year: "2019", members: 7000, loans: 1200 },
  { year: "2020", members: 11000, loans: 2100 },
  { year: "2021", members: 15000, loans: 3800 },
  { year: "2022", members: 19000, loans: 5500 },
  { year: "2023", members: 23000, loans: 7200 },
  { year: "2024", members: 26000, loans: 9000 },
];

const branchPerformance = [
  { branch: "Yaoundé", members: 8000 },
  { branch: "Douala B.", members: 5000 },
  { branch: "Bafoussam", members: 4000 },
  { branch: "Douala V.", members: 3500 },
  { branch: "Bamenda", members: 2500 },
  { branch: "Buea", members: 2000 },
  { branch: "Dschang", members: 1500 },
];

const partners = [
  "Western Union", "Orange Money", "MTN MoMo", "VISA", "COBAC", "ENEO", "CAMWATER", "Express Union"
];

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {heroSlides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] relative min-h-[90vh] md:min-h-screen flex items-center">
                <div className="absolute inset-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
                </div>
                <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse hidden lg:block" />
                <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl hidden lg:block" />

                <div className="relative section-container py-20 md:py-0">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 animate-fade-up">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-primary-foreground/80 text-sm font-medium">COBAC Licensed • Since 2016 • 26,000+ Members</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.1] animate-fade-up">
                      {slide.title}
                    </h1>
                    <p className="text-accent font-heading text-xl md:text-2xl font-semibold mt-4 animate-fade-up-delay-1">
                      {slide.subtitle}
                    </p>
                    <p className="text-primary-foreground/80 mt-4 text-lg leading-relaxed animate-fade-up-delay-2">
                      {slide.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up-delay-3">
                      <Link to={slide.link} className="btn-gold text-center text-lg flex items-center justify-center gap-2">
                        {slide.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link to="/membership" className="btn-primary-hero border-2 border-primary-foreground/30 text-center text-lg hover:bg-primary-foreground/10 flex items-center justify-center gap-2">
                        Become a Member – 50,500 FCFA
                      </Link>
                    </div>
                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-3 mt-8 animate-fade-up-delay-3">
                      {["COBAC Licensed", "MINFI Registered", "256-bit SSL", "VISA Partner"].map(badge => (
                        <span key={badge} className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/70 text-xs px-3 py-1.5 rounded-full border border-primary-foreground/10">
                          ✓ {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors flex items-center justify-center"
          onClick={scrollPrev}
        >
          <ChevronRight className="w-6 h-6 text-primary-foreground rotate-180" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors flex items-center justify-center"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-primary-foreground" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-primary-foreground/40 text-xs">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center card-lift border border-primary-foreground/5">
                  <s.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="font-heading text-2xl md:text-3xl font-bold text-accent">
                    {s.displayValue || <CountUp end={s.value} suffix={s.suffix} />}
                  </div>
                  <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Advantages</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why Choose <span className="text-primary">MMOCCUL?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                Modern banking tools and trusted financial services designed for every Cameroonian — from market traders in Douala to farmers in the Western Highlands
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card-lift p-7 text-left h-full relative group">
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Image Section with service highlights */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <img src={bankTellerImg} alt="Customer service" className="rounded-2xl shadow-xl w-full h-48 object-cover" />
                <img src={mobileImg} alt="Mobile banking" className="rounded-2xl shadow-xl w-full h-48 object-cover mt-8" />
                <img src={communityImg} alt="Community" className="rounded-2xl shadow-xl w-full h-48 object-cover -mt-4" />
                <img src={branchImg} alt="Branch" className="rounded-2xl shadow-xl w-full h-48 object-cover mt-4" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Promise</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Banking That Puts <span className="text-gradient-gold">You First</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From savings accounts to agricultural loans, from mobile banking to money transfers — MMOCCUL offers every financial service you need under one roof. Our member-first philosophy means every product is designed with your needs in mind, not our profits.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a university student opening your first account, a farmer seeking seasonal financing, or a business owner looking to expand — we have tailored solutions backed by a decade of experience serving Cameroonian communities.
              </p>
              <ul className="space-y-3 mb-8">
                {["Personalized financial advisory at every branch", "Loan products designed for Cameroonian lifestyles", "Digital tools that work even with slow connections", "Community-first approach with transparent operations"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-gold inline-flex items-center gap-2">
                  Explore Our Products <ChevronRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Growth Chart Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <BarChart3 className="w-4 h-4 inline mr-1" /> Our Growth
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                A Decade of <span className="text-gradient-gold">Steady Growth</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                From 500 founding members in 2016 to over 26,000 today — our growth reflects the trust Cameroonians place in MMOCCUL
              </p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="card-lift p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">Member Growth (2016–2024)</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="memberGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(220,100%,27%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(220,100%,27%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                      <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                      <Area type="monotone" dataKey="members" stroke="hsl(220,100%,27%)" fill="url(#memberGrad)" strokeWidth={3} name="Members" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card-lift p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">Members by Branch</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={branchPerformance} layout="vertical">
                      <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                      <YAxis type="category" dataKey="branch" tick={{ fontSize: 11 }} width={80} stroke="hsl(220,10%,46%)" />
                      <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                      <Bar dataKey="members" fill="hsl(43,65%,52%)" radius={[0, 6, 6, 0]} name="Members" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">What We Offer</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our <span className="text-primary">Products & Services</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Comprehensive financial solutions tailored for every stage of your life and business</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="card-lift p-7 flex flex-col h-full group">
                  <span className="text-4xl mb-4">{p.icon}</span>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                  <Link to={p.link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Stats */}
      <ParallaxSection backgroundImage={mobileImg} overlay="bg-primary/0" speed={0} backgroundPosition="center 15%" className="py-36">
        <div className="section-container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-left mb-8">
                Contact <span className="text-gradient-gold">MMOCCUL</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-left">
                <p className="text-primary-foreground/80 max-w-2xl mb-6 text-left text-lg leading-relaxed">
                  Have a question or need help with your account? Reach us through any of the channels below and our team will respond promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+237670000000" className="btn-gold">Call  +237 670 000 000</a>
                  <a href="mailto:info@mmoccul.com" className="btn-primary-hero">Email info@mmoccul.com</a>
                  <Link to="/contact" className="btn-gold">Visit Contact Page</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-accent/20 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Testimonials</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Our <span className="text-gradient-gold">Members Say</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Real stories from real members across Cameroon — business owners, farmers, students, and professionals</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div className="card-lift p-7 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm ring-2 ring-primary/30">
                        {t.avatar}
                      </div>
                    )}
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read More Success Stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground font-medium mb-8">TRUSTED PARTNERS & AFFILIATIONS</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {partners.map(p => (
                <div key={p} className="bg-card rounded-xl px-6 py-3 shadow-sm text-sm font-heading font-semibold text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all">
                  {p}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Loan Calculator CTA */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-xl">
              <div className="flex-1">
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Free Tool</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Calculate Your Loan <span className="text-gradient-gold">Instantly</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Use our free loan calculator to estimate your monthly payments, total interest, and find the best loan product for your needs. No commitment required — plan your finances with confidence before you apply.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Choose from 6 different loan types including Salary Advance, School Fees, Business, Agricultural, Housing, and Emergency loans. Each with transparent rates and no hidden charges.
                </p>
                <Link to="/loan-calculator" className="btn-gold inline-flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Open Loan Calculator
                </Link>
              </div>
              <div className="w-full md:w-80 bg-primary rounded-2xl p-8 text-primary-foreground text-center">
                <p className="text-sm text-primary-foreground/60 mb-2">Example: 500,000 FCFA for 12 months</p>
                <p className="font-heading text-4xl font-bold text-accent">53,333</p>
                <p className="text-sm text-primary-foreground/60">FCFA / month</p>
                <div className="mt-4 text-xs text-primary-foreground/40">at 2% monthly rate</div>
                <div className="mt-6 border-t border-primary-foreground/10 pt-4 space-y-2">
                  <div className="flex justify-between text-xs"><span className="text-primary-foreground/50">Total Interest</span><span className="text-accent font-medium">120,000 FCFA</span></div>
                  <div className="flex justify-between text-xs"><span className="text-primary-foreground/50">Total Repayment</span><span className="font-medium">620,000 FCFA</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Simple Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                How to <span className="text-primary">Get Started</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Visit Any Branch", desc: "Bring your CNI and a passport photo to any of our 10+ branches across Cameroon. Our friendly staff will welcome you.", icon: Target },
              { step: "02", title: "Open Your Account", desc: "Pay the one-time membership fee of 50,500 FCFA. Your account is activated immediately on the same day.", icon: Users },
              { step: "03", title: "Go Digital", desc: "Download our mobile app, get your VISA debit card, and set up SMS alerts. Full digital banking from day one.", icon: Smartphone },
              { step: "04", title: "Start Growing", desc: "Save regularly, access loans when you need them, and watch your financial future take shape with MMOCCUL.", icon: TrendingUp },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 150}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300 relative">
                    <s.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{s.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ParallaxSection backgroundImage={heroImg} overlay="bg-primary/90" className="py-28 md:py-36">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make Your Dreams <span className="text-gradient-gold">Reality?</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-10 text-lg">
              Join over 26,000 members who trust MMOCCUL for their savings, loans, and financial growth across Cameroon. Your journey to financial independence starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold text-lg inline-flex items-center gap-2">
                Join MMOCCUL Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-primary-hero border-2 border-primary-foreground/30 text-lg hover:bg-primary-foreground/10">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
