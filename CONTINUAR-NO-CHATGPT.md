# Continuidade no ChatGPT

Este pacote contém a cópia completa do repositório `aeliteestrangeira/aeliteestrangeira.github.io`, incluindo o histórico Git necessário para continuar o trabalho e publicar sem recriar o projeto.

## Orientação para o ChatGPT

Ao continuar este projeto:

1. Preserve a arquitetura JavaScript existente em `assets/`, `config/`, `lib/`, `priv/` e `test/`.
2. Preserve o conteúdo e a identidade visual atual do portfólio, salvo quando o usuário solicitar mudanças.
3. Não adicione Elixir, Phoenix, Mix ou arquivos `.ex`/`.exs` ao portfólio principal.
4. Antes de concluir qualquer mudança, execute `npm test` e `npm run build`.
5. O GitHub Pages publica exclusivamente o diretório gerado `_build/`.
6. Não inclua segredos, credenciais, tokens ou arquivos `.env` no repositório.
7. Todos os commits devem ter assunto e corpo vazios, usando `git commit --allow-empty-message -m ""`.
8. Não reescreva o histórico e não use push forçado.

## Publicação

No Windows, execute `PUBLICAR.bat` na raiz do projeto. O arquivo:

- confirma que a branch atual é `main`;
- verifica se o remoto está à frente;
- instala as dependências;
- executa os testes;
- gera `_build/`;
- cria um commit sem mensagem somente quando existem alterações;
- executa `git push origin main`.

O arquivo não guarda credenciais. Se necessário, o Git Credential Manager abrirá o navegador para autenticação no GitHub.

## Prompt sugerido

> Continue o portfólio contido neste ZIP. Leia primeiro `CONTINUAR-NO-CHATGPT.md`, preserve a estrutura JavaScript e o site atual, faça somente as alterações que eu solicitar, valide com `npm test` e `npm run build`, e mantenha todos os commits sem assunto e sem corpo. Ao final, mantenha `PUBLICAR.bat` pronto para publicar em `main`.
