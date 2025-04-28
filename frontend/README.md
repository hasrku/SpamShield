# Email Spam Detection App

A React application with a Flask backend that detects spam emails using a machine learning model.

## Features

-   Beautiful and modern UI built with React
-   Real-time spam detection powered by machine learning
-   Python Flask API backend to serve the ML model

## Project Structure

-   `src/`: React frontend application
-   `api/`: Flask backend for serving the ML model
-   `src/assets/files/`: Contains the ML model and vectorizer

## Setup Instructions

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### 2. Backend Setup

```bash
# Navigate to the api directory
cd api

# Create a virtual environment (recommended)
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the Flask server
python app.py
```

## Usage

1. Start both the frontend and backend servers
2. Navigate to the application in your browser (usually http://localhost:5173 or similar)
3. Enter the email text you want to analyze in the textarea
4. Click "Detect Spam" to analyze the email
5. View the results showing whether the email is spam or not, along with confidence levels

## Technologies Used

-   Frontend: React, Framer Motion, TailwindCSS
-   Backend: Flask, scikit-learn
-   ML: Pre-trained model for spam detection (model.pkl and vectorizer.pkl)
