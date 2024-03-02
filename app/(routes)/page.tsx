import getBillboards from "@/actions/get-billboards";
import Billboard from "../components/Billboard";
import Container from "../components/ui/container";

const HomePage = async () => {
   const billboards = await getBillboards("ec20ee7a-b1cd-4577-b945-bfccbf9c900a");

   return (
      <Container>
         <div className="space-y-10 pb-10">
            <Billboard data={billboards} />
         </div>
      </Container>
   );
};

export default HomePage;
