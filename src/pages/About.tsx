import { Helmet } from "react-helmet";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To facilitate seamless international trade by connecting businesses across India, Germany, and Canada with quality products and reliable services.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We ensure every product meets international standards and complies with all regulations, maintaining the highest quality throughout our supply chain.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Building lasting relationships through transparent communication, personalized service, and unwavering commitment to our clients' success.",
    },
    {
      icon: TrendingUp,
      title: "Global Network",
      description:
        "Leveraging our extensive network across three continents to provide efficient logistics and competitive pricing for all trade operations.",
    },
  ];

  const whyChooseUs = [
    "Registered and compliant import/export business in India",
    "Established presence in three key markets: India, Germany, and Canada",
    "Deep understanding of international trade regulations and customs",
    "Reliable and timely delivery with complete documentation",
    "Quality-assured products meeting international standards",
    "Competitive pricing through our global supplier network",
    "Personalized customer service and support",
    "Transparent business practices and ethical trading",
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Trijyot Enterprises</title>
        <meta
          name="description"
          content="Learn about Trijyot Enterprises - your trusted partner for import and export services across India, Germany, and Canada."
        />
      </Helmet>

      <>

        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Trijyot Enterprises</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connecting Markets. Delivering Quality. Building Trust.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Trijyot Enterprises is a registered import and export company based in India,
                  specializing in facilitating international trade across three dynamic markets:
                  India, Germany, and Canada. Our journey began with a vision to bridge geographical
                  boundaries and connect businesses with quality products and reliable services.
                </p>
                <p>
                  With years of experience in international trade, we have built strong relationships
                  with suppliers and clients worldwide. Our expertise spans multiple product categories,
                  from traditional Indian goods to precision-engineered German products and Canadian
                  natural resources.
                </p>
                <p>
                  At Trijyot Enterprises, we understand that successful international trade requires
                  more than just moving products across borders. It demands deep market knowledge,
                  regulatory compliance, quality assurance, and most importantly, trust. We pride
                  ourselves on being a partner you can rely on for all your import and export needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values & Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-card"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <p className="font-medium">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed in international trade
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-white text-primary hover:bg-white/90 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </a>
          </div>
        </section>

      </>
    </>
  );
};

export default About;
