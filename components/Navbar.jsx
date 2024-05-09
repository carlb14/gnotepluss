import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 py-3">
      <Link className="text-base text-neutral-700 font-regular" href={"/"}>
        GNotePlus.
      </Link>
      <Link className="p-3 text-sm bg-gray-200 rounded-full shadow-md text-neutral-700 font-regular" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
