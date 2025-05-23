from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import joblib
import os
import numpy as np

app = Flask(__name__)
CORS(app)

model_path = "model.pkl"
vectorizer_path = "vectorizer.pkl"


# Load the model and vectorizer
with open(model_path, 'rb') as model_file:
    model = joblib.load(model_file)

with open(vectorizer_path, 'rb') as vectorizer_file:
    vectorizer = joblib.load(vectorizer_file)

@app.route('/api/check-spam', methods=['POST'])
def check_spam():
    data = request.json
    email_text = data.get('email', '')
    
    if not email_text:
        return jsonify({"error": "No email text provided"}), 400
    
    # Transform the text using the vectorizer
    text_vectorized = vectorizer.transform([email_text])
    
    prediction = model.predict(text_vectorized)[0]
    prediction_proba = model.predict_proba(text_vectorized)[0]
    
    # Get confidence score
    confidence = prediction_proba[1] if prediction == 1 else prediction_proba[0]
    confidence = float(confidence) * 100
    
    result = {
        "isSpam": bool(prediction),
        "confidence": confidence,
    }
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5000) 