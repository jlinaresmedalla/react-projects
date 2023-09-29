import { useState } from "react";
import Table from "./Table";
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function SortableTable({ ...props }) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if(sortBy && label !== sortBy){
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = props.data;
  if (sortOrder && sortBy){
    const {sortValue} = props.config.find(column => column.label === sortBy);
    sortedData = [...props.data].sort((a,b)=>{
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return( valueA -valueB) *reverseOrder;
      }

    })


  }

  const updatedConfig = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
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

function getIcons(label, sortBy, sortOrder){
  if(label !== sortBy){
    return (<div>
      <GoChevronUp />
      <GoChevronDown />
    </div>)
  }
  if(sortOrder === null){
    return <div>
      <GoChevronUp />
      <GoChevronDown />
    </div>
  }else if (sortOrder === 'asc') {
    return <GoChevronUp />;
  } else if (sortOrder === 'desc') {
    return <GoChevronDown />;
  }
}


export default SortableTable;
