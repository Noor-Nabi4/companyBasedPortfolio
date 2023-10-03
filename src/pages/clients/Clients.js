import React from "react";
import "./Clients.css";
import client1 from "../../img/clients/client-1.png";
import client2 from "../../img/clients/client-2.png";
import client3 from "../../img/clients/client-3.png";
import client4 from "../../img/clients/client-4.png";
import client5 from "../../img/clients/client-5.png";
import client6 from "../../img/clients/client-6.png";
const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
        {clients.map((client,index) => (
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" key={index}>
              <img src={client} className="img-fluid" alt={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
