# 📝 Gerenciador de Notas - Local Storage

> Um aplicativo web simples e eficiente para gerenciar suas notas pessoais, utilizando Local Storage para persistência de dados.

## 🚀 Status do Projeto

**🔧 Em Desenvolvimento** - Versão atual: 1.0.0

## 📋 Sobre o Projeto

O Gerenciador de Notas é uma aplicação web desenvolvida com tecnologias front-end puras (HTML, CSS e JavaScript) que permite aos usuários criar, visualizar e remover notas de forma simples e intuitiva. Todas as notas são armazenadas localmente no navegador usando Local Storage.

## ✨ Funcionalidades

- ✅ **Adicionar Notas**: Criação de novas notas com título personalizado
- ✅ **Listar Notas**: Visualização de todas as notas salvas
- ✅ **Remover Notas**: Exclusão individual de notas
- ✅ **Persistência Local**: Armazenamento automático no Local Storage
- ✅ **Validação de Entrada**: Verificação de campos obrigatórios
- ✅ **Prevenção de Duplicatas**: Impede criação de notas com títulos idênticos
- ✅ **Interface Responsiva**: Design adaptável para diferentes dispositivos
- ✅ **Atalhos de Teclado**: Adição de notas com a tecla Enter

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Lógica de negócio e manipulação do DOM
- **Local Storage API**: Persistência de dados no navegador

## 📁 Estrutura do Projeto

```
gerenciador-de-notas-localstorage/
├── index.html          # Página principal da aplicação
├── script.js           # Lógica JavaScript e funcionalidades
├── style.css           # Estilos e layout da aplicação
└── README.md           # Documentação do projeto
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer servidor web (pode ser executado localmente)

### Instalação

1. **Clone ou baixe o projeto**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   # ou baixe o ZIP e extraia
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd gerenciador-de-notas-localstorage
   ```

3. **Abra o arquivo index.html**
   - Duplo clique no arquivo `index.html`
   - Ou abra seu navegador e arraste o arquivo para a janela
   - Ou use um servidor local (opcional):
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```

## 💡 Como Usar

1. **Adicionar uma Nova Nota**:
   - Digite o título da nota no campo de entrada
   - Clique no botão "Adicionar Nota" ou pressione Enter
   - A nota será automaticamente salva e exibida na lista

2. **Visualizar Notas**:
   - Todas as notas salvas aparecem na seção "Minhas Notas"
   - Se não houver notas, uma mensagem informativa será exibida

3. **Remover uma Nota**:
   - Clique no botão "Remover" ao lado da nota desejada
   - A nota será permanentemente excluída

## 🔧 Funcionalidades Técnicas

### Armazenamento de Dados
- Utiliza `localStorage` para persistir dados
- Chave de armazenamento: `'notas'`
- Formato: Array de objetos JSON

### Estrutura de Dados
```javascript
{
  id: "timestamp_único",
  titulo: "Título da nota"
}
```

### Validações Implementadas
- Verificação de campos vazios
- Prevenção de títulos duplicados
- Sanitização de entrada de dados

## 👨‍💻 Desenvolvedor Athos dos Santos

**Status**: Em construção 🚧

---

*Última atualização: Dezembro 2024*