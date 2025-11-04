export function AutoUpdate({onUpdate}){
    return(
        <>
            <div className="auto-update-seccion" >
                <h3>Consulta en Tiempo Real!</h3>
                <p>
                    Actualizacion de la tasa de compra y venta del Colón para el día de hoy
                </p>
                <button onClick={onUpdate} className="btn-primary" >
                        Actualizar Tasa de cambio
                </button>
            </div>
        </>
    )
}

export default AutoUpdate;