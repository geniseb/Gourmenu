import React from "react";


const CardContainer = ({ image, meal, ingredients, list, setList }) => {
    const addToList = () => {
        setList(list.concat(ingredients))

    }
    return (

        <div className="cardContainer">
            <img className='imageSize' src={image} />
            <h1 className="header">{meal} </h1>
            <div className="overlay" >
                <div className="overlayText">

                    <ul className="groceryList">
                        {ingredients.map((listItem, index) => <li key={index}>{listItem}</li>)}
                    </ul>
                    <br></br>

                    <div className="buttonContainer">
                        <button className='groceryListButton' type='submit' onClick={addToList}>+ Grocery List</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CardContainer
