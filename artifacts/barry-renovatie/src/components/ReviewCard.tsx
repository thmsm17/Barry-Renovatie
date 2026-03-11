import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  date: string;
  text: string;
  rating?: number;
  delay?: number;
}

export function ReviewCard({ name, date, text, rating = 5, delay = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-border/50 flex flex-col h-full hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
              } transition-transform group-hover:scale-110 duration-200 delay-${i * 100}`}
            />
          ))}
        </div>
        <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
          <CheckCircle2 className="w-3 h-3 mr-1" />
          Geverifieerd
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base italic mb-6">
        "{text}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-display font-bold shadow-inner">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="font-bold text-foreground text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
    </motion.div>
  );
}
