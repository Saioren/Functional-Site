import React from "react";
import { linkSettings } from "@/lib/data";
import Link from "next/link";

type SettingsModalProps = {
  activeSetting: string;
  setActiveSetting: React.Dispatch<React.SetStateAction<string>>;
};

export default function SettingsModal({ activeSetting }: SettingsModalProps) {
  console.log(activeSetting);
  return (
    <div className="rounded-md flex flex-col gap-3 -z-10 mr-10">
      {activeSetting === "Links" &&
        linkSettings.map((link, index) => (
          <Link key={index} href={link.href}>
            <h3>{link.name}</h3>
          </Link>
        ))}
      {activeSetting === "About" && (
        <div>
          <p>
            I'm a 22 year old developer who favors Typescript & Next.js,
            React.js, SCSS, Node.js and much more. I want lightning fast
            connectivity, ultra-safe data security, and fresh, crisp animations.
            Hence why I use the following!
          </p>
        </div>
      )}
    </div>
  );
}
