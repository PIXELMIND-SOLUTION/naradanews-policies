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
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{
                width: "80px",
                height: "4px",
                borderRadius: "2px",
              }}
            ></div>
          </div>

          <p className="lead text-center mb-5">
            These Terms and Conditions ("Terms") govern your use of the{" "}
            <strong className="text-primary">Clynix</strong> mobile application ("App"). By accessing or using the App, you agree to
            these Terms in full.
          </p>

          {/* Terms Content */}
          <div className="terms-content">
            {/* 1 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Acceptance of Terms
                </h4>
                <p className="mb-0">
                  By downloading, registering, or using Clynix, you acknowledge
                  that you have read and agree to comply with these Terms. If
                  you do not agree, you must discontinue use immediately.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  Eligibility
                </h4>
                <p className="mb-0">
                  You must be at least 13 years old to use the App. By using
                  Clynix, you confirm that you meet this age requirement and
                  have the legal capacity to enter into a binding agreement.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  User Responsibilities
                </h4>
                <ul className="list-styled">
                  <li>Provide accurate and truthful information when registering.</li>
                  <li>Maintain confidentiality of your account credentials.</li>
                  <li>Use Clynix only for lawful and intended purposes.</li>
                  <li>
                    Do not upload harmful, misleading, or inappropriate content.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  Service and Content Ownership
                </h4>
                <p className="mb-0">
                  All content, trademarks, and technologies in Clynix are owned
                  by Clynix or its licensors.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Usage Restrictions
                </h4>
                <ul className="list-styled">
                  <li>Do not attempt to hack, reverse engineer, or disrupt the App.</li>
                  <li>
                    Do not use Clynix to transmit spam, malware, or unauthorized
                    advertisements.
                  </li>
                  <li>Do not impersonate another user or entity.</li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Termination
                </h4>
                <p className="mb-0">
                  Clynix reserves the right to suspend or terminate accounts
                  that violate these Terms, engage in fraudulent behavior, or
                  misuse platform features.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Limitation of Liability
                </h4>
                <p className="mb-0">
                  Clynix and its affiliates shall not be liable for any indirect
                  or consequential damages, including data loss or service
                  interruptions, arising from your use of the App.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Modifications to Terms
                </h4>
                <p className="mb-0">
                  Clynix may update these Terms periodically. Any updates will
                  be posted within the App, and continued use constitutes
                  acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Contact Us
                </h4>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    For questions or concerns, please contact our support team
                    at:{" "}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=simcurarx@gmail.com&su=Regarding%20Terms&body=Hello%20Clynix%20Team,"
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
      </div>

      {/* STYLES */}
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

          .terms-card {
            border-left: 3px solid #0d6efd !important;
          }

          .card-body {
            padding: 1.5rem !important;
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
