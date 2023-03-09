export default function getIssueColumn() {
    return [
    
        { headerName: "User", field: "user", width: 150 },
        { headerName: "Title", field: "title", width: 250 },
        { headerName: "ISBN", field: "ISBN", width: 150 },
        { headerName: "Category", field: "category", width: 150 },
        { headerName: "Price", field: "price", width: 100 },
        { headerName: "Due", field: "due", width: 200 },
        {
          headerName: "issuedBook",
          width: 400,
          cellRenderer: 'BookAction'
        },
    ];
  }