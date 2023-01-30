import Link from "next/link";

export default function HeaderItem({ item }) {
  return (
    <li
      className={
        item.isSelected || item.isActive
          ? "md:text-sm lg:text-md px-3 active"
          : "md:text-sm lg:text-md px-3 text-white"
      }
    >
      <Link href={item.link}>{item.label}</Link>
    </li>
  );
}
