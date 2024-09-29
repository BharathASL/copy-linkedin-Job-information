#!/bin/bash

# Set the name of the zip file
ZIP_NAME="Copy_LinkedIn_Job_Information.zip"

# Define the files and directories to include in the zip file
FILES_TO_INCLUDE="manifest.json content_script.js icon16.png icon48.png icon128.png"

# Check if a directory named "extension" exists, if not create it
if [ ! -d "extension" ]; then
  mkdir extension
fi

# Copy all the required files to the "extension" directory
cp $FILES_TO_INCLUDE extension/

# Create the zip file from the "extension" directory
zip -r $ZIP_NAME extension/*

# Clean up by removing the temporary "extension" directory
rm -r extension

echo "Packaging complete. Created: $ZIP_NAME"
