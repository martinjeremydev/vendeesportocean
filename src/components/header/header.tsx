import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderBar from "./header-bar";

export default function Header() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const headerItems = [
    {
      link: "ecole",
      label: "L'ÉCOLE",
      isActive: router.pathname === "/ecole",
    },
    {
      link: "stages",
      label: "LES STAGES",
      isActive: router.pathname === "/stages",
    },
    {
      link: "bouee-tractee",
      label: "BOUÉE TRACTÉE",
      isActive: router.pathname === "/bouee-tractee",
    },
    {
      link: "hebergement",
      label: "HÉBÉRGEMENT",
      isActive: router.pathname === "/hebergement",
    },
    {
      link: "contact",
      label: "CONTACT",
      isActive: router.pathname === "/contact",
    },
  ];
  return (
    <header>
      <div className="header-container">
        <div className="pt-6 ml-4 flex flex-row items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo vendée sports océan"
              className="cursor-pointer"
              width={200}
              height={59}
            />
          </Link>
          <HeaderBar headerItems={headerItems} isActive={active}></HeaderBar>
          <div className="block md:hidden lg:hidden z-20 ml-auto mr-14">
            <FontAwesomeIcon
              icon={!active ? faBars : faXmark}
              onClick={() => setActive(!active)}
              className="text-3xl text-white"
            />
          </div>
        </div>
        <div className="flex items-center align-center flex-col">
          <h1 className="text-3xl text-white mt-48">VENDÉE SPORTS OCEAN</h1>
          <span className="text-xl text-white mt-6">
            Votre école de kitesurf en Vendée
          </span>
        </div>
      </div>
    </header>
  );
}
