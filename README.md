
# 🔐 Decodificador de Texto - Alura Challenge & ONE

Esta aplicação foi desenvolvida como o primeiro desafio do programa **Oracle Next Education (ONE) em parceria com a Alura**. Trata-se de uma ferramenta web capaz de criptografar e descriptografar textos inseridos pelo usuário, permitindo a troca de mensagens secretas de forma divertida.

## 🚀 Funcionalidades do Sistema

* **Criptografia Customizada:** Substitui as vogais do texto por chaves específicas (ex: "a" vira "ai", "e" vira "enter").
* **Descriptografia Inversa:** Reconhece as chaves e reconverte o texto criptografado de volta para a palavra original.
* **Filtro e Normalização Automática:** Sanitiza o input do usuário em tempo real, convertendo letras maiúsculas e removendo acentos/caracteres especiais via código.
* **Sistema de Alternância de Tema (Dark Mode):** Altera dinamicamente as variáveis de cores (`:root`) entre o modo claro e escuro.
* **Área de Transferência Automática:** Botão integrado para copiar o resultado gerado direto para o clipboard do sistema operacional.
* **Notificações em Tela (Toast):** Alertas flutuantes dinâmicos e temporizados que confirmam as ações do usuário (ex: "Texto copiado").
* **Layout Totalmente Responsivo:** Design adaptável via CSS Grid e Media Queries para uma experiência fluida em computadores, tablets e smartphones.

---

## 🛠️ Regras de Criptografia Utilizadas

O sistema trabalha com uma matriz de substituição de vogais baseada nas seguintes diretrizes:
* A letra **"a"** é convertida para **"ai"**
* A letra **"e"** é convertida para **"enter"**
* A letra **"i"** é convertida para **"imes"**
* A letra **"o"** é convertida para **"ober"**
* A letra **"u"** é convertida para **"ufat"**

> **Exemplo:** A palavra `"gato"` se transforma em `"gaitober"`.

---

## 🧠 Conceitos Técnicos Aplicados

* **ES6 JavaScript Modules:** Organização modular do código dividida em múltiplos arquivos (`main.js`, `encrypt.js`, `decrypt.js`, `toast.js`, `toggle-theme.js`).
* **Manipulação de Strings Avançada:** Utilização de `.normalize("NFD")` acoplado a Expressões Regulares (`replace(/[\u0300-\u036f]/g, "")`) para expurgar acentuações grafográficas automaticamente.
* **Controle Dinâmico de Estado do DOM:** Uso do mecanismo de classes do CSS (`.active`, `.inative`) controlado via JavaScript para exibir ou ocultar os contêineres de resultados e toasts.
* **Arquitetura CSS Moderna:** Uso extensivo de variáveis customizadas (`--dark-blue`, `--gray`), transições suaves de cor de fundo e técnicas modernas de centralização (Flexbox e Grid).

---

## 📂 Estrutura de Arquivos

```text
├── index.html            # Estrutura principal semântica da página
├── styles/
│   ├── main.css          # Estilos gerais, grid estrutural e variáveis de tema
│   └── toast.css         # Animações e posicionamento do alerta temporizado
├── scripts/
│   ├── main.js           # Orquestrador de eventos principais e normalização
│   ├── patterns.js       # Dicionário/Matriz com as chaves de substituição
│   ├── encrypt.js        # Lógica de criptografia caractere por caractere
│   ├── decrypt.js        # Lógica de engenharia reversa com replaceAll
│   ├── toast.js          # Controle e gerenciamento do timeout da notificação
│   └── toggle-theme.js   # Manipulação e alteração visual do tema (Light/Dark)
└── assets/               # Imagens, logotipos e ícones utilizados

```

---

## 💻 Como Executar

O projeto foi construído utilizando módulos nativos do JavaScript (`type="module"`), por isso ele requer um servidor local simples para rodar corretamente (evitando bloqueios de política CORS do navegador):

1. Baixe ou clone os arquivos do repositório.
2. Abra a pasta do projeto em um editor de código (como o VS Code).
3. Inicie um servidor local utilizando extensões como a **Live Server** do VS Code (ou via terminal com Python/NodeJS).
4. Acesse o endereço local gerado pelo servidor no navegador para testar a aplicação.

---

💡 *Projeto desenvolvido como critério de avaliação no Challenge de Iniciante em Programação da trilha Oracle Next Education.*

```

```
