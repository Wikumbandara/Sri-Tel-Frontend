import React, { useState, useEffect } from 'react';
import {
  CCard, CCardBody, CCardHeader, CButton, CListGroup, CListGroupItem, CCol, CRow
} from '@coreui/react';
import packageService from '../../services/packageService';

const Packages = () => {
  const [availablePackages, setAvailablePackages] = useState([]);
  const [subscribedPackages, setSubscribedPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    packageService.getPackages().then((response) => {
      setAvailablePackages(response);
    });

    packageService.getSubscribedPackages().then((response) => {
      setSubscribedPackages(response);
    });
  }, [loading]);

  const handleSubscribe = (pkg) => {
    packageService.activatePackage({ serviceId: pkg.id }).then(() => {
      setLoading(!loading);
    });
  };

  const handleUnsubscribe = (pkgId) => {
    packageService.deactivatePackage({ serviceId: pkgId }).then(() => {
      setLoading(!loading);
    });
  };

  return (
    <div className="container mt-5">
      <CRow className="justify-content-center">
        {/* Available Packages */}
        <CCol md={5}>
          <CCard className="shadow-lg mb-4">
            <CCardHeader className="text-center bg-primary text-white">
              <h5>Available Packages</h5>
            </CCardHeader>
            <CCardBody>
              <CListGroup flush>
                {availablePackages.map(pkg => (
                  <CListGroupItem key={pkg.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="font-weight-bold">{pkg.name}</h6>
                      <p className="mb-1 text-muted">{pkg.description}</p>
                      <span className="text-info">LKR {pkg.price}</span>
                    </div>
                    <CButton
                      className="ml-3"
                      style={{ backgroundColor: '#66cccc', border: 'none', borderRadius: '20px' }}
                      onClick={() => handleSubscribe(pkg)}
                    >
                      Activate
                    </CButton>
                  </CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Subscribed Packages */}
        <CCol md={5}>
          <CCard className="shadow-lg mb-4">
            <CCardHeader className="text-center bg-success text-white">
              <h5>Subscribed Packages</h5>
            </CCardHeader>
            <CCardBody>
              {subscribedPackages.length === 0 ? (
                <p className="text-center text-muted">No packages subscribed yet.</p>
              ) : (
                <CListGroup flush>
                  {subscribedPackages.map(pkg => (
                    pkg.active && (
                      <CListGroupItem key={pkg.service.id} className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="font-weight-bold">{pkg.service.name}</h6>
                          <p className="mb-1 text-muted">{pkg.service.description}</p>
                          <span className="text-info">LKR {pkg.service.price}</span>
                        </div>
                        <CButton
                          color="danger"
                          className="ml-3"
                          onClick={() => handleUnsubscribe(pkg.service.id)}
                          style={{ borderRadius: '20px' }}
                        >
                          Deactivate
                        </CButton>
                      </CListGroupItem>
                    )
                  ))}
                </CListGroup>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Packages;
