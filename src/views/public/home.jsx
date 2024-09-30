import React from "react";
import img_1 from "../../assets/images/home1.png"; 

function Home() {
    return (
        <div 
            style={{ 
                fontFamily: 'Poppins, sans-serif', 
                padding: '40px', 
                minHeight: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
                textAlign: 'left' 
            }}>
            
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    width: '100%',
                    maxWidth: '1200px' 
                }}>
                
                <div style={{ flex: 1, padding: '20px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '70px', fontFamily: 'Poppins, sans-serif' }}>
                        <span style={{ color: '#003366' }}>SriCare</span> 
                    </p>
                    <p style={{ fontWeight: 'bold', marginTop: '-20px', fontSize: '24px', color: '#333', fontFamily: 'Poppins, sans-serif' }}>
                        Empowering Your Communication Journey
                    </p>
                    <p style={{ color: '#000', fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>
                    Experience effortless and efficient telecom management with SriCare.
                    Stay connected, manage your services, and control your telecom experience with just a few clicks.
                    Start Your Journey Today!
                    </p>
                    
                    {/* Single button with dark blue gradient */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg" 
                            style={{ 
                                borderRadius: '25px', 
                                background: 'linear-gradient(to right, #003366, #0056B3)', 
                                border: 'none', 
                                padding: '15px 30px', 
                                fontSize: '18px',
                                color: '#fff',
                                fontFamily: 'Poppins, sans-serif' 
                            }}>
                            Get Started
                        </button>
                    </div>
                </div>
                
                <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center' }}>
                    <img src={img_1} alt="SriCare Image" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
                </div>
            </div>
        </div>
    );
}

export default Home;
