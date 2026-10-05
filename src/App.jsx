import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
