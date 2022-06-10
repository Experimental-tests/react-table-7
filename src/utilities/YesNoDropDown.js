import React, { useContext } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { SalesInfoContextNet } from "../Context/SalesInfoContextNet";

function YesNoDropDown({ PaidInfo, field, id }) {
  const { onEditData } = useContext(SalesInfoContextNet);

  return (
    <div>
      <DropdownButton
        defaultValue={PaidInfo}
        size="sm"
        variant="secondary"
        title={PaidInfo}
        onChange={(e) => console.log(e)}
      >
        <Dropdown.Item
          onClick={() => {
            onEditData({ field, id, value: "Yes" });
          }}
          value="Yes"
        >
          Yes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            onEditData({ field, id, value: "No" });
          }}
          value="No"
        >
          No
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
export default YesNoDropDown;
