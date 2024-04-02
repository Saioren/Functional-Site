import React from "react";
import EmailComponent from "../components/Email";
import { Toaster } from "react-hot-toast";

export default function Email() {
  return (
    <div className="py-[2rem]">
      <Toaster position="top-center" />
      <EmailComponent />
    </div>
  );
}
