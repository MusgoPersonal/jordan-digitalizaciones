@echo off
cd /d "%~dp0"
npm run dev -p 4000 -H 0.0.0.0
pause
