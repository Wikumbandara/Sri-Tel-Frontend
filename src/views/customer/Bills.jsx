import React, { useState, useEffect } from 'react';
import {
  CCard, CCardBody, CCardHeader, CButton, CListGroup, CListGroupItem, CCol, CRow, CCollapse
} from '@coreui/react';
import { cilChevronBottom, cilChevronTop } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import billService from '../../services/billService';

const Bills = () => {
  const [previousBills, setPreviousBills] = useState([]);
  const [currentBill, setCurrentBill] = useState({});
  const [collapseDetails, setCollapseDetails] = useState(null);

  useEffect(() => {
    billService.getBills().then((response) => {
      setPreviousBills(response);
    });

    billService.getLatestBill().then((response) => {
      setCurrentBill(response);
    });
  }, []);

  const toggleDetails = (id) => {
    setCollapseDetails(collapseDetails === id ? null : id);
  };

  return (
    <div className="container mt-5">
      <CRow className="justify-content-center">
        {/* Current Bill */}
        <CCol md={5}>
          <CCard className="mb-4 shadow-lg">
            <CCardHeader className="bg-primary text-white text-center">
              <h5>Current Monthly Bill - {currentBill.month || 'Loading...'}</h5>
            </CCardHeader>
            <CCardBody>
              <div className="text-center">
                <h5>Total: <strong className="text-info">{currentBill.total || 'N/A'}</strong></h5>
                <p>Description: {currentBill.description || 'N/A'}</p>
                <p>Status: <strong>{currentBill.status || 'N/A'}</strong></p>
                <p>Date: {currentBill.createdDate || 'N/A'}</p>
              </div>
            </CCardBody>
            <CButton
              className="mx-3 mb-3"
              style={{ backgroundColor: '#FF6600', border: 'none', borderRadius: '25px' }}
            >
              Pay Now
            </CButton>
          </CCard>
        </CCol>

        {/* Previous Bills */}
        <CCol md={5}>
          <CCard className="mb-4 shadow-lg">
            <CCardHeader className="bg-success text-white text-center">
              <h5>Previous Bills</h5>
            </CCardHeader>
            <CCardBody>
              {previousBills.length === 0 ? (
                <p className="text-center text-muted">No previous bills available.</p>
              ) : (
                <CListGroup flush>
                  {previousBills.map(bill => (
                    <CListGroupItem key={bill.id} className="mb-3 shadow-sm d-flex flex-column align-items-start">
                      <div className="w-100 d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{bill.month} - Total: {bill.total}</strong>
                        </div>
                        <CButton
                          color="info"
                          className="mt-2"
                          onClick={() => toggleDetails(bill.id)}
                          style={{ borderRadius: '15px' }}
                        >
                          {collapseDetails === bill.id ? 'Hide Details' : 'Show Details'}
                          <CIcon icon={collapseDetails === bill.id ? cilChevronTop : cilChevronBottom} className="ml-2" />
                        </CButton>
                      </div>
                      <CCollapse visible={collapseDetails === bill.id}>
                        <div className="mt-3">
                          <p>Data Charges: {bill.details?.dataCharges || 'N/A'}</p>
                          <p>Voice Charges: {bill.details?.voiceCharges || 'N/A'}</p>
                          <p>Additional Charges: {bill.details?.additionalCharges || 'N/A'}</p>
                        </div>
                      </CCollapse>
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

export default Bills;
