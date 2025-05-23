/**
 * A footer displayed on all pages and containing links to LinkedIn and GitHub as well as an email.
 */

import React, { useEffect } from "react";
// import { Link } from 'react-router';

import linkedInLogo from "../assets/img/linkedin-svgrepo-com.svg";
import gitHubLogo from "../assets/img/github-svgrepo-com.svg";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer class="footer">
      {/* Link to contact form */}
      <section class="contact">
        <h2>Get in touch!</h2>
        <div class="contact-form-body">
          <span>
            Email: <a href="mailto:m.nangole@gmx.at">m.nangole@gmx.at</a>
          </span>
        </div>
      </section>

      {/* Links to social media (LinkedIn, Instagram)
            Credits for icons: www.svgrepo.com  */}
      <div class="social-media-links-wrapper">
        <a href="https://www.linkedin.com/in/martin-nang-ole-60821643/">
          <img src={linkedInLogo} width={30} alt="LinkedIn logo." />
        </a>
        <a href="https://github.com/MartinNang">
          <img src={gitHubLogo} width={30} alt="GitHub logo." />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
