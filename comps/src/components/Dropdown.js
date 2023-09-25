import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionSelected) => {
    props.onChange(optionSelected);
    setIsOpen(false);
  };

  const optionsDisplay = props.options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option?.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option?.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="ml-10 mt-2 w-80 relative">
      <Panel
        onClick={() => handleClick()}
        className="flex items-center justify-between cursor-pointer"
      >
        {props.selected?.label || "Select a color"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{optionsDisplay}</Panel>}
    </div>
  );
};

export default Dropdown;
