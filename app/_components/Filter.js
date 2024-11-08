"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="border border-primary-800 flex">
      <Button filter="all" activeFilter={activeFilter}>
        All Cabins
      </Button>
      <Button filter="small" activeFilter={activeFilter}>
        1&mdash;3 guests
      </Button>
      <Button filter="medium" activeFilter={activeFilter}>
        4&mdash;7 guests
      </Button>
      <Button filter="large" activeFilter={activeFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export default Filter;

function Button({ children, filter, activeFilter }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter() {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`} onClick={handleFilter}>
      {children}
    </button>
  );
}
