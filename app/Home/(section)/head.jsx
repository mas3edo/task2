import Link from "next/link";

export default function BreadcrumbBar() {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <div className="w-full rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm text-zinc-600 backdrop-blur">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/Home" className="hover:text-zinc-900">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-zinc-400">
            &gt;
          </li>
          <li>
            <Link href="/Home#category" className="hover:text-zinc-900">
              Our Category
            </Link>
          </li>
          <li aria-hidden="true" className="text-zinc-400">
            &gt;
          </li>
          <li className="text-zinc-500">Product Details</li>
        </ol>
      </div>
    </nav>
  );
}
