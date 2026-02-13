import Link from "next/link";

export default function BreadcrumbBar() {
  return (
    <div
      aria-label=" Breadcrumb"
      className=" container flex max-w-[1153px] justify-center  md:mx-auto  mt-4 mb-5 md:mb-10 "
    >
      <div className=" w-full rounded-[12px] md:rounded-2xl border border-zinc-200 bg-white/90 px-2 py-4 md:py-2 px-4   mx-auto text-sm text-zinc-600 backdrop-blur  ">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/Home" className="text-[#020202] text-[14px]">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#020202] text-[14px]">
            &gt;
          </li>
          <li>
            <Link href="/Home#category" className="text-[#020202] text-[14px]">
              Our Category
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#020202] text-[14px]">
            &gt;
          </li>
          <li className="text-[#8A8A8A] text-[14px]">Product Details</li>
        </ol>
      </div>
    </div>
  );
}
