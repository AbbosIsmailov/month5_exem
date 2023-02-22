import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utilits/localeStorage";

function InvoiceHeader(props) {
  const navigate = useNavigate()
  const { invoiceOne } = props;
  const invoiceId = localStorage.getItem("id");

  function invoiceDelete() {
    axios.delete(`http://167.235.158.238:3001/invoices/${invoiceId}`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
    navigate("/main")
  }

  function invoiceEdit() {
    axios.put(`http://167.235.158.238:3001/invoices/${invoiceId}`, {
      
    })
  }
  return (
    <>
      {invoiceOne.map((elem) => {
        return (
          <section className="invoice-header" key={elem.id}>
            <div className="invoice-header__left">
              <p className="invoice-header__status">Status</p>
              <p className="invoice-header__paid">
                {invoiceOne.paid ? `paid` : `pending`}
              </p>
            </div>
            <div className="invoice-header__right">
              <button className="invoice-header__edit-btn">Edit</button>
              <button onClick={invoiceDelete} className="invoice-header__delete-btn">Delete</button>
              <button className="invoice-header__mark-btn">Mark as Paid</button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default InvoiceHeader;
