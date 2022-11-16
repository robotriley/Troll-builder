import React, {useState, useEffect} from 'react'
import TrollCard from './TrollCard.js'

const GuestBook = () => {
    
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
        <div id='#guestbook'>
            {console.log(trolls)}
            <h1 className="guestbookTitle">Troll Guest Book</h1>
            <h3 className="guestbookDesc">Trolls who have trod this way before. You sign guest book too. Leave picture so we say hi.</h3>
            <div id='trollCard'>{trolls ? showTrolls().reverse() : null }</div>
        

        </div>
    )
}

export default GuestBook