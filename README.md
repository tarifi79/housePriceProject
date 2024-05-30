# House Price Prediction

This project aims to predict house prices based on various features such as bedroom count, net square meters, distance to city center, distance to metro, floor, and age of the house. The project includes a backend API built with Flask and a frontend application built with React using Vite.

## Project Structure

```plaintext
housing_price_prediction/
├── backend/
│   ├── data/
│   │   └── house.csv
│   ├── models/
│   │   ├── model.pkl
│   │   └── scaler.pkl
│   ├── notebooks/
│   │   └── Data_Exploration_and_Visualization.ipynb
│   ├── src/
│   │   ├── train_model.py
│   │   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── HousePriceForm.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   └── package.json
└── README.md
```

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

### API Endpoints

- POST /predict: Predict the house price based on input features.

* Request Body: JSON object containing the features:

```json
{
  "bedroom_count": 3,
  "net_sqm": 120,
  "center_distance": 10,
  "metro_distance": 2,
  "floor": 5,
  "age": 10
}
```

- Response: JSON object containing the predicted price:

```json
{
  "prediction": 200000
}
```

### Jupyter Notebook

Data Exploration and Visualization: The Jupyter notebook Data_Exploration_and_Visualization.ipynb contains data exploration and visualization steps to understand the dataset better.

### Best Model

Based on the iterative feature addition, the best model includes all the features: net_sqm, bedroom_count, center_distance, metro_distance, floor, and age. This model achieved an R² score of 0.729, indicating that approximately 72.9% of the variance in house prices can be explained by these features. The Mean Squared Error (MSE) for this model is 4,028,777, which is the lowest among the tested combinations, demonstrating improved prediction accuracy.

### Dependencies

#### Frontend

- Flask
- Flask-CORS
- Pandas
- Scikit-learn
- Matplotlib
- Seaborn

#### Backend

- React
- Vite
- Axios
