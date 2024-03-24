function SearchForm() {
    return (
        <div className="container m-auto w-75">
            <form className="d-flex">
                <input className="form-control me-2" style={{ height: '60px' }} type="search" placeholder="Tìm kiếm" aria-label="Search" />
                <button className="btn btn-outline-success w-25" type="submit">Tìm kiếm</button>
            </form>
        </div>
    )
}

export default SearchForm;