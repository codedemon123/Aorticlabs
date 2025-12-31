import React, { useState } from "react";
import "./background.css";

const styles: Record<string, React.CSSProperties> = {
  /* ================= HEADER ================= */
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
  justifyContent: "space-between", // 👈 key line
},

  logoWrap: { display: "flex", alignItems: "center", gap: "10px" },
  logo: { width: "42px", height: "42px", objectFit: "contain" },
  brand: { fontSize: "20px", fontWeight: 600 },

  navDesktop: { display: "flex", gap: "22px" },
  navLink: {
    color: "#dbeafe",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
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
    padding: "12px 20px",
    display: "flex",
    flexDirection: "column",
  },
  navMobileLink: {
    padding: "10px 0",
    color: "white",
    background: "none",
    border: "none",
    fontSize: "15px",
    textAlign: "left",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  main: {
    paddingTop: "80px",
    position: "relative",
    zIndex: 1,
  },

  /* ================= HERO ================= */
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
    fontSize: "clamp(28px, 6vw, 44px)",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "20px",
    color: "#fff",
  },
  text: {
    color: "#cbd5e1",
    fontSize: "16px",
    marginBottom: "32px",
    maxWidth: "520px",
  },
  btnRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "28px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#22d3ee",
    color: "#000",
    padding: "12px 26px",
    borderRadius: "10px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
    minWidth: "140px",
  },
  secondaryBtn: {
    border: "1px solid #475569",
    padding: "12px 26px",
    borderRadius: "10px",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    minWidth: "140px",
  },
  bullets: {
    listStyle: "none",
    padding: 0,
    lineHeight: 1.8,
    color: "#cbd5e1",
    maxWidth: "420px",
  },
  imageWrap: { textAlign: "center" ,transform: "translateX(-30px)",  },
  heroImage: {
    width: "75%",
    maxWidth: "420px",
    borderRadius: "15px",
    border: "1px solid rgba(56,189,248,0.3)",
    display: "block",
  marginLeft: "auto",
  marginRight: "40px",
  },

  /* ================= ABOUT ================= */
  aboutSection: {
    padding: "80px 20px",
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
    fontSize: "clamp(28px, 6vw, 44px)",
    fontWeight: 700,
    marginBottom: "20px",
    color: "#fff",
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
    color: "#fff",
  },
  cardText: {
    fontSize: "14px",
    color: "#cbd5e1",
  },

  /* ================= CONTACT ================= */
  contactSection: {
    padding: "80px 20px",
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
    fontSize: "14px",
    color: "white",
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
  },
  textarea: {
    width: "100%",
    padding: "8px 12px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #475569",
    background: "#0f172a",
    color: "white",
    resize: "vertical",
  },

  /* ================= FOOTER ================= */
  footer: {
    borderTop: "1px solid #334155",
    background: "rgba(0,0,0,0.6)",
    padding: "20px 0",
    marginTop: "40px",
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

/* ================= COMPONENT ================= */

export default function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "instant",
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://aorticlabs-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();
      data.success ? setStatus("success") : setStatus("error");
      if (data.success) {
        setName("");
        setMessage("");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="tech-bg">
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logoWrap}>
            <img src="logo_final_aorticlabs.png" style={styles.logo} />
            <span style={styles.brand}>AorticLabs</span>
          </div>

          <nav className="nav-desktop" style={styles.navDesktop}>
            <button style={styles.navLink} onClick={() => scrollToSection("home")}>Home</button>
            <button style={styles.navLink} onClick={() => scrollToSection("about")}>About</button>
            <button style={styles.navLink} onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <button className="mobile-btn" style={styles.mobileBtn} onClick={() => setOpen(!open)}>☰</button>
        </div>

        {open && (
          <div style={styles.navMobile}>
            {["home", "about", "contact"].map(s => (
              <button
                key={s}
                style={styles.navMobileLink}
                onClick={() => {
                  scrollToSection(s);
                  setOpen(false);
                }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN */}
      <main style={styles.main}>
        <section id="home" className="hero-section" style={styles.heroSection}>
          <div>
            <p style={styles.tagline}>OPTICAL AI INTERCONNECTS</p>
            <h1 style={styles.title}>Building the world's most efficient interconnects for AI data centers</h1>
            <p style={styles.text}>
              We bring coherent interconnect technology into data centers —
              drastically reducing latency and power usage while increasing AI throughput.
            </p>

            <div style={styles.btnRow}>
              <button style={styles.primaryBtn} onClick={() => scrollToSection("contact")}>Get in touch</button>
              <button style={styles.secondaryBtn} onClick={() => scrollToSection("about")}>Learn more</button>
            </div>

            <ul style={styles.bullets}>
              <li>• Pluggable optics</li>
              <li>• Data Center Interconnects</li>
              <li>• Photonic Integrated Circuits</li>
            </ul>
          </div>

          <div style={styles.imageWrap}>
            <img src="aise1.jpeg" style={styles.heroImage} />
          </div>
        </section>

        <section id="about" style={styles.aboutSection}>
          <div style={styles.sectionBox}>
            <h2 style={styles.sectionTitle}>About Us</h2>
            <p style={styles.sectionText}>
              AorticLabs builds next-generation coherent interconnects designed to meet the extreme performance demands of modern AI data centers. We integrate photonics, pluggable optics, and advanced signaling architectures to deliver low-latency, low-power, and highly scalable connectivity for AI training and inference workloads.
            </p>

            <div className="about-grid" style={styles.aboutGrid}>
              {[
                ["Mission", "Reduce interconnect power & latency for AI."],
                ["Approach", "Photonics + ASIC + tightly integrated software."],
                ["Applications", "Distributed training & inference clusters."],
              ].map(([t, d]) => (
                <div key={t} style={styles.aboutCard}>
                  <h3 style={styles.cardTitle}>{t}</h3>
                  <p style={styles.cardText}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={styles.contactSection}>
          <div className="contact-grid" style={styles.contactGrid}>
            <div>
              <h2 style={styles.sectionTitle}>Contact</h2>
              <p style={styles.sectionText}>Want to collaborate or pilot our interconnects?</p>
              <p style={styles.contactLine}>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@aorticlabs.io" style={{ color: "#22d3ee" }}>
                  info@aorticlabs.io
                </a>
              </p>
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
              <label style={styles.label}>
                Name
                <input style={styles.input} value={name} onChange={e => setName(e.target.value)} required />
              </label>

              <label style={styles.label}>
                Message
                <textarea style={styles.textarea} value={message} onChange={e => setMessage(e.target.value)} required />
              </label>

              <button type="submit" style={styles.primaryBtn}>
  {status === "sending" ? "Sending..." : "Send"}
</button>

{status === "success" && (
  <p style={{ marginTop: "12px", color: "#22c55e", fontSize: "14px" }}>
    Thanks! We’ve received your message.
  </p>
)}

{status === "error" && (
  <p style={{ marginTop: "12px", color: "#f97373", fontSize: "14px" }}>
    Something went wrong. Please try again.
  </p>
)}

            </form>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logoWrap}>
            <img src="logo_final_aorticlabs.png" style={styles.footerLogo} />
            <span style={{ fontSize: "14px", color: "#cbd5e1" }}>
              © {new Date().getFullYear()} AorticLabs
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
