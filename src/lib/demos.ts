export interface DemoModule {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  techStack: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface DemoData {
  name: string;
  eyebrow: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  primary: string;
  secondary: string;
  items: string[];
  accent: "emerald" | "sky" | "amber";
  pill: string;
  modules: DemoModule[];
  workflowSteps: WorkflowStep[];
}

export const demos: Record<string, DemoData> = {
  "nexus-bridge": {
    name: "Nexus Bridge",
    eyebrow: "Produto SaaS · integração de sistemas",
    title: "O legado continua funcionando. O negócio começa a fluir.",
    summary:
      "Uma camada de integração para empresas que precisam receber, transformar, validar e entregar dados entre sistemas sem uma migração arriscada de uma só vez.",
    metric: "12.840",
    metricLabel: "eventos processados no ambiente demo",
    primary: "Fluxo validado e em execução",
    secondary: "1 destino aguardando configuração",
    items: [
      "Aplicação legada recebe o pedido",
      "Sandbox valida e transforma o dado",
      "API entrega no destino escolhido",
    ],
    accent: "emerald",
    pill: "n8n · Apache Airflow · APIs · sandbox",
    modules: [
      {
        title: "Ingestão & Conectores de Origem",
        tag: "Ingress & Edge",
        description:
          "Recepção padronizada de eventos via Webhooks seguros, polling em bancos relacionais legados (Oracle/SQL Server) ou filas AMQP com validação em microssegundos.",
        highlights: [
          "Deduplicação e idempotência nativa por hash SHA-256 no Redis",
          "Autenticação por HMAC e mTLS com rotação de chaves",
          "Buffer elástico em memória contra picos repentinos de tráfego",
        ],
        techStack: "Rust (Axum) · Redis Streams · HTTP/2",
      },
      {
        title: "Motor de Transformação & Sandbox",
        tag: "Core Engine",
        description:
          "Mapeamento declarativo de schemas JSON, XML e formatos proprietários com execução isolada em ambiente sandbox seguro antes do envio ao destino.",
        highlights: [
          "Validação sintática e de regras de negócio com Zod / JSON Schema",
          "Geração de diffs e rastreabilidade total de mutações em payload",
          "Suporte a pipelines complexos orquestrados em DAGs",
        ],
        techStack: "TypeScript (V8 isolate) · Zod Schemas · Apache Airflow",
      },
      {
        title: "Roteamento & Entrega Resiliente",
        tag: "Distribuição",
        description:
          "Entrega garantida para múltiplos destinos simultâneos com Circuit Breaker, retentativas com backoff exponencial e quarentena segura (DLQ).",
        highlights: [
          "Retentativas com jitter para proteção dos endpoints de destino",
          "SLA de baixa latência com fila de prioridade para transações VIP",
          "Isolamento de falhas sem impacto nas mensagens subsequentes",
        ],
        techStack: "BullMQ · PostgreSQL · n8n Engine",
      },
      {
        title: "Trilha de Auditoria & Observabilidade",
        tag: "Governança",
        description:
          "Gravação imutável do ciclo de vida completo de cada transação, permitindo reprodução pontual de mensagens passadas e telemetria profunda.",
        highlights: [
          "Replay de eventos passados com 1 clique para depuração",
          "Métricas OpenTelemetry (latência P99, taxa de erro por conector)",
          "Trilha criptografada pronta para auditoria e compliance",
        ],
        techStack: "ClickHouse · OpenTelemetry · Grafana",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Captura & Sanitização",
        description:
          "O sistema legado emite o evento que é recebido pelo gateway de borda, autenticado e imediatamente colocado em buffer seguro.",
      },
      {
        step: "02",
        title: "Sandbox de Validação",
        description:
          "O payload passa por regras de consistência e schemas tipados, garantindo que campos obrigatórios e formatos estejam válidos.",
      },
      {
        step: "03",
        title: "Transformação & Roteamento",
        description:
          "Os dados são convertidos para a estrutura esperada pelo destino e enfileirados com prioridade ajustada.",
      },
      {
        step: "04",
        title: "Confirmação & Auditoria",
        description:
          "A entrega é confirmada com recibo criptográfico e o evento é arquivado para auditoria e telemetria de latência.",
      },
    ],
  },
  "fiscal-connect": {
    name: "Fiscal Connect",
    eyebrow: "Produto SaaS · automação fiscal",
    title: "Nota fiscal conectada à sua operação, sem planilha no caminho.",
    summary:
      "Uma automação segura para capturar documentos fiscais, validar informações e disponibilizar os dados para ERP, financeiro, estoque ou qualquer aplicação do cliente.",
    metric: "99,9%",
    metricLabel: "documentos validados no ambiente demo",
    primary: "Documento fiscal processado",
    secondary: "2 documentos precisam de conferência",
    items: [
      "Documento recebido por fonte autorizada",
      "Regras validam campos e consistência",
      "Dados entregues ao ERP ou à sua API",
    ],
    accent: "sky",
    pill: "NF-e · regras fiscais · ERP · webhooks",
    modules: [
      {
        title: "Captura Multicanal & SEFAZ Gateway",
        tag: "Ingresso & Certificação",
        description:
          "Conexão direta com webservices da SEFAZ, monitoramento contínuo de caixas postais fiscais e recepção instantânea de XMLs e DANFEs via API.",
        highlights: [
          "Gerenciamento seguro de Certificados Digitais A1 com KMS/HSM",
          "Download automático de NF-e, NFS-e, CT-e e MDF-e",
          "Detecção de duplicidade de chaves de acesso em tempo real",
        ],
        techStack: "Go (Chi) · OpenSSL · Cloudflare R2",
      },
      {
        title: "Parser & Validador de Regras Fiscais",
        tag: "Regras Tributárias",
        description:
          "Decomposição veloz e checagem de integridade de CFOP, NCM, CST, alíquotas tributárias (ICMS, PIS, COFINS, ISS) e consistência fiscal da filial.",
        highlights: [
          "Validação rigorosa contra schemas XSD oficiais do governo",
          "Detecção de divergências entre valor do item e total da nota",
          "Alerta antecipado para fornecedores com pendências cadastrais",
        ],
        techStack: "Rust (Quick-XML) · Regras Declarativas · PostgreSQL",
      },
      {
        title: "Conector ERP & Conciliação Automática",
        tag: "Integração Operacional",
        description:
          "Injeção direta dos documentos validados nos módulos de compras, estoque e contas a pagar do ERP sem digitação manual.",
        highlights: [
          "Conectores prontos para Totvs Protheus, SAP, Senior e Omie",
          "Geração automática de espelho de entrada e pré-nota",
          "Disparo de webhooks assinados para sistemas internos do cliente",
        ],
        techStack: "Node.js · REST APIs · Webhooks HMAC",
      },
      {
        title: "Guarda Legal & Repositório Fiscal",
        tag: "Compliance & Arquivo",
        description:
          "Armazenamento seguro pelo prazo legal obrigatório de 5 anos com indexação em alta velocidade para auditorias e fechamento contábil.",
        highlights: [
          "Criptografia de ponta a ponta em repouso com Envelope Encryption",
          "Busca instantânea por CNPJ, período fiscal, chave ou valor",
          "Exportação unificada em lote para envio direto à contabilidade",
        ],
        techStack: "Cloudflare R2 · PostgreSQL RLS · Zstandard",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Recepção do Documento",
        description:
          "O XML fiscal é capturado diretamente do webservice oficial da SEFAZ ou recebido via API criptografada.",
      },
      {
        step: "02",
        title: "Validação de Schema & Tributação",
        description:
          "O parser decodifica o arquivo, confere a assinatura digital e verifica divergências tributárias e fiscais.",
      },
      {
        step: "03",
        title: "Conciliação no ERP",
        description:
          "Os itens e valores são cruzados com ordens de compra e lançados automaticamente no sistema de gestão.",
      },
      {
        step: "04",
        title: "Arquivo Seguro & Notificação",
        description:
          "O documento recebe carimbo de validação, é armazenado no cofre digital e o time financeiro é notificado.",
      },
    ],
  },
  "ia-de-negocio": {
    name: "Context AI",
    eyebrow: "Produto SaaS · inteligência artificial aplicada",
    title: "IA que conhece o contexto do negócio e ajuda a operação a decidir.",
    summary:
      "Assistentes e automações que usam os dados, processos e linguagem da sua empresa para atender, classificar, resumir, analisar e executar tarefas com controle humano.",
    metric: "24",
    metricLabel: "tarefas assistidas no ambiente demo",
    primary: "Assistente pronto para revisão",
    secondary: "3 decisões aguardam aprovação humana",
    items: [
      "Fontes internas organizam o contexto",
      "IA classifica, resume ou recomenda",
      "Pessoa aprova e o fluxo executa a ação",
    ],
    accent: "amber",
    pill: "RAG · agentes · aprovação humana · auditoria",
    modules: [
      {
        title: "Pipeline de Ingestão de Conhecimento (Context Engine)",
        tag: "RAG & Vetores",
        description:
          "Mecanismo contínuo que indexa manuais internos, bases de tickets, contratos, regras de produtos e documentos corporativos em espaço vetorial.",
        highlights: [
          "Chunking semântico adaptativo que preserva o sentido de tabelas e cláusulas",
          "Embeddings densos de alta dimensão com reindexação incremental",
          "Isolamento rigoroso de permissões e controle de acesso aos dados",
        ],
        techStack: "Qdrant · pgvector · Python (FastAPI)",
      },
      {
        title: "Orquestrador de Agentes & Raciocínio",
        tag: "Agentic AI",
        description:
          "Agente inteligente baseado no padrão ReAct que formula hipóteses, consulta ferramentas determinísticas via MCP e sintetiza respostas embasadas.",
        highlights: [
          "Zero alucinação: respostas rigorosamente ancoradas nas fontes corporativas",
          "Tool-calling dinâmico para consultar bancos e APIs em tempo de inferência",
          "Suporte a raciocínio em múltiplos passos e decomposição de problemas",
        ],
        techStack: "LangGraph · Modelos Claude / Gemini · Node.js",
      },
      {
        title: "Painel Human-in-the-Loop (Supervisão)",
        tag: "Controle & Decisão",
        description:
          "Fila operacional onde recomendações críticas de negócio passam pelo aval obrigatório de uma pessoa antes de virarem execução concreta.",
        highlights: [
          "Gatilhos automáticos de parada baseados em grau de risco da ação",
          "Apresentação sintetizada com a justificativa técnica e fontes consultadas",
          "Aprovação, rejeição ou ajuste da resposta com um clique",
        ],
        techStack: "Astro · WebSockets · Tailwind CSS v4",
      },
      {
        title: "Avaliação Contínua & Rastreabilidade de Prompts",
        tag: "Auditoria & Qualidade",
        description:
          "Monitoramento sistemático da precisão das respostas com métricas objetivas de relevância, fidelidade e prevenção a injeção de prompt.",
        highlights: [
          "Framework de avaliação contínua com LLM-as-a-judge",
          "Versionamento auditável de diretrizes do sistema e prompts mestres",
          "Alertas de drift de contexto e degradação de respostas",
        ],
        techStack: "DeepEval / Ragas · OpenTelemetry · ClickHouse",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Indexação Semântica",
        description:
          "Documentos e políticas internas da empresa são processados, segmentados e convertidos em representações vetoriais seguras.",
      },
      {
        step: "02",
        title: "Recuperação & Raciocínio",
        description:
          "Ao receber uma consulta ou solicitação de tarefa, a IA recupera apenas o contexto relevante e monta o plano de resposta.",
      },
      {
        step: "03",
        title: "Validação Humana (HITL)",
        description:
          "A recomendação é apresentada de forma clara no painel com as fontes citadas para que um especialista valide ou ajuste.",
      },
      {
        step: "04",
        title: "Execução & Registro",
        description:
          "Com o aceite, a ação é executada nos sistemas de destino e a interação é registrada para aprendizado contínuo.",
      },
    ],
  },
  "operacoes-dados": {
    name: "Pulse Ops",
    eyebrow: "Aplicação sob medida · operações e dados",
    title: "A operação inteira em uma tela que dá para agir.",
    summary:
      "Um painel de exceções para equipes que precisam cruzar receita, pedidos e integrações antes que um desvio vire atraso.",
    metric: "R$ 184 mil",
    metricLabel: "receita sob monitoramento",
    primary: "Integrações saudáveis",
    secondary: "3 exceções pedem atenção",
    items: [
      "Pedidos aguardando conciliação",
      "Fila de importação ERP",
      "Sincronização do catálogo",
    ],
    accent: "emerald",
    pill: "Dashboards · alertas · ERP · dados operacionais",
    modules: [
      {
        title: "Coletor de Fluxos de Receita & Pedidos",
        tag: "Ingestão de Dados",
        description:
          "Sincroniza status de gateways de pagamento, checkout, faturamento e logística com reconciliação contínua de estados.",
        highlights: [
          "Ingestão contínua com reconciliação assíncrona de eventos transacionais",
          "Eliminação de divergências entre saldo bancário e registros do ERP",
          "Normalização em schema unificado de negócio para leitura instantânea",
        ],
        techStack: "Go · Kafka / Redpanda · TimescaleDB",
      },
      {
        title: "Motor de Detecção de Exceções (Anomaly Guard)",
        tag: "Inteligência Operacional",
        description:
          "Algoritmos que identificam desvios de padrão em pedidos parados, divergências de frete ou lentidão em APIs parceiras.",
        highlights: [
          "Alertas baseados em desvio estatístico de médias móveis operacionais",
          "Classificação automática de severidade (Baixa, Média e Crítica)",
          "Priorização da fila de tratamento pelo impacto financeiro direto",
        ],
        techStack: "Python · Celery · Redis",
      },
      {
        title: "Cockpit de Ação Rápida & Resolução",
        tag: "Interface de Operação",
        description:
          "Interface ultra-rápida desenhada para permitir que a equipe resolva problemas na hora, sem precisar abrir cinco sistemas diferentes.",
        highlights: [
          "Ações em lote para reprocessar pedidos, liberar travas ou renotificar clientes",
          "Filtros multidimensionais com renderização de resposta sub-100ms",
          "Atualização ao vivo via Server-Sent Events sem recarregar a página",
        ],
        techStack: "Astro · Vanilla JS · Tailwind CSS v4",
      },
      {
        title: "Roteador de Notificações & Escalação",
        tag: "Notificações & SLA",
        description:
          "Dispara alertas contextuais para os responsáveis certos via Slack, WhatsApp ou e-mail, acionando escalação quando o SLA é ameaçado.",
        highlights: [
          "Escalação em múltiplos níveis baseada no tempo de espera do incidente",
          "Resumos executivos diários com métricas de tempo de resolução",
          "Controle inteligente de supressão para evitar saturação da equipe",
        ],
        techStack: "Node.js · Webhooks · Slack API",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Stream de Transações",
        description:
          "Dados de gateways, ERP e logística chegam continuamente ao barramento unificado de telemetria operacional.",
      },
      {
        step: "02",
        title: "Detecção de Desvios",
        description:
          "O motor estatístico cruza as informações e isola discrepâncias antes que afetem o cliente final.",
      },
      {
        step: "03",
        title: "Triagem no Cockpit",
        description:
          "A equipe visualiza a fila ordenada por impacto financeiro e realiza a tratativa direta na tela.",
      },
      {
        step: "04",
        title: "Resolução Automatizada",
        description:
          "O comando é propagado para o sistema de origem, corrigindo o registro e normalizando a operação.",
      },
    ],
  },
  "automacao-conversacional": {
    name: "Fluxo Inbox",
    eyebrow: "Aplicação sob medida · automação conversacional",
    title: "Cada conversa chega com contexto para a próxima decisão.",
    summary:
      "Uma central para triagem, qualificação e continuidade de atendimentos que passam por WhatsApp, automações e equipe humana.",
    metric: "42",
    metricLabel: "conversas qualificadas hoje",
    primary: "Automação em execução",
    secondary: "6 conversas aguardam pessoa",
    items: [
      "Novo lead: indústria de alimentos",
      "Pagamento confirmado",
      "Solicitação de proposta",
    ],
    accent: "sky",
    pill: "WhatsApp · n8n · CRM · atendimento humano",
    modules: [
      {
        title: "Gateway Oficial WhatsApp & Mensageria",
        tag: "Conectividade & API",
        description:
          "Integração robusta com a WhatsApp Business Cloud API com failover de contingência, segurança criptográfica e gestão de sessões.",
        highlights: [
          "Validação de assinatura HMAC-SHA256 em cada webhook recebido",
          "Suporte completo a mídias, áudios com transcrição e documentos fiscais",
          "Fila inteligente de disparo em conformidade com as políticas anti-ban",
        ],
        techStack: "Node.js · Fastify · WhatsApp Cloud API",
      },
      {
        title: "Motor de Triagem & Qualificação com IA",
        tag: "Roteamento Inteligente",
        description:
          "Analisa o objetivo do contato, extrai entidades-chave (CNPJ, número de pedido, produto) e classifica a urgência da conversa.",
        highlights: [
          "Classificação de intenção em tempo real com LLM especializada",
          "Preenchimento automático do histórico do lead antes da atuação humana",
          "Respostas imediatas para dúvidas recorrentes com aprovação de tom",
        ],
        techStack: "Python (FastAPI) · LangChain · Redis Cache",
      },
      {
        title: "Inbox Operacional & Handoff Humano",
        tag: "Experiência de Atendimento",
        description:
          "Painel colaborativo para operadores com transição transparente do robô para a pessoa certa sem perda de histórico.",
        highlights: [
          "Distribuição inteligente por departamento, carga e especialidade técnica",
          "Timeline unificada com histórico de compras e conversas passadas",
          "Respostas rápidas e notas internas compartilhadas entre a equipe",
        ],
        techStack: "Vue 3 / Astro · WebSockets · Tailwind CSS",
      },
      {
        title: "Sincronizador CRM & Ações de Vendas",
        tag: "Integração Comercial",
        description:
          "Atualiza o status dos negócios no funil do CRM, registra transcrições resumidas e dispara tarefas de follow-up automáticas.",
        highlights: [
          "Criação e avanço de oportunidades no CRM em tempo real",
          "Disparo de pesquisas de NPS e mensagens de acompanhamento",
          "Relatórios de conversão por canal de origem e atendente",
        ],
        techStack: "n8n Workflows · REST APIs · PostgreSQL",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Mensagem Recebida",
        description:
          "O cliente inicia contato no WhatsApp e a mensagem é validada e registrada imediatamente na fila operacional.",
      },
      {
        step: "02",
        title: "Triagem & Contexto",
        description:
          "A IA identifica o perfil do interlocutor, extrai intenção e dados cadastrais consultando a base do CRM.",
      },
      {
        step: "03",
        title: "Handoff Especializado",
        description:
          "O lead qualificado é direcionado ao consultor ideal com um resumo claro de tudo o que foi solicitado.",
      },
      {
        step: "04",
        title: "Fechamento & Registro",
        description:
          "A negociação é concluída, a oportunidade no CRM é atualizada e o histórico é consolidado.",
      },
    ],
  },
  "telemetria-industrial": {
    name: "Linha Sinal",
    eyebrow: "Aplicação sob medida · monitoramento industrial",
    title: "Sinais da fábrica antes que virem parada.",
    summary:
      "Uma leitura operacional de ativos conectados, desenhada para tornar alarmes, tendência e intervenção compreensíveis em segundos.",
    metric: "98,7%",
    metricLabel: "disponibilidade da linha",
    primary: "Linha em produção",
    secondary: "1 manutenção programada",
    items: [
      "Prensa 03 · temperatura estável",
      "Esteira 02 · velocidade nominal",
      "Sensor de vibração · inspeção",
    ],
    accent: "amber",
    pill: "Modbus · Profinet · SCADA · telemetria",
    modules: [
      {
        title: "Driver de Protocolos de Campo (Fieldbus Ingress)",
        tag: "Conectividade OT",
        description:
          "Comunicação direta com Controladores Lógicos Programáveis (CLPs), sensores e inversores com isolamento assíncrono de rede.",
        highlights: [
          "Suporte a Modbus TCP/RTU, Profinet, MQTT Sparkplug B e OPC-UA",
          "Conversão tipada de registradores Float32, Int64 com controle de endianness",
          "Tolerância a ruído de rede com reconexão suave sem queda de driver",
        ],
        techStack: "Rust (tokio-modbus) · OPC-UA SDK · C/Embedded",
      },
      {
        title: "Tratamento de Séries Temporais & Downsampling",
        tag: "Dados & Armazenamento",
        description:
          "Processamento contínuo de milhares de medições por segundo com agregação temporal em múltiplas resoluções sem gargalo de disco.",
        highlights: [
          "Downsampling em tempo real (1s, 1m, 1h) para visualização instantânea",
          "Políticas de retenção configuráveis por criticidade do equipamento",
          "Compressão colunar nativa com algoritmos de alta densidade",
        ],
        techStack: "TimescaleDB · Continuous Aggregates · Redis",
      },
      {
        title: "Motor de Regras de Alarme & Intervenção",
        tag: "Segurança Operacional",
        description:
          "Detecção de limiares de risco (pressão, temperatura, vibração) e acionamento de protocolos imediatos de alerta antes da quebra.",
        highlights: [
          "Lógica de histerese para evitar disparos repetidos causados por ruído",
          "Flight recorder: gravação dos 60 segundos pré e pós-incidente",
          "Acionamento de técnicos de manutenção de plantão via push e rádio",
        ],
        techStack: "Rust · Tokio Async Runtime · PostgreSQL",
      },
      {
        title: "Supervisório IHM Web de Baixa Latência",
        tag: "Visualização SCADA",
        description:
          "Telas sinóticas industriais em tempo real a 60 FPS com leitura ergonômica para operadores em tablets e telas de chão de fábrica.",
        highlights: [
          "Streaming de telemetria via WebSocket com serialização binária leve",
          "Paleta de cores com alto contraste otimizada para ambientes industriais",
          "Compatibilidade com navegadores industriais e telas touch-screen",
        ],
        techStack: "Astro · HTML5 Canvas / ECharts · Tailwind CSS v4",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Leitura nos Controladores",
        description:
          "O driver lê os registradores do CLP de cada máquina na linha de produção em ciclos milimétricos.",
      },
      {
        step: "02",
        title: "Normalização & Timestamp",
        description:
          "Os sinais são convertidos em unidades de engenharia (°C, bar, RPM) e recebem carimbo de precisão temporal.",
      },
      {
        step: "03",
        title: "Avaliação de Limiares",
        description:
          "O motor de regras avalia tendências de subida térmica ou anomalias de vibração contra os padrões seguros.",
      },
      {
        step: "04",
        title: "Apresentação & Alerta",
        description:
          "O painel do operador atualiza em tempo real e qualquer desvio crítico aciona a equipe de manutenção preventiva.",
      },
    ],
  },
  "desktop-critico": {
    name: "Station Control",
    eyebrow: "Aplicação sob medida · desktop",
    title: "Software local quando estabilidade e resposta são inegociáveis.",
    summary:
      "Uma aplicação desktop para operações que precisam continuar funcionando perto do processo, com interface rápida e integração aos equipamentos e dados locais.",
    metric: "< 80 ms",
    metricLabel: "resposta local no ambiente demo",
    primary: "Estação conectada",
    secondary: "Sincronização programada para a nuvem",
    items: [
      "Operador registra a operação local",
      "Regras validam os dados na estação",
      "Sincronização envia eventos ao servidor",
    ],
    accent: "emerald",
    pill: "Tauri · Rust · React · operação offline",
    modules: [
      {
        title: "Kernel Local & Acesso a Periféricos",
        tag: "Runtime Nativo",
        description:
          "Execução local ultrarrápida compilada em código de máquina, consumindo menos de 40MB de RAM e conversando diretamente com hardwares seriais.",
        highlights: [
          "Comunicação direta com balanças rodoviárias, impressoras térmicas e scanners",
          "Zero overhead de Electron ou navegadores pesados rodando em segundo plano",
          "Inicialização da aplicação em menos de 300 milissegundos",
        ],
        techStack: "Tauri v2 · Rust Core · Libserialport",
      },
      {
        title: "Banco Local & Persistência Offline-First",
        tag: "Armazenamento Local",
        description:
          "Garante que o pátio, expedição ou caixa continuem operando normalmente mesmo quando a rede corporativa ou a internet cair por completo.",
        highlights: [
          "SQLite em modo WAL de altíssima performance para escrita concorrente",
          "Criptografia de dados em repouso com algoritmo padrão militar",
          "Resiliência atômica com garantia contra corrupção em corte de energia",
        ],
        techStack: "SQLite · SQLx · ChaCha20-Poly1305",
      },
      {
        title: "Motor de Sincronização em Lote com a Nuvem",
        tag: "Sincronização Resiliente",
        description:
          "Detecta o restabelecimento da conectividade e descarrega transações pendentes para o servidor com resolução determinística de conflitos.",
        highlights: [
          "Resolução determinística de conflitos com carimbos imutáveis",
          "Compressão de pacotes pensada para conexões lentas ou via satélite",
          "Fila transacional durável sem risco de duplicar ou perder lançamentos",
        ],
        techStack: "Rust · Protocol Buffers (gRPC) / HTTPS · Background Worker",
      },
      {
        title: "Interface de Alta Ergonomia & Modo Quiosque",
        tag: "UX Operacional",
        description:
          "Projetada para digitação rápida por teclado, navegação sem mouse e bloqueio de sistema operacional para evitar saídas acidentais.",
        highlights: [
          "Fluxos de trabalho 100% operáveis por atalhos de teclado",
          "Modo Quiosque (Kiosk) com bloqueio de teclas do Windows e Alt+Tab",
          "Design de alto contraste e feedback auditivo em leituras de código de barras",
        ],
        techStack: "React / Vanilla JS · Tailwind CSS v4 · WAI-ARIA",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Entrada do Operador",
        description:
          "O operador utiliza leitor de código de barras ou atalhos de teclado para registrar a movimentação na estação.",
      },
      {
        step: "02",
        title: "Validação Instantânea",
        description:
          "As regras de negócio são checadas no SQLite local em menos de 10ms, sem depender de chamadas à nuvem.",
      },
      {
        step: "03",
        title: "Persistência em Disco",
        description:
          "A transação é gravada no banco embarcado criptografado com garantia ACID e colocada na fila de sync.",
      },
      {
        step: "04",
        title: "Descarga para a Nuvem",
        description:
          "O worker de background detecta conexão ativa e sincroniza os lotes com o servidor central da empresa.",
      },
    ],
  },
};

export type DemoSlug = keyof typeof demos;
export function isDemoSlug(value: string): value is DemoSlug {
  return value in demos;
}
