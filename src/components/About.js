import React, {useState} from 'react'

const About = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [beverage, setBeverage] = useState("")
    const [bug, setBug] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/trollProfiles', {
            method: "POST",
            headers: {'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: name,
                image: image,
                beverage: beverage,
                bug: bug,
            })
        })
    }
    return (
        <div>
        <h1>Heloooo I am Troll. I made this site. Please thank you.</h1>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="enter Troll Name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                name="image"
                placeholder="enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                type="text"
                name="beverage"
                placeholder="please enter favorite flavor of grog"
                value={beverage}
                onChange={(e) => setBeverage(e.target.value)}
            />
            <input
                type="text"
                name="bug"
                placeholder="please enter favorite color of bug"
                value={bug}
                onChange={(e) => setBug(e.target.value)}
            />
            <input type="submit" />
        </form>
        </div>
    )
}

export default About