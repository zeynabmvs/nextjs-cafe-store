import Product from "@/app/components/Product";
import { ProductType } from "@/app/lib/definitions";

type ProductListProps = {
  products: ProductType[];
};


const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
      {products.map((item: ProductType, index: number) => (
        <Product key={index} detail={item} />
      ))}
    </div>
  );
};

export default ProductList;