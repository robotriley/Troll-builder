import React, {useState} from 'react'

const About = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [hobbies, setHobbies] = useState("")
    const [values, setValues] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/trollProfiles', {
            method: "POST",
            headers: {'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: name,
                image: image,
                hobbies: hobbies,
                values: values,
            })
        })
    }
    return (
        <div id='about'>
        <h1>Heloooo I am Troll. I made this site. Please thank you.</h1>

        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                placeholder="Troll Name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label>Image </label>
            <input
                type="text"
                name="image"
                placeholder="enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <br></br>
            <label>Hobbies </label>
            <input
                type="text"
                name="hobbies"
                placeholder="favorite grog flavor"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
            />
            <br></br>
            <label>Values </label>
            <input
                type="text"
                name="values"
                placeholder="values"
                value={values}
                onChange={(e) => setValues(e.target.value)}
            />
            <input type="submit" />
        </form>
        </div>
    )
}

export default About