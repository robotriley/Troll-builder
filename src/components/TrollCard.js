const TrollCard = ({troll} ) => {
    return(
    <div>
        <p>name: {troll.name} </p>
        <p>favorite flavor of grog: {troll.beverage} </p>
        <p>favorite color bug: {troll.bug} </p>
        <img src={troll.image}></img>
    </div>
    )
}

export default TrollCard