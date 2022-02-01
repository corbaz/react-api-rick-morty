export default function Personajes(props) {
    console.log('props', props);
    const { personajes, setPersonajes } = props;

    function resetPersonajes() {
        setPersonajes(null);
    }
    return (
        <div className="characters">
            <h4>Personajes</h4>
            <span
                className="back-home"
                onClick={resetPersonajes}>Volver a la Home
            </span>
            <div className='container-characters'>
                {personajes.map((personaje, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={personaje.image} alt={personaje.name} />
                        </div>
                        <div>
                            <h5>{personaje.name}</h5>
                            <h6>
                                {personaje.status === "Alive"
                                    ? (
                                        <>
                                            <span className="alive" />Vivo
                                        </>
                                    )
                                    : (
                                        <>
                                            <span className="dead" />Muerto
                                        </>
                                    )
                                }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{personaje.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{personaje.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span
                className="back-home"
                onClick={resetPersonajes}>Volver a la Home
            </span>
        </div>
    )
}