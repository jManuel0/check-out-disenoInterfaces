export default function Home() {
  const items = [
    {
      id: 1,
      name: "Silicone Case for iPhone 7",
      details: "Product color: Midnight Blue, Turquoise Blue",
      quantity: "Quantity: 2 items",
      price: "EUR 36.40",
      unitPrice: "EUR 18.20 per item",
      iconClass: "icon-case",
    },
    {
      id: 2,
      name: "Tempered glass for iPhone",
      details: "Size: iPhone 7, iPhone 8",
      quantity: "Quantity: 4 items",
      price: "EUR 20.00",
      unitPrice: "EUR 5.00 per item",
      iconClass: "icon-phone",
    },
    {
      id: 3,
      name: "Tempered glass for iPhone",
      details: "Size: iPhone 7, iPhone 8",
      quantity: "Quantity: 4 items",
      price: "EUR 20.00",
      unitPrice: "EUR 5.00 per item",
      iconClass: "icon-phone",
    },
  ];

  return (
    <div className="checkout-page">
      <header className="top-hero">
        <div className="container">
          <div className="top-row">
            <button className="ghost-link" type="button" aria-label="Go back">
              Back
            </button>
            <h1 className="brand">2019</h1>
            <button className="menu-button" type="button" aria-label="Open menu">
              <span />
              <span />
            </button>
          </div>

          <nav className="stepper" aria-label="Checkout steps">
            <div className="step step-done">
              <span className="dot">1</span>
              <span>Personal details</span>
            </div>
            <div className="step step-active">
              <span className="dot">2</span>
              <span>Order details</span>
            </div>
            <div className="step">
              <span className="dot">3</span>
              <span>Payment</span>
            </div>
            <div className="step">
              <span className="dot">4</span>
              <span>Confirmation</span>
            </div>
            <button className="ghost-link previous-step" type="button" aria-label="Go to previous step">
              Previous step
            </button>
          </nav>
        </div>
      </header>

      <main className="container checkout-main">
        <section className="card order-card" aria-labelledby="order-items-title">
          <div className="card-header">
            <h2 id="order-items-title">Order items</h2>
            <button className="edit-link" type="button" aria-label="Edit shopping cart">
              Edit shopping cart
            </button>
          </div>

          <ul className="item-list">
            {items.map((item) => (
              <li key={item.id} className="item-row">
                <div className="item-thumb" aria-hidden="true">
                  <span className={`item-icon ${item.iconClass}`} />
                </div>
                <div className="item-copy">
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                  <p>{item.quantity}</p>
                </div>
                <div className="item-price" aria-label={`Price ${item.price}`}>
                  <strong>{item.price}</strong>
                  <small>{item.unitPrice}</small>
                </div>
              </li>
            ))}
          </ul>

          <div className="discount-zone">
            <label htmlFor="discountCode" className="discount-label">
              Have discount code? Click to enter it.
            </label>
            <div className="discount-input-wrap">
              <input
                id="discountCode"
                name="discountCode"
                type="text"
                placeholder="Enter discount code"
                className="discount-input"
              />
              <button type="button" className="apply-btn">
                Apply
              </button>
            </div>
          </div>
        </section>

        <aside className="side-column">
          <section className="card summary-card" aria-labelledby="summary-title">
            <h2 id="summary-title">Summary</h2>
            <p className="summary-note">
              The total cost consist of the tax, insurance and the delivery charge.
            </p>

            <dl className="summary-list">
              <div>
                <dt>Subtotal</dt>
                <dd>EUR 56.40</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>FREE</dd>
              </div>
              <div>
                <dt>Tax</dt>
                <dd>EUR 11.84</dd>
              </div>
              <div>
                <dt>Insurance</dt>
                <dd>EUR 7.00</dd>
              </div>
            </dl>

            <div className="summary-total">
              <span>TOTAL:</span>
              <strong>EUR 75.24</strong>
            </div>
          </section>

          <section className="card delivery-card" aria-label="Delivery options">
            <h2>Delivery</h2>
            <button type="button" className="circle-btn" aria-label="Expand delivery options">
              +
            </button>
          </section>

          <button type="button" className="primary-btn">
            Next step
          </button>
        </aside>
      </main>

      <section className="container trust-row" aria-label="Trust badges">
        <article className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <span className="symbol lock" />
          </span>
          <h3>Your information is Safe</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </article>

        <article className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <span className="symbol shield" />
          </span>
          <h3>Secure checkout</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </article>

        <article className="trust-item">
          <span className="trust-icon" aria-hidden="true">
            <span className="symbol headset" />
          </span>
          <h3>24/7 Support</h3>
          <p>The total cost consist of the tax, insurance and the delivery charge.</p>
        </article>
      </section>
    </div>
  );
}
