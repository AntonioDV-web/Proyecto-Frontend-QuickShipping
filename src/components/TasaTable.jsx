function TasaTable({ tasas, onEdit, onDelete }) {
    if (tasas.length === 0) {
        return <p>No hay tasas de cambio registradas actualmente.</p>
    }
    return (
        <>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Compra</th>
                        <th>Venta</th>
                        <th>Fuente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasas.map((tasa) => (
                        <tr key={tasa.id} >
                            <td>{new Date(tasa.fecha).toLocaleDateString('es-CR')}</td>
                            <td>₡{parseFloat(tasa.compra).toFixed(2)}</td>
                            <td>₡{parseFloat(tasa.venta).toFixed(2)}</td>
                            <td>{tasa.fuente}</td>
                            <td>
                                <button
                                    onClick={() => onEdit(tasa)}
                                    className="btn-edit"
                                >Editar
                                </button>
                                <button
                                    onClick={() => onDelete(tasa.id)}
                                    className="btn-delete"
                                >Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TasaTable;