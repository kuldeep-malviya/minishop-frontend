const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* About Shop */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Mini Shop</h5>
            <p>
              Mini Shop is an online shopping platform where you can
              purchase quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <li>📞 +91 98765 43210</li>
              <li>📧 support@minishop.com</li>
              <li>📍 India</li>
              <li>⏰ 9AM – 9PM</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="#" className="text-light fs-4 me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light fs-4 me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light fs-4 me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center py-3 mt-3">
        <p className="mb-0">
          © 2026 Mini Shop | Designed by Kuldeep Malviya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
