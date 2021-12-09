import "./app-card.css";

const HeroCard = ({image, name, universe, alter_ego, friends, career, superpowers, more}) => {
    return (
    <div className="heroCard">
        <div className="img">{image}</div>
        <h2 className="hero-name">{name}</h2>
        <div className="hero-universe"><span className="bold">Вселенная:</span> {universe}</div>
        <div className="hero-alter_ego"><span className="bold">Альтер-эго:</span> {alter_ego}</div>
        <div className="hero-friends"><span className="bold">Друзья:</span> {friends}</div>
        <div className="hero-career"><span className="bold">Род деятельности:</span> {career}</div>
        <div className="hero-superpowers"><span className="bold">Суперсилы:</span> {superpowers}</div>
        <div className="hero-more"><span className="bold">Подробнее:</span> {more}</div>
    </div>
    )
}

export default HeroCard;

