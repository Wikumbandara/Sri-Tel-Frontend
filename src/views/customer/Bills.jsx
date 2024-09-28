import React, { useState , useEffect} from 'react';
import { CCard, CCardBody, CCardHeader, CButton, CListGroup, CListGroupItem, CCol, CRow, CCollapse } from '@coreui/react';
import SideBar from '../../components/SideBar/SideBar';

import billService from '../../services/billService';

const Bills = () => {
  const [previousBills, setPreviousBills] = useState([]);
  const [currentBill, setCurrentBill] = useState({});
  // Sample data for bills
  // const currentBill = {
  //   month: 'September 2024',
  //   total: '$120',
  //   details: {
  //     dataCharges: '$40',
  //     voiceCharges: '$50',
  //     additionalCharges: '$30',
  //   },
  // };

  // const previousBills = [
  //   { id: 1, month: 'August 2024', total: '$100', details: { dataCharges: '$30', voiceCharges: '$50', additionalCharges: '$20' } },
  //   { id: 2, month: 'July 2024', total: '$110', details: { dataCharges: '$35', voiceCharges: '$55', additionalCharges: '$20' } },
  // ];

  useEffect(() => {
    billService.getBills().then((response) => {
      console.log(response);
      setPreviousBills(response);
    });

    billService.getLatestBill().then((response) => {
      console.log(response);
      setCurrentBill(response);
    });
  }, []);

  const [collapseDetails, setCollapseDetails] = useState(null);

  // Toggle Bill Details
  const toggleDetails = (id) => {
    setCollapseDetails(collapseDetails === id ? null : id);
  };

  return (
    <div className="container mt-5">
      <CRow>
        {/* Current Bill */}
        <CCol md={6}>
          <CCard>
            <CCardHeader>
              Current Monthly Bill - {currentBill.month}
            </CCardHeader>
            <CCardBody>
              <h5>Total: {currentBill.total}</h5>
              <p>Description: {currentBill.description}</p>
              <p>Status: {currentBill.status}</p>
              <p>Date: {currentBill.createdDate}</p>
            </CCardBody>
            <CButton style={{ backgroundColor: "#FF6600" ,border:"#FF6600"}} >Pay Now</CButton>
          </CCard>
        </CCol>

        {/* Previous Bills */}
        <CCol md={6}>
          <CCard>
            <CCardHeader>
              Previous Bills
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {previousBills.map(bill => (
                  <CListGroupItem key={bill.id}>
                    <div>
                      <strong>{bill.month} - Total: {bill.total}</strong>
                      <CButton
                        color="info"
                        className="mt-2"
                        onClick={() => toggleDetails(bill.id)}
                      >
                        {collapseDetails === bill.id ? 'Hide Details' : 'Show Details'}
                      </CButton>
                      <CCollapse visible={collapseDetails === bill.id}>
                        <div className="mt-3">
                          <p>Description: {currentBill.description}</p>
                          <p>Status: {currentBill.status}</p>
                          <p>Date: {currentBill.createdDate}</p>
                        </div>
                      </CCollapse>
                    </div>
                  </CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Bills;
