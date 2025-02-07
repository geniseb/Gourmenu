import React from 'react';
import { useState, useEffect } from 'react';
import { mealPlan } from './CardData';
import CardContainer from './CardContainer.jsx';
import './style.css';


const NineCards = ({ list, setList }) => {
    const [mealList, setMealList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [searchInput, setSearchInput] = useState('')


    useEffect(() => {
        setMealList(mealPlan)
        if (filteredList.length > 0) {
            setMealList(filteredList)
        }

    }, [filteredList, list])


    const handleSearch = () => {
        let titleCased = searchInput.split(" ")
        let mappedTitleCased = titleCased.map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase())).join(" ")
        console.log(mappedTitleCased)
        setMealList(mealPlan)

        setFilteredList(mealList.filter((item) => item.ingredients.includes(mappedTitleCased)))
        console.log(filteredList)
    }


    return (
        <div id="invisibleSkeletonDiv">
            <label className='search'>
                <input
                    placeholder="Enter Ingredient..."
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
            </label>

            <button className="searchbutton" onClick={handleSearch}>Search</button>

            <button className="searchbutton" onClick={(e) => {
                console.log(e)
                setMealList([])
                setFilteredList([])
                setSearchInput('')
            }}>Reset</button>

          <div id="invisibleDiv">
            <div className='cardSkeleton'>

                {mealList.map((item, index) =>
                (

                    <CardContainer
                        key={index}
                        image={item.image}
                        meal={item.meal}
                        ingredients={item.ingredients}
                        list={list}
                        setList={setList} />

                )

                )}
          
            </div>
        
            </div>
        </div>
    );
}

export default NineCards
