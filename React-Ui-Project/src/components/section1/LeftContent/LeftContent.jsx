import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between p-4 m-0 w-2/6 h-full ">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
