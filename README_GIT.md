$git = "C:\Program Files\Git\cmd\git.exe"

# Check current status
Write-Host "Current Git Status:" -ForegroundColor Green
& $git status
Write-Host "`n"

# Check remote
Write-Host "Current Remote:" -ForegroundColor Green
& $git remote -v
Write-Host "`n"

Write-Host "To push your code to GitHub, follow these steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to GitHub: https://github.com/settings/tokens"
Write-Host "2. Click 'Generate new token (classic)'"
Write-Host "3. Select scope: repo (full control of private repositories)"
Write-Host "4. Copy the token"
Write-Host "5. Run this command and paste the token when prompted:"
Write-Host ""
Write-Host "   git push -u origin main"
Write-Host ""
Write-Host "The token will be used as your password."
Write-Host ""
Write-Host "Alternatively, you can use a Personal Access Token with:"
Write-Host "   git remote set-url origin https://<token>@github.com/Brian6511/MMOCKMBIE.git"
