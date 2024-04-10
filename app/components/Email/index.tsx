import React from "react";
import SendEmailComponent from "./SendEmail";
import EmailHero from "./EmailHero";
import MaxWidth from "../MaxWidth";

export default function EmailComponent() {
  return (
    <section className="w-full flex justify-center">
      <MaxWidth>
        <div className="flex flex-col max-w-[40rem]  w-full  gap-4">
          <div className="flex justify-center w-full">
            <EmailHero />
          </div>
          <div className="flex justify-center w-full">
            <SendEmailComponent />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
