import { useState, useEffect } from "react";
import TasaForm from "./components/TasaForm";
import TasaTable from "./components/TasaTable";
import AutoUpdate from "./components/AutoUpdate";
import { TasaApi } from "./api/apiService";

function App() {
    const [tasas, setTasas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTasa, setCurrentTasa] = useState(null);

    // Funcion para cargar los datos 
    const fetchTasas = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await TasaApi.getAll()
            setTasas(response.data)
        } catch (err) {
            setError(`Error al cargar las tasas ${err.message}`)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchTasas()
    }, []);

    // Para manejo de formulario de creacion y actualizacion
    const handleFormSubmit = async (data, isEditing) => {
        try {
            setError(null)
            if (isEditing) {
                await TasaApi.update(data.id, data)
                alert(`Tasa con el ID: ${data.id} actualizada con exito!`)
            } else {
                await TasaApi.create(data)
                alert(`Tasa creada con exito!`)
            }
            setCurrentTasa(null)
            fetchTasas()
        } catch (err) {
            const msn = err.response?.data?.message
            setError(`Error: ${msn}`)
        }
    }

    // Eliminacion de registros en base de datos
    const handleDelete = async (id) => {
        alert('Esta seguro que quiere eliminar este registro?')
        try {
            await TasaApi.remove(id)
            alert('Tasa eliminada con exito!')
        } catch (error) {
            setError('No se pudo eliminar la tasa!')
        }
    }

    // Para el manejo de la consulta automatica
    const handleAutoUpdate = async () => {
        setLoading(true)
        try {
            const response = await TasaApi.updateAutomatic()
            alert(response.data.message)
            fetchTasas()
        } catch (err) {
            const msn = err.response?.data?.message
            setError(`Error: ${msn}`)
        } finally {
            setLoading(false)
        }
    }

        if(loading) return <div>Cargando datos...</div>
        return(
            
                <div className="container" >
                    <h1>Gestor de tasas de cambio de Costa Rica</h1>
                    {error && <div className="error-message" >{error}</div>}
                    <AutoUpdate onUpdate={handleAutoUpdate} />
                    <hr />

                    <div className="forms-section" >
                        <TasaForm 
                        currentTasa={currentTasa}
                        onSuccess={handleFormSubmit}
                        />
                    </div>

                    <hr />
                    <h2>Historial de Tasas de Cambio</h2>
                    <TasaTable 
                        tasas={tasas}
                        onEdit={setCurrentTasa}
                        onDelete={handleDelete}
                    />

                </div>
            
        )

}

export default App;