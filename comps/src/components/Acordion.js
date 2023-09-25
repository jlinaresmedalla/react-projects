import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Acordion = ({ items, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (nextIdx) => {
    if (activeIndex === nextIdx) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(nextIdx);
    }
  };

  const renderedItems = items.map((item, idx) => {
    const isActive = idx === activeIndex;
    const icons = (
      <span className="text-2xl">
        {isActive ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(idx)}
        >
          {item.label}
          {icons}
        </div>
        {isActive && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="broder-x border-t">{renderedItems}</div>;
};

export default Acordion;
