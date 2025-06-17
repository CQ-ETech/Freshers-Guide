import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-xl text-white py-16 border-t border-[#FFBB00]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
        {/* About Section */}
        <div className="flex flex-col items-start space-y-4 md:col-span-2">
          <div className="flex items-center space-x-3 mb-2">
            <Image src="/android-chrome-192x192.png" alt="CQ Logo" width={60} height={60} className="bg-white rounded-full p-1 shadow-lg" />
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-[#FFBB00]">
              Summer Guide
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#FFEA00]">
            The official soft skills and personality development society of IIT Kharagpur. Empowering students to make the most of their summer and career journey.
          </p>
          <div className="mt-4">
            <span className="block text-sm text-gray-300 mb-1">Address:</span>
            <span className="text-[#FFEA00] text-sm">IIT Kharagpur, West Bengal, India - 721302</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-[#FFBB00]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#FFEA00] transition text-base">Home</a></li>
            <li><a href="/timeline" className="hover:text-[#FFEA00] transition text-base">Timeline</a></li>
            <li><a href="/profiles" className="hover:text-[#FFEA00] transition text-base">Profiles</a></li>
            <li><a href="/resources" className="hover:text-[#FFEA00] transition text-base">Resources</a></li>
            <li><a href="/about" className="hover:text-[#FFEA00] transition text-base">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#FFEA00] transition text-base">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-[#FFBB00]">
            Contact
          </h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3"><FaEnvelope className="text-[#FFEA00] text-lg" /> <a href="mailto:summerguide@kgp.com" className="hover:text-[#FFEA00] transition">summerguide@kgp.com</a></li>
            <li className="flex items-center gap-3"><FaPhone className="text-[#FFEA00] text-lg" /> <a href="tel:+911234567890" className="hover:text-[#FFEA00] transition">+91 12345 67890</a></li>
          </ul>
          <div className="mt-4">
            <span className="block text-sm text-gray-300 mb-1">Support Hours:</span>
            <span className="text-[#FFEA00] text-sm">Mon-Fri: 10am - 6pm</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-[#FFBB00]">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEA00] transition"><FaLinkedin /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEA00] transition"><FaTwitter /></a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEA00] transition"><FaGithub /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEA00] transition"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEA00] transition"><FaFacebook /></a>
          </div>
          <div>
            <span className="block text-sm text-gray-300 mb-1">Stay updated with our latest news and events.</span>
            <a href="/newsletter" className="inline-block mt-2 px-4 py-2 rounded-full bg-[#FFEA00] text-[#181818] font-semibold shadow hover:bg-[#FFBB00] transition">Join Newsletter</a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-base border-t border-[#FFBB00]/30 pt-6">
        <p className="text-[#FFEA00] hover:text-white transition">
          &copy; 2023 Summer Guide. All rights reserved.
        </p>
        <p className="mt-2 text-[#FFEA00] hover:text-white transition">
          Designed with ❤️ by the Summer Guide Team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;