import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <>
      <div className="content-wrapper">
        <h1 class="shop-page-title" data-category-id="">
          Shop All{" "}
        </h1>
      </div>
      <ul className="Products column-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
      <div class="instagram-feed">
        <div class="content-wrapper">
          <h2 className="instagram-jjjj">
            #ProteinIsForEveryone #HappyNutrition
          </h2>
          <div class="link-to-instagram">
            Follow us{" "}
            <a href="https://www.instagram.com/originprotein/">
              @originprotein
            </a>
          </div>
        </div>
        <div class="feed-roller" id="InstgramFeedRoller">
          <button
            data-scroll-controls="#InstgramFeedRoller"
            class="control prev"
            onclick=" ScrollWithArrow('left', '.feed-roller ul' );"
            title="Scroll left"
            disabled=""
          ></button>
          <ul class="scroll-with-arrow">
            <li>
              <a class="image" href="#image" data-product-type="">
                <img
                  loading="lazy"
                  src="https://originnutrition.in/instagram-image-proxy.php?v=1&amp;u=C2MJJS-S2an"
                  alt=""
                />
              </a>
              <a class="image" href="#image" data-product-type="">
                <img
                  loading="lazy"
                  src="https://originnutrition.in/instagram-image-proxy.php?v=1&amp;u=C2MJJS-S2an"
                  alt=""
                />
              </a>
              <a class="image" href="#image" data-product-type="">
                <img
                  loading="lazy"
                  src="https://originnutrition.in/instagram-image-proxy.php?v=1&amp;u=C2MJJS-S2an"
                  alt=""
                />
              </a>
              <a class="image" href="#image" data-product-type="">
                <img
                  loading="lazy"
                  src="https://originnutrition.in/instagram-image-proxy.php?v=1&amp;u=C2MJJS-S2an"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
