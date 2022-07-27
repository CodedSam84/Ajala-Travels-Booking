import "./cta.css";

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta-container">
        <div className="cta-header">
          <h3>Save time, save money!</h3>
          <h4>Sign up and we'll send the best deals to you</h4>
        </div>
        
        <div className="form-container">
          <div className="form-input">
            <input type="text" placeholder="Your email"/>
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
