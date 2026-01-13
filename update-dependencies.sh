#!/bin/bash

# Script to update all dependencies to latest versions
cd "$(dirname "$0")"

echo "Checking for npm..."
if ! command -v npm &> /dev/null; then
    echo "npm not found. Checking common locations..."
    
    # Try to find npm in common locations
    if [ -f "/opt/homebrew/bin/npm" ]; then
        export PATH="/opt/homebrew/bin:$PATH"
    elif [ -d "$HOME/.nvm" ]; then
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm use default 2>/dev/null || nvm use node 2>/dev/null
    fi
fi

if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed or not in PATH."
    echo "Please install Node.js and npm first:"
    echo "  - Visit https://nodejs.org/ to download and install"
    echo "  - Or use Homebrew: brew install node"
    echo "  - Or use nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    exit 1
fi

echo "npm found: $(npm --version)"
echo ""
echo "Updating all dependencies to latest versions..."
echo ""

# Install npm-check-updates if not available
if ! command -v ncu &> /dev/null; then
    echo "Installing npm-check-updates..."
    npm install -g npm-check-updates
fi

# Update package.json with latest versions
echo "Checking for latest versions..."
npx npm-check-updates -u

# Install updated dependencies
echo ""
echo "Installing updated dependencies..."
npm install

# Check for security vulnerabilities
echo ""
echo "Checking for security vulnerabilities..."
npm audit

echo ""
echo "Done! Run 'npm audit fix' if there are any vulnerabilities to fix."

