#!/bin/bash

# Script to rename commits to numerical titles
echo "Renaming commits to numerical titles..."

# Create a temporary file with the new commit messages
cat > /tmp/commit_edits << 'EOF'
#!/bin/bash
# This script will be called for each commit during rebase
case $1 in
    1) echo "1" ;;
    2) echo "2" ;;
    3) echo "3" ;;
    4) echo "4" ;;
    5) echo "5" ;;
    6) echo "6" ;;
esac
EOF

chmod +x /tmp/commit_edits

# Use git filter-branch to rename commits
git filter-branch --msg-filter '
case $GIT_COMMIT in
    b5bdba3*) echo "6" ;;
    2287675*) echo "5" ;;
    7aee1fc*) echo "4" ;;
    0e2e96f*) echo "3" ;;
    25f0041*) echo "2" ;;
    e51db00*) echo "1" ;;
    *) cat ;;
esac
' -- --all

echo "Commit messages updated to numerical titles!"
