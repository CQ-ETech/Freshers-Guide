const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            🌟 Summer Guide
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Your ultimate guide to summer opportunities and career paths. Explore resources, timelines, and profiles to make the most of your summer.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-cyan-400 transition duration-300 text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/timeline" className="hover:text-cyan-400 transition duration-300 text-lg">
                Timeline
              </a>
            </li>
            <li>
              <a href="/profiles" className="hover:text-cyan-400 transition duration-300 text-lg">
                Profiles
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-cyan-400 transition duration-300 text-lg">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition duration-300 text-lg">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition duration-300 text-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
            Follow Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 text-lg"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 text-lg"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 text-lg"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 text-lg"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 text-lg"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Explore
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/careers" className="hover:text-yellow-400 transition duration-300 text-lg">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-400 transition duration-300 text-lg">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-yellow-400 transition duration-300 text-lg">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-yellow-400 transition duration-300 text-lg">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-yellow-400 transition duration-300 text-lg">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-base border-t border-gray-700 pt-6">
        <p className="text-gray-400 hover:text-white transition duration-300">
          &copy; 2023 Summer Guide. All rights reserved.
        </p>
        <p className="mt-2 text-gray-400 hover:text-white transition duration-300">
          Designed with ❤️ by the Summer Guide Team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;