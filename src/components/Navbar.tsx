import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MapPin, Star } from "lucide-react";
import logo from "@/assets/m logo.png";
import { Wallet, GraduationCap, Tractor, Briefcase, Home, Send, Zap, Droplets, Smartphone, Shield, Users, Heart } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Services",
  },
  { to: "/membership", label: "Become a Member" },
  {
    label: "Branches",
  },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const branches = [
  { name: "Yaoundé (Head Office)", slug: "yaounde-head-office", phone: "+237 670 000 000", region: "Centre", isHQ: true },
  { name: "Douala Bonaberi", slug: "douala-bonaberi", phone: "+237 670 000 001", region: "Littoral" },
  { name: "Douala Village", slug: "douala-village", phone: "+237 670 000 002", region: "Littoral" },
  { name: "Bafoussam", slug: "bafoussam", phone: "+237 670 000 003", region: "West" },
  { name: "Bamenda", slug: "bamenda", phone: "+237 670 000 004", region: "North-West" },
  { name: "Buea", slug: "buea", phone: "+237 670 000 005", region: "South-West" },
  { name: "Dschang", slug: "dschang", phone: "+237 670 000 006", region: "West" },
];

const productCategories = {
  Savings: [
    { icon: Smartphone, slug: "mobile-savings", title: "Mobile Savings", desc: "Save on the go with real-time tracking" },
    { icon: Wallet, slug: "term-deposit", title: "Term Deposit", desc: "Lock savings & earn higher interest" },
    { icon: Wallet, slug: "daily-savings", title: "Daily Savings (Tontine)", desc: "Doorstep collection & monthly payouts" },
    { icon: Heart, slug: "childrens-savings", title: "Children's Savings", desc: "Future planning for your kids" },
  ],
  Loans: [
    { icon: GraduationCap, slug: "school-fees-loan", title: "School Fees Loan", desc: "Support your child's education" },
    { icon: Home, slug: "housing-loan", title: "Plot / Housing Loan", desc: "Build or buy your dream home" },
    { icon: Tractor, slug: "agricultural-loan", title: "Agricultural Loan", desc: "Farming & equipment financing" },
    { icon: Briefcase, slug: "salary-advance", title: "Salary Advance", desc: "Get funds before payday" },
  ],
  "Transfers & Bills": [
    { icon: Send, slug: "western-union", title: "Western Union", desc: "Send money worldwide" },
    { icon: Smartphone, slug: "mobile-money", title: "Mobile Money", desc: "Orange Money / MTN MoMo transfers" },
    { icon: Zap, slug: "eneo-payment", title: "ENEO Bill Payment", desc: "Pay electricity bills instantly" },
    { icon: Droplets, slug: "camwater-payment", title: "CAMWATER Payment", desc: "Water bill payments" },
  ],
  "Special Accounts": [
    { icon: Users, slug: "group-savings", title: "Group Savings (Njangi)", desc: "Group account management" },
    { icon: GraduationCap, slug: "student-account", title: "Student Account", desc: "Special account for students" },
    { icon: Briefcase, slug: "business-account", title: "Business Account", desc: "Entrepreneurship support" },
    { icon: Shield, slug: "association-account", title: "Association Account", desc: "Organization fund management" },
  ],
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof typeof productCategories>("Savings");
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b-2 border-primary/10 shadow-sm">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MMOCCUL Logo" className="h-12 md:h-14 w-auto" />
          <span className="hidden lg:block font-heading font-bold text-primary text-sm leading-tight">
            MMOCKMBIE<br />CREDIT UNION
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((l) =>
            l.label === "Services" ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 text-foreground hover:bg-secondary`}
                >
                  {l.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-xl border border-border min-w-[900px] py-3 px-4 animate-fade-in grid grid-cols-4 gap-4">
                    {Object.entries(productCategories).map(([category, products]) => (
                      <div key={category}>
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{category}</h3>
                        <div className="space-y-2">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              to={`/products/${product.slug}`}
                              className="group block p-2 rounded-lg hover:bg-primary/5 transition-colors"
                            >
                              <div className="flex items-start gap-2">
                                <product.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.title}</p>
                                  <p className="text-xs text-muted-foreground truncate">{product.desc}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {category === "Savings" && (
                          <Link
                            to="/products"
                            className="mt-3 pt-3 border-t border-border text-xs font-medium text-primary hover:text-primary/80 transition-colors block"
                          >
                            View All Services →
                          </Link>
                        )}
                      </div>
                    ))}
                    <div className="col-span-4">
                      <div className="pt-3 border-t border-border flex gap-2">
                        <Link
                          to="/products"
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
                        >
                          Browse All Products
                        </Link>
                        <Link
                          to="/loan-calculator"
                          className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium text-center hover:bg-primary/5 transition-colors"
                        >
                          Loan Calculator
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : l.label === "Branches" ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setBranchesDropdownOpen(true)}
                onMouseLeave={() => setBranchesDropdownOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 text-foreground hover:bg-secondary`}
                >
                  {l.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${branchesDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {branchesDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-card rounded-lg shadow-xl border border-border min-w-[320px] py-2 animate-fade-in">
                    {branches.map((branch) => (
                      <Link
                        key={branch.slug}
                        to={`/branches/${branch.slug}`}
                        className="block px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border/50 last:border-b-0 group"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{branch.name}</p>
                              {branch.isHQ && <Star className="w-3.5 h-3.5 text-accent flex-shrink-0" />}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {branch.region}
                            </div>
                          </div>
                          <a
                            href={`tel:${branch.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                            title={branch.phone}
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-border px-4 mt-2">
                      <Link
                        to="/branches"
                        className="block w-full px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium text-center hover:bg-primary/90 transition-colors"
                      >
                        View All Branches
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to!}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/237670000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 btn-gold text-sm py-2 px-4"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            className="xl:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-card border-t border-border animate-fade-in">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <div key={l.label}>
                  <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{l.label}</p>
                  <div className="ml-4">
                    {Object.entries(productCategories).map(([category, products]) => (
                      <div key={category} className="mb-4">
                        <p className="px-3 py-2 text-xs font-bold text-primary uppercase tracking-wider">{category}</p>
                        <div className="space-y-1">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              to={`/products/${product.slug}`}
                              onClick={() => setOpen(false)}
                              className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary block"
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      to="/products"
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/5 block"
                    >
                      View All Products
                    </Link>
                    <Link
                      to="/loan-calculator"
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/5 block"
                    >
                      Loan Calculator
                    </Link>
                  </div>
                </div>
              ) : l.label === "Branches" ? (
                <div key={l.label}>
                  <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{l.label}</p>
                  <div className="ml-4 space-y-2">
                    {branches.map((branch) => (
                      <Link
                        key={branch.slug}
                        to={`/branches/${branch.slug}`}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary block"
                      >
                        <div className="flex items-center gap-2">
                          <span>{branch.name}</span>
                          {branch.isHQ && <Star className="w-3 h-3 text-accent flex-shrink-0" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{branch.region}</p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/branches"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/5 block ml-4 mt-2"
                  >
                    View All Branches
                  </Link>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to!}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/237670000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center text-sm mt-2"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
