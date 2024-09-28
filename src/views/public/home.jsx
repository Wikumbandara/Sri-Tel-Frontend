import React from "react";

import Carousel from "../../components/carousel/Carousel";


import img_1 from "../../assets/images/home1.svg";
import img_2 from "../../assets/images/home2.svg";
import img_3 from "../../assets/images/home3.svg"

const data = [
    {
        id: 1,
        name: "IMG1",
        img: img_1,
    },
    {
        id: 2,
        name: "IMG2",
        img: img_2,
    },
    {
        id: 3,
        name: "IMG3",
        img: img_3,
    },
    
];

function Home() {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                <p class="display-6 , text-center" style={{fontWeight:'bold',fontSize:'70px'}}>
                <span style={{ color: '#66cccc' }}>Sri</span>
                <span style={{ color: '#FF6600' }}>Care</span>
                </p>
                <p class="text-center" style={{fontWeight:'bold',marginTop:'-20px'}}>Empowering Connectivity, Simplifying Care</p>
                <p>Sri-Care is here to make your experience effortless and hassle-free. Enjoy seamless connectivity and take control of your telecom needs with just a few taps.</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button type="button" class="btn btn-primary btn-lg me-5" style={{borderRadius:'15px',backgroundColor:'#66cccc',border:'#66cccc'}}>Our Services</button>
                <button type="button" class="btn btn-secondary btn-lg"  style={{borderRadius:'15px',backgroundColor:'#FF6600',border:'#FF6600'}}>Contact Us</button>
                </div>
                </div>
                <div style={{display:'flex'}}>
                <Carousel images={data} />
                </div>
            </div>
            
           
            
        </div>
    );
}

export default Home;