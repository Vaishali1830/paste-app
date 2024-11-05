# Paste App

A simple web application for creating, storing, and managing text pastes. The Paste App allows users to create new pastes, update existing ones, and remove pastes as needed. Pastes are saved locally for persistent access.

## Features

- **Create new pastes**: Add a new text paste with a title and content.
- **Update pastes**: Modify existing pastes with new content or titles.
- **Delete pastes**: Remove pastes you no longer need.
- **Local storage**: Pastes are saved in your browser’s local storage for easy access.
- **Toast notifications**: Receive success and error messages when creating, updating, or deleting pastes.

## Installation

Follow the steps below to get the Paste App running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Install

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Vaishali1830/paste-app.git
   cd paste-app

2. Install the required dependencies:

   ```bash
    npm install

3. Start the development server:

   ```bash
    npm start 

### Usage

**Create a Paste:**

Enter a title and content for the paste and click "Create".
The paste will be saved and displayed on the screen.

**Edit a Paste:**

Click the "Edit" button next to an existing paste to modify it.
Change the title or content and save the changes.

**Delete a Paste:**

Click the "Delete" button next to a paste to remove it from the list.
The paste will be deleted from the local storage as well.

**Share a paste:**

Click the "Share" button next to share the paste.

**View a paste:**

Click the "View" button to view the whole paste.
View is read only no changes can be done in viewpaste.

### File Structure

-> paste-app

    -> public

    -> src

       -> components

       -> redux

       -> App.js

    -> package.json
    
    -> README.md

1. /public: Contains public assets like index.html.
2. /src: Contains the app’s source code, including components and Redux logic for state management.
3. App.js: The main entry point for the app.

