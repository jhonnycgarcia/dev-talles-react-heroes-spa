import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if(!hero) {
    return (<Navigate to="/marvel" />)
  }

  return (
    <h1>Hero</h1>
  )
}
