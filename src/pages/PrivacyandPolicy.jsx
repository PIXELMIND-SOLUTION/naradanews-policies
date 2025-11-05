import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Privacy Policy</h1>
            <p className="text-muted">Effective Date: 05/11/2025</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          {/* Policy Content */}
          <div className="privacy-content">
            {/* 1. Introduction */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Introduction
                </h4>
                <p>
                  <strong>Clynix</strong> (“we”, “our”, “us”) operates the Clynix mobile application
                  (“the App”). This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your personal information when you use our app and related services.
                </p>
                <p>
                  By using our App, you agree to the collection and use of information in accordance
                  with this policy.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  Information We Collect
                </h4>

                <h6 className="fw-semibold mt-3">a. Personal Information</h6>
                <ul className="list-styled">
                  <li>Full name</li>
                  <li>Mobile number (for OTP verification and login)</li>
                  <li>Address (for medicine delivery)</li>
                  <li>Location data (for delivery tracking and nearby pharmacy detection)</li>
                </ul>

                <h6 className="fw-semibold mt-3">b. Device and Usage Data</h6>
                <ul className="list-styled">
                  <li>Device model, operating system version</li>
                  <li>App usage analytics (to improve experience)</li>
                </ul>

                <h6 className="fw-semibold mt-3">c. Uploaded Files</h6>
                <ul className="list-styled">
                  <li>Prescription images or medicine photos (if uploaded by you)</li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  How We Use Your Information
                </h4>
                <ul className="list-styled">
                  <li>To verify your identity via OTP verification</li>
                  <li>To process and deliver your medicine orders through partner pharmacies</li>
                  <li>To provide customer support and service updates</li>
                  <li>To enhance user experience and optimize delivery performance</li>
                  <li>To comply with applicable legal requirements</li>
                </ul>
                <p className="mt-3">
                  We <strong>do not sell</strong> or rent your personal data to any third parties.
                </p>
              </div>
            </div>

            {/* 4. Information Sharing and Disclosure */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  Information Sharing and Disclosure
                </h4>
                <p>We may share your information only with the following entities:</p>
                <ul className="list-styled">
                  <li>Licensed pharmacy partners – to fulfill your medicine orders</li>
                  <li>Authorized delivery personnel – to ensure accurate and timely delivery</li>
                  <li>Payment gateways (e.g., Razorpay) – for secure transaction processing</li>
                  <li>Service providers – for app hosting, notifications, and analytics</li>
                </ul>
                <p className="mt-3">
                  All our partners and service providers are bound by strict confidentiality
                  agreements.
                </p>
              </div>
            </div>

            {/* 5. Data Security */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Data Security
                </h4>
                <p>
                  We implement robust technical and organizational security measures to protect your
                  data from unauthorized access, misuse, or loss. These include:
                </p>
                <ul className="list-styled">
                  {/* <li>Secure HTTPS communication</li> */}
                  <li>Encryption of sensitive personal and transactional data</li>
                  <li>Regular security audits and compliance with data safety standards</li>
                </ul>
                <p className="mt-3">
                  However, no method of online transmission is entirely secure. While we strive to
                  protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* 6. Your Rights and Choices */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Your Rights and Choices
                </h4>
                <ul className="list-styled">
                  <li>Access or update your personal information anytime</li>
                  <li>You can deletion your Account Anytime</li>
                  <li>Withdraw consent for data collection (subject to service limitations)</li>
                </ul>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    To request data removal, email us at:{" "}
                    <a
                      href="mailto:simcurarx@gmail.com?subject=Account%20Deletion%20Request"
                      className="fw-semibold text-decoration-none"
                    >
                      simcurarx@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Children’s Privacy */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Children’s Privacy
                </h4>
                <p>
                  Clynix is intended for users aged 18 and above. We do not knowingly collect
                  information from minors. If such data is detected, it will be permanently deleted.
                </p>
              </div>
            </div>

            {/* 8. Third-Party Services */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Third-Party Services
                </h4>
                <p>
                  Our app may include integrations with third-party services (e.g., payment
                  gateways, pharmacy systems). We are not responsible for their privacy practices.
                  Please review their individual privacy policies for more details.
                </p>
              </div>
            </div>

            {/* 9. Disclaimer */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Disclaimer
                </h4>
                <p>
                  Clynix is not a pharmacy and does not directly sell or distribute medicines. All
                  orders are processed and fulfilled by duly licensed pharmacy partners in
                  compliance with applicable laws.
                </p>
              </div>
            </div>

            {/* 10. Policy Updates */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span>
                  Updates to This Privacy Policy
                </h4>
                <p>
                  We may update this Privacy Policy periodically. Changes will be reflected here
                  with an updated “Effective Date.” Continued use of our services implies your
                  acceptance of any updates.
                </p>
              </div>
            </div>

            {/* 11. Contact Us */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">11</span>
                  Contact Us
                </h4>
                <p>
                  For any privacy-related concerns or inquiries, please contact us:
                </p>
                <ul className="list-styled">
                  <li>
                    📧 Email:{" "}
                    <a
                      href="mailto:simcurarx@gmail.com?subject=Hello%20Clynix"
                      className="fw-semibold text-decoration-none"
                    >
                      simcurarx@gmail.com
                    </a>
                  </li>
                  <li>📞 Phone: +91-7013914488</li>
                  <li>🏢 Address: Madhavapatnam, India</li>
                </ul>
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

        .policy-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-left: 4px solid #0d6efd !important;
        }

        .policy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.2rem;
          }
          .card-body {
            padding: 1.5rem !important;
          }
          .policy-card {
            border-left: 3px solid #0d6efd !important;
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
        }
      `}</style>
    </div>
  );
};

export default PrivacyAndPolicy;
