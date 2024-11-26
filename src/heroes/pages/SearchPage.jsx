import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks"
import { HeroCard } from "../components"

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: '' });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.length <= 1) { return; }
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No results found for <b>{ q }</b>
          </div>

          {/* <HeroCard {...hero} /> */}

        </div>
      </div>
    </>
  )
}
