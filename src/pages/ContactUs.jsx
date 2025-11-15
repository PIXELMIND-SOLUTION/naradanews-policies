import React from "react";

const ContactUs = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12 text-center">
          {/* App Header */}
          <div className="mb-5">
            <div className="d-flex justify-content-center mb-3">
              <img src="/logo.png" alt="Darshadwajam News Logo" width="80" height="80" />
            </div>
            <h1 className="display-5 fw-bold text-primary">Darshadwajam News</h1>
            <p className="text-muted">Stay Informed. Stay Connected.</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          {/* Contact Info */}
          <div className="card border-0 shadow-sm p-4 mb-4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="icon-circle bg-light-primary mb-3">
                    <i className="fas fa-phone-alt text-primary fs-4"></i>
                  </div>
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">+91 98987 65432</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="icon-circle bg-light-primary mb-3">
                    <i className="fas fa-envelope text-primary fs-4"></i>
                  </div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">support@digitalraiz.com</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="icon-circle bg-light-primary mb-3">
                    <i className="fas fa-map-marker-alt text-primary fs-4"></i>
                  </div>
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted">
                    123, Main Street, Vijayawada, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold text-primary mb-3">Business Hours</h4>
            <ul className="list-unstyled text-muted">
              <li className="d-flex justify-content-between">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Saturday – Sunday</span>
                <span>10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-light-primary {
          background-color: #e7f1ff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .divider {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
        }
        .card {
          border-left: 4px solid #0d6efd;
        }
        @media (max-width: 768px) {
          .display-5 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
    </div>
  );
};

export default ContactUs;
