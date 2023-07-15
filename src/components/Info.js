import laptop from "../images/lap.png"
export default function Info(){
    return(
        <div className="container">
            <div className="info info--style">
                <div className="info__detail">
                    <span>Mattis aliquam faucibus purus in massa tempor.</span>
                    <h2>LOREM IPSUM</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor</p>
                    <button>VIEW MORE</button>

                </div>
                <div className="info__img">
                    <img src={laptop}/>
                </div>
            </div>
        </div>
        

    )
}