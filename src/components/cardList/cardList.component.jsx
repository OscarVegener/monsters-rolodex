import "./cardList.component.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-container">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);
export default CardList;
