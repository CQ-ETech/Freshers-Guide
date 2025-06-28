import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-none text-white py-16 border-t-2 border-[#FFD600]/40 shadow-2xl relative z-[20] before:content-[''] before:absolute before:inset-0 before:bg-none before:z-[-1]">
      <div className="relative z-[2] max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 bg-none">
        {/* About Section */}
        <div className="flex flex-col items-start space-y-4 md:col-span-2">
          <div className="flex items-center space-x-3 mb-2">
            <Image src="/android-chrome-192x192.png" alt="CQ Logo" width={60} height={60} className="bg-white rounded-full p-1 shadow-lg" />
            <h2 className="text-4xl font-extrabold text-[#FFD600]">
              Freshers Guide
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#FFF8E4]">
            The official soft skills and personality development society of IIT Kharagpur. Empowering students to make the most of their summer and career journey.
          </p>
          <div className="mt-4">
            <span className="block text-sm text-[#FFD600] mb-1">Address:</span>
            <span className="text-[#FFF8E4] text-sm">IIT Kharagpur, West Bengal, India - 721302</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFD600]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">Home</a></li>
            <li><a href="/timeline" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">Timeline</a></li>
            <li><a href="/profiles" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">Profiles</a></li>
            <li><a href="/resources" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">Resources</a></li>
            <li><a href="/about" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">About Us</a></li>
            <li><a href="/contact" className="text-[#FFF8E4] hover:text-[#FFD600] transition text-base">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFD600]">
            Contact
          </h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3"><FaEnvelope className="text-[#FFD600] text-lg" /> <a href="mailto:cq@kgp.com" className="text-[#FFF8E4] hover:text-[#FFD600] transition">cq.iitkharagpur@gmail.com</a></li>
            <li className="flex items-center gap-3"><FaPhone className="text-[#FFD600] text-lg" /> <a href="tel:+911234567890" className="text-[#FFF8E4] hover:text-[#FFD600] transition">+91 12345 67890</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFD600]">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaLinkedin /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><FaFacebook /></a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E4] hover:text-[#FFD600] transition"><SiMedium /></a>
          </div>
          <span className="block text-sm text-[#FFF8E4] mb-1">Stay updated with our latest news and events.</span>
        </div>
      </div>
      <div className="relative z-[2] mt-12 text-center text-base border-t border-[#FFD600]/40 pt-6 max-w-7xl mx-auto px-6 bg-[#181818]">
        <p className="text-[#FFF8E4] hover:text-white transition">
          &copy; 2024 Freshers Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;