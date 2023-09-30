import useSort from "../hooks/useSort";
import Table from "./Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable({ ...props }) {
  const { sortBy, sortOrder, sortedData, handleClick } = useSort(props);

  const updatedConfig = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center gap-3">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <GoChevronUp />;
  } else if (sortOrder === "desc") {
    return <GoChevronDown />;
  }
}

export default SortableTable;
