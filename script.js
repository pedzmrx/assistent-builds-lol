const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form');

const askIA = async (question, game, apiKey) => {
    const model = 'gemini-2.5-flash';
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const ask = ``
    const contets = [{
        parts: [{
            text: ask
        }]
    }]

    // Chamada da API Gemini
    const response = await fetch()

}

const sendForm = (event) => {
    event.preventDefault();
    const apiKey = apiKeyInput.value
    const game = gameSelect.value;
    const question = questionInput.value;

    if (apiKey == '' || game == '' || question == '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    askButton.disabled = true;
    askButton.textContent = 'Perguntando...';
    askButton.classList.add('loading');

    try {
        // perguntar para IA.
        askIA(question, game, apiKey)
    } catch (error) {
        console.log('Erro ao enviar a pergunta:', error);
        
    } finally {
        askButton.disabled = false;
        askButton.textContent = 'Perguntar';
        askButton.classList.remove('loading');
    }
}

form.addEventListener('submit', sendForm);