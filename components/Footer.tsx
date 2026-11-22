import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus Life", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">
            <span className="footer-brand-mark">CA</span>

            <span className="footer-brand-copy">
              <strong>Central Academy</strong>
              <small>Sarai Inayat, Prayagraj</small>
            </span>
          </Link>

          <p>Learning today. Leading tomorrow.</p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>School Office</h3>

          <div className="footer-contact">
            <p>
              255 Sarfuddinpur, Sarai Inayat,
              <br />
              Jhunsi, Prayagraj,
              <br />
              Uttar Pradesh 221505
            </p>

            <a href="tel:+919555828154">+91 95558 28154</a>

            <a href="mailto:centralacademyssiprayagraj@gmail.com">
              centralacademyssiprayagraj@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Central Academy. All rights reserved.</span>

        <span>Sarai Inayat, Prayagraj</span>
      </div>
    </footer>
  );
}
