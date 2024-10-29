const questions = {
    easy: [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
            answer: 1
        },
        {
            question: "Qual é a cor do céu?",
            options: ["Verde", "Azul", "Vermelho", "Amarelo"],
            answer: 1
        },
        {
            question: "Qual animal é conhecido como o 'rei da selva'?",
            options: ["Tigre", "Leão", "Elefante", "Urso"],
            answer: 1
        },
        {
            question: "Qual é 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "Quantas patas tem um cachorro?",
            options: ["2", "4", "6", "8"],
            answer: 1
        },
        {
            question: "Qual fruta é conhecida como a 'banana verde'?",
            options: ["Banana", "Maçã", "Laranja", "Pera"],
            answer: 0
        },
        {
            question: "Qual é o som que um gato faz?",
            options: ["Miau", "Au Au", "Rugido", "Cacarejo"],
            answer: 0
        },
        {
            question: "Qual é a estação mais fria do ano?",
            options: ["Verão", "Inverno", "Primavera", "Outono"],
            answer: 1
        },
        {
            question: "Qual é a capital da França?",
            options: ["Londres", "Paris", "Berlim", "Madri"],
            answer: 1
        },
        {
            question: "O que a abelha produz?",
            options: ["Leite", "Mel", "Água", "Vinho"],
            answer: 1
        }
    ],
    medium: [
        {
            question: "Qual é o maior planeta do sistema solar?",
            options: ["Terra", "Júpiter", "Marte", "Saturno"],
            answer: 1
        },
        {
            question: "Qual é o continente mais populoso?",
            options: ["África", "Ásia", "América", "Europa"],
            answer: 1
        },
        {
            question: "Quem escreveu 'Dom Casmurro'?",
            options: ["Machado de Assis", "José de Alencar", "Carlos Drummond de Andrade", "Clarice Lispector"],
            answer: 0
        },
        {
            question: "Qual é a fórmula da água?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: 0
        },
        {
            question: "Qual animal é conhecido por sua habilidade de imitar sons?",
            options: ["Papagaio", "Gato", "Cachorro", "Cavalo"],
            answer: 0
        },
        {
            question: "Em que ano o Brasil ganhou a Copa do Mundo pela primeira vez?",
            options: ["1950", "1940", "1930", "1960"],
            answer: 2
        },
        {
            question: "Qual é o país conhecido como a terra do sol nascente?",
            options: ["China", "Japão", "Coreia", "Tailândia"],
            answer: 1
        },
        {
            question: "Qual é o símbolo químico do ouro?",
            options: ["Ag", "Au", "Pb", "Fe"],
            answer: 1
        },
        {
            question: "Quem pintou a obra 'O Grito'?",
            options: ["Van Gogh", "Munch", "Picasso", "Monet"],
            answer: 1
        },
        {
            question: "Qual é o rio mais longo do mundo?",
            options: ["Nilo", "Amazonas", "Yangtze", "Mississippi"],
            answer: 0
        },
        {
            question: "Qual é a capital da Itália?",
            options: ["Roma", "Milão", "Veneza", "Florença"],
            answer: 0
        },
        {
            question: "Qual é o país com maior número de falantes de espanhol?",
            options: ["Espanha", "México", "Argentina", "Colômbia"],
            answer: 1
        },
        {
            question: "Qual é o maior mamífero do mundo?",
            options: ["Elefante", "Baleia Azul", "Girafa", "Urso"],
            answer: 1
        },
        {
            question: "Qual o continente onde está o deserto do Saara?",
            options: ["África", "Ásia", "América", "Oceania"],
            answer: 0
        },
        {
            question: "Qual elemento é representado pelo símbolo 'Na'?",
            options: ["Nitrato", "Sódio", "Potássio", "Cálcio"],
            answer: 1
        },
        {
            question: "Qual é a capital da Austrália?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: 2
        }
    ],
    hard: [
        {
            question: "Qual é a fórmula química do metano?",
            options: ["CH4", "C2H6", "CO2", "H2O"],
            answer: 0
        },
        {
            question: "Quem foi o primeiro homem a pisar na Lua?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            answer: 1
        },
        {
            question: "Qual é a capital do Canadá?",
            options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
            answer: 1
        },
        {
            question: "Qual é a distância média da Terra ao Sol?",
            options: ["149.6 milhões de km", "100 milhões de km", "200 milhões de km", "50 milhões de km"],
            answer: 0
        },
        {
            question: "Qual é o maior órgão do corpo humano?",
            options: ["Coração", "Fígado", "Pele", "Pulmões"],
            answer: 2
        },
        {
            question: "Em que ano foi proclamada a Independência do Brasil?",
            options: ["1822", "1888", "1500", "1750"],
            answer: 0
        },
        {
            question: "Qual é o nome do primeiro livro da Bíblia?",
            options: ["Gênesis", "Êxodo", "Levítico", "Números"],
            answer: 0
        },
        {
            question: "Qual é a capital da Rússia?",
            options: ["Moscovo", "São Petersburgo", "Kiev", "Minsk"],
            answer: 0
        },
        {
            question: "Qual é a língua oficial do Brasil?",
            options: ["Espanhol", "Inglês", "Francês", "Português"],
            answer: 3
        },
        {
            question: "Quem escreveu 'A Divina Comédia'?",
            options: ["Dante Alighieri", "Shakespeare", "Camões", "Homer"],
            answer: 0
        },
        {
            question: "Qual é a velocidade da luz?",
            options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"],
            answer: 0
        },
        {
            question: "Qual é o nome do maior vulcão ativo do mundo?",
            options: ["Kilauea", "Mauna Loa", "Etna", "Vesúvio"],
            answer: 1
        },
        {
            question: "Quem foi o último imperador do Brasil?",
            options: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Joaquim Nabuco"],
            answer: 1
        },
        {
            question: "Qual é a principal fonte de energia do Sol?",
            options: ["Fusão nuclear", "Fissão nuclear", "Combustão", "Eletromagnetismo"],
            answer: 0
        },
        {
            question: "Qual é a capital da Suécia?",
            options: ["Estocolmo", "Copenhague", "Oslo", "Helsinque"],
            answer: 0
        },
        {
            question: "Quem desenvolveu a teoria da relatividade?",
            options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
            answer: 1
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let selectedDifficulty = '';

const elements = {
    difficultyContainer: document.getElementById("difficulty-container"),
    quizContainer: document.getElementById("quiz-container"),
    questionElement: document.getElementById("question"),
    optionsContainer: document.getElementById("options"),
    nextButton: document.getElementById("next-button"),
    scoreContainer: document.getElementById("score-container"),
    scoreElement: document.getElementById("score"),
    restartButton: document.getElementById("
