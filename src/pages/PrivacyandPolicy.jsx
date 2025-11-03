import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Privacy Policy</h1>
            <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          {/* Policy Content */}
          <div className="privacy-content">
            {/* 1. Information Collection */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Information We Collect
                </h4>

                <h6 className="fw-semibold mt-4">When You Register:</h6>
                <ul className="list-styled">
                  <li>Your full name</li>
                  <li>Your mobile number (used for login and verification)</li>
                </ul>

                <h6 className="fw-semibold mt-4">When You Update Your Profile:</h6>
                <ul className="list-styled">
                  <li>Updated name or profile photo</li>
                  <li>Preferred address or delivery instructions</li>
                </ul>

                <h6 className="fw-semibold mt-4">Automatically Collected Information:</h6>
                <ul className="list-styled">
                  <li>Device and app version details</li>
                  <li>Precise location (for faster and accurate medicine delivery)</li>
                  <li>Usage statistics like cart actions, and delivery preferences</li>
                </ul>
              </div>
            </div>

            {/* 2. Use of Collected Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  How We Use Your Information
                </h4>
                <ul className="list-styled">
                  <li>To verify your identity and maintain account security</li>
                  <li>To process and deliver your medicine orders efficiently</li>
                  <li>To provide customer support and delivery updates</li>
                  <li>To improve our app experience and optimize delivery routes</li>
                </ul>
              </div>
            </div>

            {/* 3. Location Access */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  Location Information
                </h4>
                <p>
                  Clynix uses your location data to connect you with the nearest pharmacy and
                  ensure timely delivery. Your location is accessed only when the app is in use or
                  when delivery tracking is active. You can disable location access anytime from
                  your device settings, but doing so may affect service accuracy.
                
                </p>
              </div>
            </div>

            {/* 4. Data Protection */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  How We Protect Your Data
                </h4>
                <ul className="list-styled">
                  <li>Secure HTTPS-based communication</li>
                  <li>Encryption of sensitive data (like contact and order details)</li>
                  <li>Restricted access to personal data by authorized personnel only</li>
                  <li>Regular security audits and compliance with data safety standards</li>
                </ul>
              </div>
            </div>

            {/* 5. Data Sharing */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Sharing Your Information
                </h4>
                <p>
                  We do <strong className="text-danger">not sell</strong> your data. Limited sharing
                  may occur with:
                </p>
                <ul className="list-styled">
                  <li>Partner pharmacies for order processing</li>
                  <li>Delivery service providers for accurate dispatch</li>
                  <li>Regulatory or government authorities if legally required</li>
                </ul>
              </div>
            </div>

            {/* 6. Your Rights */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Your Rights and Choices
                </h4>
                <ul className="list-styled">
                  <li>Access or update your account details anytime</li>
                  <li>Delete your account permanently if desired</li>
                  <li>Manage app permissions (location, etc.)</li>
                </ul>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    To request data deletion or account removal, contact us at:{" "}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=simcurarx@gmail.com&su=Account%20Privacy%20Request"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-decoration-none"
                    >
                      simcurarx@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Data Retention */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Data Retention
                </h4>
                <p>
                  We retain user information as long as your account is active or as required to
                  provide our services. Order records may be retained for legal and transactional
                  compliance.
                </p>
              </div>
            </div>

            {/* 8. Children’s Privacy */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Children’s Privacy
                </h4>
                <p>
                  Clynix is intended for adults aged 18 and above. We do not knowingly collect
                  information from minors. If such data is identified, it will be deleted promptly.
                </p>
              </div>
            </div>

            {/* 9. Policy Updates */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Changes to This Privacy Policy
                </h4>
                <p>
                  This Privacy Policy may be updated periodically to reflect new features, legal
                  requirements, or operational changes. Updated versions will be published within
                  the Clynix app. Continued use after changes means you accept the updated policy.
                </p>
              </div>
            </div>

            {/* 10. Contact */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span>
                  Contact Us
                </h4>
                <p className="mb-0">
                  For questions, feedback, or privacy concerns, contact our support team at:{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=simcurarx@gmail.com&su=Hello%20Clynix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-semibold text-decoration-none"
                  >
                    simcurarx@gmail.com
                  </a>
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
