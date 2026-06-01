// Busca os votos salvos no LocalStorage. Se não existirem, começa com 0.
let votosCand1 = parseInt(localStorage.getItem('votosCand1')) || 0;
let votosCand2 = parseInt(localStorage.getItem('votosCand2')) || 0;

// Seleção dos elementos do DOM
const btnCand1 = document.getElementById('btn-cand1');
const btnCand2 = document.getElementById('btn-cand2');
const btnReset = document.getElementById('btn-reset');

const txtVotosCand1 = document.getElementById('votos-cand1');
const txtVotosCand2 = document.getElementById('votos-cand2');
const txtPorcentCand1 = document.getElementById('porcent-cand1');
const txtPorcentCand2 = document.getElementById('porcent-cand2');
const txtTotalVotos = document.getElementById('total-votos');

const barraCand1 = document.getElementById('barra-cand1');
const barraCand2 = document.getElementById('barra-cand2');

// Função principal para atualizar a interface gráfica
function atualizarPainel() {
    const totalVotos = votosCand1 + votosCand2;
    
    // Atualiza os textos de contagem
    txtVotosCand1.textContent = votosCand1;
    txtVotosCand2.textContent = votosCand2;
    txtTotalVotos.textContent = totalVotos;

    // Lógica para cálculo de porcentagem e atualização das barras
    if (totalVotos > 0) {
        const porc1 = ((votosCand1 / totalVotos) * 100).toFixed(1);
        const porc2 = ((votosCand2 / totalVotos) * 100).toFixed(1);

        txtPorcentCand1.textContent = `${porc1}%`;
        txtPorcentCand2.textContent = `${porc2}%`;

        barraCand1.style.width = `${porc1}%`;
        barraCand2.style.width = `${porc2}%`;

        // Exibe o botão de reset caso haja algum voto
        btnReset.style.display = 'block';
    } else {
        // Estado inicial / Resetado
        txtPorcentCand1.textContent = '0%';
        txtPorcentCand2.textContent = '0%';
        barraCand1.style.width = '0%';
        barraCand2.style.width = '0%';
        btnReset.style.display = 'none';
    }
}

// Ouvintes de eventos (Event Listeners) para os cliques dos botões
btnCand1.addEventListener('click', () => {
    votosCand1++;
    // Salva o novo valor no navegador
    localStorage.setItem('votosCand1', votosCand1);
    atualizarPainel();
});

btnCand2.addEventListener('click', () => {
    votosCand2++;
    // Salva o novo valor no navegador
    localStorage.setItem('votosCand2', votosCand2);
    atualizarPainel();
});

btnReset.addEventListener('click', () => {
    votosCand1 = 0;
    votosCand2 = 0;
    // Limpa os dados salvos no LocalStorage
    localStorage.removeItem('votosCand1');
    localStorage.removeItem('votosMail2'); // Garante a limpeza de chaves antigas se houver
    localStorage.clear(); // Limpa tudo relacionado ao app
    atualizarPainel();
});

// Executa a função uma vez ao carregar a página para mostrar os votos que já estavam salvos
atualizarPainel();