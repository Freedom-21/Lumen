# Lumen: A Real-Time Collaborative Online Text Editor

![Lumen Logo](image.png)

Lumen is a cutting-edge real-time collaborative online text editor designed to illuminate and enhance the collaborative writing process. By providing seamless synchronization and intuitive collaboration tools, Lumen empowers teams to create, edit, and manage documents efficiently and effectively.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview
Lumen simplifies real-time collaboration, enabling multiple users to work on the same document simultaneously. Thanks to an intuitive interface, secure authentication, and document management features, Lumen offers an all-in-one solution for teams looking to enhance productivity and streamline their workflow.

---

## Features
- **Real-Time Collaboration:** Multiple users can edit the same document simultaneously with instantaneous updates.
- **User-Friendly Interface:** Intuitive design that simplifies the editing and collaboration process.
- **Document Management:** Easily create, organize, and manage your documents from a centralized dashboard.
- **Collaboration Indicators:** Visual cues highlight the areas currently being edited by collaborators.
- **Secure Authentication:** Robust sign-up and login mechanisms ensure user data is protected.

---

## Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/lumen.git
   cd lumen

## Configure Environment Variables


   ``` bash
   DB_URI="Your_Database_Connection_String"
   NODE_ENV=your_environment
   PORT=500
   REDIS_HOST="Your_Redis_PubSub_Host"
   REDIS_PASSWORD="Your_Redis_Password"
   REDIS_PORT="Your_Redis_Port"
   SECRET="Your_App_Secret"
   ```

## Running the Application

1. Install Client Dependencies & Start Client

``` bash
cd client
npm install
npm start
```

2. Install Server Dependencies & Start Server
```bash
cd ../server
npm install
npm start
```

3. Register an Account Once both client and server are running, open your browser at the specified client URL (typically http://localhost:3000) and sign up using your email address. Choose a unique username to create your account.

## Usage Guide

Login

Access the login page and enter your registered credentials to sign in.
Create a New Document

On the dashboard, click Create New Document.
Provide a title for your document.
Invite collaborators by entering their email addresses or usernames.
Collaborate in Real-Time

Open the newly created document to start editing.
Collaborators can join the document, and their active editing areas will be highlighted to indicate their presence.
Manage Collaborations

Use the dashboard to manage your documents and collaborators.
Keep track of who has access to your documents and easily remove or add new collaborators.

## Contributing
Contributions are welcome and encouraged! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m "Add some feature").
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request describing your changes.
We will review your Pull Request as soon as possible. Thank you for helping make Lumen better!

## Contact
For any inquiries or support, please contact our team at yenesewfreedom8@gmail.com

