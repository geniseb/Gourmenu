import { useState } from "react";


function Suggestions() {
    const [suggestions, setSuggestions] = useState('')

    const handleClick = () => {
        alert(`Thank you for your suggestion!`)
        setSuggestions('')
    }

    return (
        <div id="suggestionWrapper">
            <form >
                <h1 id="suggestionTitle">Suggestions?</h1>

                <textarea id="suggestionAreaSize" placeholder="suggestions..." value={suggestions} onChange={(e) => setSuggestions(e.target.value)} className="textarea"></textarea>
                <br></br>
                
                <button onClick={handleClick} type="submit" className="suggestionButton">Submit</button>
            </form>
        </div>
    )
}

export default Suggestions

