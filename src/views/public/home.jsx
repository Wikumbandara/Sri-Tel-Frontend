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
                textAlign: 'center'
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
                    <p style={{ fontWeight: 'bold', fontSize: '70px' }}>
                        <span style={{ color: '#1E90FF' }}>Sri</span> {/* Light blue for Sri */}
                        <span style={{ color: '#003366' }}>Care</span> {/* Dark blue for Care */}
                    </p>
                    <p style={{ fontWeight: 'bold', marginTop: '-20px', fontSize: '24px', color: '#333' }}> {/* Keeping text color unchanged */}
                        Empowering Connectivity, Simplifying Care
                    </p>
                    <p style={{ color: '#000', fontSize: '18px' }}> {/* Keeping this color unchanged */}
                        Sri-Care is here to make your experience effortless and hassle-free. Enjoy seamless connectivity and take control of your telecom needs with just a few taps.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg me-5" 
                            style={{ 
                                borderRadius: '15px', 
                                backgroundColor: '#1E90FF', /* Light blue for Our Services button */
                                border: '#1E90FF', 
                                padding: '15px 30px', 
                                fontSize: '18px' 
                            }}>
                            Our Services
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary btn-lg" 
                            style={{ 
                                borderRadius: '15px', 
                                backgroundColor: '#003366', /* Dark blue for Contact Us button */
                                border: '#003366', 
                                padding: '15px 30px', 
                                fontSize: '18px' 
                            }}>
                            Contact Us
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
