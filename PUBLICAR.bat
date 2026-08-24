@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title Publicar portfolio

echo [1/6] Verificando ferramentas...
where git >nul 2>&1
if errorlevel 1 goto :git_missing
where node >nul 2>&1
if errorlevel 1 goto :node_missing
where npm >nul 2>&1
if errorlevel 1 goto :node_missing

if not exist ".git\" goto :repo_missing

for /f "delims=" %%B in ('git branch --show-current') do set "CURRENT_BRANCH=%%B"
if /I not "%CURRENT_BRANCH%"=="main" goto :wrong_branch

echo [2/6] Verificando o remoto...
git fetch origin main
if errorlevel 1 goto :failed
git merge-base --is-ancestor origin/main HEAD
if errorlevel 1 goto :remote_ahead

echo [3/6] Instalando dependencias...
call npm ci
if errorlevel 1 goto :failed

echo [4/6] Executando testes...
call npm test
if errorlevel 1 goto :failed

echo [5/6] Gerando build...
call npm run build
if errorlevel 1 goto :failed

git add -A
git diff --cached --quiet
set "DIFF_RESULT=%ERRORLEVEL%"
if "%DIFF_RESULT%"=="0" goto :nothing_to_publish
if not "%DIFF_RESULT%"=="1" goto :failed

git commit --allow-empty-message -m ""
if errorlevel 1 goto :failed

echo [6/6] Publicando em main...
git push origin main
if errorlevel 1 goto :failed

echo.
echo Publicacao concluida com commit sem mensagem.
goto :done

:nothing_to_publish
echo.
echo Nenhuma alteracao encontrada. Nada foi publicado.
goto :done

:remote_ahead
echo.
echo O remoto possui commits que ainda nao estao nesta copia.
echo Atualize a copia antes de publicar para evitar sobrescrita.
goto :failed

:wrong_branch
echo.
echo Branch atual: %CURRENT_BRANCH%
echo A publicacao foi interrompida porque a branch precisa ser main.
goto :failed

:repo_missing
echo.
echo A pasta .git nao foi encontrada. Extraia o ZIP completo antes de publicar.
goto :failed

:git_missing
echo.
echo Git nao foi encontrado no PATH.
goto :failed

:node_missing
echo.
echo Node.js e npm precisam estar instalados e disponiveis no PATH.
goto :failed

:failed
echo.
echo Publicacao interrompida. Nenhum push foi concluido por este processo.
set "EXIT_CODE=1"
goto :finish

:done
set "EXIT_CODE=0"

:finish
echo.
pause
exit /b %EXIT_CODE%
