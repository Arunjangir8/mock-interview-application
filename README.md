# 🧑‍💼 Interview Booking Application

A full-stack web application that allows users to register, log in, view a list of interviewers, and book appointments based on available time slots. Users can also manage their profile and view upcoming interviews.

## 🚀 Features

* 📝 **User Authentication** (Signup/Login using JWT)
* 👨‍💼 **Interviewer Listings** with Category Filtering
* 📅 **Time Slot Generation** for Interviewers
* 📌 **Appointment Booking** functionality
* 👤 **My Profile** section (View & Edit user details)
* 📂 **My Interviews** section to see all booked appointments
* ⚙️ Fully Responsive Frontend using **React** + **TailwindCSS**
* 🗃️ Backend with **Node.js**, **Express.js**, and **Prisma ORM**

## 🧱 Tech Stack

### Frontend
* React
* TailwindCSS
* React Router
* Axios

### Backend
* Node.js
* Express.js
* JWT Authentication
* Prisma ORM


## 🗂️ Project Structure

```
interview-app/
│
├── client/                # Frontend - React
│   ├── components/        # Reusable components (Navbar, Sidebar, etc.)
│   ├── pages/             # Page components (Login, Home, Profile, etc.)
│   └── ...
│
├── server/                # Backend - Node.js + Express
│   ├── prisma/            # Prisma schema and migration
│   ├── routes/            # API routes (auth, profile, interview)
│   ├── controllers/       # Route handlers
│   ├── middleware/        # JWT auth, error handlers
│   └── server.js          # Main entry point
│
├── README.md
└── .env
```

## 🛠️ Installation

### Prerequisites
* Node.js
* PostgreSQL
* npm or yarn

### Backend Setup

```bash
cd server
npm install
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the **server/** directory with the following:

```env
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/interviewdb
JWT_SECRET=your_jwt_secret
```

## 📌 Key Functionalities

* **User Signup/Login**: Secure JWT-based authentication.
* **Interviewer View**: Browse interviewers by categories and expertise.
* **Appointment Booking**: Book available time slots with a selected interviewer.
* **User Profile**: View and update personal details.
* **My Interviews**: List all scheduled interviews for the logged-in user.

## 📸 Screenshots

![Login Page](./readme/Screenshot%202025-04-06%20at%207.50.11 PM.png)
![Login Page](./readme/Screenshot%202025-04-06%20at%207.50.22 PM.png)
![Login Page](./readme/Screenshot%202025-04-06%20at%207.50.51 PM.png)
![Login Page](./readme//Screenshot%202025-04-06%20at%207.50.39 PM.png)
![Login Page](./readme/Screenshot%202025-04-06%20at%207.51.25 PM.png)

## 👨‍💻 Author

**Arun** – [Portfolio](https://arunjangir8.github.io/portfolio2.0/) | [LinkedIn](https://www.linkedin.com/in/arun-9406a4283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

Built as a full-stack project with a focus on user experience and real-world functionality.

## 📄 License

MIT License