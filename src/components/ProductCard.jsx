export default function ProductCard({ title, price }) {
  function handleAddToCart() {
    console.log(title);
  }
  return (
    <>
      <article className="product-card">
        <h2>{title}</h2>
        <p>{price}</p>
        <button type="button" onClick={handleAddToCart}>
          Sepete Ekle
        </button>
      </article>
    </>
  );
}
