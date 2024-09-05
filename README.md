

---

## ComEgg Project

This is a MERN stack project for building a web application with a client-side (frontend) using Vite, React, and Tailwind CSS, and a server-side (backend) using Express, MongoDB, and Mongoose.

---

### File Structure

```
ComEgg/
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── user.model.js
│   ├── index.js
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   └── App.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
├── node_modules/
├── package.json
└── README.md
```

---

### Installation and Setup

#### Prerequisites
- Node.js installed
- MongoDB instance running

#### Project Structure

1. **Client Folder (Frontend)**:
   - Navigate to the `client` directory.
   - Install dependencies using `npm install`.
   - Start the development server by running:
     ```
     npm run dev
     ```

2. **Backend Folder**:
   - Navigate to the `backend` directory.
   - Install dependencies using `npm install`.
   - Start the server by running:
     ```
     npm run dev
     ```

---

### Frontend Setup (Client)

1. **Create Client Folder**:
   - The client-side code is created using Vite. Navigate to the `client` directory and run:
     ```
     npm create vite@latest
     ```

2. **Integrate Tailwind CSS**:
   - Follow Tailwind CSS setup in Vite. You will need to install the Tailwind CSS dependencies:
     ```
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Create the Tailwind config file and include it in `src/index.css`.

3. **Pages and Routing**:
   - Inside the `src` folder, create a `pages` directory and add the necessary page components like `Home.jsx`, `SignIn.jsx`, and `SignUp.jsx`.
   - Install React Router DOM for routing:
     ```
     npm install react-router-dom
     ```
   - Wrap your `App.jsx` file in `BrowserRouter` and define routes for each page using the `<Route />` component.

4. **Components**:
   - Create a `components` folder inside `src` for reusable UI elements such as `Header.jsx` (for your navbar).

---

### Backend Setup (Server)

1. **Install Express**:
   - In the root directory of the project (outside the `client` folder), initialize a new Node.js project and install Express:
     ```
     npm install express
     ```

2. **ES Modules Setup**:
   - In your root `package.json`, add the following:
     ```json
     "type": "module"
     ```

3. **Server Setup**:
   - Inside the `backend` folder, create `index.js`. Set up your Express server and listen on the appropriate port.
   - Install Nodemon for automatic server restarts during development:
     ```
     npm install --save-dev nodemon
     ```
   - Update the root `package.json` script:
     ```json
     "scripts": {
       "dev": "nodemon backend/index.js"
     }
     ```

4. **Database Connection**:
   - Install Mongoose and connect your server to a MongoDB instance:
     ```
     npm install mongoose
     ```

5. **Models and Controllers**:
   - Create a `models` folder with a `user.model.js` file to define the user schema.
   - Create a `controllers` folder for handling the API logic (e.g., `userController.js`).
   - Define the API routes for user registration and login.

6. **Password Hashing**:
   - Install bcrypt.js for password hashing:
     ```
     npm install bcryptjs
     ```

---

### Running the App

1. **Run the Frontend**:
   - Navigate to the `client` folder and run:
     ```
     npm run dev
     ```

2. **Run the Backend**:
   - In the root directory, start the server by running:
     ```
     npm run dev
     ```

---

### Features

- User authentication (signup, login)
- Database connection to MongoDB
- Responsive user interface with React and Tailwind CSS

---
