import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CForm,
    CCol,
    CFormInput,
    CButton,
    CContainer,
    CRow,
    CCard,
    CCardBody,
    CSpinner,
} from "@coreui/react";
import { toast } from "react-toastify";

import { v_email, v_required } from "../../utils/validator";
import userService from "../../services/userService";

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const onUpdateInput = (e) => {
        setLoginForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const [loginFormErrors, setLoginFormErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let emailError = "";
        let passwordError = "";

        if (!v_required(loginForm.email)) {
            emailError = "Email cannot be empty.";
        } else if (!v_email(loginForm.email)) {
            emailError = "Email is not valid.";
        }

        if (!v_required(loginForm.password)) {
            passwordError = "Password cannot be empty.";
        }

        setLoginFormErrors({
            emailError,
            passwordError,
        });

        if (!(emailError || passwordError)) {
            setLoading(true);
            const payload = {
                email: loginForm.email,
                password: loginForm.password,
            };

            userService.login(payload).then(
                (res) => {
                    if (res.type === "OK") {
                        toast.success(res.message);
                        sessionStorage.setItem("token", res.token);
                        sessionStorage.setItem("id", res.id);
                        navigate("/");
                    } else if (res.type === "BAD") {
                        toast.error(res.message);
                    }

                    setLoading(false);
                },
                (error) => {
                    const res =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    toast.error(res);
                    setLoading(false);
                }
            );
        }
    };

    return (
        <div className="bg-light d-flex flex-row align-items-center vh-100">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6} lg={4}>
                        <CCard className="shadow-lg">
                            <CCardBody className="p-4">
                                <h1 className="text-center mb-4">Login</h1>
                                <p className="text-muted text-center mb-4">
                                    Enter your login details
                                </p>
                                <CForm onSubmit={handleSubmit}>
                                    <CCol md={12}>
                                        <CFormInput
                                            type="email"
                                            name="email"
                                            label="Email"
                                            onChange={onUpdateInput}
                                            value={loginForm.email}
                                            feedback={loginFormErrors.emailError}
                                            invalid={!!loginFormErrors.emailError}
                                        />
                                    </CCol>
                                    <CCol md={12} className="mt-3">
                                        <CFormInput
                                            type="password"
                                            name="password"
                                            label="Password"
                                            onChange={onUpdateInput}
                                            value={loginForm.password}
                                            feedback={loginFormErrors.passwordError}
                                            invalid={!!loginFormErrors.passwordError}
                                        />
                                    </CCol>
                                    <CCol md={12} className="mt-4">
                                        <div className="d-grid">
                                            <CButton
                                                color="primary"
                                                className="py-2"
                                                disabled={loading}
                                                type="submit"
                                                style={{ backgroundColor: "#003366" }}
                                            >
                                                {loading ? (
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <CSpinner size="sm" className="me-2" />
                                                        Logging in...
                                                    </div>
                                                ) : (
                                                    "Login"
                                                )}
                                            </CButton>
                                        </div>
                                        <div className="text-center mt-3">
                                            <a href="#" style={{ color: "#6B7280", textDecoration: "none" }}>
                                                Forgot password?
                                            </a>
                                        </div>
                                    </CCol>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
}

export default Login;
