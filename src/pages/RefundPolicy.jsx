import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Refund Policy</h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          <div className="refund-content">
            {/* 1. Introduction */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span>
                  Introduction
                </h4>
                <p>
                  This Refund Policy outlines the terms under which{" "}
                  <strong>Darshadwajam News</strong> (“we”, “our”, “us”) processes
                  refunds for paid services, subscriptions, and digital purchases
                  made through our application (“the App”).
                </p>
                <p>
                  By purchasing or subscribing to any service, you agree to the
                  conditions stated in this policy.
                </p>
              </div>
            </div>

            {/* 2. Refund Eligibility */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span>
                  Refund Eligibility
                </h4>
                <p>Refunds may be granted under the following circumstances:</p>
                <ul className="list-styled">
                  <li>If you were charged incorrectly due to a payment system error.</li>
                  <li>
                    If the purchased digital content fails to load or becomes
                    inaccessible due to technical issues.
                  </li>
                  <li>
                    If a subscription renewal was charged despite cancellation
                    before the renewal date.
                  </li>
                </ul>
                <p className="mt-3">
                  Refunds are <strong>not applicable</strong> for content that has
                  already been downloaded, viewed, or used.
                </p>
              </div>
            </div>

            {/* 3. Non-Refundable Items */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span>
                  Non-Refundable Items
                </h4>
                <ul className="list-styled">
                  <li>Downloaded posters, images, and videos</li>
                  <li>Premium content already accessed</li>
                  <li>One-time in-app purchases</li>
                  <li>Any service used partially or fully</li>
                </ul>
              </div>
            </div>

            {/* 4. Refund Process */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span>
                  How to Request a Refund
                </h4>
                <p>To request a refund, follow these steps:</p>
                <ul className="list-styled">
                  <li>Send an email to our support team</li>
                  <li>Include your registered mobile number</li>
                  <li>Attach the payment receipt or transaction ID</li>
                  <li>Describe the issue clearly</li>
                </ul>

                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    Email:{" "}
                    <a
                      href="mailto:contact@Darshadwajamnews.com?subject=Refund%20Request"
                      className="fw-semibold text-decoration-none"
                    >
                      contact@Darshadwajamnews.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Refund Timeline */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span>
                  Refund Timeline
                </h4>
                <p>
                  Once your request is reviewed and approved, refunds are typically
                  processed within:
                </p>
                <ul className="list-styled">
                  <li>3–7 business days for UPI/Bank payments</li>
                  <li>5–10 business days for card payments</li>
                  <li>Timelines may vary based on your bank or payment provider</li>
                </ul>
              </div>
            </div>

            {/* 6. Subscription Cancellations */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span>
                  Subscription Cancellation
                </h4>
                <p>You may cancel your subscription at any time.</p>
                <p className="mt-2">
                  Cancellation stops future billing, but{" "}
                  <strong>does not guarantee a refund</strong> for previously billed
                  periods.
                </p>
              </div>
            </div>

            {/* 7. Contact Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span>
                  Contact Us
                </h4>
                <p>For refund-related support:</p>
                <ul className="list-styled">
                  <li>
                    📧 Email:{" "}
                    <a
                      href="mailto:contact@Darshadwajamnews.com"
                      className="fw-semibold text-decoration-none"
                    >
                      contact@Darshadwajamnews.com
                    </a>
                  </li>
                  <li>📞 Phone: +91-9876543210</li>
                  <li>
                    🏢 Address: Darshadwajam Media Pvt. Ltd., Hyderabad, Telangana, India
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

export default RefundPolicy;
