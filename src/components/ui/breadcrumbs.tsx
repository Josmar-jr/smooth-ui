import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumbs = {
  groupName: string;
  backLink?: string;
  currentPage: string;
};

export function Breadcrumbs({ groupName, backLink, currentPage }: Breadcrumbs) {
  return (
    <div className="flex items-center gap-1">
      {backLink ? (
        <Link
          href={backLink}
          className="flex w-fit items-center gap-1 text-sm duration-200 hover:opacity-60 text-grey-200"
        >
          {groupName}
        </Link>
      ) : (
        <span className="flex w-fit items-center gap-1 text-sm text-grey-200">
          {groupName}
        </span>
      )}
      <ChevronRight size={12} />
      <span className="text-sm text-primary">{currentPage}</span>
    </div>
  );
}
