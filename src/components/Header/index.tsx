import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menu = [
    { menu: "Sobre", to: "#about" },
    { menu: "Galeria", to: "#galery" },
    { menu: "Design", to: "#design" },
    { menu: "Contatos", to: "#footer" },
  ];
  return (
    <>
      <header
        id="header"
        className="flex justify-around w-screen h-16 
        border-b-[1px] border-b-indigo-500 shadow-sm shadow-indigo-400"
      >
        <div className="w-1/6 flex items-center justify-center">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Marcelo Henrique - Portfolio"
          />
        </div>
        <div className="w-3/5">
          <ul className="list-none h-full flex justify-evenly items-center text-white cursor-pointer font-semibold">
            {menu.map((m) => (
              <li
                key={m.menu}
                className="hover:text-purple-600 transition-colors"
              >
                <Link href={m.to}>{m.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
