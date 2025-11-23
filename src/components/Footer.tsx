import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "India", path: "/india" },
    { name: "Germany", path: "/germany" },
    { name: "Canada", path: "/canada" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Trijyot Enterprises</h3>
            <p className="text-primary-foreground/80 mb-4">
              Connecting Markets. Delivering Quality.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Registered Import & Export business in India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@trijyotenterprises.in"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                info@trijyotenterprises.in
              </a>
              <a
                href="https://wa.me/919898047700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                +91 98980 47700
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Trijyot Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-2">
            Trijyot Enterprises is a registered Import & Export business in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
