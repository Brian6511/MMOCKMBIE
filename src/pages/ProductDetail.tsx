import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { CheckCircle, ArrowRight, ArrowLeft, FileText, Users, HelpCircle, ClipboardList, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-building.jpg";
import familyImg from "@/assets/family-banking.jpg";

const categoryLabels = { savings: "Savings", loans: "Loans", transfers: "Transfers & Bills", special: "Special Accounts" };
const categoryColors = { savings: "bg-emerald-500/10 text-emerald-700", loans: "bg-blue-500/10 text-blue-700", transfers: "bg-purple-500/10 text-purple-700", special: "bg-amber-500/10 text-amber-700" };

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products" className="btn-gold">Back to Products</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const related = getProductsByCategory(product.category).filter(p => p.slug !== product.slug).slice(0, 3);
  const Icon = product.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Products & Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            </div>
            <div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[product.category]}`}>
                {categoryLabels[product.category]}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground animate-fade-up">
                {product.title}
              </h1>
              <p className="text-primary-foreground/70 mt-3 text-lg max-w-2xl animate-fade-up-delay-1">{product.tagline}</p>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 animate-fade-up-delay-2">
            {product.stats.map(s => (
              <div key={s.label} className="bg-primary-foreground/10 rounded-xl p-4 text-center backdrop-blur-sm">
                <p className="font-heading text-xl md:text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-primary-foreground/60 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Overview
                </h2>
                <div className="space-y-4">
                  {product.overview.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="bg-secondary rounded-2xl p-6 sticky top-24">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/membership" className="btn-gold w-full text-center block">
                      Apply Now
                    </Link>
                    <Link to="/contact" className="block w-full text-center py-3 px-5 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
                      Talk to an Advisor
                    </Link>
                    <Link to="/loan-calculator" className="block w-full text-center py-3 px-5 rounded-xl border border-border text-muted-foreground font-medium hover:bg-secondary transition-colors">
                      Loan Calculator
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Need help deciding?</p>
                    <a href="https://wa.me/237670000000" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Key Features & <span className="text-primary">Benefits</span>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Everything you get with the {product.title}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="card-lift p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                How to <span className="text-gradient-gold">Get Started</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {product.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="flex gap-5 mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                      {i + 1}
                    </div>
                    {i < product.process.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{step.step}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-lift p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">Eligibility</h3>
                </div>
                <ul className="space-y-3">
                  {product.eligibility.map(e => (
                    <li key={e} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="card-lift p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">Required Documents</h3>
                </div>
                <ul className="space-y-3">
                  {product.documents.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ClipboardList className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                <HelpCircle className="inline w-7 h-7 text-primary mr-2" />
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {product.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-lift overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-heading font-medium text-foreground text-sm">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={familyImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started with <span className="text-gradient-gold">{product.title}</span>?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              Visit any MMOCCUL branch or start the process online. Our team is ready to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership" className="btn-gold text-lg inline-flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/branches" className="py-3 px-7 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
                Find a Branch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Other {categoryLabels[product.category]} Products
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, i) => {
                const RelIcon = p.icon;
                return (
                  <ScrollReveal key={p.slug} delay={i * 80}>
                    <Link to={`/products/${p.slug}`} className="card-lift p-6 block group h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                        <RelIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{p.tagline}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
