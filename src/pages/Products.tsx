import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { Link } from "react-router-dom";
import { Wallet, GraduationCap, Tractor, Briefcase, Home, Send, Zap, Droplets, Smartphone, ArrowRight, Shield, Users, Calculator, CheckCircle, CreditCard, Globe, BarChart3, Bell, Lock, Heart, Star } from "lucide-react";
import familyImg from "@/assets/family-banking.jpg";
import studentImg from "@/assets/student-mobile.jpg";
import mobileImg from "@/assets/mobile-banking.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";

const tabs = ["Savings", "Loans", "Transfers & Bills", "Special Accounts"] as const;

const tabContent = {
  Savings: [
    { icon: Smartphone, slug: "mobile-savings", title: "Mobile Savings", desc: "Save on the go with our mobile banking platform. Track your savings in real-time with instant notifications. Set up automatic savings schedules to build discipline without thinking about it.", features: ["Real-time balance updates", "Auto-save scheduling", "Zero monthly fees", "Instant deposit alerts"] },
    { icon: Wallet, slug: "term-deposit", title: "Term Deposit", desc: "Lock your savings and earn higher interest. Flexible terms from 3-24 months with guaranteed returns. Your capital is fully protected and you receive interest at maturity or quarterly.", features: ["Up to 8% annual return", "Flexible 3-24 month terms", "Capital guaranteed", "Quarterly interest option"] },
    { icon: Wallet, slug: "daily-savings", title: "Daily Savings (Tontine)", desc: "Our agents collect your daily savings at your doorstep. Perfect for market traders and entrepreneurs who deal in cash. Monthly payout option for working capital needs.", features: ["Doorstep collection", "Starts from 500 FCFA/day", "Monthly payout option", "No paperwork needed"] },
    { icon: Heart, slug: "childrens-savings", title: "Children's Savings", desc: "Start saving for your child's future today with our dedicated youth accounts. Financial education workshops included for children aged 10+. Birthday bonus interest rewarded annually.", features: ["Zero minimum balance", "Birthday bonus interest", "Financial education included", "Parent co-management"] },
  ],
  Loans: [
    { icon: GraduationCap, slug: "school-fees-loan", title: "School Fees Loan", desc: "Don't let school fees stop your children's education. Quick approval process with competitive rates. Covers nursery through university including professional certifications.", features: ["24-hour processing", "Covers all school levels", "Seasonal repayment plans", "Up to 3M FCFA"] },
    { icon: Home, slug: "housing-loan", title: "Plot / Housing Loan", desc: "Build or buy your dream home with competitive rates and flexible repayment up to 60 months. Includes land purchase, construction, renovation, and home improvement.", features: ["Up to 20M FCFA", "60-month repayment", "Land purchase included", "Construction monitoring"] },
    { icon: Tractor, slug: "agricultural-loan", title: "Agricultural Loan", desc: "Financing for farming equipment, seeds, livestock, and irrigation. Seasonal repayment plans aligned with harvest cycles. Special rates for cooperative farming groups.", features: ["Seasonal repayment", "Equipment financing", "Harvest-based scheduling", "Lowest rate: 1.8%"] },
    { icon: Briefcase, slug: "salary-advance", title: "Salary Advance", desc: "Get up to 75% of your salary before payday. Instant processing for qualified members with automatic payroll deduction available for convenience.", features: ["75% of salary", "24-hour disbursement", "Auto-deduction option", "No collateral needed"] },
  ],
  "Transfers & Bills": [
    { icon: Send, slug: "western-union", title: "Western Union", desc: "Send and receive money worldwide through our Western Union partnership. Competitive exchange rates with same-day processing at all 10+ branches.", features: ["Worldwide coverage", "Same-day transfers", "Competitive rates", "All branches"] },
    { icon: Smartphone, slug: "mobile-money", title: "Orange Money / MTN MoMo", desc: "Deposit, withdraw, or transfer via mobile money directly from your MMOCCUL account. Supports all major mobile money networks in Cameroon.", features: ["Instant transfers", "All networks supported", "Low transaction fees", "24/7 availability"] },
    { icon: Zap, slug: "eneo-payment", title: "ENEO Bill Payment", desc: "Pay your electricity bills conveniently at any MMOCCUL branch or through the mobile app. Zero service charge with instant confirmation.", features: ["Zero service charge", "Instant confirmation", "Mobile app payment", "Payment history"] },
    { icon: Droplets, slug: "camwater-payment", title: "CAMWATER Payment", desc: "Settle your water bills without the queue. Fast, reliable, and available at all branches plus our mobile app for ultimate convenience.", features: ["No extra fees", "Branch or mobile app", "Payment receipt issued", "Scheduled payments"] },
  ],
  "Special Accounts": [
    { icon: Users, slug: "group-savings", title: "Group Savings (Njangi)", desc: "Perfect for njangi groups and associations. Joint management features with transparent tracking, multiple signatories, and group loan eligibility.", features: ["Multiple signatories", "Transparent ledger", "Group loan eligibility", "Meeting scheduling"] },
    { icon: GraduationCap, slug: "student-account", title: "Student Account", desc: "Designed for students with zero minimum balance, free SMS alerts, and mobile banking access. Special financial literacy workshops and career mentoring.", features: ["Zero minimum balance", "Free SMS alerts", "Discounted services", "Financial workshops"] },
    { icon: Briefcase, slug: "business-account", title: "Business Account", desc: "Tailored for entrepreneurs with overdraft facilities, business loans, and POS services. Includes dedicated business advisor and financial reporting tools.", features: ["Overdraft facility", "Business loan access", "POS terminal option", "Business advisory"] },
    { icon: Shield, slug: "association-account", title: "Association Account", desc: "Manage your church, club, or community group funds transparently with multiple authorization and audit-ready financial records.", features: ["Multi-signatory", "Financial reports", "Audit-ready records", "Online dashboard"] },
  ],
};

