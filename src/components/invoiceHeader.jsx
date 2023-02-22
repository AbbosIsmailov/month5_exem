import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utilits/localeStorage";

function InvoiceHeader(props) {
  const navigate = useNavigate();
  const { invoiceOne } = props;
  const invoiceId = localStorage.getItem("id");
  const [editInvoice, setEditInvoice] = useState([]);

  function invoiceDelete() {
    axios.delete(`http://167.235.158.238:3001/invoices/${invoiceId}`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    navigate("/main");
  }

  function addHideShowFunction() {
    const invoiceAdd = document.getElementsByClassName("invoice-add")[0];
    invoiceAdd.classList.toggle("hide-show");
    invoiceEdit();
  }

  function invoiceEdit() {
    const userTo = document.getElementById("userTo");
    const userEmail = localStorage.getItem("userEmail");
    const userDueDate = document.getElementById("userDueDate");
    const userCreatedDate = document.getElementById("userCreatedDate");
    const userTerm = document.getElementById("userTerm");
    const userPaid = document.getElementById("userPaid");
    const userDescription = document.getElementById("userDescription");
    const userPrice = document.getElementById("userPrice");
    const userId = localStorage.getItem("userId");
    const addForm = document.getElementById("add-form");
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      axios
        .put(
          `http://167.235.158.238:3001/invoices/${invoiceId}`,
          {
            to: userTo.value,
            email: `${userEmail}`,
            dueDate: userDueDate.value,
            createdDate: userCreatedDate.value,
            term: +userTerm.value,
            paid: +userPaid.value,
            description: userDescription.value,
            price: userPrice.value,
            userId: +userId,
          },
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          setEditInvoice(response.data);
        })
        .catch((error) => {
          console.log("Edit bo'madi");
        });
    });
  }

  return (
    <>
      {invoiceOne.map((elem) => {
        return (
          <section className="invoice-header" key={elem.id}>
            <div className="invoice-add">
              <form action="" id="add-form">
                <label htmlFor="userTo">Ism</label>
                <input
                  required
                  id="userTo"
                  type="text"
                  placeholder="Ismingizni kiriting"
                />
                <div className="add-date">
                  <label htmlFor="userDueDate">
                    Due Date
                    <input required id="userDueDate" type="date" />
                  </label>
                  <label htmlFor="userCreatedDate">
                    Create Date
                    <input required id="userCreatedDate" type="date" />
                  </label>
                </div>
                <label htmlFor="userTerm">Term</label>
                <select name="select" id="userTerm">
                  <option value="1">1</option>
                  <option value="7">7</option>
                  <option value="14">14</option>
                  <option value="30">30</option>
                </select>
                <label htmlFor="userPaid">Paid</label>
                <select name="select" id="userPaid">
                  <option value="1">true</option>
                  <option value="0">false</option>
                </select>
                <label htmlFor="userDescription">Description</label>
                <input
                  required
                  id="userDescription"
                  type="text"
                  placeholder="Description"
                />
                <label htmlFor="userPrice">Price</label>
                <input
                  required
                  id="userPrice"
                  type="number"
                  placeholder="Price"
                />
                <button id="add-btn">Submit</button>
              </form>
            </div>
            <div className="invoice-header__left">
              <p className="invoice-header__status">Status</p>
              <p className="invoice-header__paid">
                {invoiceOne.paid ? `paid` : `pending`}
              </p>
            </div>
            <div className="invoice-header__right">
              <button
                onClick={addHideShowFunction}
                className="invoice-header__edit-btn"
              >
                Edit
              </button>
              <button
                onClick={invoiceDelete}
                className="invoice-header__delete-btn"
              >
                Delete
              </button>
              <button className="invoice-header__mark-btn">Mark as Paid</button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default InvoiceHeader;
