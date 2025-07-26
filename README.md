# 🤖 AI CV Analyzer – Smart Resume Screening with Puter AI

## 🚀 Overview

**AI CV Analyzer** is an **intelligent resume analysis platform** built to help companies and recruiters screen CVs with precision and speed. Leveraging **Puter AI**, the app matches CVs to job descriptions and company contexts, offering fast and insightful analysis with minimal human input.

From parsing uploaded CVs to assessing their relevance against offers, **AI CV Analyzer** simplifies the candidate evaluation process through a seamless and intuitive interface.

## 🎯 Features

✅ **AI-Powered CV Analysis** – Automatically analyze and score resumes using **Puter AI**.  
✅ **Context-Aware Matching** – Evaluate CVs based on job descriptions and company details.  
✅ **File Upload & Management** – Upload and manage CVs effortlessly with **Puter Storage**.  
✅ **Secure Authentication** – User access managed securely with **Puter Auth**.  
✅ **Real-time Results** – Instant analysis and feedback on uploaded resumes.  
✅ **Modern Frontend** – Built with **React (Vite) + Tailwind CSS** for a fast and responsive UI.  
✅ **Database-Free Simplicity** – Backed by **Puter's serverless DB**, no setup required.

## 🛠️ Tech Stack

| Technology        | Purpose                                       |
|-------------------|-----------------------------------------------|
| **React (Vite)**  | Fast and modern frontend framework             |
| **React Router v7** | Client-side routing for smooth navigation     |
| **Tailwind CSS**  | Utility-first CSS for responsive styling       |
| **Puter AI**      | Resume parsing and intelligent matching        |
| **Puter Auth**    | Authentication and session management          |
| **Puter DB**      | Serverless database for structured data        |
| **Puter Storage** | File uploads and secure document handling      |

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```
