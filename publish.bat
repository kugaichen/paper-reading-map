@echo off
chcp 65001 >nul
setlocal

set SCRIPT_DIR=%~dp0
set COMMIT_MSG=%*

powershell -ExecutionPolicy Bypass -File "%SCRIPT_DIR%publish.ps1" -ProjectRoot "%SCRIPT_DIR%" -CommitMessage "%COMMIT_MSG%" -OpenPages

echo.
pause