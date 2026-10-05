import { calculateDiscountPercentage, formatPrice } from "../utils/price";

export default function ProductCard({ product }) {
  const { brand, title, price, originalPrice, rating, reviewCount } = product;

  function handleAddToCart() {
    console.log(title);
  }

  const discountPercentage = calculateDiscountPercentage(originalPrice, price);

  return (
    <article className="product-card">
      <p>{brand}</p>
      <h2>{title}</h2>
      <p>{formatPrice(price)}</p>
      {discountPercentage > 0 && (
        <div className="discount-percentage">
          <del>{formatPrice(originalPrice)}</del> {discountPercentage}% İndirim
        </div>
      )}
      <p>
        {rating} ({reviewCount} yorum)
      </p>
      <button type="button" onClick={handleAddToCart}>
        Sepete Ekle
      </button>
    </article>
  );
}
