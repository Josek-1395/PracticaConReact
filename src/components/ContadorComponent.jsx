import { useCounter } from '../hooks/useCounter'
import { useState } from 'react'
export const ContadorComponent = () => {
    const [contador, setContador] = useState(0)
    const { incrementar, decrementar, resetear} = useCounter()

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button className="btn btn-primary" onClick={() => incrementar()}>+1</button>
            <button className="btn btn-danger" onClick={() => resetear()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrementar()}>-1</button>
        </>
    )
}
