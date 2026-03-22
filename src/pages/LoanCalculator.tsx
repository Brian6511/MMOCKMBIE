import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Calculator, ArrowRight, TrendingDown, Wallet, CalendarDays, Percent, CheckCircle, Star, Shield, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const loanTypes = [
  { name: "Salary Advance", rate: 2.0, maxAmount: 5000000, maxMonths: 12, desc: "Quick access to up to 75% of your salary before payday. Ideal for emergencies and unplanned expenses.", requirements: ["Active member for 3+ months", "Guarantee letter from employer", "Salary domiciliation"] },
  { name: "School Fees Loan", rate: 2.0, maxAmount: 3000000, maxMonths: 12, desc: "Don't let fees stop your children's education. Covers all levels from nursery to university.", requirements: ["Active member for 3+ months", "Admission or fee invoice", "Guarantor required"] },
  { name: "Business Loan", rate: 2.5, maxAmount: 10000000, maxMonths: 36, desc: "Fuel your business growth with competitive financing. Perfect for inventory, equipment, or expansion.", requirements: ["Active member for 6+ months", "Business plan or license", "Collateral for amounts > 2M FCFA"] },
  { name: "Agricultural Loan", rate: 1.8, maxAmount: 5000000, maxMonths: 24, desc: "Seasonal financing for farming equipment, seeds, livestock, and irrigation with harvest-aligned repayment.", requirements: ["Active member for 3+ months", "Farm documentation", "Seasonal repayment option"] },
  { name: "Plot / Housing Loan", rate: 2.0, maxAmount: 20000000, maxMonths: 60, desc: "Build or buy your dream home. Includes land purchase, construction, and renovation financing.", requirements: ["Active member for 12+ months", "Land certificate or purchase agreement", "Property valuation required"] },
  { name: "Emergency Loan", rate: 3.0, maxAmount: 2000000, maxMonths: 6, desc: "Rapid-access funds for medical emergencies, funeral expenses, or urgent family needs.", requirements: ["Active member for 1+ month", "Emergency documentation", "Processed within 48 hours"] },
];

