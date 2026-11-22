import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CampusFacilities from "@/components/CampusFacilities";
import StudentLife from "@/components/StudentLife";
import LeadershipMessages from "@/components/LeadershipMessages";
import Announcements from "@/components/Announcements";
import HomeGallery from "@/components/HomeGallery";
import Admissions from "@/components/Admissions";
import ContactSection from "@/components/ContactSection";

const quickLinks = [
  {
    number: "01",
    title: "Admissions",
    text: "Everything you need to know about joining our school.",
    href: "/admissions",
    icon: "↗",
  },
  {
    number: "02",
    title: "Academics",
    text: "Explore our approach to learning and education.",
    href: "/academics",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Campus life",
    text: "Discover the experiences beyond the classroom.",
    href: "/campus",
    icon: "✳",
  },
  {
    number: "04",
    title: "Notice board",
    text: "Stay up to date with school news and announcements.",
    href: "/notices",
    icon: "▤",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> A legacy of learning
              </div>
              <div className="identity-card">
                <Image
                  src="/images/central-academy-brand.png"
                  alt="Central Academy, Sarai Inayat, Prayagraj. The legacy continues."
                  width={521}
                  height={157}
                  priority
                  className="identity-image"
                />
              </div>
              <h1>
                Building bright futures, <em>one student at a time.</em>
              </h1>
              <p className="hero-description">
                A place where learning goes beyond textbooks, curiosity is
                encouraged, and every student is inspired to discover their
                potential.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/about">
                  Discover our school <span>↗</span>
                </Link>
                <Link className="button button-secondary" href="/admissions">
                  Explore admissions
                </Link>
              </div>
              <div className="hero-note">
                <span className="note-line" /> Central Academy, Sarai Inayat ·
                Prayagraj
              </div>
            </div>

            <div
              className="hero-visual"
              aria-label="A welcoming introduction to Central Academy"
            >
              <div className="visual-topline">
                <span>LEARN</span>
                <span>GROW</span>
                <span>LEAD</span>
              </div>
              <div className="visual-panel">
                <div className="visual-panel-inner">
                  <div className="sun-disc" />
                  <div className="visual-arch arch-back" />
                  <div className="visual-arch arch-front">
                    <div className="arch-window window-one" />
                    <div className="arch-window window-two" />
                    <div className="arch-door" />
                  </div>
                  <div className="visual-ground" />
                  <div className="visual-caption">
                    <span>01 / 03</span>
                    <strong>
                      A journey that
                      <br />
                      shapes tomorrow.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="visual-side-label">
                EDUCATION · CHARACTER · COMMUNITY
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>01 — 05</span>
          </div>
        </section>

        <section className="quick-section container">
          <div className="section-intro">
            <div>
              <span className="section-kicker">YOUR CENTRAL ACADEMY</span>
              <h2>
                Everything you need,
                <br />
                <em>right this way.</em>
              </h2>
            </div>
            <p>
              Whether you are a parent, a student, or a visitor, find your way
              around Central Academy.
            </p>
          </div>
          <div className="quick-grid">
            {quickLinks.map((item) => (
              <Link className="quick-card" href={item.href} key={item.number}>
                <div className="quick-card-top">
                  <span>{item.number}</span>
                  <span className="quick-icon">{item.icon}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="quick-arrow">
                  Explore <b>↗</b>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-strip">
          <div className="container about-layout">
            <div className="about-label">
              <span className="section-kicker">A LITTLE ABOUT US</span>
              <span className="about-index">02 / 05</span>
            </div>
            <div className="about-content">
              <h2>
                More than a school.
                <br />
                <em>A place to become.</em>
              </h2>
              <p>
                At Central Academy, Sarai Inayat, we believe education is about
                nurturing knowledge, confidence, values, and the courage to
                shape a better tomorrow.
              </p>
              <Link className="text-link" href="/about">
                Get to know us <span>↗</span>
              </Link>
            </div>
            <div className="about-stamp">
              <span>CA</span>
              <small>
                THE LEGACY
                <br />
                CONTINUES
              </small>
            </div>
          </div>
        </section>

        <CampusFacilities />

        <StudentLife />

        <LeadershipMessages />

        <Announcements />

        <HomeGallery />

        <Admissions />

        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="footer-brand" href="/">
            CENTRAL ACADEMY<span>SARAI INAYAT, PRAYAGRAJ</span>
          </Link>
          <p>Learning today. Leading tomorrow.</p>
          <span className="footer-copy">© 2026 Central Academy</span>
        </div>
      </footer>
    </>
  );
}
