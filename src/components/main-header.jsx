import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

function MainHeader() {
  const [addInvoice, setAddInvoice] = useState([]);

  function addHideShowFunction() {
    const invoiceAdd = document.getElementsByClassName("invoice-add")[0];
    invoiceAdd.classList.toggle("hide-show");
    invoiceTest()
  }
  function invoiceTest() {
    const userTo = document.getElementById("userTo");
    const userEmail = document.getElementById("userEmail");
    const userDueDate = document.getElementById("userDueDate");
    const userSelect = document.getElementById("userSelect");
    const userDescription = document.getElementById("userDescription");
    const userPrice = document.getElementById("userPrice");
    const addForm = document.getElementById('add-form');
    addForm.addEventListener('submit', (e) =>{
      e.preventDefault()
      axios
      .post(`http://167.235.158.238:3001/invoices`, {
        to: userTo.value,
        email: userEmail.value,
        dueDate: userDueDate.value,
        term: userSelect.value,
        description: userDescription.value,
        price: userPrice.value,
      })
      .then((res) => {
        setAddInvoice(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Qo'shib bo'lmadi");
      });
    })
  }

  return (
    <div className="main-header">
      <div className="invoice-add">
        <form action="" id="add-form">
          <label htmlFor="userTo">Ism</label>
          <input required id="userTo" type="text" placeholder="Ismingizni kiriting" />
          <label htmlFor="userEmail">Email</label>
          <input required
            id="userEmail"
            type="email"
            placeholder="Emailingizni kiriting"
          />
          <label htmlFor="userDueDate">Due Date</label>
          <input required id="userDueDate" type="date" />
          <label htmlFor="userSelect">Term</label>
          <select name="select" id="userSelect">
            <option value="1">1</option>
            <option value="7">7</option>
            <option value="14">14</option>
            <option value="30">30</option>
          </select>
          <label htmlFor="userDescription">Description</label>
          <input required id="userDescription" type="text" placeholder="Description" />
          <label htmlFor="userPrice">Price</label>
          <input required id="userPrice" type="number" placeholder="Price" />
          <button id="add-btn">Submit</button>
        </form>
      </div>
      <div className="main-header__col-left">
        <h1 className="logo-name">Invoices</h1>
        <p className="col-left__title">There are 7 total invoices</p>
      </div>
      <div className="main-header__col-right">
        <button className="col-right__filter-btn">
          Filter by status <MdOutlineKeyboardArrowDown className="arrow-down" />
        </button>
        <button onClick={addHideShowFunction} className="col-right__new-btn">
          <AiFillPlusCircle className="plus-circle" /> New Invoice
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
