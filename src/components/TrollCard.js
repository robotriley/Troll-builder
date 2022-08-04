const TrollCard = ({troll} ) => {
    return(
    <div>
        <h3>name: {troll.name} </h3>
        <img src={troll.image} id="cardImage" ></img>
        <p>troll hobby: {troll.hobbies} </p>
        <p>what do you value: {troll.values} </p>
    </div>
    )
}

export default TrollCard