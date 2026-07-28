# Nayi Disha

Nayi Disha is a web-based job portal developed to connect job seekers with employers through a simple and user-friendly platform. It allows users to search and apply for jobs while enabling recruiters to post vacancies and manage applications.

##  Live Demo

https://nayidisha-1.onrender.com/

## Features

### Job Seeker
- Register and Login
- Browse available jobs
- Apply for jobs
- Resume Builder
- Returnship section
- Manage profile

### Employer
- Register and Login
- Post job vacancies
- Manage posted jobs
- View applicants

## Tech Stack

### Frontend
- React.js
- React Router
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js

### Database
- MySQL

## Folder Structure

```
NayiDisha/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/NayiDisha.git
```

### Install Frontend

```bash
cd frontend
npm install
npm run dev
```

### Install Backend

```bash
cd backend
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database

JWT_SECRET=your_secret_key
```

## Future Enhancements

- AI-based job recommendations
- Interview scheduling
- Email notifications
- Company verification
- Skill-based job matching

## Author

## Contributors

- **[Aastha Yadav](https://github.com/aastha612-yadav)** – Project development and implementation.
- **[Prajwal Tiwari](https://github.com/Prajwal-Tiwari)** – Bug fixes and minor improvements.

---

If you found this project helpful, feel free to ⭐ the repository.
