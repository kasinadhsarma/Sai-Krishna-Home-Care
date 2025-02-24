import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Sai Krishna Home Care Services provides professional and reliable home care services with trained staff
              available 24/7 across India.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 79975 31777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">sainadh4335@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  Available across over India. 
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sai Krishna Home Care Services. All rights reserved.
          </p>
          <p className="text-primary font-medium mt-2">SERVICE WITH HUMANITY IS OUR MOTTO...</p>
        </div>
      </div>
    </footer>
  );
}
