const Footer = () => {
  return (
    <footer
      className="footer py-4"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #121212 100%)",
        borderTop: "1px solid #333",
        color: "#e0e0e0",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} <strong>Ghost-Protocol</strong>. All
              rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <nav className="flex gap-4" aria-label="Footer navigation">
              <a
                href="/about"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/privacy"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-sm font-medium hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </nav>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src="/Facebook_icon.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img src="/X_icon.svg" alt="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src="/Instagram_logo_2016.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
