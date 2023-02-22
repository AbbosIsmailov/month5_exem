import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAccessToken } from "../utilits/localeStorage";

function MainBody() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://167.235.158.238:3001/invoices`, {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log("Server ishlamadi"));
  }, []);
  return getAccessToken() ? (
    <section className="main-body">
      <ul className="invoices-list">
        <li className="invoices-list__item">
          <Link className="invoices-list__link" to={`/invoices`}>
            {data.map((elem) => {
              return (
                <div
                  onClick={(e) => localStorage.setItem("id", elem.id)}
                  className="element-box"
                  key={elem.id}
                >
                  <div className="elem-left">
                    <p className="invoice-main__text">{elem.dueDate}</p>
                    <p className="invoice-main__text invoice-to">{elem.to}</p>
                  </div>
                  <div className="elem-right">
                    <p className="invoice-price">{elem.price}$</p>
                    <p className={`invoicePaid invoice-${elem.paid ? `success` : `danger`}`}>{elem.paid ? "paid" : "pending"}</p>
                  </div>
                </div>
              );
            })}
          </Link>
        </li>
      </ul>
    </section>
  ) : (
    navigate("/")
  );
}

export default MainBody;
