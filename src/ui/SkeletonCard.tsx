export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-200 h-[35rem] animate-pulse rounded-md dark:bg-dark-grey-200"></div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-200 h-4 animate-pulse dark:bg-dark-grey-200"></div>
        <div className="bg-gray-200 h-4 animate-pulse dark:bg-dark-grey-200"></div>
      </div>
    </div>
  );
}
