import { Fragment } from "react";

function Table({ data, config }) {
  const renderedHeaders = config.map((header) => {
    if (header.header) {
      return <Fragment key={header.label}>{header.header()}</Fragment>;
    }
    return <th key={header.label}>{header.label}</th>;
  });

  const renderedFruits = data.map((fruit) => {
    const renderedRows = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(fruit)}
        </td>
      );
    });

    return (
      <tr key={fruit.name} className="border-b">
        {renderedRows}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedFruits}</tbody>
    </table>
  );
}

export default Table;
