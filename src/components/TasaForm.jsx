import { useState, useEffect } from 'react';

function TasaForm({ currentTasa, onSuccess }) {
  const initialState = {
    fecha: '',
    compra: 0,
    venta: 0,
    fuente: 'Manual'
  };

  const [formData, setFormData] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);

  // Efecto para editar los datos
  useEffect(() => {
    if (currentTasa && currentTasa.id) {
      setIsEditing(true);
      // para Dar formato a la fecha y-m-d
      const formattedDate = new Date(currentTasa.fecha).toISOString().substring(0, 10);
      setFormData({
        ...currentTasa,
        fecha: formattedDate,
      });
    } else {
      setIsEditing(false);
      setFormData(initialState);
    }
  }, [currentTasa]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'compra' || name === 'venta' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(formData, isEditing);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="form-tasa">
      <h3>{isEditing ? 'Editar Tasa (ID: ' + currentTasa.id + ')' : 'Crear Nueva Tasa'}</h3>
      
      <label>
        Fecha:
        <input 
          type="date" 
          name="fecha" 
          value={formData.fecha} 
          onChange={handleChange} 
          required 
          // Deshabilitar fecha al editar para evitar ER_DUP_ENTRY
          disabled={isEditing} 
        />
      </label>
      
      <label>
        Compra:
        <input 
          type="number" 
          name="compra" 
          value={formData.compra} 
          onChange={handleChange} 
          step="0.01" 
          required 
        />
      </label>
      
      <label>
        Venta:
        <input 
          type="number" 
          name="venta" 
          value={formData.venta} 
          onChange={handleChange} 
          step="0.01" 
          required 
        />
      </label>

      {/* La fuente no es editable si es automática, pero la mostramos si existe */}
      {!isEditing && (
        <label>
          Fuente:
          <input 
            type="text" 
            name="fuente" 
            value={formData.fuente} 
            onChange={handleChange} 
            required 
          />
        </label>
      )}

      <button type="submit">
        {isEditing ? 'Guardar Cambios' : 'Crear Tasa'}
      </button>
    </form>
  );
}

export default TasaForm;