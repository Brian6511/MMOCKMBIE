import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, HelpCircle, MessageCircle, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Membership & Accounts",
    questions: [
      { q: "How do I become a member of MMOCCUL?", a: "Visit any of our 10+ branches across Cameroon with your national ID card (CNI or passport) and two passport-size photos. Pay the membership fee of 50,500 FCFA (Solidarity Fund: 12,000 FCFA + Building Fund: 8,500 FCFA + Share Capital: 30,000 FCFA) and your account is activated immediately on the same day. You'll receive your member number, passbook, and mobile banking credentials." },
      { q: "Can I open a joint account?", a: "Yes! MMOCCUL offers joint accounts for couples, families, and business partners. Both account holders must present valid ID cards and passport photos. Joint accounts have equal rights to transactions unless specified otherwise. Joint account holders can also designate different authorization levels for withdrawals." },
      { q: "Is there a minimum balance requirement?", a: "Your share capital of 30,000 FCFA serves as your minimum balance and represents your ownership stake in the cooperative. You can save any amount above this. For daily savings accounts, you can start with as little as 500 FCFA per day. Student accounts have zero minimum balance after the initial registration." },
      { q: "Can I transfer my membership to another branch?", a: "Yes, membership transfers between branches are seamless and free. Simply visit your current branch, request a transfer form, and your account will be moved to your preferred branch within 48 hours. Your account history, savings, and loan status all transfer with you." },
      { q: "What happens if I want to close my account?", a: "You can close your account at any time by visiting your branch. Your share capital (30,000 FCFA) will be refunded after deducting any outstanding obligations. The solidarity fund and building fund are non-refundable as they contribute to the cooperative's community development programs." },
      { q: "Can I open multiple accounts?", a: "Yes, you can have multiple account types under one membership — for example, a regular savings account, a term deposit, and a business account. Each account type serves different financial needs and may have different terms and features." },
    ],
  },
  {
    category: "Loans & Credit",
    questions: [
      { q: "What types of loans does MMOCCUL offer?", a: "We offer six main loan types: School Fees Loans (up to 3M FCFA), Salary Advance (up to 5M FCFA, 24-hour processing), Business Loans (up to 10M FCFA), Agricultural Loans (up to 5M FCFA with seasonal repayment), Plot/Housing Loans (up to 20M FCFA, 60-month term), and Emergency Loans (up to 2M FCFA, 48-hour processing). Each type has competitive rates starting from 1.5% per month." },
      { q: "How quickly can I get a loan approved?", a: "Processing times vary by loan type: Salary advance loans within 24 hours, Emergency loans within 48 hours, School fees loans within 3 business days, Business and Agricultural loans within 5 business days, and Housing loans within 7-10 business days. All times are from submission of complete documentation." },
      { q: "What are the interest rates?", a: "Our interest rates range from 1.5% to 3% per month (simple interest) depending on the loan type. Agricultural loans have the lowest rate at 1.8%/month. Emergency loans have the highest at 3%/month due to rapid processing. We use our free Loan Calculator tool on our website so you can see exact monthly payments before applying." },
      { q: "What collateral is required for a loan?", a: "Requirements vary: Salary advance needs a guarantee letter from your employer. School fees loans need an admission letter or fee invoice plus a guarantor. Business loans over 2M FCFA may require asset documentation. Housing loans require a land certificate or property valuation. Agricultural loans require farm documentation." },
      { q: "Can I repay my loan early?", a: "Absolutely! Early repayment is encouraged and there are no penalties for paying off your loan before the due date. In fact, early repayment improves your credit score within MMOCCUL and may qualify you for larger loans at better rates in the future." },
      { q: "What happens if I miss a payment?", a: "We understand that financial difficulties can arise. If you anticipate difficulty making a payment, contact your branch immediately. We offer payment rescheduling, grace periods, and restructuring options. Late payments do incur a small penalty fee, and persistent defaults may affect your ability to access future loans." },
    ],
  },
  {
    category: "Digital Services & Mobile Banking",
    questions: [
      { q: "How do I access mobile banking?", a: "Download the MMOCCUL Mobile App from Google Play Store or Apple App Store. Register with your membership number and the phone number linked to your account. You'll receive an OTP for verification. Set up your PIN and optional biometric login, and you're ready to bank on the go — 24/7, from anywhere." },
      { q: "What can I do with mobile banking?", a: "Our app offers: balance checks, transaction history, member-to-member transfers, bill payments (ENEO, CAMWATER, phone airtime), loan applications, savings goal tracking, statement downloads, branch locator, and direct WhatsApp support. Essentially, everything you can do at a branch except cash deposits and withdrawals." },
      { q: "Are my transactions secure?", a: "Absolutely. We use bank-grade 256-bit SSL encryption, two-factor authentication (OTP + PIN or biometric), real-time fraud monitoring, and session timeouts. Every transaction triggers an instant SMS alert so you're always informed. Our systems are audited quarterly by COBAC-approved security firms." },
      { q: "Can I use Orange Money or MTN MoMo with MMOCCUL?", a: "Yes! You can deposit to your MMOCCUL account from Orange Money or MTN Mobile Money, and withdraw from MMOCCUL to your mobile money wallet. Transfers are instant and available 24/7. This makes banking accessible even in remote areas without MMOCCUL branches." },
      { q: "How do I get a VISA debit card?", a: "Request your VISA debit card at any branch or through the mobile app. Cards are issued within 5-7 business days. There's a one-time issuance fee of 5,000 FCFA. The card works at all VISA-accepting ATMs and POS terminals worldwide — over 40 million locations in 200+ countries." },
    ],
  },
  {
    category: "Security & Regulation",
    questions: [
      { q: "Is MMOCCUL a regulated institution?", a: "Yes, MMOCCUL is fully licensed by COBAC (Commission Bancaire de l'Afrique Centrale) under license N° D-2021/317 and registered with MINFI (Ministry of Finance) under registration N° 0000381. We are classified as a Category 1 Microfinance Institution and undergo quarterly regulatory audits." },
      { q: "Are my savings safe?", a: "Your savings are protected under COBAC regulations which require us to maintain strict capital adequacy ratios and reserve requirements. We undergo regular internal and external audits. MMOCCUL has maintained a strong financial position since 2016 with zero liquidity issues — meaning every member who has requested a withdrawal has received their funds on time." },
      { q: "What happens to my account if I pass away?", a: "MMOCCUL has a clear succession process. Your designated beneficiary (named during account opening) can claim your savings, share capital, and any other account balances upon presenting: death certificate, beneficiary ID, and court appointment letter (for amounts over 1M FCFA). The process typically takes 2-4 weeks." },
      { q: "How do I report fraud or unauthorized transactions?", a: "Call our fraud hotline immediately at +237 670 000 000 or visit your nearest branch. You can also freeze your card and mobile banking access through the app's security settings. All fraud reports are investigated within 48 hours and resolved within 14 business days with full reimbursement for verified unauthorized transactions." },
    ],
  },
  {
    category: "Fees & Charges",
    questions: [
      { q: "What are the account maintenance fees?", a: "MMOCCUL charges zero monthly account maintenance fees for regular savings accounts. Term deposits, business accounts, and special accounts may have minimal quarterly management fees detailed in your account agreement. SMS alerts are included free for all account types." },
      { q: "Are there transaction fees?", a: "Cash deposits and withdrawals at your home branch are free. Inter-branch transactions carry a small fee of 500 FCFA. Mobile money transfers (Orange Money, MTN MoMo) carry network-standard fees. Western Union transfers follow Western Union's published rates. Bill payments are commission-free." },
      { q: "What is the VISA card annual fee?", a: "The VISA debit card has a one-time issuance fee of 5,000 FCFA and an annual renewal fee of 3,000 FCFA. ATM withdrawals at partner banks are free (2 per month). Withdrawals at non-partner ATMs carry a fee of 500 FCFA per transaction. International ATM fees follow VISA network standards." },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredFaqs = search.trim()
    ? faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase()))
      })).filter(cat => cat.questions.length > 0)
    : faqs;

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6 animate-fade-up">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/80 text-sm font-medium">Got Questions?</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg animate-fade-up-delay-1">
            Everything you need to know about MMOCCUL — membership, loans, digital banking, fees, and more. Can't find your answer? Contact us directly.
          </p>
          {/* Search */}
          <div className="max-w-md mx-auto mt-8 relative animate-fade-up-delay-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="section-container max-w-4xl">
          {filteredFaqs.map((category, ci) => (
            <ScrollReveal key={category.category} delay={ci * 80}>
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{ci + 1}</span>
                  </span>
                  {category.category}
                  <span className="text-xs text-muted-foreground font-normal ml-auto">{category.questions.length} questions</span>
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qi) => {
                    const key = `${ci}-${qi}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={key} className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-md">
                        <button onClick={() => toggle(key)} className="w-full flex items-center justify-between p-5 text-left">
                          <span className="font-medium text-foreground pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-5 px-5" : "max-h-0"}`}>
                          <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No questions match your search. Try different keywords or <Link to="/contact" className="text-primary hover:underline">contact us directly</Link>.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Our team is ready to help you. Reach out via WhatsApp for instant responses, call us, or visit any of our 10+ branches across Cameroon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/237670000000" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-primary-hero border-2 border-primary-foreground/30 hover:bg-primary-foreground/10">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
