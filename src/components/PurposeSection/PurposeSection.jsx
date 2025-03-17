import React from "react";
import "./PurposeSection.css";

function PurposeSection() {
  return (
    <section className="flex flex-wrap gap-5 justify-between self-center mt-44 max-w-full w-[1224px] max-md:mt-10">
      <article className="my-auto max-md:max-w-full">
        <h2 className="text-xl text-green-800 max-md:max-w-full">
          Nossa propósito
        </h2>
        <h3 className="mt-3 text-2xl max-md:max-w-full">O que nos move</h3>
        <p className="mt-3 text-base max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </article>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/8dd3854577ad8784d036eb90c22498a36e13245c1e9d5b791be507ddcb90175a?placeholderIfAbsent=true"
        alt="Purpose illustration"
        className="object-contain w-full aspect-[0.67]"
      />
    </section>
  );
}

export default PurposeSection;
