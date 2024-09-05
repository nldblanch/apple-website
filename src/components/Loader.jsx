import { Html } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Loader = () => {
  THREE.DefaultLoadingManager.onStart = function (
    url,
    itemsLoaded,
    itemsTotal
  ) {
    console.log(
      "Started loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };

  THREE.DefaultLoadingManager.onLoad = function () {
    console.log("Loading Complete!");
  };

  THREE.DefaultLoadingManager.onProgress = function (
    url,
    itemsLoaded,
    itemsTotal
  ) {
    console.log(
      "Loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };

  THREE.DefaultLoadingManager.onError = function (url) {
    console.log("There was an error loading " + url);
  };
  return (
    <Html>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vh] rounded-full text-center">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;
