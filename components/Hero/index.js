import React from "react";
import * as THREE from 'three';
import Shirt from "./Box"

function index() {
  return (
    <div className="flex flex-rowcenter h-full">
      <div className="flex bg-red-500 flex-1 p-10">
        <span className="text-5xl font-bold font-VCR">Welcome to the best</span>
      </div>
      <div className="flex bg-green-500 flex-1 align-center justify-center items-center">
            <Shirt />
      </div>
    </div>
  );
}

export default index;
