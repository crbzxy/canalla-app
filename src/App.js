// App.js
import salon from "./img/salon.png";
import "./index.scss";

function App() {
  const googleMapsUrl = "https://maps.app.goo.gl/DeA1oANtoLBqwHZo9";

  return (
    <div className="App app"> {/* <- usa ambas clases */}
      <div className="hero">
        <img src={salon} alt="Sala de Belleza" className="app-logo" />

        <div className="info">
          <p className="app-title">
            💅 ¡Acompáñanos a estrenar nuestra <strong>Sala de Belleza</strong>!
          </p>

          <p className="app-address">
            📍 <span>Churubusc #9, Colonia Metropolitana, 3ra Sección, Ciudad Neza</span><br />
            <small>(Metro Guelatao + combi “Sor Juana/Bordo”) 🚌</small>
          </p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
