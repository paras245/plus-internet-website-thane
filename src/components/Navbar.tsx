import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Internet Plans', path: '/plans' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Partners', path: '/partners' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const generalWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to know more about your internet and networking services in Thane."
  );

  // Scroll to top and navigate home on click of Plus Internet
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname === '/') {
      e.preventDefault();
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E8EC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Takes to home AND scrolls to top) */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-baseline gap-1 text-2xl font-extrabold tracking-tight text-[#24252B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity cursor-pointer select-none"
            title="Plus Internet - Home (Top)"
          >
            <span>Plus</span>
            <span className="text-[#F52619]">Internet</span>
          </Link>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-[#24252B]/80">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                    isActive
                      ? 'text-[#F52619] font-semibold border-b-2 border-[#F52619]'
                      : 'text-[#24252B]/80 hover:text-[#24252B]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (WhatsApp CTA with official icon) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F52619] hover:bg-[#D91F17] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover-red-glow whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#24252B] hover:bg-[#F7F8FA] border border-[#E8E8EC] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 z-50 bg-[#140C1D]/40 backdrop-blur-sm xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-white border-b border-[#E8E8EC] shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#737782] tracking-wider uppercase pb-2 border-b border-[#E8E8EC]">
                Navigation
              </div>
              <div className="py-2 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F7F8FA] text-[#F52619] font-bold'
                          : 'text-[#24252B] hover:bg-[#F7F8FA]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E8E8EC] space-y-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-4 rounded-xl text-center shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center text-xs text-[#737782]">
                Serving Thane, Maharashtra · Call: {COMPANY_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
