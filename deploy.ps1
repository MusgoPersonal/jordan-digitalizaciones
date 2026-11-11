# Deploy de Jordan Digitalizaciones a Cloudflare Pages
# Uso:  .\deploy.ps1
# El token se lee del cache de tokens de opencode; no hay que buscarlo ni pegarlo.
$ErrorActionPreference = "Stop"

$tokenFile = Join-Path $env:APPDATA "opencode\tokens.json"
if (-not (Test-Path $tokenFile)) {
    $tokenFile = "C:\Users\Lissette\AppData\Roaming\opencode\tokens.json"
}
if (-not (Test-Path $tokenFile)) { throw "No encuentro tokens.json en APPDATA" }

$cfg = Get-Content $tokenFile -Raw | ConvertFrom-Json
$env:CLOUDFLARE_API_TOKEN = $cfg.cloudflare_api_token
$env:CLOUDFLARE_ACCOUNT_ID = $cfg.cloudflare_account_id
if (-not $env:CLOUDFLARE_API_TOKEN) { throw "Falta cloudflare_api_token en tokens.json" }

Write-Host "1/2 Build..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build fallo" }

Write-Host "2/2 Deploy a Cloudflare Pages..." -ForegroundColor Cyan
npx wrangler pages deploy ./out --project-name=jordan-digitalizaciones --branch main
if ($LASTEXITCODE -ne 0) { throw "Deploy fallo" }

Write-Host "Listo: https://jordan-digitalizaciones.pages.dev" -ForegroundColor Green
