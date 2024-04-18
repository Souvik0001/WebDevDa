import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants/constants";

const MapComponent = ({ restaurants }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading Maps...";
  
  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
        zoom={13}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={{ lat: restaurant.lat, lng: restaurant.lng }}
            title={restaurant.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;