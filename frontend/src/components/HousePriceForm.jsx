import React, { useState } from "react";
import axios from "axios";
import "./HousePriceForm.css";

/**
 * HousePriceForm component
 * A form component for inputting house details and predicting the house price.
 *
 * @component
 */
const HousePriceForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    bedroom_count: "",
    net_sqm: "",
    center_distance: "",
    metro_distance: "",
    floor: "",
    age: "",
  });

  // State to manage the prediction result
  const [prediction, setPrediction] = useState(null);

  /**
   * handleChange function
   * Updates the formData state with the new input values
   *
   * @param {Object} e - The event object
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * handleSubmit function
   * Sends a POST request to the Flask API to get the predicted house price
   *
   * @param {Object} e - The event object
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container">
      <h1>House Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bedroom Count:</label>
          <input
            type="number"
            name="bedroom_count"
            value={formData.bedroom_count}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Net Square Meters:</label>
          <input
            type="number"
            name="net_sqm"
            value={formData.net_sqm}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Distance to City Center:</label>
          <input
            type="number"
            name="center_distance"
            value={formData.center_distance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Distance to Metro:</label>
          <input
            type="number"
            name="metro_distance"
            value={formData.metro_distance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Floor:</label>
          <input
            type="number"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Predict Price</button>
      </form>
      {prediction && <h2>Predicted Price: ${prediction.toFixed(2)}</h2>}
    </div>
  );
};

export default HousePriceForm;
