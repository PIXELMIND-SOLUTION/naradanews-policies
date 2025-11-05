import React from "react";

const CancellationRefundPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Cancellation & Refund Policy</h1>
        <p className="text-muted">Last updated: o5/11/2025</p>
      </div>

      {/* Section 1 */}
      <section className="mb-4">
        <h5 className="fw-semibold">1. Cancellation Policy</h5>
        <p>
          At <strong>Clynix</strong>, we are committed to ensuring a seamless and transparent experience 
          for all our users. If you wish to cancel a purchase, please refer 
          to the following terms:
        </p>
        <ul>
          <li>
            Cancellations made Before <strong>Delivary Pickup</strong> of purchase are eligible for a full refund.
          </li>
          
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-4">
        <h5 className="fw-semibold">2. Refund Policy</h5>
        <ul>
          <li>
            Approved refunds will be credited to the original payment method within 
            <strong> within 7 business days</strong>.
          </li>
          <li>
            In case of payment failure or duplicate transactions, contact our support team 
            immediately for resolution.
          </li>
          <li>
            Refunds are not provided for that have already been delivered.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-4">
        <h5 className="fw-semibold">3. How to Request a Cancellation or Refund</h5>
        <p>
          To request a cancellation or refund, please contact our support team with your 
          transaction details and a brief explanation of your request:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:simcurarx@gmail.com" className="text-decoration-none">
              simcurarx@gmail.com
            </a>
          </li>
          <li>
            Subject: <em>Refund Request – Clynix</em>
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-4">
        <h5 className="fw-semibold">4. Force Majeure</h5>
        <p>
          In case of events beyond our reasonable control, such as natural disasters, 
          server outages, or government-imposed restrictions, <strong>Clynix</strong> reserves 
          the right to cancel services or delay refunds without liability. In such cases, 
          eligible users will receive a full refund where applicable.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-4">
        <h5 className="fw-semibold">5. Contact Us</h5>
        <p>
          For any concerns or queries regarding our Cancellation & Refund Policy, 
          you can reach us via:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:simcurarx@gmail.com" className="text-decoration-none">
              simcurarx@gmail.com
            </a>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://clynix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              https://clynix.vercel.app/
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <div className="text-center mt-5">
        <p className="text-muted small">
          © {new Date().getFullYear()} Clynix. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
