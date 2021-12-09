import HeroCard from "../app-card/app-card";
import "./app-list.css";

const HeroCardsList = ({heroes}) => {
 
    const items = heroes.map(item => {
        const {id, ...itemProps} = item
    return (
            <HeroCard key={id} {...itemProps}/>
    )
}) 

    return (
        <div className="list">
            {items}
        </div>
    )
}

export default HeroCardsList;