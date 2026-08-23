# aeliteestrangeira.github.io

Portfólio principal de **Kauã Silbershlach Parodes**, publicado em:

<https://aeliteestrangeira.github.io/>

## Arquitetura JavaScript

O repositório mantém a separação entre ativos, configuração, aplicação, camada web, arquivos estáticos e testes.

```text
.
├── _build/                     # Artefato gerado
├── assets/
│   ├── css/app.css
│   ├── js/app.js
│   ├── vendor/topbar.js
│   └── tailwind.config.js
├── config/
│   ├── config.js
│   ├── dev.js
│   ├── prod.js
│   ├── runtime.js
│   └── test.js
├── lib/
│   ├── my_app/application.js
│   ├── my_app_web/
│   │   ├── components/
│   │   ├── controllers/
│   │   ├── endpoint.js
│   │   ├── gettext.js
│   │   ├── router.js
│   │   └── telemetry.js
│   ├── my_app.js
│   └── my_app_web.js
├── priv/
│   ├── gettext/
│   └── static/
├── test/
├── package.json
└── README.md
```

## Aplicações independentes

| Destino | Finalidade | Repositório |
| --- | --- | --- |
| [`/`](https://aeliteestrangeira.github.io/) | Portfólio principal | [`aeliteestrangeira.github.io`](https://github.com/aeliteestrangeira/aeliteestrangeira.github.io) |
| [`/discord/`](https://aeliteestrangeira.github.io/discord/) | Aplicação Discord | [`discord`](https://github.com/aeliteestrangeira/discord) |
| [`/instagram/`](https://aeliteestrangeira.github.io/instagram/) | Aplicação Instagram | [`instagram`](https://github.com/aeliteestrangeira/instagram) |

## Execução

```sh
npm ci
npm test
npm run build
npm start
```

O workflow de GitHub Pages valida o projeto, gera `_build/` e publica somente esse artefato.
