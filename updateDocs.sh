sh
#!/bin/bash

# Function to get user input
get_input() {
  read -p "$1: " response
  echo "$response"
}

# Function to create a request document
create_request_document() {
  echo "Creating request document..."
  echo "Name: $(get_input "Enter your name")" > request.md
  echo "Position: $(get_input "Enter your position")" >> request.md
  echo "Date: $(date)" >> request.md
  echo "Changes: $(get_input "Describe the changes made")" >> request.md
  echo "References: $(get_input "Enter the file and code references")" >> request.md
  echo "Please validate these changes." >> request.md
  echo "Request document 'request.md' created successfully."
}

# Function to update the documentation
update_documentation() {
  echo "Updating documentation..."
  name=$(get_input "Enter your name")
  position=$(get_input "Enter your position")
  changes=$(get_input "Describe the changes made")

  echo "## $changes ($name - $(date))" >> CHANGELOG.md

  echo "Documentation updated successfully."
}

# Main script
echo "Welcome to the documentation update script!"

name=$(get_input "Enter your name")
position=$(get_input "Enter your position")

if [[ "$position" == *"master"* ]]; then
  update_documentation
else
  create_request_document
fi

echo "Script finished."