import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);


    const onNavigateBack = () => {
        navigate(-1);
    }


    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <>

            <div className='row g-0'>

                <div className="col-4">
                    <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' style={{ maxHeight: '38rem' }} />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    {/* <h3>{hero.superhero}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                        <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                        <li className='list-group-item'><b>First appearance: </b>{hero.first_appearance}</li>
                    </ul>

                    <h5 className='mt-3'>Characters</h5>
                    <p>{hero.characters}</p>

                    <button
                        className='btn btn-outline-dark'
                        onClick={onNavigateBack}
                    >
                        Regresar
                    </button> */}
                    <div className="card border-dark mb-3">
                        <h5 className="card-header">{hero.superhero}</h5>
                        <div className="card-body">
                            {/* <h5 className="card-title mb-4">{hero.alter_ego}</h5>
                            <p className="card-text mx-3">Publisher: {hero.publisher}</p>
                            <p className="card-text mx-3">Characters: {hero.characters}</p>
                            <p className="card-text mx-3">First Appearence: {hero.first_appearance}</p>
                            <a href="#" className="btn btn-primary mt-3">Go somewhere</a> */}
                            <h5 className="card-title mb-3 mx-1">{hero.alter_ego}</h5>

                            <div className="card-deck">
                                <div className="card mb-2 border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">Publisher</h5>
                                        <p className="card-text">{hero.publisher}</p>
                                    </div>

                                </div>
                                <div className="card mb-2 border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">Characters</h5>
                                        <p className="card-text">{hero.characters}</p>
                                    </div>

                                </div>
                                <div className="card mb-2 border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">First Appearence</h5>
                                        <p className="card-text">{hero.first_appearance}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className='btn btn-outline-dark'
                        onClick={onNavigateBack}
                    >
                        Regresar
                    </button>

                </div>

            </div>

        </>
    )
}
