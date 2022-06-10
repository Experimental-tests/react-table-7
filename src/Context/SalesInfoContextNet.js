import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

export const SalesInfoContextNet = createContext();

export function SalesInfoContextNetProvider({ children }) {
  const [SalesInfo, setSalesInfo] = useState([]);

  console.log("I am Context");

  async function fetchData() {
    console.log(`I am the start fetchData`);
    const result = await fetch(`${process.env.REACT_APP_DATABASE}sales`);
    // let result = await fetch(`${process.env.REACT_APP_DATABASE}sales`)

    const parsedResult = await result.json();
    setSalesInfo(parsedResult);
    console.log(` fetchData `, parsedResult);
  }
  useEffect(() => {
    console.log("I am use useEffect");
    fetchData();
  }, []);

  const onEditData = useCallback(({ id, field, value }) => {
    setSalesInfo((data) => {
      return data.map((record) => {
        if (record.id === id) {
          return { ...record, [field]: value };
        }
        return record;
      });
    });
  }, []);

  const updateDB = useCallback(() => {
    /**
     * TODO update database, there are two strategies:
     * 1- Edit table rows and bulk update
     * 2- Edit/Save only by one row.
     */
  }, []);

  return (
    <SalesInfoContextNet.Provider
      value={{
        SalesInfo,
        onEditData,
        updateDB,
      }}
    >
      {children}
    </SalesInfoContextNet.Provider>
  );
}

export function useAPI() {
  const context = useContext(SalesInfoContextNet);
  if (context === undefined) {
  }
  return context;
}

export default SalesInfoContextNetProvider;
