# CastPro

A modern AI-powered fishing companion web application with React frontend and FastAPI backend.

## 🎣 Features

### Core Features
- **AI Fishing Assistant**: Chat with an intelligent AI that provides fishing advice, regulations, and tackle recommendations
- **User Authentication**: Secure JWT-based authentication system
- **Responsive Design**: Modern UI built with React, Tailwind CSS, and Vite
- **Real-time Chat**: Interactive AI chatbot with message history
- **Dashboard**: Personalized user dashboard with fishing insights

### AI Assistant Capabilities
- **Fishing Regulations**: Clear explanations of local fishing rules
- **Species Tips**: Habitat, bait, and location advice for different fish species
- **Tackle Recommendations**: Gear suggestions based on species, location, and season
- **Friendly Interface**: Conversational AI that provides practical, actionable advice

## 🏗️ Project Structure

```
CastPro/
├── frontend/          # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts (Auth)
│   │   └── services/      # API services
├── backend/           # Python FastAPI backend
│   ├── app/
│   │   ├── api/          # API endpoints
│   │   ├── core/         # Configuration & utilities
│   │   ├── models/       # Database models
│   │   └── schemas/      # Pydantic schemas
│   ├── requirements.txt  # Python dependencies
│   ├── main.py          # FastAPI application entry
│   ├── run.py           # Development server script
│   └── init_db.py       # Database initialization
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 16+
- OpenAI API key

### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
export OPENAI_API_KEY="your-openai-api-key-here"

# Initialize database
python init_db.py

# Start the server
python run.py
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Interactive API Docs**: http://localhost:8000/redoc

## 🔧 Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **Pydantic** - Data validation
- **JWT** - Authentication
- **OpenAI API** - AI chat completions
- **SQLite** - Development database
- **PostgreSQL** - Production-ready database

## 📱 Key Components

### AI Fishing Assistant
- **Public Demo**: Try the AI assistant on the home page without registration
- **Authenticated Access**: Full chat history and features for registered users
- **Smart Responses**: Context-aware fishing advice and recommendations
- **Real-time Interaction**: Instant responses with loading states

### User Authentication
- **JWT Tokens**: Secure authentication with automatic token refresh
- **Protected Routes**: Dashboard access requires authentication
- **User Registration**: Simple sign-up process
- **Session Management**: Persistent login state

### Dashboard
- **Personalized Welcome**: User-specific greeting
- **Fishing Insights**: Placeholder for catch tracking and analytics
- **Integrated Chat**: AI assistant embedded in dashboard
- **Responsive Layout**: Works on desktop and mobile

## 🔒 Environment Variables

Create a `.env` file in the backend directory:

```env
OPENAI_API_KEY=your-openai-api-key-here
SECRET_KEY=your-secret-key-for-jwt
DATABASE_URL=sqlite:///./castpro.db
```

## 🧪 Development

### Backend Development
```bash
cd backend
python run.py  # Starts with auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev    # Starts Vite dev server
```

### Database Management
```bash
cd backend
python init_db.py  # Create tables
```

## 🚀 Production Deployment

### Backend
- Use PostgreSQL instead of SQLite
- Set proper environment variables
- Use production WSGI server (Gunicorn)
- Enable CORS for your domain

### Frontend
- Build for production: `npm run build`
- Serve static files with Nginx or similar
- Configure API proxy for backend communication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the API documentation at `/docs`
2. Review the console for error messages
3. Ensure all environment variables are set correctly
4. Verify OpenAI API key is valid and has credits

---

**CastPro** - Making fishing smarter with AI! 🎣
