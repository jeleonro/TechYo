import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Preguntas', href: '#faq' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-16 h-16 items-center justify-between flex">
        <a href="#" className="font-extrabold text-4xl font-rubik text-blue-950 flex gap-1.5">
          <img className='w-15' src="/fondo.png" alt="" />
          TechYo
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            
            <a key={link.href}
              href={link.href}
              className="text-sm font-rubik text-gray-800 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <a  href="#cta"
            className="bg-blue-600 font-rubik text-gray-800 text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contactar
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          {links.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 py-1"
            >
              {link.label}
            </a>
          ))}
          
          <a  href="#cta"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg text-center"
          >
            Contactar
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;