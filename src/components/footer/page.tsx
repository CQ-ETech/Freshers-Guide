import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import Image from 'next/image';
import LOGO from './../../public/LOGO.png';

const Footer = () => {
  return (
    <footer className="bg-none text-white py-8 sm:py-12 border-t-2 border-[#FFD600]/40 shadow-2xl relative z-[20]">
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-8 lg:gap-x-12">
        {/* About Section */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4 lg:col-span-1">
          <div className="flex items-center space-x-3 mb-2">
            <Image src="/LOGO.png" alt="CQ Logo" width={60} height={60} className="rounded-full p-1 shadow-lg" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFD600]">
              COMMUNIQUÉ
            </h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-[#FFF8E4]">
            The official soft skills and personality development society of IIT Kharagpur. Empowering students to make the most of their summer and career journey.
          </p>
          <div className="mt-2 sm:mt-4">
            <span className="block text-xs text-[#FFD600] mb-1">Address:</span>
            <span className="text-[#FFF8E4] text-xs">IIT Kharagpur, West Bengal, India - 721302</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-[#FFD600]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">Home</a></li>
            <li><a href="/timeline" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">Timeline</a></li>
            <li><a href="/profiles" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">Profiles</a></li>
            <li><a href="/resources" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">Resources</a></li>
            <li><a href="/about-us" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">About Us</a></li>
            <li><a href="/contact" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-xs sm:text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-[#FFD600]">
            Contact
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-center gap-3"><FaEnvelope className="text-[#FFD600] text-base" /> <a href="mailto:cq@kgp.com" className="text-[#FFF8E4] hover:text-[#FFD600] transition">cq.iitkharagpur@gmail.com</a></li>
            <li className="flex items-center gap-3"><FaPhone className="text-[#FFD600] text-base" /> <a href="tel:+911234567890" className="text-[#FFF8E4] hover:text-[#FFD600] transition">+91 12345 67890</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-[#FFD600]">
            Follow Us
          </h3>
          <div className="flex gap-4 text-lg sm:text-xl mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaLinkedin /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaFacebook /></a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><SiMedium /></a>
          </div>
          <span className="block text-xs text-[#FFF8E4] mb-1">Stay updated with our latest news and events.</span>
        </div>
      </div>
      <div className="relative z-[2] mt-8 sm:mt-12 text-center text-xs sm:text-base border-t border-[#FFD600]/40 pt-4 sm:pt-6 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-[#FFF8E4] hover:text-white transition">
          &copy; 2024 Freshers Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;