import React from "react";
import SendEmailComponent from "./SendEmail";
import EmailHero from "./EmailHero";

export default function EmailComponent() {
  return (
    <section className="w-full flex justify-center flex-col gap-8 pt-[4rem]">
      <div className="flex justify-center">
        <EmailHero />
      </div>
      <div className="flex justify-center">
        <SendEmailComponent />
      </div>
    </section>
  );
}
