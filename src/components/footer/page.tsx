const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#232323] via-[#292929] to-[#181818] text-white py-16 border-t border-[#FFBB00]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="flex items-center space-x-3">
          <img src="/android-chrome-192x192.png" alt="CQ Logo" width={50} height={50} />
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFEA00]">
              Summer Guide
            </h2>
            <p className="text-base leading-relaxed text-[#FFBB00]">
              The official soft skills and personality development society of IIT Kharagpur.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFEA00]">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/timeline" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Timeline
              </a>
            </li>
            <li>
              <a href="/profiles" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Profiles
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFEA00]">
            Follow Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEA00] transition duration-300 text-lg"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEA00] transition duration-300 text-lg"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEA00] transition duration-300 text-lg"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEA00] transition duration-300 text-lg"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEA00] transition duration-300 text-lg"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFEA00]">
            Explore
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/careers" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#FFEA00] transition duration-300 text-lg">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-base border-t border-[#FFBB00]/30 pt-6">
        <p className="text-[#FFEA00] hover:text-white transition duration-300">
          &copy; 2023 Summer Guide. All rights reserved.
        </p>
        <p className="mt-2 text-[#FFEA00] hover:text-white transition duration-300">
          Designed with ❤️ by the Summer Guide Team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;