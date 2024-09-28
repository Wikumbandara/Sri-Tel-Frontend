import React from "react";
import { CFooter, CLink } from "@coreui/react";
import { FaComments } from "react-icons/fa"; // Importing the chat icon

function AppFooter() {
  return (
    <CFooter style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "20px", 
      backgroundColor: "#f8f9fa", // Light background for better contrast
      boxShadow: "0 -4px 8px rgba(0,0,0,0.1)", // Adding a top shadow for the footer
      fontSize: "14px" // Adjusting text size
    }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CLink href="#" style={{ textDecoration: "none", color: "#ff6600", marginBottom: "5px" }}>
          Middleware Assignment
        </CLink>
        <span>&copy; 2024 UCSC</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px" }}>Powered by</span>
        <CLink href="h#" style={{ textDecoration: "none", color: "#ff6600" }}>
          Reactjs & Spring Boot
        </CLink>
      </div>

      {/* Chat bot icon fixed to the right side of the window */}
      <CLink
        href="/chat"
        style={{
          position: "fixed",
          bottom: "20px", // Adjust this to position vertically
          right: "20px",  // Adjust this to position horizontally
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#66cccc",
          padding: "10px",
          borderRadius: "50%", // Circular button
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", // Soft shadow
          transition: "background-color 0.3s", // Smooth hover effect
          
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#66cccc"}
      >
        <FaComments size={40} color="#ff6600" /> {/* Chat icon with primary color */}
      </CLink>
    </CFooter>
  );
}

export default AppFooter;
