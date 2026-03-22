import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ZoomIn } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import familyImg from "@/assets/family-banking.jpg";
import farmerImg from "@/assets/farmer-success.jpg";
import studentImg from "@/assets/student-mobile.jpg";
import businessImg from "@/assets/business-woman.jpg";
import bankTellerImg from "@/assets/bank-teller.jpg";
import branchImg from "@/assets/branch-exterior.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import mobileImg from "@/assets/mobile-banking.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import directorImg from "@/assets/director.jpg";
import teamImg from "@/assets/team-meeting.jpg";

const categories = ["All", "Branches", "Community", "Team", "Events", "Members"] as const;

const images = [
  { src: heroImg, title: "Yaoundé Head Office", category: "Branches", desc: "Our flagship branch and administrative headquarters in Carrefour Nlongkak, Yaoundé" },
  { src: branchImg, title: "Modern Branch Design", category: "Branches", desc: "State-of-the-art branch architecture with customer-friendly open-plan design" },
  { src: communityImg, title: "Annual General Meeting 2024", category: "Community", desc: "Members gathered for the 2024 AGM — our largest gathering with over 500 attendees" },
  { src: awardImg, title: "VIIMMA Award Ceremony 2021", category: "Events", desc: "Leadership team receiving the prestigious VIIMMA Award for microfinance excellence" },
  { src: teamImg, title: "Leadership Retreat 2023", category: "Team", desc: "Our management team during the annual strategic planning retreat in Kribi" },
  { src: bankTellerImg, title: "Customer Service Excellence", category: "Team", desc: "Our dedicated staff providing personalized service at the Douala branch" },
  { src: entrepreneurImg, title: "Success Story: Comfort Ndi", category: "Members", desc: "Comfort Ndi grew her boutique business with MMOCCUL business loans" },
  { src: farmerImg, title: "Agricultural Impact", category: "Members", desc: "Papa Amadou's farm in Bafoussam — transformed with an MMOCCUL agricultural loan" },
  { src: studentImg, title: "Student Banking", category: "Members", desc: "University students enjoying our zero-minimum-balance student accounts" },
  { src: businessImg, title: "Women in Business", category: "Members", desc: "Marie Ngono expanded from 1 to 3 shop locations with MMOCCUL financing" },
  { src: mobileImg, title: "Mobile Banking Launch", category: "Events", desc: "Launch of our mobile banking app — bringing banking to your fingertips" },
  { src: familyImg, title: "Family Financial Planning", category: "Community", desc: "Financial literacy workshop for families at the Bafoussam community center" },
  { src: directorImg, title: "Managing Director", category: "Team", desc: "Our visionary leader who founded MMOCCUL in 2016" },
];

const Gallery = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter(img => img.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="section-container text-center relative z-10">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
            Life at MMOCCUL
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Photo <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg animate-fade-up-delay-1">
            A visual journey through our branches, community events, team activities, and member success stories across Cameroon.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-secondary py-6 border-b border-border sticky top-16 md:top-20 z-30">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.title}-${active}`} delay={i * 50}>
                <div
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
                  onClick={() => setLightbox(i)}
                >
                  <img src={img.src} alt={img.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <ZoomIn className="w-6 h-6 text-primary-foreground absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-heading font-semibold text-primary-foreground text-sm">{img.title}</h3>
                    <p className="text-primary-foreground/70 text-xs mt-0.5">{img.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="w-full max-h-[70vh] object-contain rounded-xl" />
            <div className="mt-4 text-center">
              <h3 className="font-heading font-bold text-primary-foreground text-xl">{filtered[lightbox].title}</h3>
              <p className="text-primary-foreground/60 text-sm mt-1">{filtered[lightbox].desc}</p>
              <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mt-3">{filtered[lightbox].category}</span>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                disabled={lightbox === 0}
                className="px-6 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm hover:bg-primary-foreground/20 disabled:opacity-30"
              >
                Previous
              </button>
              <button
                onClick={() => setLightbox(Math.min(filtered.length - 1, lightbox + 1))}
                disabled={lightbox === filtered.length - 1}
                className="px-6 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground text-sm hover:bg-primary-foreground/20 disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
