import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      
      <p>&copy; 2023 My React Website</p>
      <div class="social-icons">
            {/* <!-- Add social icons here (e.g., Facebook, Twitter, LinkedIn) --> */}
        </div>

      <div class="footer-content">
      <div class="footer-logo">Your Logo</div>

      <ul class="footer-links">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
