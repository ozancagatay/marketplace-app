export default function ProductCard({ title, price }) {
  return (
    <>
      <article className="product-card">
        <h2>{title}</h2>
        <p>{price}</p>
      </article>
    </>
  );
}
