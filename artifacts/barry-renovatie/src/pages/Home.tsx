import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Wrench, 
  ShowerHead, 
  Hammer, 
  Droplets,
  Star,
  CheckCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-accent-foreground shadow-md">
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h1 className="font-display font-bold text-lg leading-tight text-foreground">Barry Renovatie</h1>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">en Klussenbedrijf</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('over')} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Over ons</button>
              <button onClick={() => scrollTo('diensten')} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Diensten</button>
              <button onClick={() => scrollTo('reviews')} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Reviews</button>
              
              <a 
                href="tel:0640296668"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Bellen
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/50 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl"
          >
            <button onClick={() => scrollTo('over')} className="text-left py-2 font-semibold text-foreground border-b border-border/50">Over ons</button>
            <button onClick={() => scrollTo('diensten')} className="text-left py-2 font-semibold text-foreground border-b border-border/50">Diensten</button>
            <button onClick={() => scrollTo('reviews')} className="text-left py-2 font-semibold text-foreground border-b border-border/50">Reviews</button>
            <a 
              href="tel:0640296668"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-bold mt-2"
            >
              <Phone className="w-5 h-5" />
              Bel Direct: 06 40296668
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Moderne gerenoveerde badkamer" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8"
            >
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-semibold tracking-wide">5.0 Gemiddelde Beoordeling in Venlo</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 text-balance"
            >
              Uw specialist voor <span className="text-accent relative">
                badkamer renovaties
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span> en klussen.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
            >
              Barry Renovatie en Klussenbedrijf staat voor echt vakmanschap, duidelijke communicatie en betrouwbaarheid. Van complete badkamer tot huiskamer verbouwing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="tel:0640296668"
                className="flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent/20 hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Bel Nu: 06 40296668
              </a>
              <button 
                onClick={() => scrollTo('diensten')}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Bekijk Onze Diensten
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="over" className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-card rounded-2xl md:rounded-3xl shadow-xl shadow-black/5 border border-border/50 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Alles Volgens Afspraak</h3>
                <p className="text-sm text-muted-foreground">Betrouwbaar & stipt</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-6 md:pt-0 md:px-8">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">5.0 ★ (6 Reviews)</h3>
                <p className="text-sm text-muted-foreground">Uitstekend beoordeeld</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Gevestigd in Venlo</h3>
                <p className="text-sm text-muted-foreground">Regio Limburg & omstreken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-accent tracking-widest uppercase mb-3"
            >
              Onze Expertise
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            >
              Vakmanschap voor elke klus
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            <ServiceCard 
              title="Badkamer Renovatie"
              description="Complete renovatie van sloop tot installatie. Modern, secuur en top afgeleverd."
              icon={<ShowerHead />}
              imageSrc={`${import.meta.env.BASE_URL}images/service-bathroom.png`}
              delay={0}
            />
            <ServiceCard 
              title="Huiskamer Verbouwing"
              description="Transformatie van uw woonruimtes met hoogwaardige afwerking en oog voor detail."
              icon={<Hammer />}
              imageSrc={`${import.meta.env.BASE_URL}images/service-livingroom.png`}
              delay={0.1}
            />
            <ServiceCard 
              title="Klussen & Reparaties"
              description="Voor alle kleine en grote klussen in en rondom het huis. Geen klus is te veel."
              icon={<Wrench />}
              imageSrc={`${import.meta.env.BASE_URL}images/service-tools.png`}
              delay={0.2}
            />
            <ServiceCard 
              title="Sanitair Installatie"
              description="Vakkundige montage van leidingwerk, toiletten, wastafels en ander sanitair."
              icon={<Droplets />}
              imageSrc={`${import.meta.env.BASE_URL}images/service-plumbing.png`}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-accent tracking-widest uppercase mb-3"
              >
                Wat Klanten Zeggen
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
              >
                100% Tevreden Klanten
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg"
              >
                Wij zijn trots op onze 5.0 score op Google. Bekijk wat onze klanten ervaren hebben.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-card px-6 py-4 rounded-2xl border border-border/50 shadow-sm"
            >
              <div className="text-4xl font-display font-bold text-foreground">5,0</div>
              <div>
                <div className="flex text-accent mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Op basis van 6 reviews
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard 
              name="Lilianmarcel"
              date="2 maanden geleden"
              text="Super bedrijf. Niets is te veel. Zeer behulpzaam. Goed bedrijf. Vriendelijke mensen. Goed en uitstekend werk. Badkamer en huiskamer verbouwing gehad. Top afgeleverd. Iedereen aan te raden. Groetjes L &M"
              delay={0}
            />
            <ReviewCard 
              name="Susy H"
              date="11 maanden geleden"
              text="Top bedrijf! Complete badkamer renovatie laten doen. Werken secuur. Alles volgens afspraak en niks is teveel. Echte vakmanschap voor een goede prijs. Wij raden Barry iedereen aan!!"
              delay={0.1}
            />
            <ReviewCard 
              name="Familie Yildirim"
              date="5 maanden geleden"
              text="Een heel fijn bedrijf! Communicatie goed verlopen en de werkzaamheden top verricht. Niks op aan te merken enorm tevreden."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Klaar om uw project te starten?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-lg">
                Neem vrijblijvend contact op voor een offerte of bespreek uw wensen. We staan klaar om u te helpen met vakmanschap en betrouwbaarheid.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium mb-1">Bel ons direct</p>
                    <a href="tel:0640296668" className="text-xl font-bold hover:text-accent transition-colors">06 40296668</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium mb-1">Locatie</p>
                    <p className="font-semibold">Oleanderstraat 117</p>
                    <p className="text-sm text-primary-foreground/80">5925 EE Venlo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium mb-1">Openingstijden</p>
                    <p className="font-semibold text-emerald-400">Geopend <span className="text-primary-foreground/80 font-normal">⋅ Sluit om 21:00</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-10 text-foreground shadow-2xl relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-display font-bold mb-6">Neem Contact Op</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Naam</label>
                  <input 
                    type="text" 
                    placeholder="Uw naam" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    placeholder="Uw telefoonnummer" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bericht / Vraag</label>
                  <textarea 
                    rows={4}
                    placeholder="Hoe kunnen we u helpen?" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-2"
                >
                  Verstuur Aanvraag
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Of bel direct: <a href="tel:0640296668" className="font-bold text-primary hover:underline">06 40296668</a>
                </p>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-10 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-accent" />
            <span className="font-display font-bold text-foreground">Barry Renovatie en Klussenbedrijf</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Barry Renovatie en Klussenbedrijf. Alle rechten voorbehouden.</p>
            <p className="mt-1">KVK geregistreerd in Venlo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
