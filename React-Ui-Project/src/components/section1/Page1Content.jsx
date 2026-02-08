import LeftContent from "./leftContent/LeftContent";
import RightContent from "./rightContent/RightContent";
const Page1Content = () => {
  return (
    <div className="flex flex-1 gap-10 px-18 py-12 h-full">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
