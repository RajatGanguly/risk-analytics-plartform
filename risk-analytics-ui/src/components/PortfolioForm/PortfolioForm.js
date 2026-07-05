import React, { useState } from 'react';
import './PortfolioForm.css';

function PortfolioForm() {
  const [formData, setFormData] = useState({
    portfolioId: '',
    stockTicker: '',
    quantity: '',
    buyPrice: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:8000/api/store_portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          portfolio_id: formData.portfolioId,
          stock_ticker: formData.stockTicker.toUpperCase(),
          quantity: parseFloat(formData.quantity),
          buy_price: parseFloat(formData.buyPrice)
        }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Portfolio data saved successfully!' });
        setFormData({ portfolioId: '', stockTicker: '', quantity: '', buyPrice: '' });
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Failed to save portfolio data' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please ensure the server is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Add Portfolio</h2>
          <p>Enter your stock details to track and analyze</p>
        </div>

        <form onSubmit={handleSubmit} className="portfolio-form">
          <div className="form-group">
            <label htmlFor="portfolioId">
              Portfolio ID
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="portfolioId"
              name="portfolioId"
              value={formData.portfolioId}
              onChange={handleChange}
              placeholder="e.g., PORT-001"
              required
              className="form-input"
            />
            <small className="input-hint">Unique identifier for your portfolio</small>
          </div>

          <div className="form-group">
            <label htmlFor="stockTicker">
              Stock Ticker (NSE)
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="stockTicker"
              name="stockTicker"
              value={formData.stockTicker}
              onChange={handleChange}
              placeholder="e.g., RELIANCE, TCS, INFY"
              required
              className="form-input"
            />
            <small className="input-hint">Enter NSE stock symbol</small>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">
              Quantity
              <span className="required">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Number of shares"
              required
              min="1"
              step="1"
              className="form-input"
            />
            <small className="input-hint">Number of shares purchased</small>
          </div>

          <div className="form-group">
            <label htmlFor="buyPrice">
              Buy Price (₹)
              <span className="required">*</span>
            </label>
            <input
              type="number"
              id="buyPrice"
              name="buyPrice"
              value={formData.buyPrice}
              onChange={handleChange}
              placeholder="Purchase price per share"
              required
              min="0"
              step="0.01"
              className="form-input"
            />
            <small className="input-hint">Price per share in INR</small>
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Add to Portfolio'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForm;