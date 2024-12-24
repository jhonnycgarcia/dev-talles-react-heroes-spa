import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks"
import { HeroCard } from "../components"
import { useMemo } from "react";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByName(q), [q]);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0 && heroes.length === 0);

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if(searchText.length <= 1) { return; }
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

          <div 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
            aria-label="alert-search"
          >
            Search a hero
          </div>

          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}
            aria-label="alert-no-results"
          >
            No results found for <b>{ q }</b>
          </div>

          {
            heroes.map((hero) => (
              <HeroCard 
                key={hero.id} 
                {...hero}
              />
            ))
          }

        </div>
      </div>
    </>
  )
}
