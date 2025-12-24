import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LanguageSwitch } from '../ui/LanguageSwitch';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLogo = () => {
    switch (i18n.language) {
      case 'en': return '/BIOHEALTH-LOGO-LIGHT.svg';
      case 'ja': return '/BIOSALUD-JP-LIGHT.svg';
      default: return '/BIOSALUD-LOGO-LIGHT.svg';
    }
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-eras text-lg transition-colors duration-300 ${
      isActive 
        ? 'text-bio-amarillo font-bold' 
        : 'text-bio-verde hover:text-bio-amarillo'
    }`;

  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/about', label: t('navbar.about') },
    { path: '/program', label: t('navbar.program') },
    { path: '/calendar', label: t('navbar.calendar') },
    { path: '/shop', label: t('navbar.shop') },
    { path: '/blog', label: t('navbar.blog') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <nav className="bg-[#f8f9f3] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-24">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={getLogo()} alt="Biosalud" className="h-16 w-auto transition-all duration-300" />
          </NavLink>
        </div>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CONTROLES DERECHA (Solo Idioma y Menú Móvil) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
          
          {/* Menú Hamburguesa (Móvil) */}
          <button onClick={toggleMenu} className="lg:hidden text-bio-verde text-2xl focus:outline-none ml-2">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="lg:hidden bg-[#f8f9f3] border-t border-bio-verde/10 pb-6 shadow-lg">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `font-eras text-xl ${isActive ? 'text-bio-amarillo' : 'text-bio-verde'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
