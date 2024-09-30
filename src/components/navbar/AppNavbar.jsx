import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/sriCare_logo.png";
import defaultProfilePic from "../../assets/images/user.jpg"; 
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
import { FaBell } from 'react-icons/fa';
import userService from "../../services/userService";

function AppNavbar() {
    let navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const loggedInUser = userService.getUser();
        if (loggedInUser) {
            setIsUserLoggedIn(true);
            setUser(loggedInUser);
            setNotifications([
                { id: 1, message: "This month's bill arrived" },
                { id: 2, message: "Service interruption from 1am to 3am today" },
                { id: 3, message: "Package activated successfully." }
            ]);
        } else {
            setIsUserLoggedIn(false);
        }
    }, []);

    const handleLogOut = () => {
        userService.logout();
        setIsUserLoggedIn(false);
        setUser(null);
        navigate("/login");
    };

    return (
        <CNavbar colorScheme="light" style={{ backgroundColor: "#ffffff", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
            <CContainer fluid>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <NavLink to="/" style={{ textDecoration: "none", display: 'flex', alignItems: 'center' }}>
                        <img src={logo} style={{ width: '40px', height: '40px', marginRight: '7px' }} alt="SriCare Logo" />
                        <CNavbarBrand style={{ fontWeight: "bold", color: "#003366", padding: '0 15px' }}>SriCare</CNavbarBrand>
                    </NavLink>
                </div>

                {isUserLoggedIn && (
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <NavLink to="/bills" style={{ textDecoration: "none" }}>
                            <CDropdownItem style={{ color: "#003366", borderRadius: '5px', padding: '10px 0px' }}>Bills</CDropdownItem>
                        </NavLink>
                        <NavLink to="/packages" style={{ textDecoration: "none", marginLeft: '20px' }}>
                            <CDropdownItem style={{ color: "#003366", borderRadius: '5px', padding: '10px 0px' }}>Packages</CDropdownItem>
                        </NavLink>
                    </div>
                )}

                {!isUserLoggedIn ? (
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <NavLink to="/register" style={{ textDecoration: "none" }}>
                            <CButton
                                style={{
                                    backgroundColor: "#003366",
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '8px 16px',
                                    color: '#ffffff'
                                }}
                                className="me-2"
                            >
                                Sign up
                            </CButton>
                        </NavLink>
                        <NavLink to="/login" style={{ textDecoration: "none" }}>
                            <CButton
                                style={{
                                    backgroundColor: "#003366",
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '8px 16px',
                                    color: '#ffffff'
                                }}
                            >
                                Login
                            </CButton>
                        </NavLink>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <CDropdown alignment="end" className="me-3">
                            <CDropdownToggle color="secondary" style={{ backgroundColor: 'transparent', border: 'none', position: 'relative', padding: '0 10px' }}>
                                <FaBell size={20} color="#003366" />
                                {notifications.length > 0 && (
                                    <CBadge color="danger" shape="rounded-pill" style={{ position: 'absolute', top: '-5px', right: '-10px' }}>
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

                        <CDropdown alignment="end">
                            <CDropdownToggle color="secondary" style={{ backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={defaultProfilePic}
                                    alt="Profile"
                                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                                />
                                <span style={{ padding: '10px 15px', color: 'black' }}>{user ? user.username : "User"}</span>
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownDivider />
                                <CDropdownItem onClick={handleLogOut} style={{ cursor: "pointer", padding: '10px 20px', color: 'black' }}>
                                    Logout
                                </CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </div>
                )}
            </CContainer>
        </CNavbar>
    );
}

export default AppNavbar;
