import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Landmark, Search, BookOpen, Tag } from "lucide-react";
import familyImg from "@/assets/family-banking.jpg";
import farmerImg from "@/assets/farmer-success.jpg";
import studentImg from "@/assets/student-mobile.jpg";
import businessImg from "@/assets/business-woman.jpg";
import heroImg from "@/assets/hero-building.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import branchImg from "@/assets/branch-exterior.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import mobileImg from "@/assets/mobile-banking.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import awardImg from "@/assets/award-ceremony.jpg";

const featuredPost = {
  title: "MMOCCUL Opens New Branch in Kribi — Expanding Financial Access to Southern Cameroon",
  excerpt: "As part of our commitment to reaching every corner of Cameroon, we're thrilled to announce the opening of our newest branch in Kribi, South Region. This expansion brings our total to 10+ branches nationwide, making quality financial services more accessible than ever. The Kribi branch will offer full banking services including savings accounts, loans, Western Union transfers, and mobile money integration from day one.",
  date: "March 15, 2026",
  readTime: "5 min read",
  image: heroImg,
  category: "Company News",
  author: "MMOCCUL Communications",
};

const allPosts = [
  { title: "How to Get a Salary Advance Loan in 24 Hours", excerpt: "Need funds before payday? Our salary advance service provides up to 75% of your monthly salary with instant processing. Here's a complete step-by-step guide on how to apply, what documents you need, and how repayment works.", date: "March 10, 2026", readTime: "4 min read", image: familyImg, category: "Financial Tips", author: "Loan Department" },
  { title: "Success Story: How Mama Ngozi Expanded Her Farm with an Agricultural Loan", excerpt: "From a small cassava farm to a thriving agricultural business — learn how MMOCCUL's agricultural loan with seasonal repayment helped transform one family's livelihood in the West Region of Cameroon.", date: "March 5, 2026", readTime: "6 min read", image: farmerImg, category: "Success Stories", author: "Marketing Team" },
  { title: "5 Tips for Students to Start Saving Early", excerpt: "Opening a student account is the first step towards financial independence. Here are five practical strategies for university students to build healthy saving habits that will serve you for a lifetime.", date: "February 28, 2026", readTime: "3 min read", image: studentImg, category: "Financial Tips", author: "Youth Banking" },
  { title: "Meet Our Entrepreneur of the Month: Comfort Ndi", excerpt: "Comfort Ndi started her boutique with a small business loan from MMOCCUL. Today, she employs 5 people and has expanded to two locations in Douala. Read her inspiring journey from idea to thriving business.", date: "February 20, 2026", readTime: "5 min read", image: entrepreneurImg, category: "Success Stories", author: "Marketing Team" },
  { title: "Understanding COBAC Regulations: Why Your Money is Safe with MMOCCUL", excerpt: "As a COBAC-licensed institution, MMOCCUL adheres to strict regulatory standards. Learn what COBAC licensing means for your deposits, how audits work, and why cooperative banking is a safe choice.", date: "February 15, 2026", readTime: "7 min read", image: awardImg, category: "Education", author: "Compliance Department" },
  { title: "New Feature: Pay Your ENEO & CAMWATER Bills via Mobile App", excerpt: "Say goodbye to long queues! Our updated mobile app now lets you pay electricity and water bills directly from your MMOCCUL account in seconds. Here's how to set it up.", date: "February 10, 2026", readTime: "3 min read", image: mobileImg, category: "Product Updates", author: "Digital Team" },
  { title: "Why Group Savings (Njangi) Is the Key to Community Wealth", excerpt: "The njangi tradition is deeply rooted in Cameroonian culture. Learn how MMOCCUL's group savings accounts modernize this tradition while preserving its community-building spirit.", date: "February 5, 2026", readTime: "5 min read", image: communityImg, category: "Education", author: "Community Banking" },
  { title: "MMOCCUL Wins Rainbow Award for Excellence 2022", excerpt: "We're honored to receive the Rainbow Award for outstanding contribution to community development and financial inclusion in Cameroon. This recognition validates our member-first approach.", date: "January 28, 2026", readTime: "4 min read", image: awardImg, category: "Company News", author: "Communications" },
  { title: "How to Build Your Credit Score with MMOCCUL", excerpt: "Your borrowing history with MMOCCUL matters. Learn how regular savings, timely loan repayments, and maintaining a good account standing can qualify you for larger loans at better rates.", date: "January 20, 2026", readTime: "6 min read", image: branchImg, category: "Financial Tips", author: "Credit Department" },
];

const categories = [
  { icon: TrendingUp, label: "Financial Tips", count: 12 },
  { icon: Users, label: "Success Stories", count: 8 },
  { icon: Landmark, label: "Company News", count: 15 },
  { icon: BookOpen, label: "Education", count: 10 },
  { icon: Tag, label: "Product Updates", count: 6 },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allPosts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !searchQuery.trim() || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            News & <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg animate-fade-up-delay-1">
            Financial tips, success stories, product updates, and the latest news from MMOCCUL — your source for financial education and community impact
          </p>
          {/* Search */}
          <div className="max-w-md mx-auto mt-8 relative animate-fade-up-delay-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-secondary py-6 border-b border-border sticky top-16 md:top-20 z-30">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => setActiveCategory("All")} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "All" ? "bg-primary text-primary-foreground shadow-lg" : "bg-card text-foreground hover:bg-primary/10"}`}>
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.label ? "bg-primary text-primary-foreground shadow-lg" : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.label ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"}`}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && !searchQuery && (
        <section className="py-16 bg-background">
          <div className="section-container">
            <ScrollReveal>
              <div className="card-lift overflow-hidden grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">{featuredPost.category}</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                    <span>By {featuredPost.author}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-10">
              {activeCategory === "All" ? "Latest" : activeCategory} <span className="text-primary">Articles</span>
              <span className="text-sm text-muted-foreground font-normal ml-3">({filtered.length} articles)</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80}>
                <div className="card-lift overflow-hidden flex flex-col h-full group">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">{post.category}</span>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 leading-snug">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No articles match your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Stay <span className="text-gradient-gold">Informed</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Get financial tips, product updates, and success stories delivered to your inbox every week. Join 5,000+ subscribers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
            </form>
            <p className="text-xs text-primary-foreground/40 mt-3">No spam. Unsubscribe anytime. We respect your privacy.</p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
