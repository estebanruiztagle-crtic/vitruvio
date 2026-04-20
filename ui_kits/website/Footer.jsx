// CRTIC Design System — Footer Component

const Footer = () => (
  <footer style={{
    background: "#FE440D",
    padding: "48px 64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 32,
  }}>
    {/* Brand + tagline */}
    <div>
      <img src="../../assets/logo_white.png" alt="CRTIC" style={{ height: 40, marginBottom: 16 }} />
      <div style={{
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 12, color: "rgba(255,255,255,0.6)",
        letterSpacing: 2, textTransform: "uppercase",
        maxWidth: 240, lineHeight: 1.7,
      }}>
        La tecnología es compartida.<br/>El arte es del artista.
      </div>
    </div>

    {/* Nav links */}
    <div style={{ display: "flex", gap: 48 }}>
      {[["HUB", ["Residencias", "Tecnologías", "Proyectos"]], ["INSTITUCIÓN", ["Quiénes Somos", "Gobernanza", "Prensa"]]].map(([group, links]) => (
        <div key={group}>
          <div style={{
            fontFamily: "'Barlow Condensed', Arial, sans-serif",
            fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)", marginBottom: 12,
          }}>{group}</div>
          {links.map(link => (
            <div key={link} style={{ marginBottom: 8 }}>
              <a href="#" style={{
                fontFamily: "'Barlow Condensed', Arial, sans-serif",
                fontWeight: 700, fontSize: 13,
                textTransform: "uppercase", letterSpacing: 1,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}>{link}</a>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Contact CTA */}
    <div>
      <div style={{
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 10, letterSpacing: 4, textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)", marginBottom: 12,
      }}>CONTACTO</div>
      <a href="mailto:innovacion@crtic.cl" style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "rgba(0,0,0,0.15)",
        borderRadius: 100,
        padding: "12px 20px",
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontWeight: 700, fontSize: 13,
        textTransform: "uppercase", letterSpacing: 1,
        color: "white",
        textDecoration: "none",
      }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0.5" y="0.5" width="15" height="11" rx="1.5" stroke="white" strokeWidth="1.2"/>
          <path d="M1 1L8 7L15 1" stroke="white" strokeWidth="1.2"/>
        </svg>
        innovacion@crtic.cl
      </a>
      <div style={{
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 10, color: "rgba(255,255,255,0.4)",
        letterSpacing: 2, textTransform: "uppercase",
        marginTop: 24,
      }}>CRTIC © 2026</div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
