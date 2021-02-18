import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"

const Map = ({ lat, lng }) => {
  const position = [lat, lng]
  let mapbox_url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}`

  const customMarker = icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  })

  return (
    <div className="z-0 h-screen relative">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={mapbox_url}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker
          icon={customMarker}
          riseOnHover={true}
          position={position}
          draggable={true}
          animate={true}
        >
          <Popup>Hey ! I live here</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
