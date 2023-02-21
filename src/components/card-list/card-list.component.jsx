import { Component } from "react";
import CardItem from '../card-item/card-item.component.jsx';
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardItem monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
