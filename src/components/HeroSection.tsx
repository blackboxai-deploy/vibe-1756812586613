"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "2.500+", label: "Crianças Atendidas" },
    { number: "15", label: "Anos de História" },
    { number: "50+", label: "Voluntários Ativos" },
    { number: "8", label: "Programas Sociais" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transformando
                <span className="text-blue-600"> Vidas </span>
                através da
                <span className="text-orange-500"> Educação</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                A SEMA dedica-se ao desenvolvimento integral de crianças e jovens em situação de vulnerabilidade social, 
                oferecendo educação de qualidade, cultura, esporte e apoio psicossocial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#donate")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Faça uma Doação
              </Button>
              <Button 
                onClick={() => scrollToSection("#volunteer")}
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Seja Voluntário
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db34cd2d-6732-43fd-9b8d-032045eff030.png"
                alt="Crianças estudando em ambiente educativo acolhedor da SEMA"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <Card className="absolute -top-6 -left-6 bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Educação</div>
                      <div className="text-sm text-gray-600">Complementar</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-6 -right-6 bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xl">❤️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Cuidado</div>
                      <div className="text-sm text-gray-600">Integral</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 to-purple-400/10 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}