import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={footerStyle}>
          <div style={containerStyle}>
            <div style={logoStyle}>
              <h1 style={{ fontFamily: 'Cocomat Pro', color: 'white'}}>Dr. Health</h1>
              <p style={{color:'white'}}>Your Marketplace for Health Tourism</p>
            </div>
            <div style={linksContainer}>
              <div style={linksColumn}>
                <h3 style={columnHeading}>Explore</h3>
                <ul style={linkList}>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Ilnesses</a></li>
                  <li><a href="#destinations">Procedures</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div style={linksColumn}>
                <h3 style={columnHeading}>Resources</h3>
                <ul style={linkList}>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#faq">FAQs</a></li>
                  <li><a href="#reviews">Reviews</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    };
// Styles
const links = document.querySelectorAll('your-selector-for-links');

const footerStyle = {
    background: 'rgb(111, 31, 31)',
    fontWeight: 'bold',
    padding: '20px 0',
    color: '#3a76e4',
    fontFamily: 'Montserrat',
  };
  
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    outline:'none',
  };
  
  const logoStyle = {
    flex: '1',
  };
  
  const linksContainer = {
    display: 'flex',
    color: 'white',
    flex: '2',
  };
  
  const linksColumn = {
    flex: '1',
    paddingLeft: '20px',
  };
  
  const columnHeading = {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: 'white',
  };
  
  const linkList = {
    listStyle: 'none',
    color: 'white',
    padding: '0',
    margin: '0',
    textDecoration: 'none',
    outline:'none'
  };
const p={
    color: 'white',
}
export default Footer