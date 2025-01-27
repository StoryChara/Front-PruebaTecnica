import "./landingStyles.css"
import MapComponent from './map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faPaintbrush, faPencil, faLocationDot, faMobileScreen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faSquareFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  return (
    <div>
      <div class="background-container">
      <div class="overlay"></div>
        <div class="navbar">
          
        </div>

        <div class="title-container">
          <h1>The best products start with Figma</h1>
          <h4>Most calendars are designed for teams. Slate is designed for freelancers.</h4>
        </div>

        <button> Try For Free </button>
      </div>



      <div class="content">
        <div class="text-content">
          <h2>Features</h2>
          <h4>Most calendars are designed for teams. Slate is designed for freelancers.</h4>
        </div>

        <div class="items">
          <div class="@ feature-style-2">
            <div class="simbolo"><FontAwesomeIcon icon={faShapes} /></div>
            <h3>OpenType features Variable fonts</h3>
            <p class="text">Slate helps you see how many more days you need to work to reach your financial goal.</p>
          </div>

          <div class="@ feature-style-2">
            <div class="simbolo"><FontAwesomeIcon icon={faPencil} /></div>
            <h3>Design with real data</h3>
            <p class="text">Slate helps you see how many more days you need to work to reach your financial goal.</p>
          </div>

          <div class="@ feature-style-2">
            <div class="simbolo"><FontAwesomeIcon icon={faPaintbrush} /></div>
            <h3>Fastest way to take action</h3>
            <p class="text">Slate helps you see how many more days you need to work to reach your financial goal.</p>
          </div>
        </div>

        <div class="screen content">
          <iframe title="test" src="https://www.youtube.com/embed/njX2bu-_Vw4?si=-YOjJR-mfu8KxQiw"></iframe>
        </div>
      </div>



      <div class="content">
        <h2>Contact Us</h2>
        <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <div class="row">
          <div class="left">
            <div class="form">
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Your Email"/>
              <input type="text" placeholder="Your Message"/>
              <button>Send</button>
            </div>
          </div>

          <div class="right">
            <div class="items">
              <div class="block">
                <div class="simbolo"><FontAwesomeIcon icon={faLocationDot} /></div>
                <h6>6386 Spring St undefined Anchorage, Georgia 12473 United States</h6>
              </div>
              <div class="block">
                <div class="simbolo"><FontAwesomeIcon icon={faMobileScreen} /></div>
                <h6>(843) 555-0130</h6>
              </div>
              <div class="block">
                <div class="simbolo"><FontAwesomeIcon icon={faEnvelope} /></div>
                <h6>willie.jennings@example.com</h6>
              </div>
            </div>

            <div className="screen-content"> <MapComponent /> </div>

            <div className="social">
              <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://facebook.com"><FontAwesomeIcon icon={faSquareFacebook} /></a>
              <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

        </div>
      </div>

      <div class="footer">
        <div className="content">
          <div className="desktop-menu">
            <div className="menu-style-2">
              <h3>Pages</h3>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="menu-style-2">
              <h3>Tomothy</h3>
              <ul>
                <li>Eleanor Edwards</li>
                <li>Ted Robertson</li>
                <li>Annette Russell</li>
                <li>Jennie Mckinney</li>
                <li>Gloria Richards</li>
              </ul>
            </div>

            <div className="menu-style-2">
              <h3>Pages</h3>
              <ul>
                <li>Philip Jones</li>
                <li>Product</li>
                <li>Colleen Russell</li>
                <li>Marvin Hawkins</li>
                <li>Bruce Simmmons</li>
              </ul>
            </div>

          </div>

          <div className="row">
            <div className="block"> 
                <div class="simbolo"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className="adress">7480 Mockingbird Hill undefined</div>
              </div>
              
              <div class="block">
                <div class="simbolo"><FontAwesomeIcon icon={faMobileScreen} /></div>
                <div className="adress">(239) 555-0108</div>
              </div>

              <div className="social">
                <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://facebook.com"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Landing;
