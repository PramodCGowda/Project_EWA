import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Container } from "react-bootstrap";
import Marker from "../components/marker";
import Layout from "../components/layout";

const MapWindow = () => {
  const [map, setMap] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    handleShowMap();
  };

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (map) {
      console.log("Map is ready:", map);
    }
  }, [map]);

  const defaultCenter = { lat: 41.881832, lng: -87.623177 };
  const defaultZoom = 10;

  const places = [
    { zipcode: "60302", lat: 41.89437, lng: -87.79011 },
    { zipcode: "60304", lat: 41.87247, lng: -87.78934 },
    { zipcode: "60402", lat: 41.82867, lng: -87.78985 },
    { zipcode: "60456", lat: 41.73114, lng: -87.73128 },
    { zipcode: "60499", lat: 41.7516, lng: -87.7305 },
    { zipcode: "60604", lat: 41.87712, lng: -87.62473 },
    { zipcode: "60608", lat: 41.84884, lng: -87.67125 },
    { zipcode: "60609", lat: 41.81238, lng: -87.65533 },
    { zipcode: "60612", lat: 41.88115, lng: -87.68652 },
    { zipcode: "60613", lat: 41.95202, lng: -87.65598 },
    { zipcode: "60614", lat: 41.92207, lng: -87.64932 },
    { zipcode: "60615", lat: 41.8022, lng: -87.60058 },
  ];

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <Layout>
      <div>
        <div className="mt-4" style={{ textAlign: "center" }}>
          <Button
            variant="dark"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            style={{}}
          >
            {isLoading ? "Loading…" : "Click to get the repairmates near you"}
          </Button>
        </div>
        {showMap ? (
          <div style={{ height: "600px", width: "100%", marginTop: "20px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC-n_YHaxbxsghNiqSMKoLxMvdEDVpm6kg",
              }}
              defaultCenter={defaultCenter}
              defaultZoom={defaultZoom}
              onGoogleApiLoaded={({ map }) => setMap(map)}
            >
              {places.map((place) => (
                <Marker
                  key={place.zipcode}
                  lat={place.lat}
                  lng={place.lng}
                  text={place.zipcode}
                />
              ))}
            </GoogleMapReact>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: " 100px 0px" }}>
            <p className="text-secondary">Click to get the Providers</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MapWindow;
