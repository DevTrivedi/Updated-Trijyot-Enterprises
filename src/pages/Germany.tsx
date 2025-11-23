import { Helmet } from "react-helmet";
import { Package, ShoppingCart, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import germanyImage from "@/assets/germany-bg.jpg";

const Germany = () => {
  const exportProducts = [
    "Automotive Parts and Components",
    "Industrial Machinery",
    "Precision Engineering Tools",
    "Medical Equipment",
    "Pharmaceuticals",
    "Chemical Products",
    "Electronic Components",
    "Advanced Manufacturing Equipment",
  ];

  const importProducts = [
    "Raw Materials",
    "Agricultural Products",
    "Textiles and Fabrics",
    "Consumer Electronics",
    "Specialty Food Items",
    "Handicrafts",
    "Organic Products",
    "Traditional Goods",
  ];

  return (
    <>
      <Helmet>
        <title>Germany Operations - Trijyot Enterprises</title>
        <meta
          name="description"
          content="Explore Trijyot Enterprises' import and export services in Germany. Precision-engineered products and European market access."
        />
      </Helmet>

      <>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={germanyImage}
              alt="Germany operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="text-6xl mb-4">🇩🇪</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Germany Operations</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your gateway to European markets with precision-engineered German quality
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Germany Operations</h2>
              <p className="text-lg text-muted-foreground">
                Germany represents our European hub, known for engineering excellence and industrial
                innovation. We facilitate trade of high-quality German products worldwide while also
                importing diverse goods into the European market. Our operations ensure compliance
                with EU standards and seamless logistics across the continent.
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Export Products */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Products from Germany</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Premium German products available for export to global markets
                </p>
                <ul className="space-y-3">
                  {exportProducts.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Import Products */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <ShoppingCart className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Products to Germany</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  International products we import and distribute across Germany and Europe
                </p>
                <ul className="space-y-3">
                  {importProducts.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-medium">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your import/export requirements for Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@trijyotenterprises.in">
                <Button variant="secondary" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </a>
              <a
                href="https://wa.me/919898047700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Form
                </Button>
              </a>
            </div>
          </div>
        </section>

      </>
    </>
  );
};

export default Germany;