const LoanCalculator = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(12);

  const loan = loanTypes[selectedType];
  const monthlyRate = loan.rate / 100;

  const result = useMemo(() => {
    const totalInterest = amount * monthlyRate * months;
    const totalPayment = amount + totalInterest;
    const monthlyPayment = totalPayment / months;
    return { totalInterest, totalPayment, monthlyPayment };
  }, [amount, months, monthlyRate]);

  const formatCFA = (n: number) =>
    new Intl.NumberFormat("fr-CM", { style: "decimal", maximumFractionDigits: 0 }).format(n) + " FCFA";

  const scheduleData = useMemo(() => {
    const data = [];
    const monthlyPrincipal = amount / months;
    const monthlyInterest = amount * monthlyRate;
    for (let i = 1; i <= Math.min(months, 12); i++) {
      data.push({ month: `M${i}`, principal: Math.round(monthlyPrincipal), interest: Math.round(monthlyInterest) });
    }
    return data;
  }, [amount, months, monthlyRate]);

  const pieData = [
    { name: "Principal", value: amount, color: "hsl(220,100%,27%)" },
    { name: "Interest", value: result.totalInterest, color: "hsl(43,65%,52%)" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6 animate-fade-up">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/80 text-sm font-medium">Free Tool • No Commitment</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Loan <span className="text-gradient-gold">Calculator</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg animate-fade-up-delay-1">
            Plan your loan with confidence. Choose from 6 loan types, adjust amount and duration, and see your monthly payments, total interest, and repayment schedule instantly.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Input Panel */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="card-lift p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Configure Your Loan</h2>
                  <p className="text-muted-foreground text-sm mb-8">Select a loan type and adjust the sliders to see real-time estimates</p>

                  {/* Loan Type */}
                  <div className="mb-8">
                    <label className="text-sm font-semibold text-foreground block mb-3">Loan Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {loanTypes.map((lt, i) => (
                        <button
                          key={lt.name}
                          onClick={() => {
                            setSelectedType(i);
                            setAmount(Math.min(amount, lt.maxAmount));
                            setMonths(Math.min(months, lt.maxMonths));
                          }}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            selectedType === i
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                          }`}
                        >
                          {lt.name}
                        </button>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs mt-3 leading-relaxed">{loan.desc}</p>
                  </div>

                  {/* Amount Slider */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-foreground">Loan Amount</label>
                      <span className="text-primary font-heading font-bold text-lg">{formatCFA(amount)}</span>
                    </div>
                    <input type="range" min={100000} max={loan.maxAmount} step={50000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>100,000</span>
                      <span>{formatCFA(loan.maxAmount)}</span>
                    </div>
                  </div>

                  {/* Duration Slider */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-foreground">Repayment Period</label>
                      <span className="text-primary font-heading font-bold text-lg">{months} months</span>
                    </div>
                    <input type="range" min={1} max={loan.maxMonths} step={1} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 month</span>
                      <span>{loan.maxMonths} months</span>
                    </div>
                  </div>

                  {/* Interest Rate & Requirements */}
                  <div className="bg-secondary rounded-xl p-4 flex items-center gap-3 mb-6">
                    <Percent className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Interest Rate: {loan.rate}% / month</p>
                      <p className="text-xs text-muted-foreground">Simple interest calculation on {loan.name}</p>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Requirements for {loan.name}:</p>
                    <ul className="space-y-1.5">
                      {loan.requirements.map(r => (
                        <li key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground sticky top-24">
                  <h3 className="font-heading text-xl font-bold mb-8">Your Loan Summary</h3>

                  <div className="space-y-6">
                    <div className="bg-primary-foreground/10 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <Wallet className="w-5 h-5 text-accent" />
                        <span className="text-sm text-primary-foreground/70">Monthly Payment</span>
                      </div>
                      <p className="font-heading text-3xl font-bold text-accent">{formatCFA(result.monthlyPayment)}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-foreground/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingDown className="w-4 h-4 text-accent" />
                          <span className="text-xs text-primary-foreground/60">Total Interest</span>
                        </div>
                        <p className="font-heading font-bold text-lg">{formatCFA(result.totalInterest)}</p>
                      </div>
                      <div className="bg-primary-foreground/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <CalendarDays className="w-4 h-4 text-accent" />
                          <span className="text-xs text-primary-foreground/60">Total Payment</span>
                        </div>
                        <p className="font-heading font-bold text-lg">{formatCFA(result.totalPayment)}</p>
                      </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} innerRadius={35}>
                            {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                          </Pie>
                          <Tooltip formatter={(v: number) => formatCFA(v)} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-6 text-xs">
                      <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[hsl(220,100%,27%)]" /> Principal</span>
                      <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-accent" /> Interest</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link to="/membership" className="btn-gold w-full text-center block">
                      Apply for This Loan
                    </Link>
                    <a href="https://wa.me/237670000000" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-lg border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/5 transition-colors">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Talk to an Advisor
                    </a>
                  </div>

                  <p className="text-xs text-primary-foreground/40 mt-6 text-center">
                    * This is an estimate. Actual terms may vary. Visit a branch for exact figures.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Repayment Schedule Chart */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Repayment <span className="text-primary">Schedule Preview</span>
              </h2>
              <p className="text-muted-foreground mt-2">Monthly breakdown of principal and interest payments (first 12 months)</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="card-lift p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scheduleData}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                    <YAxis tick={{ fontSize: 11 }} stroke="hsl(220,10%,46%)" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} formatter={(v: number) => formatCFA(v)} />
                    <Bar dataKey="principal" stackId="a" fill="hsl(220,100%,27%)" radius={[0, 0, 0, 0]} name="Principal" />
                    <Bar dataKey="interest" stackId="a" fill="hsl(43,65%,52%)" radius={[4, 4, 0, 0]} name="Interest" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Loan Comparison Table */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
              Compare Our <span className="text-primary">Loan Products</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Loan Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Interest Rate</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Max Amount</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Max Duration</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Processing</th>
                  </tr>
                </thead>
                <tbody>
                  {loanTypes.map((lt, i) => (
                    <tr key={lt.name} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} hover:bg-primary/5 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-foreground text-sm">{lt.name}</td>
                      <td className="px-6 py-4 text-center text-accent font-semibold text-sm">{lt.rate}%/month</td>
                      <td className="px-6 py-4 text-center text-muted-foreground text-sm">{formatCFA(lt.maxAmount)}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground text-sm">{lt.maxMonths} months</td>
                      <td className="px-6 py-4 text-center text-muted-foreground text-sm">{lt.name.includes("Salary") ? "24 hrs" : lt.name.includes("Emergency") ? "48 hrs" : "3-5 days"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "COBAC Regulated", desc: "All loans comply with COBAC banking regulations. Your rights as a borrower are fully protected by Central African banking law." },
              { icon: Star, title: "Transparent Terms", desc: "No hidden fees, no surprise charges. Every loan comes with a clear breakdown of principal, interest, and total cost before you sign." },
              { icon: Clock, title: "Fast Processing", desc: "Salary advances in 24 hours, emergency loans in 48 hours. Regular loans processed within 3-5 business days with digital tracking." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoanCalculator;
