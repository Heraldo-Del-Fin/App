import React, {useState} from "react";
import api from '../axiosConfig';
import styles from './Register.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre_apellido:"",
        licencia: "",
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post("/conductores", formData);
          alert("Conductor registrado con éxito");
          setFormData({ nombre_apellido: "", licencia: "" });
        } catch (error) {
          console.error("Error al registrar conductor:", error);
          alert("Hubo un problema al registrar el conductor.");
        }
      };
    
      return (
        <div className={styles.registerContainer}>
          <h2>Registrar Conductor</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre y Apellido:</label>
              <input
                type="text"
                name="nombre_apellido"
                value={formData.nombre_apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Licencia:</label>
              <input
                type="text"
                name="licencia"
                value={formData.licencia}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Registrar</button>
          </form>
        </div>
      );

};

export default Register