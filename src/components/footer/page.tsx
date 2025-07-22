import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/communiqu%C3%A9-iit-kharagpur/posts/?feedView=all', label: 'LinkedIn', icon: <FaLinkedin /> },
    { href: 'https://www.instagram.com/communique_iitkgp/', label: 'Instagram', icon: <FaInstagram /> },
    { href: 'https://www.facebook.com/communique.iitkgp/', label: 'Facebook', icon: <FaFacebook /> },
    { href: 'https://medium.com/@cq-iitkharagpur', label: 'Medium', icon: <SiMedium /> },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/profiles', label: 'Profiles' },
    { href: '/resources', label: 'Resources' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <footer className="bg-gray-900/50 text-white py-10 sm:py-14 border-t-2 border-yellow-400/30 shadow-2xl relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-8 lg:gap-x-12">
          
          {/* About Section */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Image 
                src="/LOGO.png" 
                alt="CQ Logo" 
                width={50} 
                height={50} 
                className="rounded-full" 
              />
              <h2 className="text-xl sm:text-2xl font-extrabold text-yellow-400">
                COMMUNIQUÉ
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-yellow-50">
              The official soft skills and personality development society of IIT Kharagpur. Empowering freshers to make the most of their life in KGP..
            </p>
            <div>
              <span className="block text-xs font-semibold text-yellow-400 mb-1">Address:</span>
              <span className="text-yellow-100 text-xs">IIT Kharagpur, West Bengal, India - 721302</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-yellow-100 hover:text-white transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 text-base" /> 
                <a href="mailto:cq.iitkharagpur@gmail.com" className="text-yellow-100 hover:text-white transition">
                  cq.iitkharagpur@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 text-base" /> 
                <a href="tel:+911234567890" className="text-yellow-100 hover:text-white transition">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex gap-5 text-xl mb-4">
              {socialLinks.map(social => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${social.label}`}
                  className="text-yellow-100 hover:text-white hover:scale-110 transition-transform duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-yellow-100 text-center sm:text-left">Stay updated with our latest news and events.</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 sm:mt-12 text-center text-sm border-t border-yellow-400/30 pt-6">
          <p className="text-yellow-100/80 hover:text-white transition">
            &copy; {currentYear} Freshers Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;