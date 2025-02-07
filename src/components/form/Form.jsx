import { useState } from "react";




function Form() {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClick = () => {
        alert(`Your request has been submitted!`)
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <>
            <form id="form-wrapper">
                <h1 id="mailTitle">Join our GourMenu mailing <br></br> list to receive updates.</h1>

                <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input1" />
                <br></br>

                <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input1" />
                <br></br>

                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input1" />
                <br></br>

                <button onClick={handleClick} type="submit" className="formButton">Submit</button>
            </form>
        </>
    )
}

export default Form
