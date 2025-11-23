import { Helmet } from "react-helmet";
import CountryCard from "@/components/CountryCard";
import { Globe, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import indiaImage from "@/assets/india-bg.jpg";
import germanyImage from "@/assets/germany-bg.jpg";
import canadaImage from "@/assets/canada-bg.jpg";
import { useRef } from "react";

const Index = () => {
  const countries = [
    {
      name: "India",
      flag: "🇮🇳",
      description: "Source quality products and expand your market reach across India",
      link: "/india",
      image: indiaImage,
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      description: "Access European markets with precision-engineered German products",
      link: "/germany",
      image: germanyImage,
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description: "Connect with North American markets through Canadian trade excellence",
      link: "/canada",
      image: canadaImage,
    },
  ];

  const globalOperationsRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Seamless operations across India, Germany, and Canada",
    },
    {
      icon: TrendingUp,
      title: "Quality Assured",
      description: "Premium products meeting international standards",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Timely delivery with complete compliance and documentation",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Trijyot Enterprises - Import & Export Solutions</title>
        <meta
          name="description"
          content="Trijyot Enterprises provides reliable import and export services across India, Germany, and Canada. Connecting markets, delivering quality."
        />
      </Helmet>

      <>

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Global trade and logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Connecting Markets. Delivering Quality.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Your trusted partner for import and export services across India, Germany, and Canada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a href="#global-operations"> */}
              <button
                onClick={() =>
                  globalOperationsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#a5810b" }}>
                Get Started
              </button>
              {/* </a> */}
              <a href="/about">
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md font-semibold transition-all duration-300 border border-white/30">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section ref={globalOperationsRef} className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Global Operations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our services and product offerings in each country
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {countries.map((country) => (
                <CountryCard key={country.name} {...country} />
              ))}
            </div>
          </div>
        </section>

      </>
    </>
  );
};

export default Index;
