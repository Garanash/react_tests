function MyComponents ({animal, mood, hasPet}){
    return hasPet ?
        <p>My {animal} is very {mood}</p>
        : <p> no Animal</p>
}

export default MyComponents