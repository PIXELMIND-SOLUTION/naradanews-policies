import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Terms and Conditions
            </h1>
            <p className="text-muted">Last updated: {new Date().toLocaleDateString("en-GB")}</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          <p className="lead text-center mb-5">
            Welcome to <strong className="text-primary">Darshadwajam News</strong>. By using our app, you agree to these Terms. Please read them carefully.
          </p>

          <div className="terms-content">
            {/* 1. Acceptance */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Acceptance of Terms
                </h4>
                <p>
                  Accessing or using the Darshadwajam News App constitutes your acceptance of these Terms. If you disagree, please discontinue use.
                </p>
              </div>
            </div>

            {/* 2. Account Registration */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  Account Registration
                </h4>
                <ul className="list-styled">
                  <li>You must be at least 13 years old.</li>
                  <li>Provide accurate mobile number for OTP verification.</li>
                  <li>You are responsible for maintaining account security.</li>
                </ul>
              </div>
            </div>

            {/* 3. Content License */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  Content License
                </h4>
                <ul className="list-styled">
                  <li>We grant you a limited, non-exclusive license to view, share, and download news content for personal, non-commercial use.</li>
                  <li>All content is owned by Darshadwajam News or its licensors.</li>
                  <li>Unauthorized redistribution or commercial use is prohibited.</li>
                </ul>
              </div>
            </div>

            {/* 4. User Conduct */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  User Conduct
                </h4>
                <p>You agree not to:</p>
                <ul className="list-styled">
                  <li>Scrape or automate content collection</li>
                  <li>Upload harmful or misleading content</li>
                  <li>Violate intellectual property rights</li>
                </ul>
              </div>
            </div>

            {/* 5. Disclaimers */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Disclaimers
                </h4>
                <ul className="list-styled">
                  <li>Content is for informational purposes only.</li>
                  <li>We do not guarantee accuracy, completeness, or timeliness of news.</li>
                  <li>App and content are provided “as is” without warranties.</li>
                </ul>
              </div>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Limitation of Liability
                </h4>
                <p>
                  To the fullest extent permitted by law, Darshadwajam News shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
                </p>
              </div>
            </div>

            {/* 7. Termination */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Termination
                </h4>
                <p>
                  We may suspend or terminate your access for violation of these Terms.
                </p>
              </div>
            </div>

            {/* 8. Changes to Terms */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span>
                  Changes to Terms
                </h4>
                <p>
                  We may update these Terms. Continued use after changes implies acceptance.
                </p>
              </div>
            </div>

            {/* 9. Governing Law */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span>
                  Governing Law
                </h4>
                <p>
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
                </p>
              </div>
            </div>

            {/* 10. Contact */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span>
                  Contact Us
                </h4>
                <ul className="list-styled">
                  <li>📧 Email: <a href="mailto:contact@darshadwajamnews.com" className="fw-semibold text-decoration-none">contact@darshadwajamnews.com</a></li>
                  <li>📞 Phone: +91-9876543210</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        .lead { font-size: 1.2rem; line-height: 1.6; }
        @media (max-width: 768px) {
          .display-4 { font-size: 2.2rem; }
          .card-body { padding: 1.5rem !important; }
          .lead { font-size: 1.1rem; }
        }
        @media (max-width: 576px) {
          .display-4 { font-size: 1.8rem; }
          .number-badge { width: 28px; height: 28px; font-size: 14px; }
          .lead { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;