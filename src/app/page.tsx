"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProgramCard } from "@/components/ProgramCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

export default function Home() {
  const programs = [
    {
      title: "Educação Complementar",
      description: "Reforço escolar e atividades pedagógicas que complementam a educação formal, ajudando crianças e jovens a melhorar seu desempenho acadêmico.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ccedbfe-4e02-47cf-9a5f-1ab208211d63.png",
      imageAlt: "Crianças estudando em biblioteca com apoio pedagógico",
      age: "6-17 anos",
      participants: "200 alunos",
      features: [
        "Aulas de reforço em português e matemática",
        "Apoio pedagógico individualizado",
        "Atividades lúdico-educativas",
        "Acompanhamento do desempenho escolar"
      ],
      color: "blue" as const,
    },
    {
      title: "Cultura e Arte",
      description: "Oficinas de música, dança, teatro e artes visuais que desenvolvem talentos e ampliam horizontes culturais dos participantes.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3c4da4a-5c33-4e82-b8c9-6f65b972ebd5.png",
      imageAlt: "Jovens participando de atividades culturais e musicais",
      age: "8-18 anos",
      participants: "150 alunos",
      features: [
        "Aulas de música e instrumentos",
        "Oficinas de dança e teatro",
        "Artes visuais e artesanato",
        "Apresentações e espetáculos"
      ],
      color: "purple" as const,
    },
    {
      title: "Esporte e Recreação",
      description: "Práticas esportivas e atividades recreativas que promovem saúde física e mental, além de valores como trabalho em equipe.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f8578f0-7b3e-456a-ad34-44d7bc95eafb.png",
      imageAlt: "Crianças praticando esportes em quadra da SEMA",
      age: "5-16 anos",
      participants: "180 alunos",
      features: [
        "Futebol, vôlei e basquete",
        "Atividades recreativas e jogos",
        "Educação física adaptada",
        "Competições e torneios internos"
      ],
      color: "green" as const,
    },
    {
      title: "Apoio Psicossocial",
      description: "Atendimento psicológico e social para crianças, jovens e famílias, promovendo bem-estar emocional e fortalecimento de vínculos.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0bb56670-d7d2-403e-b8a4-e7a677f10f6b.png",
      imageAlt: "Atendimento psicológico em ambiente acolhedor",
      age: "Todas as idades",
      participants: "300 famílias",
      features: [
        "Atendimento psicológico individual",
        "Grupos de apoio familiar",
        "Orientação social e legal",
        "Acompanhamento de casos"
      ],
      color: "red" as const,
    },
    {
      title: "Profissionalização Jovem",
      description: "Cursos técnicos e profissionalizantes que preparam jovens para o mercado de trabalho e desenvolvimento de competências.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b128dac-9f71-42d3-9903-bcbdb618b35a.png",
      imageAlt: "Jovens em curso profissionalizante de informática",
      age: "14-21 anos",
      participants: "80 jovens",
      features: [
        "Cursos de informática básica",
        "Capacitação profissional",
        "Orientação vocacional",
        "Encaminhamento para estágios"
      ],
      color: "orange" as const,
    },
    {
      title: "Alimentação Nutricional",
      description: "Programa de alimentação balanceada e educação nutricional, garantindo segurança alimentar e hábitos saudáveis.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/87b433ca-e902-44ce-a7fa-ad1bb9375306.png",
      imageAlt: "Crianças se alimentando no refeitório da SEMA",
      age: "Todos os programas",
      participants: "500 refeições/dia",
      features: [
        "Café da manhã e almoço nutritivos",
        "Educação alimentar",
        "Acompanhamento nutricional",
        "Horta comunitária"
      ],
      color: "yellow" as const,
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de participante",
      content: "A SEMA transformou a vida do meu filho. Aqui ele encontrou não apenas apoio nos estudos, mas também uma segunda família que o acolheu com amor.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ddcaf43b-278e-4708-baa1-6e54c84060b3.png",
    },
    {
      name: "João Santos",
      role: "Ex-aluno, hoje voluntário",
      content: "Cresci na SEMA e hoje retorno como voluntário. Esta instituição me deu as bases para me tornar quem sou hoje. É uma honra contribuir.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f7a6559-a3bc-4df3-9f99-ee838b4b9090.png",
    },
    {
      name: "Ana Costa",
      role: "Parceira empresarial",
      content: "Nossa empresa se orgulha de apoiar a SEMA. É impressionante ver o impacto real e positivo que eles causam na comunidade.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c498bdd-8b23-478b-b3f4-b5b2d01ea0e0.png",
    },
  ];

  const impactStats = [
    { title: "Crianças Atendidas", current: 2500, target: 3000 },
    { title: "Famílias Beneficiadas", current: 800, target: 1000 },
    { title: "Jovens Profissionalizados", current: 450, target: 500 },
    { title: "Voluntários Ativos", current: 50, target: 75 },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre a SEMA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 15 anos transformando vidas através da educação, cultura e apoio social
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promover o desenvolvimento integral de crianças, adolescentes e jovens em situação de 
                  vulnerabilidade social, oferecendo educação complementar, cultura, esporte e apoio 
                  psicossocial de qualidade.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Respeito:</strong> Valorizamos cada indivíduo em sua singularidade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Transparência:</strong> Agimos com clareza e honestidade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Excelência:</strong> Buscamos sempre a melhoria contínua</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Solidariedade:</strong> Construímos uma sociedade mais justa</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f3ab6b2-b5ae-49cb-8233-1ab82e4da19d.png"
                alt="Equipe da SEMA trabalhando com crianças"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Programas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os programas que desenvolvemos para atender diferentes aspectos do desenvolvimento humano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Impacto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nossa dedicação em transformar vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.current.toLocaleString()}
                  </div>
                  <Progress value={(stat.current / stat.target) * 100} className="w-full" />
                  <p className="text-sm text-gray-600">
                    Meta: {stat.target.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que fazem parte da família SEMA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section id="help" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Você Pode Ajudar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Existem várias formas de contribuir com nossa missão
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Faça uma Doação</h3>
                <p className="text-gray-600">
                  Sua contribuição financeira nos ajuda a manter todos os programas funcionando
                </p>
                <Button 
                  onClick={() => scrollToSection("#donate")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Doar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Seja Voluntário</h3>
                <p className="text-gray-600">
                  Doe seu tempo e talentos para fazer a diferença na vida de crianças e jovens
                </p>
                <Button 
                  onClick={() => scrollToSection("#volunteer")}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Quero Ser Voluntário
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Parceria Empresarial</h3>
                <p className="text-gray-600">
                  Sua empresa pode apoiar projetos específicos e fortalecer nossa atuação
                </p>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Transforme Vidas com sua Doação
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Cada contribuição faz a diferença na vida de crianças e jovens
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">R$ 30</div>
                <div className="text-blue-100">Uma refeição nutritiva para 3 crianças</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">R$ 100</div>
                <div className="text-blue-100">Material escolar para uma criança por mês</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">R$ 250</div>
                <div className="text-blue-100">Mantém uma criança em todos os programas por mês</div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold mr-4"
              >
                Fazer Doação Única
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                Doação Mensal
              </Button>
            </div>

            <div className="mt-8 text-sm text-blue-200">
              <p>PIX: contato@sema.org.br | CNPJ: 12.345.678/0001-90</p>
              <p>Todas as doações podem ser deduzidas do Imposto de Renda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para esclarecer suas dúvidas e receber suas sugestões
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">
                        Rua das Flores, 123<br />
                        Vila Esperança - São Paulo/SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefones</h4>
                      <p className="text-gray-600">
                        (11) 3456-7890<br />
                        (11) 98765-4321 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">
                        contato@sema.org.br<br />
                        voluntarios@sema.org.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horário de Funcionamento</h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 17h<br />
                        Sábados: 8h às 12h<br />
                        Domingos: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}