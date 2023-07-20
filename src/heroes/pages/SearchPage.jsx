
export const SearchPage = () => {
    return (
        <>

            <h1>Search</h1>
            <hr />

            <div className="col-5">

                <h4>Searching</h4>
                <hr />

                <form action="">

                    <input
                        type="text"
                        placeholder="Search a hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"

                    />

                    <button className="btn btn-outline-dark">
                        Search
                    </button>

                </form>

            </div>

            <div className="col-7">

            </div>

        </>
    )
}
