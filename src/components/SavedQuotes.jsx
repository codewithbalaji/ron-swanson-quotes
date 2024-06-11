import PropTypes from 'prop-types';

const SavedQuotes = ({ savedQuotes }) => {
  // Function to reorder saved quotes array
  const reorderSavedQuotes = (index) => {
    const updatedSavedQuotes = [...savedQuotes];
    const movedQuote = updatedSavedQuotes.splice(index, 1);
    updatedSavedQuotes.unshift(movedQuote[0]);
    return updatedSavedQuotes;
  };

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {savedQuotes.map((quote, index) => (
            <div key={index} className="col">
              <div className={`card bg-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'success' : 'danger'} text-white rounded-3 mb-3`}>
                <div className="card-body p-4">
                  <figure className="mb-0">
                    <blockquote className="blockquote">
                      <p className="pb-2">
                        &quot;{quote}&quot;
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0 text-white">
                      Ron Swanson
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

SavedQuotes.propTypes = {
  savedQuotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SavedQuotes;
