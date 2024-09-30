# 🌟 CompEgg: Your Competitive Programming Dashboard

Welcome to **CompEgg**, the ultimate web application that centralizes competitive programming data from renowned platforms like LeetCode, GeeksforGeeks, Codeforces, and HackerRank. Designed for both aspiring coders and seasoned programmers, CompEgg empowers you with real-time insights and analytics to elevate your competitive programming journey!

This is a MERN stack project for building a web application with a client-side (frontend) using Vite, React, and Tailwind CSS, and a server-side (backend) using Express, MongoDB, and Mongoose.

---

## 🚀 Features

- **Multi-Platform Integration**: Seamlessly access and analyze your coding stats from various platforms, all in one dynamic dashboard.
- **Interactive Dashboard**: Enjoy a user-friendly interface that displays comprehensive metrics and performance analytics at a glance.
- **Real-Time Data Fetching**: Stay updated with live data retrieved through efficient API calls, ensuring you always have the latest stats.
- **Responsive Design**: Optimized for both desktop and mobile devices, CompEgg is accessible anytime, anywhere.
- **Heatmap Visualization**: Dive deep into your activity timeline with an interactive heatmap built using D3.js, showcasing your coding journey over time.

---

## 🔧 Technologies Used

- **Frontend**: React, Tailwind CSS, Axios, React-toolkit, React-persist
- **Data Visualization**: D3.js, mui-charts
- **APIs**:
  - LeetCode Stats API
  - GeeksforGeeks API
  - Codeforces API
  - HackerRank API
- **Backend and Databases**: Node, Express, MongoDB, Firebase-Auth

---

### 🔗[Live Link](https://compegg.onrender.com)

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

## 🤝 Contributing

We welcome contributions from the community! If you have suggestions for improvements or want to report a bug, please create an issue or submit a pull request. Let’s collaborate to make CompEgg even better!

## 📹💻 ScreenShots


