import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Privacy Policy</h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          <div className="privacy-content">
            {/* 1. Introduction */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Introduction
                </h4>
                <p>
                  <strong>Darshadwajam News</strong> (“we”, “our”, “us”) operates the
                  Darshadwajam News mobile application (“the App”). This Privacy Policy
                  outlines how we collect, use, disclose, and protect your personal
                  information when you access our news content, create a profile, or
                  interact with our services.
                </p>
                <p>
                  By using our App, you consent to the practices described in this
                  policy.
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

                <h6 className="fw-semibold mt-3">a. Account & Profile Information</h6>
                <ul className="list-styled">
                  <li>Full name</li>
                  <li>Mobile number (required for OTP login)</li>
                  <li>Email address</li>
                  <li>Profile picture</li>
                  <li>City, State, and Address</li>
                </ul>
                <p className="mt-2 text-muted">
                  ✅{" "}
                  <strong>
                    Except for your mobile number (required for OTP login), all
                    other profile information is optional.
                  </strong>{" "}
                  You may use the App without completing the remaining profile
                  fields.
                </p>

                <h6 className="fw-semibold mt-3">b. Device & Usage Data</h6>
                <ul className="list-styled">
                  <li>Device model, OS version</li>
                  <li>IP address and browser type (if accessed via web)</li>
                  <li>
                    App interaction data (e.g., articles read, videos watched,
                    shares, downloads)
                  </li>
                </ul>

                <h6 className="fw-semibold mt-3">c. Content Interactions</h6>
                <ul className="list-styled">
                  <li>
                    News articles, videos, and posters you view, share, or download
                  </li>
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
                  <li>To authenticate your identity via OTP</li>
                  <li>
                    To personalize your news feed based on your location and
                    interests
                  </li>
                  <li>To enable sharing, downloading, and saving of content</li>
                  <li>To improve app performance and user experience</li>
                  <li>
                    To send service-related notifications (e.g., updates, policy
                    changes)
                  </li>
                </ul>
                <p className="mt-3">
                  We <strong>do not sell</strong> your personal data to third
                  parties.
                </p>
              </div>
            </div>

            {/* 4. Information Sharing */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  Information Sharing
                </h4>
                <p>We may share data only with:</p>
                <ul className="list-styled">
                  <li>
                    Cloud and analytics providers (e.g., Firebase, Google
                    Analytics) for app functionality
                  </li>
                  <li>OTP service providers for mobile verification</li>
                </ul>
                <p className="mt-3">
                  All partners are contractually obligated to maintain
                  confidentiality.
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
                <p>We implement industry-standard security measures including:</p>
                <ul className="list-styled">
                  <li>End-to-end encryption for OTP and profile data</li>
                  <li>Secure cloud storage with access controls</li>
                  <li>Regular security assessments</li>
                </ul>
                <p className="mt-3">
                  While we strive to protect your data, no digital transmission is
                  100% secure.
                </p>
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
                  <li>Access, edit, or delete your profile anytime</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request permanent account deletion</li>
                </ul>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    Email us at:{" "}
                    <a
                      href="mailto:contact@darshadwajamnews.com?subject=Account%20Deletion%20Request"
                      className="fw-semibold text-decoration-none"
                    >
                      contact@darshadwajamnews.com
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
                  Darshadwajam News is not intended for users under 13. We do not
                  knowingly collect data from children. If discovered, such data
                  will be deleted immediately.
                </p>
              </div>
            </div>

            {/* 8. Policy Updates */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Updates to This Policy
                </h4>
                <p>
                  We may update this policy periodically. The effective date will be
                  revised, and continued use implies acceptance.
                </p>
              </div>
            </div>

            {/* 9. Contact Us */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Contact Us
                </h4>
                <p>For privacy inquiries:</p>
                <ul className="list-styled">
                  <li>
                    📧 Email:{" "}
                    <a
                      href="mailto:contact@darshadwajamnews.com"
                      className="fw-semibold text-decoration-none"
                    >
                      contact@darshadwajamnews.com
                    </a>
                  </li>
                  <li>📞 Phone: +91-9876543210</li>
                  <li>
                    🏢 Address: Plot No.306, Smitha Towers, Shyam Nagar, Vijayawada, Andhra Pradesh
                  </li>
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
        }
        @media (max-width: 576px) {
          .display-4 {
            font-size: 1.8rem;
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

export default PrivacyPolicy;
