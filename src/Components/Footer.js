import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerGrid">
          <div className="footerGridItem1">
            <img
              src="http://abnd.in/wp-content/uploads/2019/11/AbndLogoFooter.png"
              width="300px"
            />
            <br />
            <br />
            <p>
              <a
                className="customLandingPageNumber"
                href="tel:+91 902 902 4455"
              >
                +91 902 902 4455
              </a>
              <br />
              <a href="mailto:info@abnd.in"> info@abnd.in</a>
              <br />
              <br />
              <span>Mumbai. Singapore.</span>
              <br />
              <br />
            </p>

            <a href="https://www.facebook.com/TeamABND/" target="_blank">
              <img
                src="https://abnd.in/wp-content/uploads/2019/11/FacebookIconNew.png"
                width="25px"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/3295768/admin/"
              target="_blank"
            >
              <img
                src="http://abnd.in/wp-content/uploads/2019/11/ABND-SM-ICONS-02.png"
                width="25px"
              />
            </a>
            <a href="https://www.instagram.com/teamabnd/" target="_blank">
              <img
                src="http://abnd.in/wp-content/uploads/2019/11/ABND-SM-ICONS-03.png"
                width="25px"
              />
            </a>
            <a href="https://twitter.com/teamabnd" target="_blank">
              <img
                src="http://abnd.in/wp-content/uploads/2019/11/ABND-SM-ICONS-04.png"
                width="25px"
              />
            </a>
            <br />
            <br />

            <p>© 2022 ABND. All Rights Reserved.</p>
          </div>

          <div className="footerGridItem2">
            <h4>Quick Links</h4>
            <br />
            <a href="https://abnd.in/brand-naming/">Brand Naming</a>
            <br />
            <a href="https://abnd.in/brand-identity/">Brand Identity</a>
            <br />
            <a href="https://abnd.in/brand-positioning/">Brand Positioning</a>
            <br />
            <a href="https://abnd.in/brand-architecture/">Brand Architecture</a>
            <br />
            <a href="https://abnd.in/brand-building">Brand Building</a>
            <br />
            <a href="https://abnd.in/brand-strategy/">Brand Strategy</a>
            <br />
            <a href="https://abnd.in/corporate-branding/">Corporate Branding</a>
            <br />
            <a href="https://abnd.in/digital-services/">Digital Services</a>
            <br />
          </div>

          <div className="footerGridItem3">
            <a href="https://abnd.in/consumer/">
              <img
                src="https://abnd.in/wp-content/uploads/2022/05/ABND-Email-Signature-16.png"
                alt=""
              />
            </a>
            <a href="https://abnd.in/b2b/">
              <img
                src="https://abnd.in/wp-content/uploads/2022/05/ABND-Email-Signature-15.png"
                alt=""
              />
            </a>
            <a href="https://abnd.in/edunoia/">
              <img
                src="https://abnd.in/wp-content/uploads/2022/05/ABND-Email-Signature-17.png"
                alt=""
              />
            </a>
            <a href="https://abnd.in/people/">
              <img
                src="https://abnd.in/wp-content/uploads/2022/05/ABND-Email-Signature-18.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
