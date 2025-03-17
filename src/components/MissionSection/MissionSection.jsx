import React from "react";
import "./MissionSection.css";

function MissionSection() {
  return (
    <section className="flex flex-col justify-center p-2.5 mt-32 w-full max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex relative gap-10 justify-between items-start py-2.5 w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/071321876b01b2288a8820d02c12f1ecac23314cf3cfc39fd1ecb1f2ba460030?placeholderIfAbsent=true"
          alt="Mission illustration"
          className="object-contain absolute -bottom-2.5 z-0 shrink-0 aspect-[0.98] h-[406px] left-[334px] min-w-60 w-[397px]"
        />
        <article className="absolute -bottom-2.5 z-0 min-w-60 right-[342px] w-[448px] max-md:max-w-full">
          <h2 className="text-xl text-green-800 max-md:max-w-full">
            Nossa missão
          </h2>
          <h3 className="mt-3 text-2xl max-md:max-w-full">
            A TerraForte Plantar
          </h3>
          <p className="mt-3 text-base max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </section>
  );
}

export default MissionSection;
