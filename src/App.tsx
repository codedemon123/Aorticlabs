import React, { useState } from "react";
import "./background.css";

const styles: Record<string, React.CSSProperties> = {
  /* HEADER */
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,0.6)",
    borderBottom: "1px solid #16213e",
    zIndex: 100,
    padding: "12px 0",
    boxSizing: "border-box",
  },
  headerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoWrap: { display: "flex", alignItems: "center", gap: "10px" },
  logo: { width: "42px", height: "42px", objectFit: "contain" },
  brand: { fontSize: "20px", fontWeight: 600 },

  navDesktop: { display: "flex", gap: "22px" },
  navLink: {
    color: "#dbeafe",
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "inherit",
  },

  mobileBtn: {
    display: "none",
    background: "none",
    color: "white",
    border: "none",
    fontSize: "26px",
    cursor: "pointer",
  },

  navMobile: {
    background: "rgba(0,0,0,0.75)",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
  },
  navMobileLink: {
    padding: "10px 0",
    color: "white",
    textDecoration: "none",
    background: "none",
    border: "none",
    fontSize: "15px",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "inherit",
  },

  main: {
    paddingTop: "80px",
    position: "relative",
    zIndex: 1,
  },

  /* HERO */
  heroSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "40px",
  },
  tagline: {
    color: "#22d3ee",
    fontSize: "13px",
    letterSpacing: "3px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "44px",
    fontWeight: 800,
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#ffffff",
  },
  text: {
    color: "#cbd5e1",
    fontSize: "16px",
    marginBottom: "28px",
  },
  btnRow: { display: "flex", gap: "14px", marginBottom: "20px" },
  primaryBtn: {
    background: "#22d3ee",
    color: "#000",
    padding: "10px 22px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
  },
  secondaryBtn: {
    border: "1px solid #475569",
    padding: "10px 22px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    background: "transparent",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
  },
  bullets: {
    color: "#cbd5e1",
    marginTop: "20px",
    lineHeight: 1.7,
    listStyle: "none",
    padding: 0,
  },
  imageWrap: { textAlign: "center" },
  heroImage: {
    width: "75%",
    maxWidth: "420px",
    borderRadius: "15px",
    border: "1px solid rgba(56,189,248,0.3)",
    display: "block",
    margin: "0 auto",
  },

  /* ABOUT */
  aboutSection: {
    padding: "80px 20px",
    position: "relative",
    zIndex: 1,
  },
  sectionBox: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "rgba(0,0,0,0.45)",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid #334155",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "20px",
    color: "#ffffff",
  },
  sectionText: {
    color: "#cbd5e1",
    fontSize: "16px",
    marginBottom: "40px",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
  },
  aboutCard: {
    border: "1px solid #334155",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(10,10,20,0.6)",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#ffffff",
  },
  cardText: {
    color: "#cbd5e1",
    fontSize: "14px",
  },

  /* CONTACT */
  contactSection: {
    padding: "80px 20px",
    position: "relative",
    zIndex: 1,
  },
  contactGrid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },
  contactLine: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#cbd5e1",
  },
  form: {
    background: "rgba(0,0,0,0.45)",
    padding: "30px",
    borderRadius: "14px",
    border: "1px solid #334155",
  },
  label: {
    display: "block",
    color: "white",
    fontSize: "14px",
    marginBottom: "14px",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #475569",
    background: "#0f172a",
    color: "white",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  textarea: {
    width: "100%",
    padding: "8px 12px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #475569",
    background: "#0f172a",
    color: "white",
    boxSizing: "border-box",
    fontFamily: "inherit",
    resize: "vertical",
  },

  /* FOOTER */
  footer: {
    borderTop: "1px solid #334155",
    background: "rgba(0,0,0,0.6)",
    padding: "20px 0",
    marginTop: "40px",
    position: "relative",
    zIndex: 1,
  },
  footerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLogo: { width: "32px", opacity: 0.8 },
};

// Scroll function - instant jump to section
const scrollToSection = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "instant" as ScrollBehavior,
    });
  }
};

export default function App(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  // contact form state
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        // ⬆️ replace with your deployed backend URL when live
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setMessage("");
        // if you REALLY want a full page reload:
        // setTimeout(() => window.location.reload(), 1500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="tech-bg">
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logoWrap}>
            <img
  src="logo_final_aorticlabs.png"
  style={styles.logo}
  alt="Aorticlabs"
