const termos = [
    // Lista de termos e descrições
    { termo: "Área de Trabalho", descricao: "Espaço principal na tela de um computador onde ícones de arquivos, pastas e aplicativos são exibidos." },
    { termo: "Barra de Tarefas", descricao: "Barra horizontal na parte inferior da tela do computador que mostra programas abertos e contém o botão Iniciar." },
    { termo: "Browser", descricao: "Programa utilizado para navegar na internet, como Google Chrome, Mozilla Firefox, e Microsoft Edge." },
    { termo: "Caixa de Entrada", descricao: "Seção de um cliente de e-mail onde mensagens recebidas são armazenadas e exibidas." },
    { termo: "Disco Rígido", descricao: "Dispositivo de armazenamento principal de um computador, usado para armazenar dados permanentemente." },
    { termo: "E-mail", descricao: "Serviço de comunicação que permite enviar e receber mensagens através da internet." },
    { termo: "Mouse", descricao: "Dispositivo periférico utilizado para apontar, clicar e interagir com elementos na tela de um computador." },
    { termo: "Periférico", descricao: "Dispositivo externo conectado a um computador, usado para realizar funções específicas além das capacidades básicas do computador." },
    { termo: "Rede", descricao: "Conjunto de computadores e dispositivos conectados entre si para compartilhamento de recursos e dados." },
    { termo: "Teclado", descricao: "Dispositivo periférico composto por teclas, usado para inserir dados em um computador." },
    { termo: "URL", descricao: "Endereço único utilizado para acessar páginas e recursos na internet." },
    { termo: "Menu Iniciar", descricao: "Elemento de interface no Windows que fornece acesso a programas, configurações e funções do sistema." },
    { termo: "Ícones", descricao: "Representações gráficas pequenas usadas para indicar programas, arquivos e funções em sistemas computacionais." },
    { termo: "Lixeira", descricao: "Local no sistema operacional onde arquivos deletados são temporariamente armazenados antes da exclusão permanente." },
    { termo: "Painel de Controle", descricao: "Ferramenta no Windows que permite aos usuários visualizar e ajustar as configurações do sistema." },
    { termo: "Microsoft Edge", descricao: "Navegador web desenvolvido pela Microsoft, incluído no Windows 10 e versões posteriores." },
    { termo: "Cortana", descricao: "Assistente virtual inteligente desenvolvida pela Microsoft, integrada ao Windows 10." },
    { termo: "Task Manager", descricao: "Utilitário no Windows que fornece informações sobre os programas e processos em execução no computador." },
    { termo: "Windows Defender", descricao: "Software antivírus integrado ao Windows, projetado para proteger o computador contra malware." },
    { termo: "Windows Update", descricao: "Serviço da Microsoft que fornece atualizações de software para o sistema operacional Windows e seus componentes." },
    { termo: "Windows Store", descricao: "Loja digital para o Windows, oferecendo aplicativos, jogos e conteúdo digital." },
    { termo: "Windows Explorer", descricao: "Gerenciador de arquivos no Windows, utilizado para navegar e gerenciar arquivos e pastas." },
    { termo: "Windows Media Player", descricao: "Reprodutor de mídia para Windows, suportando diversos formatos de áudio e vídeo." },
    { termo: "Área de Trabalho", descricao: "Espaço principal na tela de um computador onde ícones de arquivos, pastas e aplicativos são exibidos." },
    { termo: "Barra de Tarefas", descricao: "Barra horizontal na parte inferior da tela do computador que mostra programas abertos e contém o botão Iniciar." },
    { termo: "Menu Iniciar", descricao: "Menu que fornece acesso rápido a programas, configurações e áreas de desligamento do sistema." },
    { termo: "Explorador de Arquivos", descricao: "Ferramenta para navegar e gerenciar os arquivos e pastas armazenados no computador." },
    { termo: "Microsoft Edge", descricao: "Navegador de internet padrão do Windows para acessar a web." },
    { termo: "Cortana", descricao: "Assistente virtual da Microsoft integrada ao Windows para ajudar com tarefas e buscas." },
    { termo: "Windows Defender", descricao: "Software antivírus integrado ao Windows para proteger contra malware e ameaças." },
    { termo: "Painel de Controle", descricao: "Componente que permite modificar configurações do sistema e controlar aspectos como som, tela e programas." },
    { termo: "Lixeira", descricao: "Local onde os arquivos excluídos são temporariamente armazenados antes da eliminação permanente." },
    { termo: "Atualizações Automáticas", descricao: "Recurso que mantém o sistema operacional atualizado com as últimas correções e recursos." },
    { termo: "BitLocker", descricao: "Recurso de segurança que criptografa os dados no disco rígido para proteger contra acesso não autorizado." },
    { termo: "DirectX", descricao: "Conjunto de APIs para lidar com tarefas relacionadas a multimídia, especialmente jogos e vídeo." },
    { termo: "Teclas de Atalho", descricao: "Combinações de teclas que executam uma ação específica rapidamente." },
    { termo: "Backup e Restauração", descricao: "Ferramentas para criar cópias de segurança dos dados e restaurá-los quando necessário." },
    { termo: "Gerenciador de Tarefas", descricao: "Utilitário que mostra os programas e processos em execução e oferece informações sobre o desempenho do sistema." },
    { termo: "Modo de Compatibilidade", descricao: "Configuração que permite executar programas mais antigos no sistema operacional atual." },
    { termo: "Snipping Tool", descricao: "Ferramenta para capturar e editar trechos da tela." },
    { termo: "OneDrive", descricao: "Serviço de armazenamento em nuvem integrado ao Windows para salvar arquivos online." },
    { termo: "Bloco de Notas", descricao: "Editor de texto simples que permite criar e editar arquivos de texto." },
    { termo: "Paint", descricao: "Programa de desenho que permite criar e editar imagens gráficas." },
    { termo: "Prompt de Comando", descricao: "Interface de linha de comando usada para executar comandos no Windows." },
    { termo: "Modo Seguro", descricao: "Opção de inicialização que carrega o Windows com um conjunto mínimo de drivers e serviços para diagnóstico de problemas." },
    { termo: "Dispositivos e Impressoras", descricao: "Seção do Painel de Controle que mostra os dispositivos conectados ao computador." },
    { termo: "Central de Ações", descricao: "Painel que reúne notificações e atalhos para configurações comuns." },
    { termo: "Personalização", descricao: "Configurações que permitem alterar a aparência do sistema, como tema, cores e fontes." },
    { termo: "Rede e Compartilhamento", descricao: "Configurações para gerenciar conexões de rede e opções de compartilhamento no Windows." },
    { termo: "Restauração do Sistema", descricao: "Recurso que permite reverter o estado do sistema operacional para um ponto anterior no tempo." },
    { termo: "Virtual Desktop", descricao: "Recurso que permite criar múltiplas áreas de trabalho virtuais para organizar aplicativos e janelas." },
    { termo: "Acessibilidade", descricao: "Recursos projetados para ajudar pessoas com necessidades especiais a usar o computador mais facilmente." },
    { termo: "Criptografia de Dados", descricao: "Proteção de informações convertendo-as em um formato inacessível sem uma chave de decodificação." },
    { termo: "Reconhecimento de Fala", descricao: "Recurso que permite controlar o computador e ditar textos usando comandos de voz." },
    { termo: "Central de Rede e Compartilhamento", descricao: "Área que fornece opções para configurar, gerenciar e solucionar problemas de rede." },
    { termo: "Sistema de Arquivos", descricao: "Método usado pelo Windows para organizar e armazenar arquivos em dispositivos de armazenamento." },
    { termo: "Editor de Registro", descricao: "Ferramenta avançada que armazena configurações e opções do Windows." },
    { termo: "Modo Tablet", descricao: "Configuração que otimiza a interface do usuário para dispositivos touchscreen." },
    { termo: "Assistente de Concentração", descricao: "Recurso que ajuda a reduzir distrações, limitando notificações durante o trabalho." },
    { termo: "Sincronização de Configurações", descricao: "Permite manter as configurações pessoais consistentes em vários dispositivos Windows." },
    { termo: "Limpeza de Disco", descricao: "Ferramenta para liberar espaço no disco rígido removendo arquivos desnecessários." },
    { termo: "Gerenciador de Dispositivos", descricao: "Exibe e permite gerenciar os drivers dos dispositivos de hardware do computador." },
    { termo: "Armazenamento Reservado", descricao: "Espaço no disco rígido reservado pelo Windows para atualizações e uso do sistema." },
    { termo: "Visualizador de Eventos", descricao: "Ferramenta que exibe logs detalhados sobre eventos e erros do sistema." },
    { termo: "Política de Grupo", descricao: "Conjunto de regras que controlam o ambiente de trabalho de contas de usuário e contas de computador." },
    { termo: "Hyper-V", descricao: "Recurso de virtualização que permite criar e gerenciar máquinas virtuais." },
    { termo: "Windows Ink", descricao: "Plataforma integrada para experiências de caneta, permitindo a anotação direta em dispositivos compatíveis." },
    { termo: "Tela de Toque", descricao: "Interface de usuário sensível ao toque, permitindo a interação direta com o conteúdo exibido." },
    { termo: "Aplicativo (App)", descricao: "Programa de software projetado para realizar uma função específica diretamente para o usuário." },
    { termo: "Sistema Operacional", descricao: "Software que gerencia o hardware do smartphone e os recursos de software, como iOS e Android." },
    { termo: "Bluetooth", descricao: "Tecnologia que permite a troca de dados sem fio entre dispositivos em curta distância." },
    { termo: "Wi-Fi", descricao: "Tecnologia que permite a conexão de dispositivos à internet sem fio através de pontos de acesso." },
    { termo: "GPS", descricao: "Sistema de Posicionamento Global que fornece informações de localização e navegação." },
    { termo: "Mensagem de Texto (SMS)", descricao: "Serviço de mensagem curta para o envio de mensagens de texto entre telefones celulares." },
    { termo: "4G/5G", descricao: "Padrões de tecnologia para redes celulares, oferecendo diferentes velocidades de conexão à internet." },
    { termo: "Bateria", descricao: "Componente que fornece energia elétrica ao celular, geralmente recarregável." },
    { termo: "Carregador", descricao: "Dispositivo usado para recarregar a bateria do celular." },
    { termo: "Modo Avião", descricao: "Configuração que desativa todas as transmissões sem fio do dispositivo, permitindo seu uso em aviões." },
    { termo: "Assistente Virtual", descricao: "Software que pode realizar tarefas ou serviços para um indivíduo baseado em comandos de voz ou texto." },
    { termo: "NFC", descricao: "Comunicação de Campo Próximo, tecnologia que permite a comunicação sem fio entre dispositivos em curta distância." },
    { termo: "Selfie", descricao: "Fotografia que uma pessoa tira de si mesma, geralmente com a câmera frontal de um smartphone." },
    { termo: "Emojis", descricao: "Pequenas imagens ou ícones usados para expressar ideias ou emoções em mensagens digitais." },
    { termo: "Screenshot", descricao: "Imagem capturada da tela do dispositivo, mostrando o conteúdo exibido no momento da captura." },
    { termo: "Modo Noturno", descricao: "Configuração que ajusta a cor e o brilho da tela para minimizar a fadiga ocular em ambientes escuros." },
    { termo: "Notificações", descricao: "Alertas que informam sobre novas mensagens, atualizações de aplicativos ou outras atividades." },
    { termo: "Bloqueio de Tela", descricao: "Recurso de segurança que impede o acesso não autorizado ao dispositivo." },
    { termo: "Papel de Parede", descricao: "Imagem personalizada definida como fundo da tela inicial ou de bloqueio do celular." },
    { termo: "Armazenamento em Nuvem", descricao: "Serviço que permite armazenar dados em servidores remotos acessíveis via internet." },
    { termo: "Hotspot", descricao: "Funcionalidade que transforma o dispositivo em um ponto de acesso Wi-Fi, permitindo a outros dispositivos se conectar à internet." },
    { termo: "Multitarefa", descricao: "Habilidade do sistema operacional de executar várias aplicações ao mesmo tempo." },
    { termo: "Roaming", descricao: "Serviço que permite o uso do celular para voz ou dados quando fora da área de cobertura da operadora original." },
    { termo: "Chip", descricao: "Pequeno cartão removível que contém as informações do usuário da rede celular, permitindo acesso à rede." },
    { termo: "Câmera Dupla/Tripla", descricao: "Configuração de câmera em smartphones que inclui duas ou mais lentes para melhorar a qualidade da foto." },
    { termo: "QR Code", descricao: "Código de barras bidimensional que pode ser escaneado para acessar informações ou websites." },
    { termo: "Modo Economia de Energia", descricao: "Configuração que reduz o uso de energia do celular para prolongar a vida útil da bateria." },
    { termo: "Filtro de Chamadas", descricao: "Recurso que identifica e bloqueia chamadas indesejadas ou spam." },
    { termo: "Animações", descricao: "Efeitos visuais aplicados às transições entre telas e aplicativos para melhorar a experiência do usuário." },
    { termo: "Widgets", descricao: "Mini-aplicativos que podem ser adicionados à tela inicial para acesso rápido a informações ou funcionalidades." },
    { termo: "Rede Móvel", descricao: "Conexão de internet fornecida pela operadora de celular através de tecnologias como 3G, 4G ou 5G." },
    { termo: "Código PIN", descricao: "Número de segurança usado para proteger o acesso ao cartão SIM e às funções do celular." },
    { termo: "Modo Retrato", descricao: "Recurso de câmera que destaca o sujeito da foto, desfocando o fundo para efeito de profundidade." },
    { termo: "Reinicialização", descricao: "Processo de desligar e ligar novamente o dispositivo para solucionar problemas ou atualizar o sistema." },
    { termo: "Tethering", descricao: "Compartilhamento da conexão de internet do celular com outros dispositivos, geralmente via Wi-Fi, Bluetooth ou cabo USB." },
    { termo: "Localização Geográfica", descricao: "Recurso que permite ao aplicativo ou serviço determinar e utilizar a localização física atual do dispositivo." },
    { termo: "Modo Paisagem", descricao: "Orientação horizontal da tela, geralmente usada para visualização de mídia ou jogos." },
    { termo: "Sincronização", descricao: "Processo de atualizar e manter consistentes as informações entre o celular e outros dispositivos ou serviços online." },
    { termo: "Limpeza de Cache", descricao: "Remoção de dados temporários armazenados para acelerar o carregamento de aplicativos e websites." },
    { termo: "Restauração de Fábrica", descricao: "Processo de redefinir o software do dispositivo para suas configurações originais de fábrica." },
    { termo: "Reconhecimento Facial", descricao: "Tecnologia de segurança que utiliza a identificação facial para desbloquear o dispositivo." },
    { termo: "Personalização de Toques", descricao: "Ajuste que permite ao usuário alterar o som de chamadas recebidas, notificações ou alarmes." },
    { termo: "Modo Concentração", descricao: "Configuração que ajuda a reduzir distrações limitando notificações e alertas." },
    { termo: "Dual SIM", descricao: "Capacidade de um celular de operar com dois cartões SIM de diferentes operadoras simultaneamente." },
    { termo: "Lentes de Realidade Aumentada", descricao: "Recurso de câmera que sobrepõe elementos digitais à imagem real capturada pela câmera." },
    { termo: "Modo Manual da Câmera", descricao: "Permite ao usuário ajustar manualmente configurações da câmera como ISO, velocidade do obturador e abertura." },
    { termo: "Interface do Usuário", descricao: "Aspecto visual e interativo do software com o qual o usuário interage diretamente." },
    { termo: "Gestos Multitoque", descricao: "Interações que utilizam vários pontos de toque simultâneos na tela, como pinçar para zoom." },
    { termo: "Atualizações de Software", descricao: "Downloads de melhorias, correções de segurança e novos recursos para o sistema operacional ou aplicativos." },
];


