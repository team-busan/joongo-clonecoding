import Adslider from "../Components/home/Adslider";

const Home = () => {
  return (
    <div className="px-0 tablet:px-8 w-full flex justify-center">
      <div className="w-full tablet:w-[1024px] desktop:w-[1280px]">
        <Adslider />
      </div>
    </div>
  );
};

export default Home;
