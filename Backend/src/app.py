from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pickle
import numpy as np
import os

# Load the trained model and scaler
model_path = os.path.join(os.path.dirname(__file__), '../models/model.pkl')
scaler_path = os.path.join(os.path.dirname(__file__), '../models/scaler.pkl')

with open(model_path, 'rb') as model_file:
    model = pickle.load(model_file)

with open(scaler_path, 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Create Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array([data['bedroom_count'], data['net_sqm'], data['center_distance'], data['metro_distance'], data['floor'], data['age']])
    features_scaled = scaler.transform([features])
    prediction = model.predict(features_scaled)
    return jsonify({'prediction': prediction[0]})

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    directory = os.path.join(os.path.dirname(__file__), '../models')
    return send_from_directory(directory, filename)

if __name__ == '__main__':
    app.run(debug=True)
