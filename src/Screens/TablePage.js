import React, { useEffect, useState } from "react";
import { getFilteredData } from "../services/api";
import styles from "./Tables.module.css";

const TablePage = () => {
  const [table, setTable] = useState("users"); // Cambiar según las tablas disponibles
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({}); // Cambiar según tus filtros

  const fetchTableData = async () => {
    try {
      const result = await getFilteredData(table, filters);
      setData(result);
    } catch (error) {
      console.error("Error fetching table data:", error.message);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [table, filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.tableContainer}>
      <h2>Tabla: {table}</h2>
      <div>
        <label>Filtro:</label>
        <input
          name="filterKey" // Cambiar a nombres reales de filtros
          placeholder="Ingrese un filtro"
          onChange={handleFilterChange}
        />
        <button onClick={fetchTableData}>Aplicar Filtros</button>
      </div>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
