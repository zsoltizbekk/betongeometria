import React from "react";
import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

const MapDiv = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyB5SaUvuKnqXhmQ7bpftMMjTlA29pCn1YM",});
    const options = {mapId : "36f31000aff0e5c9"}
    if(!isLoaded) {
        return(<div>Loading...</div>)
    }

    function Map(){
        const center = useMemo(() => ({lat: 47.475847151436334, lng:19.071758626454884}), []);
        return <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" options={options}>
            {/* <Marker position={} /> */}
        </GoogleMap>
    }
    
    return (
        <div className="mapDiv">
            <Map />
        </div>
    )
}

export default MapDiv;