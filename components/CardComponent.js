import React from "react";
import { savingArticlesData } from "../data/savingsArtData";
//button text has a default to read more or you can pass props
const clickHandle = () => {
  document.location.href = "https://stackoverflow.com/";
};
function CardComponent({
  imageSrc,
  title,
  description,
  buttonText = "Read More",
}) {
  return (
    <div class="flex justify-center">
      <div class="max-w-sm rounded-lg bg-white shadow-lg">
        <a href="#!">
          <img class="rounded-t-lg" src={imageSrc} alt="" />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium text-gray-900">{title}</h5>
          <p class="mb-4 text-base text-gray-700">{description}</p>
          <button
            type="button"
            class=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            onClick={clickHandle}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardComponent;
