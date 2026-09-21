type FilterProps = {
    filter: string;
    onFilterChange: (filter: string) => void;
};

export default function Filter({
    filter,
    onFilterChange
}: FilterProps) {
    return (
        <div className="flex flex-row items-center gap-2">
            <p>Sort By:</p>
            <select
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
            >
                <option value="all">Name</option>
                <option value="favorites">Last Played</option>
                <option value="recent">Newest</option>
            </select>
        </div>
    );
}