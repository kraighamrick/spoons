#!/bin/bash

# Script to create commits with numerical messages
# Usage: ./next_commit.sh [optional message]

# Get the next commit number
NEXT_NUMBER=$(git log --oneline | wc -l | tr -d ' ')
NEXT_NUMBER=$((NEXT_NUMBER + 1))

# Use the provided message or default to the number
if [ $# -eq 0 ]; then
    COMMIT_MSG="$NEXT_NUMBER"
else
    COMMIT_MSG="$NEXT_NUMBER"
fi

echo "Creating commit: $COMMIT_MSG"
git add .
git commit -m "$COMMIT_MSG"
git push origin main

echo "✅ Committed and pushed: $COMMIT_MSG"
