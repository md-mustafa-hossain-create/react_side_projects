const InputField = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className=" border border-gray-500 w-full h-12 rounded-xl my-2 px-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
