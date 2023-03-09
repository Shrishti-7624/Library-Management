export default function getBorrowColumn() {
    return [
    
            { headerName: "User", field: "user", width: 150 },
            { headerName: "Title", field: "title", width: 250 },
            { headerName: "ISBN", field: "ISBN", width: 150 },
            { headerName: "Category", field: "category", width: 150 },
            { headerName: "Price", field: "price", width: 100 },
            { headerName: "Due Date", field: "due", width: 200 },
            {
              headerName: "borrowedBook",
              width: 400,
              cellRenderer: 'BookAction'
            },
          
    ];
  }