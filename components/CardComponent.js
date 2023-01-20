/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { savingArticlesData } from "../data/savingsArtData";
//button text has a default to read more or you can pass props
function CardComponent({
  imageSrc,
  altSrc,
  title,
  description,
  buttonText = "Read More",
  link,
  ariaLabelSrc,
}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded-lg bg-white shadow-lg">
        <a href="#!">
          <Image className="rounded-t-lg" src={imageSrc} alt={altSrc} height="368" width= "full"/>
        </a>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-medium text-gray-900">{title}</h3>
          <p className="mb-4 text-base text-gray-700">{description}</p>
          <a href={link} target="_blank" aria-label={ariaLabelSrc}>
            <button
              type="button"
              className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default CardComponent;
