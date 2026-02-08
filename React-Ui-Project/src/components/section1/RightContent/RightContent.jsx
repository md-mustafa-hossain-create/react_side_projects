import RightCard from "./RightCard";
import users from "./cardData";

const RightContent = () => {
  return (
    <div className="flex gap-10 p-4 w-3/4 h-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {users.map((user, index) => (
        <RightCard
          key={user.serialNumber || index}
          user={user}
          id={user.serialNumber || index + 1}
        />
      ))}
    </div>
  );
};

export default RightContent;
