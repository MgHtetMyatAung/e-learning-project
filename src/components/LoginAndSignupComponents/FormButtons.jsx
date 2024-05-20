import React from "react";
import { ArrowRight, Left } from "../../assets/icons";

export default function FormButtons() {
  return (
    <div className="flex laptop:justify-end mt-6 justify-center">
      <div className="flex gap-3">
        <button className="carousel-btn">
          <img src={Left} className=" w-4" />
        </button>
        <button className="carousel-btn">
          <img src={ArrowRight} className="w-4" />
        </button>
      </div>
    </div>
  );
}
