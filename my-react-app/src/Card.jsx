import bocchi from "./assets/bocchi.jpg"
const Card = () =>{
    return(
        <>
            <div className="card">
                <img className="card-image" alt="profile" src={bocchi}/>
                <h2 className="class-title">PuggyPotato</h2>
                <p className="card-text">I learn React and am unemployed</p>
            </div>
        </>
    )
}


export default Card