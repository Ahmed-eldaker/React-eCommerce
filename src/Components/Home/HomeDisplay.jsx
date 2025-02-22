import CarsolHome from "../CarsolHome/CarsolHome";
import AllProducts from "../AllProducts/AllProducts";
import HomeCategory from "./HomeCategory";

const HomeDisplay = () => {
  return (
    <div>
      {/* <Loading/> */}
      <CarsolHome />
      <HomeCategory />
      <AllProducts />
    </div>
  );
};

export default HomeDisplay;
