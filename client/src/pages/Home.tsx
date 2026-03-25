import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BookOpen, Calendar, FileText, GraduationCap, RotateCcw, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Design: Academic Modernism with Blue & Gold palette
 * - Hero section with gradient and abstract illustration
 * - Card grid for services (3 columns desktop, responsive mobile)
 * - Expandable cards for detailed information
 * - Smooth animations and hover effects
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  steps: string[];
  manualLink: string;
  urgency?: "high" | "medium" | "low";
}

const services: Service[] = [
  {
    id: "trancamento",
    title: "Trancamento de Matrícula",
    description: "Suspensão temporária do vínculo com a instituição",
    icon: <Calendar className="w-8 h-8" />,
    details: [
      "Interrupção oficial dos estudos por período determinado",
      "Mantém sua vaga na instituição",
      "Ideal para resolver questões pessoais",
    ],
    steps: [
      "Acesse o sistema acadêmico com seu login",
      "Localize a opção 'Trancamento' no menu de serviços",
      "Siga rigorosamente as orientações do manual",
    ],
    manualLink: "#",
    urgency: "medium",
  },
  {
    id: "aproveitamento",
    title: "Aproveitamento de Estudos",
    description: "Valide disciplinas que você já cursou",
    icon: <BookOpen className="w-8 h-8" />,
    details: [
      "Solicitação para validar disciplinas já cursadas",
      "Compatibilidade de carga horária e conteúdo",
      "Evita cursar matérias que podem ser validadas",
    ],
    steps: [
      "Separe histórico escolar e ementas das disciplinas",
      "Acesse o portal do aluno na aba 'Aproveitamento'",
      "Anexe os documentos digitalizados em alta qualidade",
    ],
    manualLink: "#",
  },
  {
    id: "justificativa",
    title: "Justificativa de Faltas",
    description: "Para situações excepcionais com comprovação",
    icon: <AlertCircle className="w-8 h-8" />,
    details: [
      "Faltas justificadas apenas com comprovação oficial",
      "Casos previstos em lei ou no regimento",
      "Reúna documentos comprobatórios",
    ],
    steps: [
      "Reúna atestados médicos ou documentos comprobatórios",
      "Fique atento ao limite de dias úteis após a ausência",
      "Envie a solicitação digitalizada pelo sistema acadêmico",
    ],
    manualLink: "#",
    urgency: "high",
  },
  {
    id: "reposicao",
    title: "Reposição de Atividades",
    description: "Para casos de perda de prova ou atividade",
    icon: <RotateCcw className="w-8 h-8" />,
    details: [
      "Garantida para alunos que perderam avaliações",
      "Motivos justificados e comprovados",
      "Algumas reposições podem ter taxas administrativas",
    ],
    steps: [
      "Verifique o prazo limite para o pedido de reposição",
      "Acesse o portal e selecione a atividade a repor",
      "Siga o manual disponível e acompanhe o status",
    ],
    manualLink: "#",
  },
  {
    id: "documentos",
    title: "Emissão de Documentos",
    description: "Solicitação de declarações e certificados",
    icon: <FileText className="w-8 h-8" />,
    details: [
      "Declaração de matrícula, histórico e certificados",
      "Processo rápido e digital, disponível 24h",
      "Documentos com código de verificação digital",
    ],
    steps: [
      "Acesse o sistema acadêmico",
      "Vá até a área de 'Documentos' ou 'Secretaria Virtual'",
      "Selecione o documento desejado e clique em 'Gerar'",
    ],
    manualLink: "#",
  },
  {
    id: "renovacao",
    title: "Renovação de Matrícula",
    description: "Confirmação do vínculo para o próximo período",
    icon: <GraduationCap className="w-8 h-8" />,
    details: [
      "Obrigatória dentro do calendário acadêmico",
      "Garanta sua vaga para o próximo semestre",
      "Perda do prazo resulta em cancelamento do vínculo",
    ],
    steps: [
      "Verifique pendências financeiras e de biblioteca",
      "Acesse o portal do aluno e confirme as disciplinas",
      "Siga o manual para concluir a assinatura do contrato",
    ],
    manualLink: "#",
    urgency: "high",
  },
];

