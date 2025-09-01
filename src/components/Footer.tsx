const Footer = () => {
  const footerLinks = {
    "Products": ["Home Appliances", "Electronics", "Kitchen", "Mobile Devices"],
    "Support": ["Customer Service", "Warranty", "Installation", "Repairs"],
    "Company": ["About Us", "Careers", "Press", "Contact"]
  };

  return (
    <footer className="bg-near-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">E</span>
              </div>
              <span className="ml-3 text-xl font-bold">ElectroShop</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your trusted partner for premium Italian quality appliances and electronics.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ElectroShop. All rights reserved. | Trusted Italian Quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;