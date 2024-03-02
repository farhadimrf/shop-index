import getBillboards from "@/actions/get-billboards";
import Billboard from "../components/Billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/ProductList";

const HomePage = async () => {
   const products = await getProducts({ isFeatured: true });
   const billboards = await getBillboards("ec20ee7a-b1cd-4577-b945-bfccbf9c900a");

   return (
      <Container>
         <div className="space-y-10 pb-10">
            <Billboard data={billboards} />
         </div>
         <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
         </div>
      </Container>
   );
};

export default HomePage;
