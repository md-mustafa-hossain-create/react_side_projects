import InputField from "./InputField";
import Buttons from "./Buttons";
import BmiResult from "./BmiResult";
import { useState } from "react";

const MainContainer = () => {
  const [weightValue, setWeightValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [bmi, setBmi] = useState("");

  function calculateBmi() {
    setBmi(((weightValue / (heightValue * heightValue)) * 703).toFixed(2));
  }

  function handleReload() {
    setWeightValue("");
    setHeightValue("");
    setBmi("");
  }

  return (
    <div className="border border-gray-400 rounded-2xl [box-shadow:0_0_20px_rgba(0,0,0,0.15)] flex  flex-col items-center p-7 gap-10 min-w-xs md:min-w-xl">
      <h1 className=" text-3xl font-bold"> BMI Calculator</h1>
      <div className="w-full">
        <label>Weight(lbs)</label>
        <InputField
          placeholder={"Enter Your Weight Value..."}
          value={weightValue}
          onChange={(e) => setWeightValue(e.target.value)}
        />
        <label>Height(in)</label>
        <InputField
          placeholder={"Enter Your Height Value..."}
          value={heightValue}
          onChange={(e) => setHeightValue(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-5">
        <Buttons
          btnColor="#009FDE"
          textColor="white"
          btnName="Submit"
          onClick={calculateBmi}
        />
        <Buttons btnColor="#D6D6D6" btnName="Reload" onClick={handleReload} />
      </div>

      <BmiResult bmi={bmi} />
    </div>
  );
};

export default MainContainer;
