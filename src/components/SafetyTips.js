import React, {useState, useEffect} from 'react'
import TrollCard from './TrollCard.js'

const SafetyTips = () => {
    
const [trolls, setTrolls] = useState(null)

const showTrolls = () => {
    return(
    trolls.map((troll) => {
        return(
            <TrollCard key={troll.name} troll={troll} />
        )
    })
)}

useEffect(() => {
    getTroll()
}, [])

    const getTroll = async () => {
        let req = await fetch('http://localhost:3000/trollProfiles')
        let res = await req.json()
        setTrolls(res)
    }

    return (
        <div>
            {console.log(trolls)}
            <h1>Troll Gallery</h1>
            {trolls ? showTrolls() : null }

        </div>
    )
}

export default SafetyTips