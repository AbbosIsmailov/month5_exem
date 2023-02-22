import React from "react";

function InvoiceMain(props) {
  const { invoiceOne } = props;
  return (
    <>
      {invoiceOne.map((elem) => {
        return (
          <section className="invoice-main__body">
            <div className="row invoice-body__one">
              <div className="col">
                <h3 className="invoice-main__paid">
                  {elem.paid ? "Paid" : "Pending"}
                </h3>
                <span className="invoice-main__text">Paid ?</span>
              </div>
              
            </div>
            <div className="row invoice-body__two">
              <div className="col">
                <div className="card">
                  <p className="invoice-main__text">Invoice Date</p>
                  <b>{elem.createdDate}</b>
                </div>
                <div className="card">
                  <p className="invoice-main__text">Payment Due</p>
                  <b>{elem.dueDate}</b>
                </div>
              </div>
              <div className="col invoice-address">
                <p className="invoice-main__text">Bill To</p>
                <b>{elem.to}</b>
              </div>
              <div className="col">
                <p className="invoice-main__text">Sent To</p>
                <b>{elem.email}</b>
              </div>
            </div>
            <div className="row invoice-body__three">
                <div className="col">
                    <p className="invoice-main__text invoice-main__info">Item Name</p>
                    <b id="invoice-text__value">{elem.to}</b>
                </div>
                <div className="col">
                    <p className="invoice-main__text invoice-main__info">QTY.</p>
                    <b >{elem.userId}</b>
                </div>
                <div className="col">
                    <p className="invoice-main__text invoice-main__info">Price</p>
                    <b >{elem.price}$</b>
                </div>
                <div className="col">
                    <p className="invoice-main__text invoice-main__info">Total</p>
                    <b >{elem.price}</b>
                </div>
            </div>
            <footer className="main-body__footer">
                <h4 className="invoice-footer__name">{elem.to}</h4>
                <b className="invoice-footer__price">{elem.price}$</b>
            </footer>
          </section>
        );
      })}
    </>
  );
}

export default InvoiceMain;
