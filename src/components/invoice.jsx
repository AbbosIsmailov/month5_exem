import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceHeader from "./invoiceHeader";
import InvoiceMain from "./invoiceMain";

function Invoice() {

  // console.log(invoiceOne);
  const [invoiceOne, setInvoiceOne] = useState([]);

  const invoiceId = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`http://167.235.158.238:3001/invoices`, {
        params: {
          id: invoiceId,
        },
      })
      .then((res) => {
        setInvoiceOne(res.data); 
      })
      .catch((err) => {
        console.log("error bo'p qoldida");
      });
  }, []);

  return (
    <section className="invoice-info">
      <InvoiceHeader invoiceOne={invoiceOne} />
      <InvoiceMain invoiceOne={invoiceOne} />
    </section>
  );
}

export default Invoice;
