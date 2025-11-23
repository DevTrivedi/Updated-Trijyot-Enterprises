import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CountryCardProps {
  name: string;
  flag: string;
  description: string;
  link: string;
  image: string;
}

const CountryCard = ({ name, flag, description, link, image }: CountryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} operations`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{flag}</span>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
        </div>
        <p className="text-white/90 mb-4">{description}</p>
        <Link to={link}>
          <Button variant="secondary" className="group/btn">
            Explore {name}
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
