const TrollCard = ({troll} ) => {
    return(
    <div>
        <p>name: {troll.name} </p>
        <p>troll hobby: {troll.hobbies} </p>
        <p>what do you value: {troll.values} </p>
        <img src={troll.image} id="cardImage" ></img>
    </div>
    )
}

export default TrollCard