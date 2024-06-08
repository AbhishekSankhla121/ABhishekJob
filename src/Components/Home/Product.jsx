import { useNavigate } from "react-router-dom";

export default function Product() {
  const Navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    Navigate("/shop");
  };

  return (
    <>
      <li className="product product-insert" onClick={handleClick}>
        <img
          width={400}
          height={400}
          src="https://originnutrition.in/wp-content/uploads/2022/07/strawberry-pack-new-opt-400x400.png"
          class="attachment-image"
          alt=""
          sizes="(max-width: 400px) 100vw, 400px"
        ></img>

        <div class="ratings-servings">
          <span class="ratings">4.8 </span>

          <span class="servings">20 Servings</span>
        </div>
        <h2 class="product-title">
          <span>Go-Go Fuel for Kids - Vibrant Vanilla (ages 8-12) </span>
        </h2>
        <span class="price">
          <script>var _simple_product_price = 400 </script>

          <span class="sale-price" data-sale-price="400">
            ₹400
          </span>
        </span>
        <button class="single_add_to_cart_button1" type="submit">
          Add to Cart
        </button>
      </li>
    </>
  );
}
