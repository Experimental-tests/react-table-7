import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

import { COLUMNS } from "./Columns";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";
import EditableCell from "./EditableCell";
import { SalesInfoContextNet } from "../Context/SalesInfoContextNet";

import "./ReactTable.css";

function ReactTableSales() {
  const { SalesInfo: data, updateDB } = useContext(SalesInfoContextNet);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
      Cell: EditableCell,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: COLUMNS,
      data,
      defaultColumn,
      // disable auto reset which is the default behavior
      autoResetSortBy: false,
      autoResetFilters: false,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <div className="col-xs-8 col-sm-3">
        <div className="info_table">
          <br />
          <br />
          <br />

          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

          <table {...getTableProps()} tripped bordered hover size="sm">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th {...column.getHeaderProps()}>
                        <div {...column.getSortByToggleProps()}>
                          {column.render("Header")}
                        </div>
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                        <span {...column.getSortByToggleProps()}>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FontAwesomeIcon icon={faSortDown} size="2x" />
                            ) : (
                              <FontAwesomeIcon icon={faSortUp} size="2x" />
                            )
                          ) : (
                            <FontAwesomeIcon icon={faSort} size="2x" />
                          )}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <br />
        <div className="padding-left_button">
          <Button onClick={updateDB} variant="primary">
            Update database
          </Button>
        </div>
      </div>
    </>
  );
}

export default ReactTableSales;
