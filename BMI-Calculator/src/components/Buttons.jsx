const Buttons = ({ btnColor, textColor = "black", btnName, onClick }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: btnColor, color: textColor }}
        className="  p-3 md:p-5 w-full rounded-xl cursor-pointer text-lg font-semibold "
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Buttons;
