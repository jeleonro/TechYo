import { Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg mb-1 font-orbitron">TechYo</p>
          <p className="text-sm">
            Páginas web y automatizaciones para tu negocio.
          </p>
        </div>

        <div className="flex gap-6">
          
          <a  href="mailto:tu@email.com"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <Mail size={16} />
            TechYo@gmail.com
          </a>
          
           <a href="https://wa.me/51908556397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            
            <FaWhatsapp size={16}/>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs">
        © {new Date().getFullYear()} TechYo. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;