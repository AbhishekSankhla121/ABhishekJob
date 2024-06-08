import "./Shop.css";

export default function Shop() {
  return (
    <>
      <div className="product-main">
        <ul class="page-path">
          <li>
            <a href="#hjhjkh">Home</a>
          </li>
          <li>
            <a href="#piihoih">Shop All</a>
          </li>
          <li>Daily Plant Protein – Strawberry (Jar) </li>
        </ul>

        <div class="product-main-row">
          <div class="product-main-row-col">
            <div class="og-product-review-count">
              <div class="label">
                <span class="average" data-ratings="4.83">
                  4.83/5 |
                </span>
                Read All Reviews
              </div>
            </div>

            <h1 class="product-title">
              Daily Plant Protein – Strawberry (Jar)
            </h1>

            <div class="product-desciption">
              <ul>
                <li class="p1">7 Servings | 25gms protein per serving</li>
                <li class="p1">Premium European golden peas</li>
                <li class="p1">Organic cold-pressed pumpkin seeds</li>
                <li class="p1">4gms of naturally-occurring BCAAs/serving</li>
                <li>Suitable for Lactose, Soy, Nut and Gluten Intolerance</li>
                <li class="p1">
                  Heartwarming strawberry taste with real strawberries
                </li>
                <li>100% natural and delicious</li>
              </ul>
            </div>
          </div>

          <div class="product-main-row-col product-main-row-col-large">
            <div class="product-image-slides">
              <div class="slides">
                <div class="slide" style={{ left: "0%" }}>
                  <img
                    src="https://originnutrition.in/wp-content/uploads/2022/07/Jar-Strawberry-1-opt.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="product-main-row-col">
            <div className="fancy-dropdown-list fancy-dropdown-list-flavour">
              <label>Flavor</label>
              <input readonly="" value=" Strawberry" class="current-value" />
            </div>
            <div class="summary entry-summary">
              <div class="fancy-size-switch" data-size="290 gms (Jar)">
                <div class="options">
                  <a
                    href="https://originnutrition.in/product/daily-vegan-plant-protein-powder-strawberry-jar/"
                    class="current "
                  >
                    290 gms (Jar) <small>7 servings</small>
                  </a>
                  <a
                    href="https://originnutrition.in/product/origin-vegan-plant-protein-powder-strawberry/"
                    class="order-first"
                  >
                    830 gms (Pack) <small>20 servings</small>
                  </a>
                </div>
              </div>
              <div class="og-product-display-price">
                ₹<span id="OGProductPrice">875</span>
              </div>
              <button
                type="submit"
                name="add-to-cart"
                value="211961"
                className="single_add_to_cart_button button alt"
              >
                Add to cart{" "}
              </button>

              <button
                type="submit"
                name="add-to-cart"
                value="211961"
                class="single_add_to_cart_button button alt btn-buy-now"
                data-checkouturl="https://originnutrition.in/checkout"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
