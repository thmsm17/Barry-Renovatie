import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, imageSrc, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-lg shadow-black/5 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card to-transparent z-20" />
        
        <div className="absolute bottom-4 right-6 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 z-30">
          {icon}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow z-30 relative bg-card">
        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors duration-300 mt-auto w-fit"
        >
          Meer informatie <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
