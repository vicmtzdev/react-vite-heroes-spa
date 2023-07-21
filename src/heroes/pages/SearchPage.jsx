import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useform';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: ''
    });

    const onSearchSubmit = (event) => {

        event.preventDefault();
        // if (searchText.trim().length <= 1) return;

        onResetForm();
        navigate(`?q=${searchText.toLowerCase().trim()}`);

    }

    return (
        <>

            <div className='row g-2 mb-3'>

                <div className='col-11'>
                    <form onSubmit={onSearchSubmit}>

                    <input
                        type="text"
                        placeholder="Search a hero"
                            className="form-control"
                        name="searchText"
                        autoComplete="off"
                            value={searchText}
                            onChange={onInputChange} 
                    />
                    </form>
                </div>

                <div className='col-1'>
                    <button
                        style={{ height: '37px', minWidth: '100px' }}
                        type='submit'
                        className="btn btn-outline-primary"
                        onClick={onSearchSubmit}

                    >
                        Search
                    </button>
                </div>

            </div>


            {/* {
                        (q === '')
                            ? <div className="alert alert-primary"> Search a hero </div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger"> There's no results for <b>{q}</b> </div>


                    } */}



            <div className="alert alert-primary animate__animated animate__fadeInUp" style={{ display: showSearch ? '' : 'none' }}> Search a hero ! </div>
            <div className="alert alert-danger animate__animated animate__fadeInUp" style={{ display: showError ? '' : 'none' }}> There's no results for <b>{q}</b> </div>

            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </div>






        </>
    )
}
