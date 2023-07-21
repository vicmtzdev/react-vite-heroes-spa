import { Link } from "react-router-dom";


// const CharactersByHero = ({ alter_ego, characters }) => {

//     if (alter_ego === characters) return (<></>);

//     return <p>{characters}</p>

// }


export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    // const charactersByHero = (<p>{characters}</p>);

    return (
        <>

            <Link className="link-opacity-75-hover link-dark link-underline link-underline-opacity-0" to={`/hero/${id}`}>


                <div className="col animate__animated animate__fadeIn mb-3">
                    <div className="card" style={{ maxWidth: '28rem' }}>

                        <img src={heroImageUrl} className="card-img-top" alt={superhero} style={{ maxHeight: '31rem' }} />

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {/* <CharactersByHero characters={characters} alter_ego={alter_ego} /> */}

                            <p className="card-text">
                                <small className="text-muted" >{first_appearance}</small>
                            </p>

                        </div>
                    </div>
                </div>

            </Link>

        </>
    )
}
