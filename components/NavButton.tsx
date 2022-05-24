import { ReactComponentElement, ReactElement } from 'react';
import {GoHome} from 'react-icons/go';

export default function NavButton({ text, icon }: { text: string, icon?:ReactElement }) {
  return (
    <div className="px-3 py-1 rounded-md font-thin hover:bg-blue-100 transition-all duration-200 flex flex-row items-center gap-2 cursor-pointer">
      {icon}
      {text}
    </div>
  );
}
