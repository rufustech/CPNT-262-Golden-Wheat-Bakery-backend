# **Golden Wheat Bakery Backend**

Welcome to the backend repository for the **Golden Wheat Bakery** project. This repository serves as the core API for managing the bakery's services. We welcome contributions from collaborators! Follow the steps below to get started.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Working with the Repository](#working-with-the-repository)
5. [Branching Workflow](#branching-workflow)
6. [API Endpoints](#api-endpoints)
7. [Contribution Guidelines](#contribution-guidelines)
8. [Testing the Application](#testing-the-application)
9. [License](#license)

---

## **Project Overview**

This backend project is built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs for the Golden Wheat Bakery application to handle functionalities like managing products, orders, and users.

---

## **Prerequisites**

Before starting, make sure you have the following tools installed on your machine:

1. **Node.js** (v14 or higher)  
   [Download Node.js](https://nodejs.org/)
2. **npm** (Node Package Manager) or **yarn**
3. **Git**  
   [Download Git](https://git-scm.com/)
4. **MongoDB**  
   - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based development.
   - Alternatively, set up MongoDB locally.

---

## **Setup Instructions**

Follow these steps to get the project running on your local machine:

### 1. **Fork the Repository**
   - Go to the [Golden Wheat Bakery Backend Repository](https://github.com/rufustech/CPNT-262-Golden-Wheat-Bakery-backend).
   - Click on the **Fork** button at the top-right corner of the page to create a copy of this repository under your GitHub account.

### 2. **Clone Your Fork**
   - Clone the forked repository to your local machine using the following command:
     ```bash
     git clone https://github.com/<your-username>/CPNT-262-Golden-Wheat-Bakery-backend.git
     ```
   - Replace `<your-username>` with your GitHub username.

### 3. **Navigate to the Project Directory**
   - Change into the project directory:
     ```bash
     cd CPNT-262-Golden-Wheat-Bakery-backend
     ```

### 4. **Install Dependencies**
   - Install the required Node.js dependencies:
     ```bash
     npm install
     ```
   - This will install all the necessary packages listed in the `package.json` file.

### 5. **Set Up Environment Variables**
   - Create a `.env` file in the project root:
     ```bash
     touch .env
     ```
   - Add the following environment variables:
     ```
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     ```
   - Replace `your-mongodb-connection-string` with your actual MongoDB connection string.

### 6. **Start the Development Server**
   - Run the server locally:
     ```bash
     npm start
     ```
   - The server should now be running on `http://localhost:5000`.

---

## **Working with the Repository**

### 1. **Pull All Branches**
   - To see all branches in the main repository, add the upstream remote:
     ```bash
     git remote add upstream https://github.com/rufustech/CPNT-262-Golden-Wheat-Bakery-backend.git
     ```
   - Fetch all branches:
     ```bash
     git fetch upstream
     ```
   - List the branches:
     ```bash
     git branch -r
     ```

### 2. **Create a New Branch**
   - Always create a new branch for your work:
     ```bash
     git checkout -b feature/your-branch-name
     ```

---

## **Branching Workflow**

We follow a branching strategy to maintain a clean workflow. Here are the branch types:

1. **`main` Branch**: The stable version of the project.
2. **`dev` Branch**: The latest development version.
3. **Feature Branches**: For individual features or fixes. Name them like `feature/add-login` or `bugfix/fix-typo`.

---

## **API Endpoints**

The application provides several API endpoints for interacting with its resources. Below is the list of routes available:

### **Products**
- **GET** `/api/products`: Retrieve all products.
- **POST** `/api/products`: Add a new product.
- **PUT** `/api/products/:id`: Update an existing product by ID.
- **DELETE** `/api/products/:id`: Delete a product by ID.

### **Users**
- **GET** `/api/user`: Retrieve user data.
- **POST** `/api/user`: Register a new user.

### **Authentication**
- **POST** `/api/auth`: Authenticate a user.

### **Comments**
- **GET** `/api/comments`: Retrieve all comments.
- **POST** `/api/comments`: Add a new comment.

### **Cart**
- **GET** `/api/cart`: Retrieve all cart items.
- **POST** `/api/cart`: Add an item to the cart.
- **PUT** `/api/cart/:id`: Update a cart item.
- **DELETE** `/api/cart/:id`: Remove a cart item.

### Connecting to the Endpoints
- Use tools like **Postman** or **curl** to test API requests.
- Ensure your server is running at `http://localhost:5000` or the deployment URL.

---

## **Contribution Guidelines**

### 1. **Work in Your Fork**
   - Make all your changes in the forked repository.
   - Ensure you're working on the correct branch.

### 2. **Push Changes to Your Fork**
   - Add and commit your changes:
     ```bash
     git add .
     git commit -m "Your commit message"
     ```
   - Push your changes to your fork:
     ```bash
     git push origin feature/your-branch-name
     ```

### 3. **Create a Pull Request**
   - Go to the original repository: [Golden Wheat Bakery Backend Repository](https://github.com/rufustech/CPNT-262-Golden-Wheat-Bakery-backend).
   - Click on the **Pull Requests** tab.
   - Click **New Pull Request**.
   - Select the branch you want to merge into (e.g., `dev`).
   - Add a detailed description of your changes and submit the pull request.

### 4. **Address Code Reviews**
   - If requested, address feedback from reviewers and push additional commits to your feature branch. The pull request will automatically update.

---

## **Testing the Application**

Ensure the application runs correctly by testing endpoints with tools like:

- **Postman**: [Download Postman](https://www.postman.com/)
- **curl**: Command-line tool for API testing.
- Browser-based tools (for `GET` requests).

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to reach out if you encounter issues or have questions. Happy coding! 🎉
