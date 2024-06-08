import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="content-wrapper">
          <div class="footer-row">
            <div class="col">
              <div class="nav-links">
                <a href="#f">Shop All</a>
                <a href="#fd">Why Origin</a>
                <a href="#d">Recipes</a>
                <a href="#fd">Learn More</a>
                <a href="#f">Stories</a>
                <a href="#f" class="show-protein-calculator">
                  Protein Calculator
                </a>
                <a href="#f">Contact us / FAQs</a>
                <a href="#ff">Shipping &amp; Delivery</a>
                <a href="#nskd">Stores</a>
              </div>
            </div>

            <div class="col">
              <div className="newsletter-form">
                <div id="mailerlite-form_1" data-temp-id="666374b31643d">
                  <div className="mailerlite-form">
                    <form noValidate>
                      <div className="mailerlite-form-title">
                        <h3>Get Updates</h3>
                      </div>
                      <div className="mailerlite-form-description"></div>
                      <div className="mailerlite-form-inputs">
                        <div className="mailerlite-form-field">
                          <label htmlFor="mailerlite-1-field-email">
                            Email
                          </label>
                          <input
                            id="mailerlite-1-field-email"
                            type="email"
                            required
                            placeholder="Email"
                          />
                        </div>

                        <div className="mailerlite-subscribe-button-container">
                          <button
                            className="mailerlite-subscribe-submit"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="col footer-brand-info">
                <p>
                  <img
                    class="footer-logo"
                    src="https://originnutrition.in/wp-content/themes/origin/images/brand/origin-logo.svg"
                    alt="Origin Nutrition"
                  />
                </p>
                <p>
                  We at Origin Nutrition promise to offer you the best tasting,
                  100% natural vegan protein that is plant-based and ideal for
                  weight management as well as improving protein intake.{" "}
                </p>
                <div class="social-profile-links">
                  <a
                    target="_blank"
                    rel="external nofollow"
                    href="#fgfr"
                    class="social-link-instagram"
                  ></a>

                  <a
                    target="_blank"
                    rel="external nofollow"
                    href="#thtr"
                    class="social-link-facebook"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="end-band">
          <div class="content-wrapper">
            <div class="end-band-row">
              <div class="copyright">© 2024 Origin Nutrition</div>
              <div class="other-links">
                <a href="https://originnutrition.in/privacy-policy/">
                  PRIVACY POLICY
                </a>
                <a href="https://originnutrition.in/shipping-and-delivery/">
                  SHIPPING POLICY
                </a>
                <a href="https://originnutrition.in/terms-conditions/">
                  TERMS OF USE
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
