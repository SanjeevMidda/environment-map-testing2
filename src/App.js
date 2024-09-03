import "./index.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sky from "./assets/spruit_sunrise_4k.exr";

//environment map images
import px from "./assets/px.jpg";
import nx from "./assets/nx.jpg";
import py from "./assets/py.jpg";
import ny from "./assets/ny.jpg";
import pz from "./assets/pz.jpg";
import nz from "./assets/nz.jpg";

function App() {
  const model = useLoader(
    GLTFLoader,
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf"
  );
  return (
    <>
      <OrbitControls />
      <Environment
        // files={ny}
        preset="sunset"
        background
        // backgroundIntensity={0.3}
        backgroundBlurriness={1}
      />

      <primitive object={model.scene} />
    </>
  );
}

export default App;
