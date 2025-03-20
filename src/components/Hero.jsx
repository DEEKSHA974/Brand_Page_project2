import amazonLogo from "../assets/images/amazon.png";
import flipkartLogo from "../assets/images/flipkart.png";
import heroimage from "../assets/images/hero-image.png";

const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src={amazonLogo} alt="amazon-logo" width="50" />
              {/* <img src="/images/flipkart.png" alt="flipkart-logo" /> */}
              <img src={flipkartLogo} alt="flipkart-logo" width="50" />

            </div>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src="/images/hero-image.png" alt="hero-image" /> */}
          <img src={heroimage} alt="hero-iamge" />

        </div>
      </main>
    );
  };
  
  export default HeroSection;

  