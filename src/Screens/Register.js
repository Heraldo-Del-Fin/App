import React, { useState } from "react";
import FormPage from "../Components/FormPage";

const Register = () => {
  const [activeTable, setActiveTable] = useState("Conductor");

  const tables = {
    Conductor: {
      columns: ["ID_conductor", "nombre_apellido", "licencia"],
      foreignKeys: [],
    },
    Vehiculo: {
      columns: [
        "placa",
        "modelo",
        "marca",
        "anio_fabricacion",
        "capacidad",
        "tipo_combustible",
      ],
      foreignKeys: [],
    },
    Viaje: {
      columns: [
        "ID_viaje",
        "fecha_inicio",
        "fecha_fin",
        "destino",
        "km_recorridos",
        "tipo_carga",
        "num_pasajeros",
        "ID_conductor",
        "placa",
      ],
      foreignKeys: [
        { column: "ID_conductor", refTable: "Conductor" },
        { column: "placa", refTable: "Vehiculo" },
      ],
    },
    ConsumoCombustible: {
      columns: [
        "ID_consumo",
        "cantidad",
        "costo",
        "estacion_servicio",
        "ID_viaje",
      ],
      foreignKeys: [{ column: "ID_viaje", refTable: "Viaje" }],
    },
    Mantenimiento: {
      columns: [
        "ID_mantenimiento",
        "fecha",
        "tipo",
        "detalles",
        "costo",
        "taller",
        "placa",
      ],
      foreignKeys: [{ column: "placa", refTable: "Vehiculo" }],
    },
  };

  return (
    <div>
      <h1>Registro de Datos</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {Object.keys(tables).map((table) => (
          <button
            key={table}
            onClick={() => setActiveTable(table)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              background: activeTable === table ? "#007BFF" : "#f0f0f0",
              color: activeTable === table ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {table}
          </button>
        ))}
      </div>
      <FormPage
        table={activeTable}
        columns={tables[activeTable].columns}
        foreignKeys={tables[activeTable].foreignKeys}
      />
    </div>
  );
};

export default Register;
