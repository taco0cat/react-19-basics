import pfp from './assets/pfp.jpg'

function Card(){

    return(
        <>
            <div className="card">
                <img src={pfp} alt="profile picture" className="card-img" />
                <h2 className="card-title">Taco0Cat</h2>
                <p className="card-text">Check me <a href="https://github.com/taco0cat" target="_blank">GitHub</a> Yall</p>
            </div>
        </>

    )
}

export default Card