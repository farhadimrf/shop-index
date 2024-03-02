import { Product } from "@/types/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

type ProductListProps = {
   title: string;
   items: Product[];
};

const ProductList = ({ items, title }: ProductListProps) => {
   return (
      <div className="scroll-py-4">
         <h3 className="font-bold text-3xl">{title}</h3>
         {items.length === 0 && <NoResults />}
         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
            {items.map((item) => (
               <ProductCard key={item.id} data={item} />
            ))}
         </div>
      </div>
   );
};

export default ProductList;
