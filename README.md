# Paste App

A simple web application for creating, storing, and managing text pastes. The Paste App allows users to create new pastes, update existing ones, remove and share pastes as needed. Pastes are saved locally for persistent access.

## Features

- **Create new pastes**: Add a new text paste with a title and content.
- **Update pastes**: Modify existing pastes with new content or titles.
- **Delete pastes**: Remove pastes you no longer need.
- **Share pastes**: Shares the existing paste.
- **Local storage**: Pastes are saved in your browser’s local storage for easy access.
- **Toast notifications**: Receive success and error messages when creating, updating, or deleting pastes.


## Installation

Follow the steps below to get the Paste App running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Install

### step 1: Create a Vite project ###
Install Vite globally (if not already installed):
```bash
npm create vite@latest
```

**npm create vite@latest**
When prompted, choose the following:

- Project name: paste
- Framework: React
- Variant: JavaScript or TypeScript as per your preference.

**Navigate into the project directory:**
```bash
cd paste
```

### Step 2: Install Tailwind CSS ###
To add Tailwind CSS to your Vite + React project, follow these steps:

1. **Install Tailwind CSS and its dependencies:**
```bash
npm install -D tailwindcss postcss autoprefixer
```
2. **Initialize Tailwind configuration:**
```bash
npx tailwindcss init
```
This will create a tailwind.config.js file in your project.

3. **Update the tailwind.config.js file with the following content to specify which files Tailwind should scan:**

```bash
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the following lines to your src/index.css (or src/main.css if you’re using that):

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Step 3: Install Required Packages ###
Install the project dependencies:
```bash
npm install
```
### Step 4: Run the Project ###
Start the development server with the following command:

```bash 
npm run dev
```
This command will launch the development server, and your project will be available at http://localhost:5173.

### Packages Used###
Here is a list of all the important packages used in this project:

**Dependencies**
**@reduxjs/toolkit:** A powerful library for managing application state with Redux.
**lucide-react:** Icon set for React that provides various UI icons.
**react:** The core React library for building user interfaces.
**react-dom:** DOM bindings for React.
**react-hot-toast:** Notifications system for React.
**react-redux:** Official React bindings for Redux.
**react-router-dom:** Provides routing functionalities in React apps.

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

### File Structure ###

```bash
-> paste-app

    -> public

    -> src

       -> components

       -> redux

       -> App.js

    -> package.json

    -> README.md
```

1. /public: Contains public assets like index.html.
2. /src: Contains the app’s source code, including components and Redux logic for state management.
3. App.js: The main entry point for the app.

