import YesNoDropDown from "../utilities/YesNoDropDown";

export const COLUMNS = [
  {
    Header: "Date Sold",
    accessor: "created_at",
    type: "text",
  },
  {
    Header: "Order#",
    accessor: "id",
    type: "text",
  },

  {
    Header: "SKU",
    accessor: "SKU",
    type: "number",
  },
  {
    Header: "Supplier",
    accessor: "Supplier",
    type: "text",
  },
  {
    Header: "Cost $",
    accessor: "Cost_USD",
    type: "number",
  },
  {
    Header: "Description",
    accessor: "Description",
    type: "text",
  },
  {
    Header: "Paid Supplier",
    accessor: "PaidSupplier",

    Cell: (cell) => (
      <YesNoDropDown
        field="PaidSupplier"
        id={cell.row.values.id}
        PaidInfo={cell.value}
      />
    ),
  },

  //   In the original model we had a “paid suppliers”  &  PaidShipping
  // look into the original to add it later on
];
