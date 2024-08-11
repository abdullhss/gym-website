import './Style/Hero.css';
import Header from './Header'
import Counter from './Counter';
import HeroImage from "../assets/hero_image.png";
import HeroImageBack from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
export default function Hero() {
    return (
        <div className="Hero">
            <div className="blurEffect heroBlur"></div>
            <div className="leftSide">
                <Header></Header>
                {/* ad section */}
                <div className="ad">
                    <div className="orangeSlider"></div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* hero section */}
                <div className="heroText">
                    <div>
                        <span className="outlineText">SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    
                    <div className="pargraph">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore tenetur odio architecto accusamus alias sed cupiditate</span>
                    </div>
                </div>
                {/* counters */}
                <div className="counters">
                    <Counter title={"expert coachs"} number={"+140"}></Counter>
                    <Counter title={"members joined"} number={"+978"}></Counter>
                    <Counter title={"fitness programs"} number={"+50"}></Counter>
                </div>
                {/* BTNs */}
                <div className="btnsContaner">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
                {/* END OF LEFT SECTION */}
            </div>
                {/* RIGHT SECTION */}
            <div className="rightSide">
                <button className="btn">Join Now</button>

                <div className="heartRate">
                    <img src={Heart} alt="Heart-rate" />
                    <span className="heartRateSpan">Heart Rate</span> <span className="bpm">116 bpm</span>
                </div>
                <img id="HeroImage" src={HeroImage} alt="" />
                <img id="HeroImageBack" src={HeroImageBack} alt="" />
                <div className="calIsBurning">
                    <img src={Calories} alt="" />
                    <div className="spans">
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
