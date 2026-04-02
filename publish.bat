@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0publish.ps1" -ProjectRoot "%~dp0"
pause
