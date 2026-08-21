# aeliteestrangeira.github.io

Portfólio principal de **Kauã Silbershlach Parodes**, publicado em:

<https://aeliteestrangeira.github.io/>

## Arquitetura

Este repositório contém somente o portfólio raiz. As aplicações permanecem independentes, cada uma com repositório, implantação e ciclo de evolução próprios.

| Destino | Finalidade | Repositório |
| --- | --- | --- |
| [`/`](https://aeliteestrangeira.github.io/) | Portfólio principal | [`aeliteestrangeira.github.io`](https://github.com/aeliteestrangeira/aeliteestrangeira.github.io) |
| [`/discord/`](https://aeliteestrangeira.github.io/discord/) | Aplicação Discord | [`discord`](https://github.com/aeliteestrangeira/discord) |

## Princípios desta versão

- HTML e CSS estáticos.
- Nenhum JavaScript e nenhum service worker.
- Nenhuma autenticação, banco de dados ou segredo no portfólio.
- As aplicações são apenas referenciadas por links.
- Publicação automática e isolada pelo GitHub Pages.

## Publicação

Alterações na branch `main` acionam o workflow `Publicar portfólio`, que publica somente a pasta `site/`.
