export default function getColumnDefs() {
    return [
    
        { headerName: "Title", field: "title", width: 250 },
        { headerName: "ISBN", field: "ISBN", width: 150 },
        { headerName: "Category", field: "category", width: 150 },
        { headerName: "Price", field: "price", width: 100 },
        { headerName: "Quantity", field: "quantity", width: 100, },
        {
          headerName: "book",
          width: 400,
          cellRenderer: 'BookAction'
        },

          
    ];
  }