let termosUsados = [];
let termoAtual = {};

const termoEl = document.getElementById('termo');
const descricaoEl = document.getElementById('descricao');
const novoTermoBtn = document.getElementById('novoTermo');
const mostrarDescricaoBtn = document.getElementById('mostrarDescricao');
const reiniciarBtn = document.getElementById('reiniciar');

function gerarTermo() {
    if (termosUsados.length === termos.length) {
        alert("Todos os termos foram mostrados. Reinicie o jogo.");
        return;
    }

    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * termos.length);
    } while (termosUsados.includes(indiceAleatorio));

    termosUsados.push(indiceAleatorio);
    termoAtual = termos[indiceAleatorio];
    termoEl.textContent = termoAtual.termo;
    descricaoEl.style.display = 'none';
    mostrarDescricaoBtn.style.display = 'inline';

    // Adicionar termo sorteado à lista de termos sorteados
    const termosSorteadosEl = document.getElementById('termosSorteados');
    const termoSorteadoEl = document.createElement('div');
    termoSorteadoEl.classList.add('termoSorteado');
    termoSorteadoEl.textContent = termoAtual.termo;
    termosSorteadosEl.appendChild(termoSorteadoEl);
}

function mostrarDescricao() {
    descricaoEl.textContent = termoAtual.descricao;
    descricaoEl.style.display = 'block';
}

function reiniciarJogo() {
    termosUsados = [];
    termoEl.textContent = '';
    descricaoEl.textContent = '';
    descricaoEl.style.display = 'none';
    mostrarDescricaoBtn.style.display = 'none';
    reiniciarBtn.style.display = 'none';
}

novoTermoBtn.addEventListener('click', () => {
    gerarTermo();
    reiniciarBtn.style.display = 'inline';
});

mostrarDescricaoBtn.addEventListener('click', mostrarDescricao);

reiniciarBtn.addEventListener('click', reiniciarJogo);