
const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center pt-3 pb-2 ">
      <div className="container">
        <p className="mb-1">
          This website is crafted with the{' '}
          <a
            href="https://ron-swanson-quotes.herokuapp.com/v2/quotes"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ron Swanson Quotes API
          </a>
          .
        </p>
        <p className="mb-0">
        &#128640; Developed by{' '}
          <a
            href="https://github.com/codewithbalaji"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            codewithbalaji
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
