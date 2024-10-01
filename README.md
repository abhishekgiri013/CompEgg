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

## 📹💻 ScreenShots

![Screenshot 2024-10-01 162137](https://github.com/user-attachments/assets/c37042d6-25df-4c24-862c-f8aa758c4b18)

![Screenshot 2024-10-01 162254](https://github.com/user-attachments/assets/93c9149f-f09b-45e7-8ad2-e596f1c6ccc5)

![Screenshot 2024-10-01 162337](https://github.com/user-attachments/assets/417c4cb2-74ba-48bf-b9d7-b6caafb976eb)

![Screenshot 2024-10-01 162505](https://github.com/user-attachments/assets/7c0577d8-95da-49f1-92d9-6c51174d154c)

![Screenshot 2024-10-01 162527](https://github.com/user-attachments/assets/0f3671fb-8feb-46b5-b1e7-0832ed88cb14)

![Screenshot 2024-10-01 162547](https://github.com/user-attachments/assets/8710a87e-8318-4dcd-874c-757c9a06dda5)

![Screenshot 2024-10-01 162640](https://github.com/user-attachments/assets/5a85f0b3-7af1-47ba-8e20-74de07843d49)

![Screenshot 2024-10-01 162710](https://github.com/user-attachments/assets/34f4a246-979d-4517-ab4f-cdfb3fbfb659)

![Screenshot 2024-10-01 162722](https://github.com/user-attachments/assets/197cd536-464f-4a5b-8db7-f766c4095842)

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



