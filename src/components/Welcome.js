import { useState, useEffect } from "react";
export default function Welcome(props) {
    console.log('props', props);
    const { apellido, nombre, contadorInicial } = props;
    const [contador, setContador] = useState(contadorInicial);
    const [par, setPar] = useState((contador % 2) === 0 ? true : false);

    const sumar = () => {
        setContador(contador + 1);
    }
    const restar = () => {
        setContador(contador - 1);
    }
    useEffect(() => {
        setPar((contador % 2) === 0 ? true : false);
    }, [contador]);

    return (
        <div className="welcome">
            <h1>Hola {apellido} {nombre} - Chipy</h1>
            <h2>{contador}</h2>
            {par && <h3>Contador Par</h3>}
            {!par && <h3>Contador Impar</h3>}

            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}