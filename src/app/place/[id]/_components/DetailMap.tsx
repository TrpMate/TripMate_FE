import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type DetailMapProps = {
  mapy: string;
  mapx: string;
};

const DetailMap = ({ mapy, mapx }: DetailMapProps) => {
  const containerStyle = {
    width: "full",
    height: "500px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    language: "Ko",
    region: "KR",
    googleMapsApiKey: "AIzaSyDNxIjPFHNA_IliwxLmGfEsdonSE_f_MjI",
  });

  return (
    <div className="mt-[100px]">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: Number.parseFloat(mapy),
            lng: Number.parseFloat(mapx),
          }}
          zoom={15}
          options={{
            zoomControl: false,
            scrollwheel: true,
          }}
        >
          <Marker
            // icon={{
            //   url: "/images/logo1.png",
            //   scaledSize: new window.google.maps.Size(40, 55),
            // }}
            position={{
              lat: Number.parseFloat(mapy),
              lng: Number.parseFloat(mapx),
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default DetailMap;
