import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className="d-flex align-center justify-content-between">
                {/* logo */}
                <div className="logo">
                    <Link to="janascript:void(0)">Lighr store</Link>
                    <p>
                        <Link to="/">28 palediyam shoping,</Link>
                        <br />
                        yogi chow,varacha-surat-231 456.
                    </p>
                    <p>
                        <Link to="/">+91 9427741387</Link>
                    </p>
                    <p>
                        <Link to="/">lemp.store@gmail.com</Link>
                    </p>
                </div>
                {/* company */}
                <div className="footer-item">
                    <h3>company</h3>
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">product</Link>
                        </li>
                        <li>
                            <Link to="/">testimonial</Link>
                        </li>
                    </ul>
                </div>
                {/* support */}
                <div className="footer-item">
                    <h3>support</h3>
                    <ul>
                        <li>
                            <Link to="/">FQA</Link>
                        </li>
                        <li>
                            <Link to="/">privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/">Terms of Services</Link>
                        </li>
                    </ul>
                </div>
                {/* support */}
                <div className="footer-item">
                    <h3>support</h3>
                    <ul>
                        <li>
                            <Link to="/">FQA</Link>
                        </li>
                        <li>
                            <Link to="/">privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/">Terms of Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* copy right */}
            <div className="copyright">
                <p>&lt;/RD&gt; This web developed by RADHE_PATEL</p>
            </div>
        </footer>

    )
}

export default Footer
