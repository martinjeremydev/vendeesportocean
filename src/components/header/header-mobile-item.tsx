import Link from "next/link";

export default function HeaderMobileItem({ item }) {
  return (
    <p
      className={
        item.isSelected || item.isActive
          ? "text-xl lg:text-lg px-5 py-2"
          : "text-xl lg:text-xl px-5 py-2 text-white"
      }
    >
      <Link href={item.link}>{item.label}</Link>
    </p>
  );
}