/>
            <span style={styles.brand}>Aorticlabs</span>
          </div>

          <nav style={styles.navDesktop}>
            <button
              style={styles.navLink}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              style={styles.navLink}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              style={styles.navLink}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          <button style={styles.mobileBtn} onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {open && (
          <div style={styles.navMobile}>
            <button
              style={styles.navMobileLink}
              onClick={() => {
                scrollToSection("home");
                setOpen(false);
              }}
            >
              Home
            </button>
            <button
              style={styles.navMobileLink}
              onClick={() => {
                scrollToSection("about");
                setOpen(false);
              }}
            >
              About
            </button>
            <button
              style={styles.navMobileLink}
              onClick={() => {
                scrollToSection("contact");
                setOpen(false);
              }}
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main style={styles.main}>
        {/* HERO SECTION */}
        <section id="home" style={styles.heroSection}>
          <div>
            <p style={styles.tagline}>OPTICAL AI INTERCONNECTS</p>

            <h1 style={styles.title}>
              Building the world's most efficient interconnects for AI data
              centers
            </h1>

            <p style={styles.text}>
              We bring coherent interconnect technology into data centers —
              drastically reducing latency and power usage while increasing AI
              throughput.
            </p>

            <div style={styles.btnRow}>
              <button
                style={styles.primaryBtn}
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </button>
              <button
                style={styles.secondaryBtn}
                onClick={() => scrollToSection("about")}
              >
                Learn more
              </button>
            </div>

            <ul style={styles.bullets}>
              <li>• Pluggable optics</li>
              <li>• Data Center Interconnects</li>
              <li>• Photonic Integrated Circuits</li>
            </ul>
          </div>

          <div style={styles.imageWrap}>
            <img src="aise1.jpeg" style={styles.heroImage} alt="AI Server" />

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" style={styles.aboutSection}>
          <div style={styles.sectionBox}>
            <h2 style={styles.sectionTitle}>About Us</h2>

            <p style={styles.sectionText}>
              AorticLabs builds next-generation coherent interconnects designed
              to meet the extreme performance demands of modern AI data centers.
              We integrate photonics, pluggable optics, and advanced signaling
              architectures to deliver low-latency, low-power, and highly
              scalable connectivity for AI training and inference workloads.
            </p>

            <div style={styles.aboutGrid}>
              <div style={styles.aboutCard}>
                <h3 style={styles.cardTitle}>Mission</h3>
                <p style={styles.cardText}>
                  Reduce interconnect power & latency for AI.
                </p>
              </div>

              <div style={styles.aboutCard}>
                <h3 style={styles.cardTitle}>Approach</h3>
                <p style={styles.cardText}>
                  Photonics + ASIC + tightly integrated software.
                </p>
              </div>

              <div style={styles.aboutCard}>
                <h3 style={styles.cardTitle}>Applications</h3>
                <p style={styles.cardText}>
                  Distributed training & inference clusters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={styles.contactSection}>
          <div style={styles.contactGrid}>
            <div>
              <h2 style={styles.sectionTitle}>Contact</h2>
              <p style={styles.sectionText}>
                Want to collaborate or pilot our interconnects?
              </p>
              <p style={styles.contactLine}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@aorticlabs.io"
                  style={{ color: "#22d3ee" }}
                >
                  info@aorticlabs.io
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>
                Name
                <input
                  name="name"
                  type="text"
                  required
                  style={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label style={styles.label}>
                Message
                <textarea
                  name="message"
                  rows={3}
                  required
                  style={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>

              <button type="submit" style={styles.primaryBtn}>
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              {status === "success" && (
                <p
                  style={{
                    marginTop: "10px",
                    color: "#22c55e",
                    fontSize: "14px",
                  }}
                >
                  Thanks! We’ve received your message.
                </p>
              )}
              {status === "error" && (
                <p
                  style={{
                    marginTop: "10px",
                    color: "#f97373",
                    fontSize: "14px",
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logoWrap}>
            <img
  src="logo_final_aorticlabs.png"
  style={styles.footerLogo}
  alt="Aorticlabs"
/>
            <span style={{ fontSize: "14px", color: "#cbd5e1" }}>
              © {new Date().getFullYear()} AorticLabs
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
