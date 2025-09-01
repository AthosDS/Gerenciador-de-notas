// Elementos do DOM
const inputTitulo = document.getElementById('tituloNota');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaNotas = document.getElementById('listaNotas');

// Chave para armazenar no Local Storage
const CHAVE_NOTAS = 'notas';

// Carregar notas do Local Storage
function carregarNotas() {
    const notasString = localStorage.getItem(CHAVE_NOTAS);
    
    if (notasString) {
        return JSON.parse(notasString);
    } else {
        return [];
    }
}

// Salvar notas no Local Storage
function salvarNotas(notas) {
    localStorage.setItem(CHAVE_NOTAS, JSON.stringify(notas));
}

// Gera ID único para cada nota
function gerarId() {
    return Date.now().toString();
}

// Adicionar uma nova nota
function adicionarNota() {
    const titulo = inputTitulo.value.trim();
    
    // Verificar se o título não está vazio
    if (titulo === '') {
        alert('Por favor, digite um título para a nota!');
        return;
    }
    
    // Carregar notas existentes
    const notas = carregarNotas();
    
    // Verificar se já existe uma nota com o mesmo título
    const notaExistente = notas.find(nota => nota.titulo === titulo);
    if (notaExistente) {
        alert('Já existe uma nota com este título!');
        return;
    }
    
    // Criar nova nota
    const novaNota = {
        id: gerarId(),
        titulo: titulo
    };
    
    // Adicionar a nova nota ao array
    notas.push(novaNota);
    
    // Salvar no Local Storage
    salvarNotas(notas);
    
    // Limpar o campo de entrada
    inputTitulo.value = '';
    
    // Atualizar a lista na tela
    exibirNotas();
}

// Remoção de uma nota
function removerNota(id) {
    // Carregar notas existentes
    const notas = carregarNotas();
    
    // Filtrar as notas, removendo a nota com o ID especificado
    const notasAtualizadas = notas.filter(nota => nota.id !== id);
    
    // Salvar no Local Storage
    salvarNotas(notasAtualizadas);
    
    // Atualizar a lista na tela
    exibirNotas();
}

// Exibir as notas na tela
function exibirNotas() {
    const notas = carregarNotas();
    
    // Limpar a lista
    listaNotas.innerHTML = '';
    
    // Verificar se há notas
    if (notas.length === 0) {
        const mensagemVazia = document.createElement('li');
        mensagemVazia.className = 'mensagem-vazia';
        mensagemVazia.textContent = 'Nenhuma nota encontrada. Adicione sua primeira nota!';
        listaNotas.appendChild(mensagemVazia);
        return;
    }
    
    // Criar elementos para cada nota
    notas.forEach(nota => {
        const itemNota = document.createElement('li');
        itemNota.className = 'nota-item';
        
        const tituloSpan = document.createElement('span');
        tituloSpan.className = 'nota-titulo';
        tituloSpan.textContent = nota.titulo;
        
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn-remover';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            removerNota(nota.id);
        };
        
        itemNota.appendChild(tituloSpan);
        itemNota.appendChild(btnRemover);
        listaNotas.appendChild(itemNota);
    });
}

// Event listeners
btnAdicionar.addEventListener('click', adicionarNota);

// Permitir adicionar nota pressionando Enter
inputTitulo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarNota();
    }
});

// Carregar e exibir notas quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    exibirNotas();
});