import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {cards: data.cards}
    }
    //to remove the card
    remove = (event) => {
        let cardtitle = event.target.getAttribute("cardtitle");
        let localCards = this.state.cards;
        let changed = localCards.filter((card) => {
            return card.title !== cardtitle;
        });
        this.setState({cards:changed});
    }

    render(){
        return(
            <div>
                {
                    this.state.cards.map((card,index) =>{
                        return<Card
                            key={index}
                            title={card.title}
                            content={card.content}
                            clickClose={this.remove} />
                    })
                }
            </div>
        );
    }
}
export default CardList;