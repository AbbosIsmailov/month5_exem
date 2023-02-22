import React from "react";

function InvoiceHeader(props) {
  const { invoiceOne } = props;
  return (
    <>
      {invoiceOne.map((elem) => {
        return (
          <section className="invoice-header" key={elem.id}>
            <div className="invoice-header__left">
              <p className="invoice-header__status">Status</p>
              <p className="invoice-header__paid">{invoiceOne.paid ? `paid` : `pending`}</p>
            </div>
            <div className="invoice-header__right">
              <button className="invoice-header__edit-btn">Edit</button>
              <button className="invoice-header__delete-btn">Delete</button>
              <button className="invoice-header__mark-btn">Mark as Paid</button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default InvoiceHeader;
