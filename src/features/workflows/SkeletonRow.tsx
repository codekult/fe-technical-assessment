export function SkeletonRow() {
    return (
        <div className="grid grid-cols-12 items-center p-4 animate-pulse">
            <div className="col-span-1">
                <div className="h-4 w-12 bg-black-alpha-8 rounded" />
            </div>
            <div className="col-span-6">
                <div className="h-4 w-48 bg-black-alpha-8 rounded" />
            </div>
            <div className="col-span-2">
                <div className="h-8 w-20 bg-black-alpha-8 rounded-full" />
            </div>
            <div className="col-span-2">
                <div className="h-4 w-24 bg-black-alpha-8 rounded" />
            </div>
            <div className="col-span-1 flex justify-end gap-2">
                <div className="h-6 w-6 bg-black-alpha-8 rounded" />
                <div className="h-6 w-6 bg-black-alpha-8 rounded" />
            </div>
        </div>
    );
}
