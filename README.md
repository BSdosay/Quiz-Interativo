# Quiz Interativo

Um aplicativo de quiz interativo que permite aos usuários testar seus conhecimentos em diferentes categorias e níveis de dificuldade. O quiz é uma maneira divertida de aprender e desafiar a si mesmo com perguntas sobre geografia, história, ciência e muito mais.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do aplicativo, incluindo elementos como botões, contêineres e feedback.
- **CSS**: Estilização do aplicativo, tornando-o visualmente atraente e responsivo.
- **JavaScript**: Lógica do aplicativo, gerenciando o fluxo do quiz, exibição de perguntas, e controle de pontuação.

## Como Funciona

1. **Seleção de Dificuldade**: O usuário escolhe a dificuldade do quiz (Fácil, Médio ou Difícil). Cada nível possui um conjunto específico de perguntas.
2. **Exibição de Perguntas**: As perguntas são apresentadas uma a uma. Cada pergunta possui opções de resposta.
3. **Seleção de Respostas**: O usuário seleciona uma resposta clicando na opção desejada. O feedback é fornecido, informando se a resposta estava correta ou não.
4. **Navegação**: Após responder, o usuário pode avançar para a próxima pergunta ou ver o resultado final após responder todas as perguntas.
5. **Resultados**: Ao final do quiz, é exibido o número total de respostas corretas e um feedback médio baseado na pontuação.
6. **Reinício**: O usuário tem a opção de reiniciar o quiz para tentar novamente.

## Estrutura do Código

- **index.html**: Contém a estrutura HTML do aplicativo, incluindo contêineres para seleção de dificuldade, perguntas e resultados.
- **styles.css**: Estiliza o layout, botões e feedback do quiz, garantindo que o aplicativo seja agradável e fácil de usar.
- **script.js**: Contém a lógica do quiz, incluindo:
  - Definição das perguntas em um objeto `questions` com diferentes níveis de dificuldade.
  - Funções para iniciar o quiz, exibir perguntas, processar respostas e mostrar resultados.

### Comentários no Código

O código contém comentários que explicam cada função e sua finalidade, facilitando a compreensão para quem for analisar ou modificar o projeto. Exemplos de comentários no código incluem:

```javascript
// Inicia o jogo com a dificuldade selecionada
function startGame(difficulty) {
    // Reseta a pontuação e o índice da pergunta atual
    selectedDifficulty = difficulty;
    currentQuestionIndex = 0;
    score = 0;
    
    // Define o número total de perguntas com base na dificuldade
    if (difficulty === "easy") {
        totalQuestions = 10;
    } else if (difficulty === "medium") {
        totalQuestions = 20;
    } else {
        totalQuestions = 30;
    }
    
    // Mostra o contêiner do quiz e oculta o de seleção de dificuldade
    difficultyContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    nextButton.classList.add("hidden");
    feedbackElement.classList.add("hidden");
    
    // Exibe as perguntas
    showQuestions();
}
