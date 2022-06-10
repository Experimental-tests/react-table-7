import React, { useContext } from "react";
import { SalesInfoContextNet } from "../Context/SalesInfoContextNet";

const EditableCell = ({ value, row, column }) => {
  const { onEditData } = useContext(SalesInfoContextNet);

  const onChange = (e) => {
    onEditData({
      id: row.values.id,
      field: column.id,
      value: e.target.value,
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onChange(e);
    }
  };
  return (
    <input
      className="editable-cell"
      defaultValue={value}
      onBlur={onChange}
      onKeyPress={onKeyPress}
      type={column.type}
    />
  );
};

export default EditableCell;
