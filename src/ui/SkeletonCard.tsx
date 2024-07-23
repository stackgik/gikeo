export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-200 h-[270px] animate-pulse rounded-md bg-grey-200 dark:bg-dark-grey-200"></div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-200 h-4 animate-pulse bg-grey-200 dark:bg-dark-grey-200"></div>
        <div className="bg-gray-200 h-4 animate-pulse bg-grey-200 dark:bg-dark-grey-200"></div>
      </div>
    </div>
  );
}
