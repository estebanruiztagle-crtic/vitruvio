// CRTIC Design System — Hero Section Component

const Hero = ({ variant = "orange" }) => {
  const variants = {
    orange: { bg: "#FE440D", headColor: "#fff", subColor: "rgba(255,255,255,0.8)", accentColor: "#1C1F23", bgText: "rgba(255,255,255,0.06)" },
    dark:   { bg: "#1C1F23", headColor: "#fff", subColor: "#D8D6D8", accentColor: "#FE440D", bgText: "rgba(255,255,255,0.04)" },
    black:  { bg: "#000000", headColor: "#fff", subColor: "#7D7D7D", accentColor: "#FE440D", bgText: "rgba(255,255,255,0.03)" },
  };
  const v = variants[variant] || variants.orange;

  return (
    <section style={{
      background: v.bg,
      padding: "72px 64px 80px",
      position: "relative",
      overflow: "hidden",
      minHeight: 420,
    }}>
      {/* Background watermark text */}
      <div style={{
        position: "absolute", right: -20, bottom: -40,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(120px,15vw,220px)",
        fontWeight: 400,
        color: v.bgText,
        textTransform: "uppercase",
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}>CRTIC</div>

      {/* Eyebrow */}
      <div style={{
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
        color: variant === "orange" ? "rgba(255,255,255,0.55)" : "#7D7D7D",
        marginBottom: 20,
      }}>Centro para la Revolución Tecnológica en Industrias Creativas</div>

      {/* Main headline — Bebas + Playfair mix */}
      <h1 style={{ margin: 0, lineHeight: 0.9 }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(64px,9vw,120px)",
          color: v.headColor,
          textTransform: "uppercase",
          letterSpacing: -2,
          display: "block",
        }}>ART THINKING</span>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(56px,8vw,108px)",
          color: v.accentColor,
          display: "block",
          letterSpacing: 0,
          lineHeight: 1,
        }}>+ tecnología</span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(64px,9vw,120px)",
          color: v.headColor,
          textTransform: "uppercase",
          letterSpacing: -2,
          display: "block",
        }}>CREATIVA</span>
      </h1>

      {/* Subtext */}
      <p style={{
        marginTop: 32,
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 15,
        color: v.subColor,
        maxWidth: 480,
        lineHeight: 1.75,
        letterSpacing: "0.02em",
      }}>
        [NO SOMOS UNA EMPRESA BUSCANDO SU PRÓXIMO ÉXITO DE VENTAS]<br/>
        Como fundación sin fines de lucro, construimos infraestructura tecnológica para las industrias creativas de Chile.
      </p>

      {/* CTA row */}
      <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
        <a href="#" style={{
          fontFamily: "'Barlow Condensed', Arial, sans-serif",
          fontWeight: 700, fontSize: 13,
          textTransform: "uppercase", letterSpacing: 1.5,
          background: variant === "orange" ? "#1C1F23" : "#FE440D",
          color: "#fff",
          padding: "13px 28px", borderRadius: 100,
          textDecoration: "none",
        }}>EXPLORAR HUB →</a>
        <a href="#" style={{
          fontFamily: "'Barlow Condensed', Arial, sans-serif",
          fontWeight: 700, fontSize: 13,
          textTransform: "uppercase", letterSpacing: 1.5,
          background: "transparent",
          color: v.headColor,
          border: `2px solid ${variant === "orange" ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"}`,
          padding: "11px 26px", borderRadius: 100,
          textDecoration: "none",
        }}>RESIDENCIAS</a>
      </div>

      {/* Motif bottom-left */}
      <img
        src="../../assets/motif_semicircles_right_black.png"
        style={{
          position: "absolute", bottom: 0, left: 64,
          height: 64, opacity: variant === "orange" ? 0.3 : 0.15,
          pointerEvents: "none",
        }}
        alt=""
      />
    </section>
  );
};

Object.assign(window, { Hero });