const digitalFeatures = [
  { icon: Smartphone, title: "Mobile App", desc: "Full-featured banking app for Android and iOS with biometric login" },
  { icon: CreditCard, title: "VISA Debit Card", desc: "Shop and withdraw worldwide at millions of VISA-accepting locations" },
  { icon: Bell, title: "SMS Alerts", desc: "Real-time notifications for every transaction on your account" },
  { icon: Globe, title: "Online Banking", desc: "Access your account from any browser, 24/7 worldwide" },
  { icon: Lock, title: "256-bit Security", desc: "Bank-grade encryption protects every transaction and login" },
  { icon: BarChart3, title: "Financial Reports", desc: "Monthly statements and spending analytics at your fingertips" },
];

const Products = () => {
  const [active, setActive] = useState<typeof tabs[number]>("Savings");

  return (
    <Layout>
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
            Comprehensive Financial Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Products & <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-lg animate-fade-up-delay-1">
            Everything you need to save, borrow, transfer, and grow — all in one place, designed for Cameroonians by Cameroonians
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-3 rounded-xl font-heading font-medium text-sm transition-all duration-300 ${
                  active === tab
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {tabContent[active].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link to={`/products/${item.slug}`} className="card-lift p-7 flex flex-col h-full group block">
                  <div className="flex gap-5 items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <ul className="grid grid-cols-2 gap-1.5">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ParallaxSection backgroundImage={familyImg} className="py-24">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Which Product Is <span className="text-gradient-gold">Right for You?</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Use our free loan calculator or talk to one of our advisors at any branch. We'll help you find the perfect financial solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/loan-calculator" className="btn-gold inline-flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Loan Calculator
              </Link>
              <Link to="/membership" className="btn-primary-hero border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2">
                Open an Account <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Digital Banking Features */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Digital Banking</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bank Anytime, <span className="text-gradient-gold">Anywhere</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mobile banking app puts the full power of MMOCCUL in your pocket. Check balances, transfer funds, pay bills, and even apply for loans — all from your smartphone, 24/7.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're in downtown Yaoundé or a rural village in the North-West, our digital tools work even on slow connections to keep you connected to your finances at all times.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {digitalFeatures.map((f, i) => (
                    <div key={f.title} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <f.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{f.title}</p>
                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img src={mobileImg} alt="Mobile Banking" className="rounded-2xl shadow-xl w-full" />
                <img src={bankTellerImg} alt="Customer Service" className="rounded-2xl shadow-xl w-full mt-8" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Why MMOCCUL vs <span className="text-primary">Traditional Banks?</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">MMOCCUL</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Traditional Banks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Minimum Balance", "30,000 FCFA (shares)", "100,000+ FCFA"],
                    ["Loan Interest", "From 1.5%/month", "From 3-5%/month"],
                    ["Loan Approval", "24 hrs – 5 days", "2-8 weeks"],
                    ["Mobile Banking", "Free", "Often paid"],
                    ["SMS Alerts", "Included", "Extra charge"],
                    ["Community Focus", "✓ Member-owned", "✗ Profit-driven"],
                    ["Doorstep Collection", "✓ Available", "✗ Not available"],
                    ["COBAC Regulated", "✓ Licensed", "✓ Licensed"],
                  ].map(([feature, mmoccul, banks], i) => (
                    <tr key={feature} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}>
                      <td className="px-6 py-3 font-medium text-foreground text-sm">{feature}</td>
                      <td className="px-6 py-3 text-center text-accent font-semibold text-sm">{mmoccul}</td>
                      <td className="px-6 py-3 text-center text-muted-foreground text-sm">{banks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
