import PropTypes from 'prop-types';


const QuoteCard = ({ quote, onAddToSaved }) => {
  return (
    <div className="card quote-card">
      <div className="card-body">
        <p className="card-text">{quote}</p>
        <div className="button-container">
          <button 
            className="btn btn-primary save-button text-white" 
            onClick={() => onAddToSaved(quote)} 
            aria-label="Save Quote"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  onAddToSaved: PropTypes.func.isRequired,
};

export default QuoteCard;
