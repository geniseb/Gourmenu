import React from "react";
import '../home/home.scss';



const GroceryList = ({ list, setList }) => {



    return (
        <div id="listContainer" className="scroll">


            <h1 id="listTitle" >Grocery List</h1>
          

            {list.map((item, index) => <dd className="ingredients" key={index}>{item}</dd>)}
            <button id="groceryListButton2" onClick={()=>setList([])}>Reset</button>
           
        </div>



    );
};

export default GroceryList




