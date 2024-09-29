import React from "react";
import { CFooter, CLink } from "@coreui/react";
import { FaComments } from "react-icons/fa"; 

function AppFooter() {
  return (
    <CFooter 
      style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "20px 40px", 
        backgroundColor: "#003366", 
        color: "#fff", 
        boxShadow: "0 -4px 12px rgba(0,0,0,0.2)", 
        fontSize: "14px", 
        borderTopLeftRadius: "10px", 
        borderTopRightRadius: "10px", 
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CLink href="#" style={{ textDecoration: "none", color: "#1E90FF", marginBottom: "5px", fontWeight: 'bold' }}>
          Middleware Assignment
        </CLink>
        <span>&copy; 2024 UCSC</span>
      </div>
      
      {/* Contact Information */}
      <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
        <span>Contact Us: <CLink href="mailto:support@ucsc.lk" style={{ color: "#1E90FF" }}>hello@sricare.lk</CLink></span>
        <CLink href="/privacy-policy" style={{ textDecoration: "none", color: "#1E90FF", marginTop: "5px", fontWeight: 'bold' }}>
          Privacy Policy
        </CLink>
      </div>

      {/* Chat Icon on the Right */}
      <CLink
        href="/chat"
        style={{
          position: "fixed",
          bottom: "30px", 
          right: "40px",  
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1E90FF", 
          padding: "12px", 
          borderRadius: "50%", 
          boxShadow: "0px 4px 12px rgba(0,0,0,0.3)", 
          transition: "transform 0.3s, background-color 0.3s", 
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.transform = "scale(1.1)"; 
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#1E90FF";
          e.currentTarget.style.transform = "scale(1)"; 
        }}
      >
        <FaComments size={35} color="#003366" /> 
      </CLink>
    </CFooter>
  );
}

export default AppFooter;
