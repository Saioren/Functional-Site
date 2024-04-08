import React from "react";
import EmailComponent from "../components/Email";
import { Toaster } from "react-hot-toast";

export default function Email() {
  return (
    <div className="flex w-full">
      <Toaster position="top-center" />
      <EmailComponent />
    </div>
  );
}
