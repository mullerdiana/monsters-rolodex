import {CardItem} from "../card-item/card-item.component.jsx";
import "./card-list.styles.css";

export const CardList=({ monsters })=>{
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardItem monster={monster} />;
      })}
    </div>
  );
};
