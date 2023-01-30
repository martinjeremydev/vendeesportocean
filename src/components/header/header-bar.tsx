import Link from "next/link";
import HeaderItem from "./header-item";
import HeaderMobileItem from "./header-mobile-item";
import Image from "next/image";

export default function HeaderBar({ headerItems, isActive }) {
  if (!isActive) {
    return (
      <ul className="hidden md:flex lg:flex md:ml-8 lg:ml-36  flex-row items-center">
        {headerItems.map((headerItem) => (
          <HeaderItem key={headerItem.label} item={headerItem}></HeaderItem>
        ))}
      </ul>
    );
  } else {
    return (
      <div className="w-screen footer-height bg-teal-700 absolute top-0 left-0 pt-5 pl-5">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo vendée sports océan"
            className="cursor-pointer"
            width={200}
            height={59}
          />
        </Link>
        <div className="mt-8">
          {headerItems.map((headerItem) => (
            <HeaderMobileItem
              key={headerItem.label}
              item={headerItem}
            ></HeaderMobileItem>
          ))}
        </div>
      </div>
    );
  }
}
