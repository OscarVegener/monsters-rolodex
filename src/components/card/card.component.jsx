import "./card.styles.css";

const Card = ({monster}) => {
  const { id, email, name } = monster;
  return (
    <div className="card">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
