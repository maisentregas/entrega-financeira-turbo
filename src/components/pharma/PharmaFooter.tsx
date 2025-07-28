import React from "react";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram } from "lucide-react";
import maisentregasLogo from "@/assets/maisentregas-logo-improved.png";

export const PharmaFooter = () => {
  return (
    <footer className="bg-pharma-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-white rounded-lg p-3 inline-block">
                <img 
                  src={maisentregasLogo} 
                  alt="MaisEntregas" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Plataforma completa de gestão de entregas para farmácias. 
                Automatize seu delivery e transforme sua operação logística.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Links Úteis</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white/70 hover:text-pharma-green transition-colors text-sm">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-white/70 hover:text-pharma-green transition-colors text-sm">
                  Termos de Uso
                </a>
                <a href="#" className="block text-white/70 hover:text-pharma-green transition-colors text-sm">
                  Suporte
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pharma-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pharma-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20 mb-6" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2025 MaisEntregas.com – Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};