import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BookOpen, Calendar, FileText, GraduationCap, RotateCcw, Clock, CheckCircle2, ExternalLink, QrCode } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG as QRCode } from "qrcode.react";

/**
 * Design: Academic Modernism with Blue & Gold palette
 * IFRN - Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte
 * Dados reais com links dos manuais do SUAP
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  steps: string[];
  manualLink: string;
  manualTitle: string;
  urgency?: "high" | "medium" | "low";
  suapInfo?: string;
}

const services: Service[] = [
  {
    id: "trancamento",
    title: "Trancamento de Matrícula",
    description: "Suspensão temporária do vínculo acadêmico",
    icon: <Calendar className="w-8 h-8" />,
    details: [
      "Interrupção oficial dos estudos por período determinado",
      "Mantém sua vaga na instituição",
      "Realizado via chamados no SUAP",
      "Organiza e registra oficialmente a demanda",
    ],
    steps: [
      "Acesse o SUAP (portal.ifrn.edu.br)",
      "Abra um chamado na Central de Serviços",
      "Selecione a opção de trancamento",
      "Siga as orientações do sistema",
    ],
    manualLink: "https://portal.ifrn.edu.br/documents/24284/Abertura_de_chamados_do_Ensino_no_SUAP.pdf",
    manualTitle: "Abertura de Chamados no SUAP",
    urgency: "medium",
    suapInfo: "Solicitação via Central de Serviços",
  },
  {
    id: "aproveitamento",
    title: "Aproveitamento de Estudos",
    description: "Validação de disciplinas cursadas anteriormente",
    icon: <BookOpen className="w-8 h-8" />,
    details: [
      "Solicitação para validar disciplinas já cursadas",
      "Compatibilidade de carga horária e conteúdo",
      "Evita cursar matérias que podem ser validadas",
      "Requer histórico escolar e ementas",
    ],
    steps: [
      "Separe histórico escolar e ementas das disciplinas",
      "Acesse o SUAP",
      "Abra o requerimento correspondente",
      "Siga o passo a passo no manual",
    ],
    manualLink: "https://portal.ifrn.edu.br/documents/26421/Discente_-_Tutorial_para_solicita%C3%A7%C3%A3o_de_aproveitamento.pdf",
    manualTitle: "Tutorial de Aproveitamento de Estudos",
    suapInfo: "Requerimento no SUAP",
  },
  {
    id: "justificativa",
    title: "Justificativa de Faltas",
    description: "Para ausências excepcionais com comprovação",
    icon: <AlertCircle className="w-8 h-8" />,
    details: [
      "Casos: doença, falecimento de familiar, compromissos legais",
      "Requer documentos comprobatórios",
      "Registro formal e seguro no SUAP",
      "Permite envio de atestados digitalizados",
    ],
    steps: [
      "Reúna documentos comprobatórios (atestados, certidões, etc)",
      "Acesse o SUAP",
      "Abra um chamado ou solicitação",
      "Siga as orientações do manual",
    ],
    manualLink: "https://portal.ifrn.edu.br/documents/25575/Tutorial_para_justificativas_de_faltas_-_Alunos.pdf",
    manualTitle: "Tutorial de Justificativa de Faltas",
    urgency: "high",
    suapInfo: "Chamado com envio seguro de atestados",
  },
  {
    id: "reposicao",
    title: "Reposição de Atividades",
    description: "Para casos de perda de prova ou atividade avaliativa",
    icon: <RotateCcw className="w-8 h-8" />,
    details: [
      "Casos: doença, falecimento de familiar, compromissos legais",
      "Requer comprovação do motivo",
      "Realizado via SUAP com registro formal",
      "Permite acompanhamento do status",
    ],
    steps: [
      "Reúna documentos comprobatórios",
      "Acesse o SUAP",
      "Abra um chamado ou solicitação",
      "Siga as orientações do manual de justificativas",
    ],
    manualLink: "https://portal.ifrn.edu.br/documents/25575/Tutorial_para_justificativas_de_faltas_-_Alunos.pdf",
    manualTitle: "Tutorial de Justificativa de Faltas",
    urgency: "high",
    suapInfo: "Mesmo procedimento de justificativa de faltas",
  },
  {
    id: "documentos",
    title: "Emissão de Documentos",
    description: "Solicitação de documentos acadêmicos",
    icon: <FileText className="w-8 h-8" />,
    details: [
      "Declaração de matrícula",
      "Histórico escolar",
      "Certificados de conclusão",
      "Disponível diretamente no SUAP",
    ],
    steps: [
      "Acesse o SUAP",
      "Vá até a área de documentos",
      "Solicite ou faça download do documento",
      "Alguns documentos são emitidos automaticamente",
    ],
    manualLink: "https://portal.ifrn.edu.br",
    manualTitle: "Portal IFRN",
    suapInfo: "Acesso direto no SUAP",
  },
  {
    id: "renovacao",
    title: "Renovação de Matrícula",
    description: "Procedimento obrigatório a cada período letivo",
    icon: <GraduationCap className="w-8 h-8" />,
    details: [
      "Obrigatória a cada período letivo",
      "Respeite o calendário acadêmico",
      "Verifique pendências antes de renovar",
      "Realizada totalmente no SUAP",
    ],
    steps: [
      "Acesse o SUAP",
      "Verifique pendências financeiras e de biblioteca",
      "Realize a renovação conforme o sistema",
      "Guarde o comprovante de renovação",
    ],
    manualLink: "https://portal.ifrn.edu.br/documents/25753/Renova%C3%A7%C3%A3o_de_matr%C3%ADcula_JFN8Na3.pdf",
    manualTitle: "Manual de Renovação de Matrícula",
    urgency: "high",
    suapInfo: "Procedimento obrigatório no SUAP",
  },
];

export default function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [showQRModal, setShowQRModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtrar serviços baseado na busca
  const filteredServices = services.filter((service) => {
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.details.some((detail) => detail.toLowerCase().includes(query)) ||
      service.steps.some((step) => step.toLowerCase().includes(query))
    );
  });

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
            <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-700">IFRN</h1>
              <p className="text-xs text-gray-600">CARTILHA INTERATIVA</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Serviços</a>
            <a href="#avisos" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Avisos</a>
            <a href="#suap" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Sobre SUAP</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-red-600 text-white py-20 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444660766/cWaRPaNZr75WtyA8Rx93Bg/ifrn-logo_5ddb634b.jpg"
                alt="Logo IFRN"
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-2xl">
              <h1 className="display-title text-5xl md:text-6xl mb-6 leading-tight">
                🎓 CARTILHA INTERATIVA
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Para Redução de Barreiras Burocráticas no Ensino Profissional.
              </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explorar Serviços
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
                asChild
              >
                <a href="https://suap.ifrn.edu.br/accounts/login/?next=/" target="_blank" rel="noopener noreferrer">
                  Acessar SUAP
                </a>
              </Button>
            </div>
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
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Centralizado</h3>
                <p className="text-gray-700">Todas as solicitações pelo SUAP com registro formal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Manuais Completos</h3>
                <p className="text-gray-700">Links diretos para cada procedimento.</p>
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
                <p className="text-gray-700">Siga o passo a passo estruturado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicos" className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Serviços Acadêmicos</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Buscar serviço (ex: trancamento, aproveitamento, documentos...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600">
                {filteredServices.length} resultado{filteredServices.length !== 1 ? "s" : ""} encontrado{filteredServices.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {filteredServices.length === 0 && searchQuery ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-600 mb-6">Tente buscar por palavras-chave diferentes ou explore todos os serviços.</p>
              <Button
                onClick={() => setSearchQuery("")}
                className="bg-blue-900 hover:bg-blue-800 text-white"
              >
                Limpar Busca
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
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
                        <div className="p-3 bg-green-100 rounded-lg text-green-700 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-green-700">{service.title}</CardTitle>
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
                    {service.suapInfo && (
                      <div className="mt-3 text-xs text-green-700 bg-green-50 px-2 py-1 rounded inline-block">
                        {service.suapInfo}
                      </div>
                    )}
                  </CardHeader>

                  {expandedService === service.id && (
                    <CardContent className="space-y-4 border-t border-gray-200 pt-4 animate-in fade-in duration-300">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Informações</h4>
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
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Como Solicitar</h4>
                        <ol className="space-y-2">
                          {service.steps.map((step, i) => (
                            <li key={i} className="text-sm text-gray-700 flex gap-3">
                              <span className="font-semibold text-red-600 flex-shrink-0">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                          asChild
                        >
                          <a href={service.manualLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Manual
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-green-700 text-green-700 hover:bg-green-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowQRModal(service.id);
                          }}
                        >
                          <QrCode className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
            </div>
          )}
        </section>

        {/* SUAP Info Section */}
        <section id="suap" className="mb-20 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-700 mb-6">💡 Sobre o SUAP</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">O que é SUAP?</h3>
              <p className="text-gray-700 mb-4">
                SUAP é o Sistema Unificado de Administração Pública do IFRN. Através dele, você realiza todas as solicitações acadêmicas com segurança e registro formal.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Registro oficial de todas as demandas
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Acompanhamento de status em tempo real
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Envio seguro de documentos digitalizados
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Como Acessar?</h3>
              <p className="text-gray-700 mb-4">
                Acesse o portal do IFRN e faça login com suas credenciais de aluno.
              </p>
              <Button
                size="lg"
                className="w-full bg-green-700 hover:bg-green-800 text-white mb-4"
                asChild
              >
                <a href="https://suap.ifrn.edu.br/accounts/login/?next=/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Acessar SUAP
                </a>
              </Button>
              <p className="text-xs text-gray-600">
                Use suas credenciais de aluno (matrícula e senha)
              </p>
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section id="avisos" className="mb-20 bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-600">
          <h2 className="text-3xl font-bold text-red-700 mb-8">⚠️ Avisos Importantes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Respeite os Prazos</h3>
                <p className="text-gray-700 text-sm">
                  Todas as solicitações possuem datas rígidas no calendário acadêmico. Solicitações fora do prazo não serão processadas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Leia os Manuais</h3>
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
                <h3 className="font-semibold text-red-700 mb-2">Documentação Completa</h3>
                <p className="text-gray-700 text-sm">
                  Verifique se você possui toda a documentação necessária antes de protocolar sua solicitação no SUAP.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-red-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Guarde Comprovantes</h3>
                <p className="text-gray-700 text-sm">
                  Sempre guarde comprovantes e acompanhe seus chamados no SUAP para garantir que foram recebidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Precisa de Ajuda?</h2>
          <p className="text-gray-700 mb-6">
            Em caso de dúvidas persistentes sobre qualquer procedimento, procure a secretaria acadêmica presencialmente ou acesse o portal do IFRN.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              className="bg-green-700 hover:bg-green-800 text-white" size="lg" asChild
            >
              <a href="https://suap.ifrn.edu.br/accounts/login/?next=/" target="_blank" rel="noopener noreferrer">
                Acessar SUAP
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-green-700 text-green-700 hover:bg-green-50">
              Secretaria Acadêmica
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white mt-20">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Sobre</h3>
              <p className="text-green-100 text-sm">Guia interativo para solicitações acadêmicas do IFRN.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li><a href="#servicos" className="hover:text-white transition">Trancamento</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Aproveitamento</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Documentos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li><a href="https://suap.ifrn.edu.br/accounts/login/?next=/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">SUAP</a></li>
                <li><a href="#suap" className="hover:text-white transition">Sobre SUAP</a></li>
                <li><a href="#avisos" className="hover:text-white transition">Avisos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">IFRN</h3>
              <p className="text-green-100 text-sm">
                Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte
              </p>
            </div>
          </div>
          <div className="border-t border-green-600 pt-8 text-center text-green-100 text-sm">
            <p>&copy; 2026 Guia de Solicitações Acadêmicas - IFRN. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowQRModal(null)}>
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle>QR Code do Manual</CardTitle>
              <CardDescription>
                {services.find(s => s.id === showQRModal)?.manualTitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                <QRCode
                  value={services.find(s => s.id === showQRModal)?.manualLink || ""}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Escaneie com seu celular para acessar o manual
              </p>
              <Button
                className="w-full bg-blue-900 hover:bg-blue-800"
                asChild
              >
                <a href={services.find(s => s.id === showQRModal)?.manualLink} target="_blank" rel="noopener noreferrer">
                  Acessar Manual
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowQRModal(null)}
              >
                Fechar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
