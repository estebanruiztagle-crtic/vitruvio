// CRTIC Design System — Content Section Component
// Covers: alternating dark/white/orange section blocks

const Section = ({ variant = "white", number, eyebrow, headline, headlineItalic, body, children }) => {
  const themes = {
    white:  { bg: "#FFFFFF", fg: "#1C1F23", sub: "#7D7D7D", accent: "#FE440D", border: "#E8E8E8" },
    dark:   { bg: "#1C1F23", fg: "#FFFFFF", sub: "#D8D6D8", accent: "#FE440D", border: "rgba(255,255,255,0.06)" },
    black:  { bg: "#000000", fg: "#FFFFFF", sub: "#D8D6D8", accent: "#FE440D", border: "rgba(255,255,255,0.04)" },
    orange: { bg: "#FE440D", fg: "#FFFFFF", sub: "rgba(255,255,255,0.75)", accent: "#1C1F23", border: "rgba(0,0,0,0.08)" },
  };
  const t = themes[variant] || themes.white;

  return (
    <section style={{
      background: t.bg,
      padding: "64px",
      borderBottom: `1px solid ${t.border}`,
    }}>
      {/* Diamond rule */}
      {number && (
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 72, color: t.accent, lineHeight: 1, marginBottom: 4,
        }}>{String(number).padStart(2, "0")}</div>
      )}
      {eyebrow && (
        <div style={{
          fontFamily: "'Barlow Condensed', Arial, sans-serif",
          fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
          color: t.sub, marginBottom: number ? 4 : 24,
        }}>{eyebrow}</div>
      )}
      {headline && (
        <h2 style={{ margin: "0 0 8px 0", lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(32px,4vw,56px)",
            color: t.fg,
            textTransform: "uppercase",
            letterSpacing: -1,
            display: "block",
          }}>{headline}</span>
          {headlineItalic && (
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(28px,3.5vw,48px)",
              color: t.accent,
              display: "block",
              letterSpacing: 0,
            }}>{headlineItalic}</span>
          )}
        </h2>
      )}
      {body && (
        <p style={{
          fontFamily: "'Barlow Condensed', Arial, sans-serif",
          fontSize: 15, lineHeight: 1.8, color: t.sub,
          maxWidth: 640, marginTop: 16,
        }}>{body}</p>
      )}
      {children}
    </section>
  );
};

// Technology grid card
const TechCard = ({ number, title, tags = [] }) => (
  <div style={{
    background: "#1C1F23",
    borderRadius: 6, padding: "24px",
    display: "flex", flexDirection: "column", gap: 8,
  }}>
    <div style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 40, color: "#FE440D", lineHeight: 1,
    }}>{String(number).padStart(2, "0")}</div>
    <div style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 22, color: "#FFFFFF",
      textTransform: "uppercase", letterSpacing: 0.5, lineHeight: 1.1,
    }}>{title}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
      {tags.map(tag => (
        <span key={tag} style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700, fontSize: 10,
          textTransform: "uppercase", letterSpacing: 1,
          background: "rgba(254,68,13,0.15)", color: "#FE440D",
          padding: "4px 10px", borderRadius: 100,
        }}>{tag}</span>
      ))}
    </div>
  </div>
);

// Quote block
const QuoteBlock = ({ quote, author }) => (
  <div style={{
    borderLeft: "3px solid #FE440D",
    paddingLeft: 24,
    margin: "32px 0",
    maxWidth: 600,
  }}>
    <p style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontStyle: "italic",
      fontSize: 20, lineHeight: 1.7,
      color: "#FFFFFF",
    }}>"{quote}"</p>
    {author && (
      <div style={{
        fontFamily: "'Barlow Condensed', Arial, sans-serif",
        fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
        color: "#7D7D7D", marginTop: 12,
      }}>{author}</div>
    )}
  </div>
);

Object.assign(window, { Section, TechCard, QuoteBlock });
