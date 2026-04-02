param(
    [string]$ProjectRoot = ".",
    [string]$CommitMessage = ""
)

$ErrorActionPreference = "Stop"

Set-Location $ProjectRoot

if (-not (Test-Path "package.json")) {
    throw "当前目录不是项目根目录，未找到 package.json"
}

if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
    $CommitMessage = "update paper notes " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
}

Write-Host "==> Syncing Obsidian content..." -ForegroundColor Cyan
npm run sync:obsidian
if ($LASTEXITCODE -ne 0) {
    throw "npm run sync:obsidian 执行失败"
}

Write-Host "==> Checking git changes..." -ForegroundColor Cyan
git add .

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "没有检测到变更，无需提交和推送。" -ForegroundColor Yellow
    exit 0
}

Write-Host "==> Committing changes..." -ForegroundColor Cyan
git commit -m $CommitMessage
if ($LASTEXITCODE -ne 0) {
    throw "git commit 失败"
}

Write-Host "==> Pushing to remote..." -ForegroundColor Cyan
git push
if ($LASTEXITCODE -ne 0) {
    throw "git push 失败"
}

Write-Host "完成。Vercel 会自动开始重新部署。" -ForegroundColor Green
