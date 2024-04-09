import React from "react";
import SendEmailComponent from "./SendEmail";
import EmailHero from "./EmailHero";

export default function EmailComponent() {
  return (
    <section className="w-full flex justify-center gap-8 pt-[4rem]">
      <div className="flex flex-col max-w-[40rem] w-full">
        <div className="flex justify-center w-full">
          <EmailHero />
        </div>
        <div className="flex justify-center w-full">
          <SendEmailComponent />
        </div>
      </div>
    </section>
  );
}
