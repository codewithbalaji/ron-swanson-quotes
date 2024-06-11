import QuoteCard from "../components/QuoteCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SavedQuotes from '../components/SavedQuotes';


const Home = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
    const savedQuotesFromStorage = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setSavedQuotes(savedQuotesFromStorage);
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  const handleAddToSaved = (quote) => {
    const updatedSavedQuotes = [quote, ...savedQuotes];
    localStorage.setItem('savedQuotes', JSON.stringify(updatedSavedQuotes));
    setSavedQuotes(updatedSavedQuotes);
  };

  const handleClearSavedQuotes = () => {
    setSavedQuotes([]);
    localStorage.removeItem('savedQuotes');
  };
  return (
   
    <div className="container mt-5 min-vh-100">
      
      <QuoteCard quote={quote} onAddToSaved={handleAddToSaved} />
      <div className="d-flex justify-content-center mb-3 mt-3">
        <button className="btn btn-primary me-3 text-white" onClick={fetchQuote}>
          Get New Quote
        </button>
        <button className="btn btn-danger me-3 text-white" onClick={handleClearSavedQuotes}>
         Clear all
        </button>
      </div>
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  )
}

export default Home