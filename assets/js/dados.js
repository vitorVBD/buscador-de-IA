

let dados = [
    {
        titulo: "Google Gemini",
        descricao: "O Google Gemini é um LLM multi-modal, capaz de gerar texto, código, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e até mesmo gerar imagens. O Google buscou revolucionar a forma como interagimos com a tecnologia, oferecendo ferramentas mais intuitivas e poderosas para auxiliar em diversas áreas. É uma das IAs mais avançadas da atualidade.",
        link: "https://gemini.google.com/app",
        tipo: "LLM",
        exemploUso: "Criação de chatbots inteligentes, geração de scripts para vídeos, tradução de documentos, resumo de artigos científicos.",
    },
    {
        titulo: "ChatGPT",
        descricao: "O ChatGPT é um LLM desenvolvido pela OpenAI, especializado em conversas naturais. Ele pode gerar textos criativos, responder perguntas, traduzir idiomas e muito mais. É amplamente utilizado para diversas tarefas, desde a criação de conteúdo até o atendimento ao cliente.",
        link: "https://chat.openai.com/",
        tipo: "LLM",
        exemploUso: "Criação de chatbots para websites, geração de ideias para histórias, redação de e-mails, aprendizado de idiomas.",
    },
    {
        titulo: "Bing Chat",
        descricao: "O Bing Chat é um LLM desenvolvido pela Microsoft, integrado ao buscador Bing. Ele oferece respostas mais completas e informativas às suas perguntas, além de gerar diferentes tipos de conteúdo criativo. É uma ferramenta poderosa para pesquisa e produção de conteúdo.",
        link: "https://www.bing.com/chat",
        tipo: "LLM",
        exemploUso: "Pesquisa de informações, geração de resumos de artigos, criação de listas e tabelas, auxílio na resolução de problemas.",
    },
    {
        titulo: "Perplexity",
        descricao: "O Perplexity é um LLM focado em pesquisa e busca de informações. Ele oferece respostas concisas e relevantes, citando as fontes utilizadas. É uma ótima opção para quem busca informações precisas e confiáveis.",
        link: "https://www.perplexity.ai/",
        tipo: "LLM",
        exemploUso: "Pesquisa acadêmica, verificação de fatos, comparação de produtos, aprendizado sobre novos tópicos.",
    },
    {
        titulo: "Claude",
        descricao: "O Claude é um LLM desenvolvido pela Anthropic, conhecido por suas respostas mais seguras e menos propensas a gerar conteúdo prejudicial. Ele é capaz de gerar texto, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa.",
        link: "https://claude.ai/",
        tipo: "LLM",
        exemploUso: "Criação de conteúdo seguro e confiável, assistência em tarefas de escrita, tradução de documentos confidenciais.",
    },
    {
        titulo: "Gamma.app",
        descricao: "A Gamma.app é uma plataforma de IA que permite criar apresentações, websites e documentos de forma rápida e intuitiva. Utilizando modelos de linguagem e geração de imagens, a Gamma.app automatiza grande parte do processo criativo, permitindo que você se concentre no conteúdo.",
        link: "https://gamma.app/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Criação de apresentações para pitch de negócios, desenvolvimento de protótipos de websites, geração de relatórios personalizados.",
    },
    {
        titulo: "Descript",
        descricao: "O Descript é uma plataforma de edição de áudio e vídeo baseada em IA. Ele utiliza transcrição automática para transformar áudio em texto editável, permitindo que você edite vídeos e podcasts com mais precisão e rapidez. Além disso, o Descript oferece ferramentas de edição de texto e vídeo, como remoção de ruídos e criação de legendas.",
        link: "https://www.descript.com/",
        tipo: "Edição de Áudio e Vídeo",
        exemploUso: "Criação de podcasts profissionais, edição de vídeos de YouTube, geração de legendas para vídeos.",
    },
    {
        titulo: "Monica AI",
        descricao: "A Monica AI é uma assistente virtual personalizada que aprende com suas interações para fornecer respostas cada vez mais relevantes e personalizadas. Ela pode agendar reuniões, responder e-mails e até mesmo contar histórias.",
        link: "https://monica.ai/",
        tipo: "Assistente de IA",
        exemploUso: "Gerenciamento de tarefas, agendamento de reuniões, organização de e-mails, companhia virtual."
    },
    {
        titulo: "MaxiAI.me",
        descricao: "O MaxiAI.me é um chatbot focado em produtividade, capaz de gerar ideias, escrever textos e auxiliar na tomada de decisões. Ele é uma ferramenta útil para profissionais que buscam aumentar sua eficiência.",
        link: "https://maxi.ai/",
        tipo: "Assistente de IA",
        exemploUso: "Geração de ideias para projetos, redação de e-mails, criação de conteúdo para redes sociais."
    },
    {
        titulo: "Copilot",
        descricao: "O Copilot é um assistente de programação da GitHub que sugere códigos e completa automaticamente linhas de código, aumentando a produtividade dos desenvolvedores. Ele é integrado a diversas IDEs e utiliza modelos de linguagem avançados.",
        link: "https://github.com/features/copilot",
        tipo: "Assistente de IA",
        exemploUso: "Completamento de código, geração de testes unitários, refatoração de código."
    },
    {
        titulo: "Poe",
        descricao: "O Poe é uma plataforma que oferece acesso a diversos modelos de linguagem, incluindo o GPT-4. Ele permite que você converse com diferentes IAs e experimente suas capacidades.",
        link: "https://poe.com/",
        tipo: "IA Conversacional",
        exemploUso: "Experimentação com diferentes modelos de linguagem, geração de textos criativos, pesquisa de informações."
    },
    {
        titulo: "Galileo.AI",
        descricao: "O Galileo.AI é uma plataforma de design generativo que utiliza IA para criar designs personalizados de logotipos, cartões de visita e outros materiais gráficos.",
        link: "https://www.galileo.ai/",
        tipo: "Design",
        exemploUso: "Criação de logotipos personalizados, design de materiais de marketing, desenvolvimento de identidade visual."
    },
    {
        titulo: "Khroma",
        descricao: "O Khroma é uma ferramenta de design que utiliza IA para gerar paletas de cores personalizadas e harmoniosas.",
        link: "https://khroma.co/",
        tipo: "Design",
        exemploUso: "Criação de paletas de cores para design gráfico, web design e interfaces de usuário."
    },
    {
        titulo: "Uizard",
        descricao: "O Uizard transforma seus esboços à mão em protótipos interativos para aplicativos e websites.",
        link: "https://uizard.io/",
        tipo: "Design",
        exemploUso: "Criação rápida de protótipos, design de interfaces de usuário."
    },
    {
        titulo: "Beautiful.ai",
        descricao: "O Beautiful.ai utiliza IA para criar apresentações profissionais de forma rápida e fácil, com layouts e designs personalizados.",
        link: "https://www.beautiful.ai/",
        tipo: "Design",
        exemploUso: "Criação de apresentações para negócios, pitch decks, relatórios."
    },
    {
        titulo: "Slidebean",
        descricao: "O Slidebean é uma ferramenta de apresentação que utiliza IA para sugerir designs e estruturas de slides, além de oferecer templates profissionais.",
        link: "https://www.slidebean.com/",
        tipo: "Design",
        exemploUso: "Criação de apresentações para pitch decks, roadmaps e relatórios."
    },
    {
        titulo: "Pitch",
        descricao: "O Pitch é uma plataforma de apresentação que utiliza IA para criar apresentações profissionais de forma rápida e fácil, com design personalizado e estrutura inteligente.",
        link: "https://pitch.com/",
        tipo: "Design",
        exemploUso: "Criação de pitch decks para investidores, apresentações de produtos e relatórios."
    },
    {
        titulo: "Dora",
        descricao: "A Dora é uma assistente virtual de design que te ajuda a criar designs personalizados para diferentes plataformas, como websites e aplicativos.",
        link: "https://dora.so/",
        tipo: "Design",
        exemploUso: "Criação de wireframes, design de interfaces de usuário, geração de ícones."
    },
    {
        titulo: "Durable",
        descricao: "O Durable é uma plataforma de design de produtos digitais que utiliza IA para gerar ideias de design e prototipar rapidamente.",
        link: "https://durable.co/",
        tipo: "Design",
        exemploUso: "Criação de produtos digitais, design de interfaces, prototipagem."
    },
    {
        titulo: "Wegic",
        descricao: "O Wegic é uma plataforma de design gráfico que utiliza IA para criar logotipos, cartões de visita e outros materiais de marca personalizados.",
        link: "https://www.wegic.com/",
        tipo: "Design",
        exemploUso: "Criação de identidade visual, design de logotipos, criação de materiais de marketing."
    },
    {
        titulo: "Framer",
        descricao: "O Framer é uma ferramenta de prototipagem que permite criar protótipos interativos de alta fidelidade para aplicativos e websites.",
        link: "https://framer.com/",
        tipo: "Design",
        exemploUso: "Criação de protótipos para testes de usabilidade, apresentação de ideias para clientes."
    },
    {
        titulo: "AdCopy.ai",
        descricao: "O AdCopy.ai é uma ferramenta de copywriting que utiliza IA para gerar cópias persuasivas para anúncios, e-mails e páginas de destino.",
        link: "https://www.adcopy.ai/",
        tipo: "Copywriting",
        exemploUso: "Criação de anúncios para redes sociais, redação de e-mails de marketing, criação de slogans."
    },
    {
        titulo: "Predis AI",
        descricao: "O Predis AI é uma plataforma que utiliza IA para prever tendências e analisar dados de mercado, auxiliando na tomada de decisões de negócios.",
        link: "https://www.predis.ai/",
        tipo: "Análise de dados",
        exemploUso: "Previsão de vendas, análise de sentimentos, segmentação de clientes."
    },
    {
        titulo: "Howler AI",
        descricao: "O Howler AI é uma plataforma de criação de conteúdo de áudio que utiliza IA para gerar vozes realistas e personalizadas para podcasts, audiobooks e outros projetos de áudio.",
        link: "https://howler.ai/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Criação de podcasts, audiobooks, anúncios de voz."
    },
    {
        titulo: "Bardeen AI",
        descricao: "O Bardeen AI é uma ferramenta de automação que permite criar fluxos de trabalho personalizados para automatizar tarefas repetitivas em diferentes aplicativos.",
        link: "https://bardeen.ai/",
        tipo: "Automação",
        exemploUso: "Automação de tarefas em ferramentas como Gmail, Google Sheets e Slack."
    },
    {
        titulo: "Dzine",
        descricao: "O Dzine é uma plataforma de design gráfico que utiliza IA para criar logotipos, cartões de visita e outros materiais de marca personalizados.",
        link: "https://dzine.ai/",
        tipo: "Design",
        exemploUso: "Criação de identidade visual, design de logotipos, criação de materiais de marketing."
    },
    {
        titulo: "Freepik",
        descricao: "O Freepik é uma plataforma de recursos gráficos que utiliza IA para gerar vetores, fotos e ícones personalizados.",
        link: "https://www.freepik.com/",
        tipo: "Recursos Gráficos",
        exemploUso: "Encontrar imagens, vetores e ícones para projetos de design."
    },
    {
        titulo: "Phygital+",
        descricao: "O Phygital+ é uma plataforma que utiliza IA para criar experiências interativas que combinam o mundo físico e digital.",
        link: "https://phygitalplus.com/",
        tipo: "Realidade Aumentada",
        exemploUso: "Criação de experiências de realidade aumentada para marketing, educação e entretenimento."
    },
    {
        titulo: "DALL-E",
        descricao: "O DALL-E é uma ferramenta de geração de imagens que utiliza IA para criar imagens realistas e artísticas a partir de descrições textuais.",
        link: "https://openai.com/dall-e-2",
        tipo: "Geração de Imagens",
        exemploUso: "Criação de artes conceituais, ilustrações para livros e artigos, design de produtos."
    },
    {
        titulo: "Phrasee",
        descricao: "O Phrasee é uma plataforma de copywriting que utiliza IA para gerar textos persuasivos para anúncios, e-mails e páginas de destino.",
        link: "https://www.phrasee.co/",
        tipo: "Copywriting",
        exemploUso: "Criação de anúncios para redes sociais, redação de e-mails de marketing, criação de slogans."
    },
    {
        titulo: "Outreach",
        descricao: "O Outreach é uma plataforma de vendas que utiliza IA para automatizar tarefas de vendas, como prospecção e acompanhamento de leads.",
        link: "https://www.outreach.io/",
        tipo: "Vendas",
        exemploUso: "Automação de e-mails de vendas, gerenciamento de leads, análise de desempenho."
    },
    {
        titulo: "ClickUp",
        descricao: "O ClickUp é uma plataforma de gerenciamento de projetos que utiliza IA para automatizar tarefas e otimizar fluxos de trabalho.",
        link: "https://clickup.com/",
        tipo: "Gerenciamento de Projetos",
        exemploUso: "Gerenciamento de projetos, acompanhamento de tarefas, colaboração em equipe."
    },
    {
        titulo: "Drift",
        descricao: "O Drift é uma plataforma de chatbots que utiliza IA para fornecer atendimento ao cliente personalizado e automatizado.",
        link: "https://drift.com/",
        tipo: "Atendimento ao Cliente",
        exemploUso: "Chatbots para websites, atendimento ao cliente 24/7."
    },
    {
        titulo: "Jasper",
        descricao: "O Jasper é uma ferramenta de copywriting que utiliza IA para gerar diversos tipos de conteúdo, como posts para redes sociais, e-mails de marketing, scripts de vídeo e muito mais.",
        link: "https://jasper.ai/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Criação de conteúdo para marketing digital, redação de artigos, geração de ideias criativas."
    },
    {
        titulo: "Rytr",
        descricao: "O Rytr é uma plataforma de copywriting que utiliza IA para gerar textos criativos e persuasivos para diversas finalidades, como anúncios, blogs e e-mails.",
        link: "https://rytr.me/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Criação de conteúdo para marketing digital, redação de artigos, geração de ideias criativas."
    },
    {
        titulo: "Textblaze",
        descricao: "O Textblaze é uma ferramenta de autocompletar texto que utiliza IA para prever e sugerir as próximas palavras, agilizando a escrita de e-mails, documentos e códigos.",
        link: "https://textblaze.com/",
        tipo: "Produtividade",
        exemploUso: "Autocompletar e-mails, documentos, códigos, chat."
    },
    {
        titulo: "Sudowrite",
        descricao: "O Sudowrite é uma ferramenta de escrita criativa que utiliza IA para ajudar escritores a gerar ideias, superar bloqueios criativos e melhorar a qualidade da escrita.",
        link: "https://sudowrite.com/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Escrita criativa, roteiros, poesia."
    },
    {
        titulo: "FluentlyAI",
        descricao: "O FluentlyAI é uma plataforma de aprendizado de idiomas que utiliza IA para personalizar o aprendizado e fornecer feedback em tempo real.",
        link: "https://fluently.ai/",
        tipo: "Educação",
        exemploUso: "Aprendizado de idiomas, conversação com um tutor virtual."
    },
    {
        titulo: "Rev AI",
        descricao: "O Rev AI é uma plataforma de transcrição de áudio e vídeo que utiliza IA para gerar transcrições precisas e rápidas.",
        link: "https://www.rev.com/",
        tipo: "Transcrição",
        exemploUso: "Transcrição de entrevistas, reuniões, podcasts."
    },
    {
        titulo: "Pictory",
        descricao: "O Pictory transforma vídeos em apresentações visuais atraentes, utilizando IA para gerar legendas, destaques e resumos.",
        link: "https://pictory.ai/",
        tipo: "Edição de Vídeo",
        exemploUso: "Criação de vídeos para redes sociais, resumos de vídeos longos."
    },
    {
        titulo: "HeyGen",
        descricao: "O HeyGen é uma plataforma que utiliza IA para criar vídeos com avatares personalizados, ideal para apresentações e vídeos explicativos.",
        link: "https://heygen.com/",
        tipo: "Geração de Vídeo",
        exemploUso: "Criação de vídeos explicativos, apresentações de produtos."
    },
    {
        titulo: "Leonardo AI",
        descricao: "O Leonardo AI é uma plataforma que permite gerar imagens de alta qualidade em diversos estilos artísticos.",
        link: "https://leonardo.ai/",
        tipo: "Geração de Imagens",
        exemploUso: "Criação de personagens, cenários e objetos para jogos e animações."
    },
    {
        titulo: "Nullface.AI",
        descricao: "O Nullface.AI é uma ferramenta especializada na geração de rostos realistas e personalizados.",
        link: "https://nullface.ai/",
        tipo: "Geração de Imagens",
        exemploUso: "Criação de avatares para redes sociais, personagens para jogos, testes de produtos."
    },
    {
        titulo: "Katteb",
        descricao: "O Katteb é uma ferramenta de escrita assistida por IA que ajuda a criar textos mais claros e concisos, oferecendo sugestões de reescrita e correção gramatical.",
        link: "https://katteb.ai/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Redação de artigos, e-mails, relatórios."
    },
    {
        titulo: "Rewording",
        descricao: "O Rewording é uma ferramenta que utiliza IA para reescrever textos, parafraseá-los e gerar variações, garantindo originalidade e evitando plágio.",
        link: "https://rewording.tools/",
        tipo: "Geração de Conteúdo",
        exemploUso: "Criação de conteúdo único, parafraseamento de textos, geração de variações."
    },
    {
        titulo: "Elephas",
        descricao: "O Elephas é uma biblioteca de código aberto para construir e treinar modelos de aprendizado profundo, facilitando a pesquisa e o desenvolvimento de novas aplicações de IA.",
        link: "https://elephas.io/",
        tipo: "Desenvolvimento de IA",
        exemploUso: "Construção de modelos de linguagem, visão computacional e processamento de linguagem natural."
    },
    {
        titulo: "Tl;dv",
        descricao: "O Tl;dv é uma ferramenta de gravação e transcrição de reuniões que utiliza IA para gerar resumos e destacar pontos-chave das conversas.",
        link: "https://www.tl.dv/",
        tipo: "Transcrição",
        exemploUso: "Transcrição de reuniões, geração de notas de reunião, pesquisa em gravações."
    },
    {
        titulo: "Fireflies.ai",
        descricao: "O Fireflies.ai é uma ferramenta de gravação e transcrição de reuniões que utiliza IA para gerar transcrições precisas e pesquisáveis.",
        link: "https://fireflies.ai/",
        tipo: "Transcrição",
        exemploUso: "Transcrição de reuniões, geração de notas de reunião, pesquisa em gravações."
    },
    {
        titulo: "Udio",
        descricao: "O Udio é uma plataforma de edição de áudio que utiliza IA para remover ruídos, melhorar a qualidade do áudio e gerar legendas automaticamente.",
        link: "https://udio.co/",
        tipo: "Edição de Áudio",
        exemploUso: "Edição de podcasts, vídeos, gravações."
    },
    {
        titulo: "Suno AI",
        descricao: "O Suno AI é uma plataforma de geração de voz que utiliza IA para criar vozes realistas e personalizadas para diversos fins.",
        link: "https://www.suno.ai/",
        tipo: "Geração de Voz",
        exemploUso: "Criação de audiolivros, dublagem, anúncios."
    },
    {
        titulo: "Deepgram",
        descricao: "O Deepgram é uma plataforma de reconhecimento de fala que utiliza IA para transcrever áudio em texto com alta precisão.",
        link: "https://www.deepgram.com/",
        tipo: "Reconhecimento de Fala",
        exemploUso: "Transcrição de chamadas telefônicas, podcasts, vídeos."
    },
    {
        titulo: "Looka",
        descricao: "O Looka é uma plataforma que utiliza IA para criar logotipos personalizados e materiais de marca.",
        link: "https://looka.com/",
        tipo: "Design",
        exemploUso: "Criação de logotipos, cartões de visita, materiais de marketing."
    },
    {
        titulo: "Clipdrop",
        descricao: "O Clipdrop é uma ferramenta que utiliza IA para remover fundos de imagens, criar colagens e realizar outras edições de imagem.",
        link: "https://clipdrop.co/",
        tipo: "Edição de Imagem",
        exemploUso: "Remoção de fundo de imagens, criação de memes, design gráfico."
    },
    {
        titulo: "Autodraw",
        descricao: "O Autodraw é uma ferramenta de desenho online que utiliza IA para reconhecer e sugerir formas, tornando o desenho mais fácil e intuitivo.",
        link: "https://www.autodraw.com/",
        tipo: "Desenho",
        exemploUso: "Criação de desenhos simples, esboços, ilustrações."
    },
    {
        titulo: "Vance AI",
        descricao: "O Vance AI é uma plataforma que utiliza IA para aprimorar e editar imagens, oferecendo ferramentas como remoção de ruído, aumento de resolução, e coloração de imagens em preto e branco.",
        link: "https://vanceai.com/",
        tipo: "Edição de Imagem",
        exemploUso: "Restauração de fotos antigas, remoção de objetos indesejados, criação de artes digitais."
    },
    {
        titulo: "GTPZero",
        descricao: "O GPTZero é uma ferramenta de detecção de texto gerado por IA, projetada para identificar se um texto foi escrito por um humano ou por uma máquina como o ChatGPT.",
        link: "https://gptzero.com/",
        tipo: "Detecção de Plágio",
        exemploUso: "Verificação de originalidade de trabalhos acadêmicos, artigos e outros conteúdos escritos."
    },
    {
        titulo: "Copyleaks",
        descricao: "O Copyleaks é uma plataforma de detecção de plágio que utiliza IA para comparar textos com uma vasta base de dados, identificando qualquer semelhança e indicando a porcentagem de conteúdo original.",
        link: "https://copyleaks.com/",
        tipo: "Detecção de Plágio",
        exemploUso: "Verificação de originalidade de trabalhos acadêmicos, artigos, conteúdos de marketing."
    },
];
