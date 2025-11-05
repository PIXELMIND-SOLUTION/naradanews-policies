import React from "react";

const TermsandConditions = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Terms and Conditions
            </h1>
            <p className="text-muted">
              Last updated: 05/11/2025
            </p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          <p className="lead text-center mb-5">
            Welcome to{" "}
            <strong className="text-primary">Clynix</strong> (“we”, “our”,
            “us”). By downloading or using this app, you agree to the following
            Terms and Conditions. Please read them carefully before using our
            services.
          </p>

          {/* Terms Content */}
          <div className="terms-content">
            {/* 1. Use of the App */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Use of the App
                </h4>
                <ul className="list-styled">
                  <li>
                    This app provides a platform to browse and purchase medicines
                    from licensed pharmacies.
                  </li>
                  <li>You must be at least 18 years old to use this app.</li>
                  <li>
                    You agree to provide accurate information (name, mobile number,
                    and OTP verification) when signing up.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of your
                    login information.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Medical Disclaimer */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  Medical Disclaimer
                </h4>
                <ul className="list-styled">
                  <li>This app does not provide medical advice or diagnosis.</li>
                  <li>
                    All medicines are provided by licensed pharmacies listed on the
                    platform.
                  </li>
                  <li>
                    For prescription medicines, a valid prescription may be
                    required before dispensing.
                  </li>
                  <li>
                    Always consult a registered medical practitioner before using
                    any medicine.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Pharmacy Listings */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  Pharmacy Listings
                </h4>
                <ul className="list-styled">
                  <li>
                    Pharmacies listed in the app are responsible for the accuracy of
                    their details, inventory, and pricing.
                  </li>
                  <li>We act only as a facilitator between users and pharmacies.</li>
                  <li>
                    We are not responsible for any errors, delays, or inaccuracies in
                    medicine availability or delivery.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Orders and Payments */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  Orders and Payments
                </h4>
                <ul className="list-styled">
                  <li>
                    Orders can be placed through the app and paid via Razorpay or
                    Cash on Delivery (COD).
                  </li>
                  <li>Payment processing is handled securely by Razorpay.</li>
                  <li>
                    Orders may be canceled or delayed by pharmacies depending on
                    stock or prescription verification.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Prescription Uploads */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Prescription Uploads
                </h4>
                <p>
                  You may upload a doctor’s prescription for verification where
                  required. Uploaded prescriptions are used only to fulfill your
                  order and are stored securely in accordance with our{" "}
                  <a href="/privacy-policy" className="text-primary fw-semibold">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* 6. Delivery */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Delivery
                </h4>
                <ul className="list-styled">
                  <li>
                    Deliveries are handled by authorized delivery partners or
                    pharmacy staff.
                  </li>
                  <li>
                    Delivery times are estimated and may vary based on location,
                    stock, and pharmacy hours.
                  </li>
                </ul>
              </div>
            </div>

            {/* 7. Periodic Medicine Plans */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Periodic Medicine Plans
                </h4>
                <ul className="list-styled">
                  <li>
                    Users can activate recurring medicine delivery plans (weekly or
                    monthly).
                  </li>
                  <li>
                    Users can modify or deactivate these plans anytime within the
                    app.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Data Protection */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Data Protection
                </h4>
                <p>
                  We collect minimal user data (name, mobile number, location) only
                  to enable app functionality. Your data is protected and processed
                  as described in our{" "}
                  <a href="/privacy-policy" className="text-primary fw-semibold">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* 9. Limitation of Liability */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Limitation of Liability
                </h4>
                <ul className="list-styled">
                  <li>We are not liable for any side effects or medicine reactions.</li>
                  <li>
                    We are not responsible for delays or errors caused by pharmacies
                    or delivery partners.
                  </li>
                  <li>
                    We are not responsible for incorrect information provided by
                    pharmacies or users.
                  </li>
                </ul>
              </div>
            </div>

            {/* 10. Changes to These Terms */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span>
                  Changes to These Terms
                </h4>
                <p>
                  We may update these Terms and Conditions at any time. Updates
                  will be posted within the app and will take effect upon
                  publication. Continued use constitutes acceptance of the updated
                  Terms.
                </p>
              </div>
            </div>

            {/* 11. Contact Us */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">11</span>
                  Contact Us
                </h4>
                <p>
                  If you have any questions or complaints about these Terms, please
                  contact us:
                </p>
                <ul className="list-styled">
                  <li>
                    📧 Email:{" "}
                    <a
                      href="mailto:simcurarx@gmail.com?subject=Regarding%20Terms%20and%20Conditions"
                      className="fw-semibold text-decoration-none"
                    >
                      simcurarx@gmail.com
                    </a>
                  </li>
                  <li>📞 Phone: +91-7013914488</li>
                </ul>
              </div>
            </div>

            {/* 12. Governing Law */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">12</span>
                  Governing Law
                </h4>
                <p className="mb-0">
                  These Terms shall be governed by and interpreted according to the
                  laws of India. Any disputes shall be subject to the exclusive
                  jurisdiction of the courts in Chennai, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .number-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          color: white;
          border-radius: 50%;
          font-size: 16px;
          font-weight: 600;
        }

        .list-styled {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
        }

        .list-styled li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .list-styled li:before {
          content: "•";
          color: #0d6efd;
          font-weight: bold;
          position: absolute;
          left: 0.5rem;
        }

        .terms-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-left: 4px solid #0d6efd !important;
        }

        .terms-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
        }

        .lead {
          font-size: 1.2rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.2rem;
          }
          .card-body {
            padding: 1.5rem !important;
          }
          .terms-card {
            border-left: 3px solid #0d6efd !important;
          }
          .lead {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 1.8rem;
          }
          .card-body {
            padding: 1.25rem !important;
          }
          .number-badge {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsandConditions;