export default function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case "high":
        return "border-l-4 border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-4 border-l-amber-500 bg-amber-50";
      default:
        return "";
    }
  };

  const getUrgencyBadge = (urgency?: string) => {
    switch (urgency) {
      case "high":
        return <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">Prazo Urgente</span>;
      case "medium":
        return <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-amber-500 rounded">Atenção</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Guia Acadêmico</h1>
              <p className="text-xs text-gray-600">Solicitações e Procedimentos</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition">Serviços</a>
            <a href="#avisos" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition">Avisos</a>
            <a href="#suporte" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition">Suporte</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="display-title text-5xl md:text-6xl mb-6 leading-tight">
              Guia de Solicitações Acadêmicas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Passo a passo para não se perder na jornada universitária. Encontre informações claras sobre todos os serviços acadêmicos disponíveis.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explorar Serviços
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => document.getElementById("avisos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Avisos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <CheckCircle2 className="h-6 w-6 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Objetivo</h3>
                <p className="text-gray-700">Facilitar o acesso a serviços acadêmicos de forma rápida e intuitiva.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Interatividade</h3>
                <p className="text-gray-700">Cada seção possui links diretos para manuais detalhados.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Praticidade</h3>
                <p className="text-gray-700">Siga o passo a passo estruturado para evitar erros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicos" className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Serviços Acadêmicos</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getUrgencyColor(service.urgency)}`}
                  onClick={() => toggleExpanded(service.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-900 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-blue-900">{service.title}</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    {service.urgency && (
                      <div className="mt-3">
                        {getUrgencyBadge(service.urgency)}
                      </div>
                    )}
                  </CardHeader>

                  {expandedService === service.id && (
                    <CardContent className="space-y-4 border-t border-gray-200 pt-4 animate-in fade-in duration-300">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm">Informações</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-700 flex gap-2">
                              <span className="text-amber-500 flex-shrink-0">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm">Como Solicitar</h4>
                        <ol className="space-y-2">
                          {service.steps.map((step, i) => (
                            <li key={i} className="text-sm text-gray-700 flex gap-3">
                              <span className="font-semibold text-amber-500 flex-shrink-0">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <Button
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                        asChild
                      >
                        <a href={service.manualLink} target="_blank" rel="noopener noreferrer">
                          Acessar Manual Completo
                        </a>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notices */}
        <section id="avisos" className="mb-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">⚠️ Avisos Importantes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Prazos Específicos</h3>
                <p className="text-gray-700 text-sm">
                  Todos os procedimentos possuem datas rígidas no calendário acadêmico. Solicitações fora do prazo não serão processadas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Leitura Obrigatória</h3>
                <p className="text-gray-700 text-sm">
                  Leia atentamente cada manual antes de finalizar sua solicitação. A falta de documentos é o principal motivo de indeferimento.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Documentação Completa</h3>
                <p className="text-gray-700 text-sm">
                  Verifique se você possui toda a documentação necessária antes de protocolar sua solicitação.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Confirmação</h3>
                <p className="text-gray-700 text-sm">
                  Sempre verifique o status do seu protocolo no sistema após o envio para garantir que foi recebido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="suporte" className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Precisa de Ajuda?</h2>
          <p className="text-gray-700 mb-6">
            Em caso de dúvidas persistentes sobre qualquer procedimento, procure a secretaria acadêmica presencialmente ou utilize os canais de suporte disponíveis.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white" size="lg">
              Contatar Secretaria
            </Button>
            <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Ver FAQ
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-20">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Sobre</h3>
              <p className="text-blue-100 text-sm">Guia interativo para solicitações acadêmicas.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white transition">Trancamento</a></li>
                <li><a href="#" className="hover:text-white transition">Aproveitamento</a></li>
                <li><a href="#" className="hover:text-white transition">Documentos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white transition">Calendário Acadêmico</a></li>
                <li><a href="#" className="hover:text-white transition">Manuais</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <p className="text-blue-100 text-sm">
                Email: secretaria@instituicao.edu.br<br />
                Telefone: (XX) XXXX-XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2026 Guia de Solicitações Acadêmicas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
