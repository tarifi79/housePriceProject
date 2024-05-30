# House Price Prediction

This project aims to predict house prices based on various features such as bedroom count, net square meters, distance to city center, distance to metro, floor, and age of the house. The project includes a backend API built with Flask and a frontend application built with React using Vite.

## Project Structure

housing_price_prediction/
├── backend/
│ ├── data/
│ │ └── house.csv
│ ├── models/
│ │ ├── model.pkl
│ │ └── scaler.pkl
│ ├── notebooks/
│ │ └── Data_Exploration_and_Visualization.ipynb
│ ├── src/
│ │ ├── train_model.py
│ │ ├── app.py
│ └── requirements.txt
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ └── HousePriceForm.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ └── package.json
├── README.md

## Setup

### Backend

1. **Navigate to the `backend/src` directory**:
   ```bash
   cd backend/src
   ```
2. **Install the required dependencies**:
   ```python
   pip install -r ../requirements.txt
   ```
3. **Ensure your dataset (house.csv) is placed in the backend/data directory**:

4. **Train the model and save it**:

   ```python
   python train_model.py
   ```

5. **Run the Flask API**:
   ```python
   python app.py
   ```

### Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```
