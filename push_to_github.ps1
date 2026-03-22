$git = "C:\Program Files\Git\cmd\git.exe"

# Initialize git
Write-Host "Initializing git repository..."
& $git init

# Configure git
Write-Host "Configuring git user..."
& $git config --global user.name "Brian"
& $git config --global user.email "brian@mmoccul.com"

# Add all files
Write-Host "Adding files..."
& $git add .

# Commit
Write-Host "Creating commit..."
& $git commit -m "Initial commit: MMOCCUL Credit Union website"

# Rename branch
Write-Host "Renaming branch to main..."
& $git branch -M main

# Add remote
Write-Host "Adding GitHub remote..."
& $git remote add origin https://github.com/Brian6511/MMOCKMBIE.git

# Push to GitHub
Write-Host "Pushing to GitHub..."
& $git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub."
