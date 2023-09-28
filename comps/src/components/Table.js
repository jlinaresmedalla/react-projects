function Table({data, config}){
    const renderedHeaders = config.map((header) => {
        return(
            <th key={header.label}>{header.label}</th>
        );
    });

    const renderedFruits = data.map((fruit)=>{
        const renderedRows = config.map((column)=>{
            return <td key={column.label} className="p-3">
                    {column.render(fruit)}
                </td>
        })

        return(
            <tr className="border-b">
                {renderedRows}
            </tr>
        )
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedFruits}
            </tbody>
    </table>
    )
}

export default Table;