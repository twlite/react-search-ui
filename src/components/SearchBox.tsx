import SearchIcon from "./SearchIcon";

export default function SearchBox() {
    return (
        <>
            <input
                type="text"
                placeholder="Search hundreds of recipes"
                className="placeholder:text-blue p-5 w-full bg-darkest border-[1.5px] font-light border-gray rounded-md focus:outline-0 pl-14"
            />
            <SearchIcon />
        </>
    );
}
