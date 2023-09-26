import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const optionsData = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  const [selected, setIsSelected] = useState(null);
  const handleChange = (optionSelected) => {
    setIsSelected(optionSelected);
  };

  return (
    <div className="flex">
      <Dropdown onChange={handleChange} options={optionsData} selected={selected} />
      <Dropdown onChange={handleChange} options={optionsData} selected={selected} />
      <Dropdown onChange={handleChange} options={optionsData} selected={selected} />
    </div>
  );
}

export default DropdownPage;