import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/sriCare_logo.png";
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider,
    CButton,
    CBadge
} from "@coreui/react";
import { FaBell } from 'react-icons/fa'; // Import a bell icon
import userService from "../../services/userService";

function AppNavbar(props) {
    let navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [notifications, setNotifications] = useState([]); // State for notifications

    useEffect(() => {
        const user = userService.getUser();
        if (user !== null) {
            setIsUserLoggedIn(true);
            // Mock notifications, replace with API call if needed
            setNotifications([
                { id: 1, message: "This month bill arrived" },
                { id: 2, message: "Service interuption from 1am to 3am today" },
                { id: 3, message: "Package activated successfully." }
            ]);
        }
    }, []);

    const handleLogOut = () => {
        userService.logout();
        navigate("/login");
    };

    return (
        <CNavbar colorScheme="light" style={{ backgroundColor: "#66cccc" }}>
            <CContainer fluid>
                <NavLink to="/" style={{ textDecoration: "none", display:'flex',alignItems:'center'}}>
                       <img src={logo} style={{width:'40px' ,height:'40px',marginRight:'7px' }} alt="" /> 
                    <CNavbarBrand style={{ fontWeight: "bold" }} >SriCare</CNavbarBrand>
                </NavLink>
                {!isUserLoggedIn ? (
                    <div>
                        <NavLink to="/register" style={{ textDecoration: "none" }}>
                            <CButton style={{ backgroundColor: "#FF6600" ,border:'#FF6600'}} className="me-2">Sign up</CButton>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: "none" }}>
                            <CButton style={{ backgroundColor: "#FF6600",border:'#FF6600' }} >Login</CButton>
                        </NavLink>
                    </div>
                ) : (
                    <>


<NavLink to="/bills" style={{ textDecoration: "none" }}>
                                    <CDropdownItem>Bills</CDropdownItem>
                                </NavLink>
                                <NavLink to="/packages" style={{ textDecoration: "none" }}>
                                    <CDropdownItem>Packages</CDropdownItem>
                                </NavLink>
                        {/* Notification Dropdown */}
                        <CDropdown alignment="end" className="me-3">
                            <CDropdownToggle color="secondary">
                                <FaBell size={20} />
                                {notifications.length > 0 && (
                                    <CBadge color="danger" shape="rounded-pill">
                                        {notifications.length}
                                    </CBadge>
                                )}
                            </CDropdownToggle>
                            <CDropdownMenu>
                                {notifications.length === 0 ? (
                                    <CDropdownItem>No notifications</CDropdownItem>
                                ) : (
                                    notifications.map((notification) => (
                                        <CDropdownItem key={notification.id}>
                                            {notification.message}
                                        </CDropdownItem>
                                    ))
                                )}
                            </CDropdownMenu>
                        </CDropdown>
                        

                        {/* User Dropdown */}
                        <CDropdown alignment="end">
                            <CDropdownToggle color="secondary">
                                {props.user.username}
                            </CDropdownToggle>
                            <CDropdownMenu>
                              
                                <CDropdownDivider />
                                {/* New items for Bills and Packages */}
                                <CDropdownDivider />
                                <CDropdownItem onClick={handleLogOut} style={{ cursor: "pointer" }}>
                                    Logout
                                </CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </>
                )}
            </CContainer>
        </CNavbar>
    );
}

export default AppNavbar;
