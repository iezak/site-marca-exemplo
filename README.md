# Site Marca Exemplo

Projeto base de um site institucional simples em React + Vite.

## O que tem neste exemplo

- Cabeçalho com menu
- Rodapé
- Página inicial
- Página sobre
- Página de contato
- Formulário preparado para usar Formspree
- Layout responsivo
- Estrutura simples para publicar na Netlify

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse o endereço mostrado no terminal, normalmente:

```bash
http://localhost:5173
```

## Como publicar na Netlify

1. Suba este projeto para o GitHub.
2. Entre na Netlify.
3. Clique em "Add new site" / "Import an existing project".
4. Conecte com o repositório do GitHub.
5. Use estas configurações:

```text
Build command: npm run build
Publish directory: dist
```

## Formulário com Formspree

No arquivo:

```text
src/pages/Contato.jsx
```

Troque:

```text
https://formspree.io/f/SEU_ID_AQUI
```

pelo endpoint real gerado pelo Formspree.

## Estrutura do projeto

```text
site-marca-exemplo/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   └── Contato.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```
