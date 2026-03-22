import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/m logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Pre-footer CTA */}
      <div className="bg-accent">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-accent-foreground text-lg">Ready to Start Your Financial Journey?</h3>
            <p className="text-accent-foreground/70 text-sm">Join 26,000+ members who trust MMOCCUL.</p>
          </div>
          <Link to="/membership" className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
            Open Account Today
          </Link>
        </div>
      </div>

      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="MMOCCUL" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              <span className="text-gradient-gold font-heading font-semibold">"Where Dreams Become Reality"</span>
              <br /><br />
              Over 26,000 members since 2016. Save Regularly, Borrow Wisely, Repay Promptly.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: "f", href: "#" },
                { label: "in", href: "#" },
                { label: "ig", href: "#" },
                { label: "W", href: "https://wa.me/237670000000" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
              Quick Links
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products & Services" },
                { to: "/loan-calculator", label: "Loan Calculator" },
                { to: "/membership", label: "Become a Member" },
                { to: "/branches", label: "Our Branches" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "News & Blog" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Our Branches</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              {["Yaoundé (HQ)", "Douala Bonaberi", "Douala Village", "Bafoussam", "Bamenda", "Buea", "Dschang"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +237 670 000 000
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                info@mmoccul.com
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Carrefour Nlongkak,<br />Yaoundé, Cameroon
              </li>
            </ul>

            <div className="mt-6 bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60 font-medium">Working Hours</p>
              <p className="text-sm mt-1">Mon–Fri: 7:30 AM – 4:00 PM</p>
              <p className="text-sm">Saturday: 8:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p>Regulated by COBAC (N° D-2021/317) & MINFI (0000381)</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <p>© 2026 MMOCKMBIE Credit Union Cooperative Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
