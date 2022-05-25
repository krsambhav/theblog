import Link from "next/link";
import { ReactComponentElement, ReactElement } from "react";
import { GoHome } from "react-icons/go";

export default function NavButton({
  text,
  icon,
  onlyPC,
}: {
  text?: string;
  icon?: ReactElement;
  onlyPC?: boolean;
}) {
  return (
    <div
      className={`px-3 py-1 rounded-md font-thin hover:bg-blue-100 transition-all duration-200 flex flex-row items-center gap-2 cursor-pointer ${
        onlyPC && "hidden md:flex"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}
