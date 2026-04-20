// CRTIC Design System — Header Component
// Usage: <Header logo="white|orange|black" theme="orange|dark|white" />

const Header = ({ theme = "dark", currentPage = "home" }) => {
  const themes = {
    orange: { bg: "#FE440D", text: "#FFFFFF", border: "rgba(255,255,255,0.15)", logo: "white" },
    dark:   { bg: "#1C1F23", text: "#FFFFFF", border: "rgba(255,255,255,0.08)", logo: "white" },
    white:  { bg: "#FFFFFF",  text: "#1C1F23", border: "#E8E8E8",              logo: "black" },
  };
  const t = themes[theme] || themes.dark;
  const nav = ["Hub", "Residencias", "Tecnologías", "Contacto"];

  return (
    <header style={{
      background: t.bg,
      borderBottom: `1px solid ${t.border}`,
      padding: "0 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      position: "relative",
      zIndex: 10,
    }}>
      <img
        src={`../../assets/logo_${t.logo}.png`}
        alt="CRTIC"
        style={{ height: 32 }}
      />
      <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {nav.map(item => (
          <a key={item} href="#" style={{
            fontFamily: "'Barlow Condensed', Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: item.toLowerCase() === currentPage ? "#FE440D" : t.text,
            textDecoration: "none",
            opacity: item.toLowerCase() === currentPage ? 1 : 0.8,
            transition: "opacity 150ms, color 150ms",
          }}>{item}</a>
        ))}
        <a href="#" style={{
          fontFamily: "'Barlow Condensed', Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: theme === "orange" ? "#1C1F23" : "#FE440D",
          background: theme === "orange" ? "rgba(0,0,0,0.12)" : "#FE440D",
          padding: "8px 18px",
          borderRadius: 100,
          textDecoration: "none",
        }}>CONTACTO →</a>
      </nav>
    </header>
  );
};

Object.assign(window, { Header });
