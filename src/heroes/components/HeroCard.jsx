
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img
                            className="card-img"
                            src={heroImageUrl}
                            alt={superhero}
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            {/* <p className="card-text">{publisher}</p> */}
                            {/* <p className="card-text">Alter ego: {alter_ego}</p> */}
                            <p className="card-text">{alter_ego}</p>
                            {/* <p className="card-text">First appearance: {first_appearance}</p> */}
                            {/* <p className="card-text">Characters: {characters}</p> */}
                            <p className="card-text">{characters}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
