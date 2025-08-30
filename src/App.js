import salon from "./img/salon.png";

function App() {
  const googleMapsUrl = "https://maps.app.goo.gl/DeA1oANtoLBqwHZo9";

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <img 
        src={salon} 
        alt="Sala de Belleza" 
        style={{ maxWidth: "250px", borderRadius: "12px", marginBottom: "20px" }} 
      />

      <p style={{ fontSize: "18px", margin: "10px 0" }}>
        💅 ¡Acompáñanos a estrenar nuestra <strong>Sala de Belleza</strong>!  
      </p>

      <p style={{ fontSize: "16px", margin: "10px 0" }}>
        📍 Churubusc #9, Colonia Metropolitana, 3ra Sección, Ciudad Neza  
        (Metro Guelatao + combi “Sor Juana/Bordo”) 🚌
      </p>

      <a 
        href={googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#ff4081",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "15px",
        }}
      >
        Ver en Google Maps
      </a>
    </div>
  );
}

export default App;
