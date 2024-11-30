import React, { useState, useEffect } from "react";
import { insertData, fetchData } from "../services/api"; // Función para obtener datos desde el backend
import styles from "./FormPage.module.css";



const FormPage = ({ table, columns, foreignKeys }) => {
  const [formData, setFormData] = useState({});
  const [relatedData, setRelatedData] = useState({}); // Guardará opciones para claves foráneas

  // Cargar datos de claves foráneas al montar el componente
  useEffect(() => {
    const loadRelatedData = async () => {
      const data = {};
      for (let key of foreignKeys) {
        const result = await fetchData(key.refTable); // Llama al backend para obtener datos
        data[key.column] = result;
      }
      setRelatedData(data);
    };
    if (foreignKeys?.length) loadRelatedData();
  }, [foreignKeys]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertData(table, formData);
      alert(`Datos ingresados en la tabla ${table} correctamente.`);
      setFormData({}); // Limpia el formulario tras el envío
    } catch (error) {
      alert(`Error al ingresar datos en ${table}: ${error.message}`);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Agregar datos a la tabla: {table}</h2>
      {columns.map((column, index) => (
        <div key={index}>
          <label>{column}:</label>
          {foreignKeys?.some((fk) => fk.column === column) ? (
            <select
              name={column}
              value={formData[column] || ""}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              {relatedData[column]?.map((item, idx) => (
                <option key={idx} value={item.id}>
                  {item.displayName} {/* Ajusta según los datos del backend */}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={column}
              placeholder={`Ingrese ${column}`}
              value={formData[column] || ""}
              onChange={handleChange}
              required
            />
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormPage;

