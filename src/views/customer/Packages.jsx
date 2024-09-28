import React, { useState , useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CButton, CListGroup, CListGroupItem, CCol, CRow } from '@coreui/react';
import packageService from '../../services/packageService';


const Packages = () => {
  // Sample Data for Packages
  const [availablePackages, setAvailablePackages] = useState([]);
  const [subscribedPackages, setSubscribedPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    packageService.getPackages().then((response) => {
      console.log("RESPONSE", response);
      setAvailablePackages(response);
    });

    packageService.getSubscribedPackages().then((response) => {
      console.log("RESPONSE", response);
      setSubscribedPackages(response);
    });
  }, [loading]);


  // Handle Package Activation/Deactivation
  const handleSubscribe = (pkg) => {
    packageService.activatePackage({ serviceId: pkg.id }).then((response) => {
      console.log("RESPONSE", response);
      setLoading(!loading);
    });
  };

  const handleUnsubscribe = (pkgId) => {
    packageService.deactivatePackage({ serviceId: pkgId }).then((response) => {
      console.log("RESPONSE", response);
      setLoading(!loading);
    }); 
  };

  return (
    <div className="container mt-5">
      <CRow>
        {/* Available Packages */}
        <CCol md={6}>
          <CCard>
            <CCardHeader>
              Available Packages
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {availablePackages.map(pkg => (
                  <CListGroupItem key={pkg.id}>
                    <div>
                      <strong>{pkg.name}</strong>
                      <p>{pkg.description}</p>
                      <p>Price: {pkg.price}</p>
                      <CButton style={{backgroundColor:"#66cccc",border:"#66cccc"}} onClick={() => handleSubscribe(pkg)}>Activate</CButton>
                    </div>
                  </CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Subscribed Packages */}
        <CCol md={6}>
          <CCard>
            <CCardHeader>
              Subscribed Packages
            </CCardHeader>
            <CCardBody>
              {subscribedPackages.length === 0 ? (
                <p>No packages subscribed.</p>
              ) : (
                <CListGroup>
                  {subscribedPackages.map(pkg => (
                    pkg.active &&
                    <CListGroupItem key={pkg.service.id}>
                      <div>
                        <strong>{pkg.service.name}</strong>
                        <p>{pkg.service.description}</p>
                        <p>Price: {pkg.service.price}</p>
                        <CButton color="danger" onClick={() => handleUnsubscribe(pkg.service.id)}>Deactivate</CButton>
                      </div>
                    </CListGroupItem>
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
