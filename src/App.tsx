import Chip from "./components/Chip";
import SearchBox from "./components/SearchBox";

const ChipList = [
    ["Dinner", "Quick dinners", "Reasonably priced", "kid friendly", "Pasta"],
    ["Get ingredients", "Weekday", "Fish", "Vegetarian", "Supper", "Salads"],
    ["Chicken", "Grill", "Taco", "Pizza", "Seafood", "Beef", "Dessert"]
];

export default function App() {
    return (
        <main className="bg-darkest h-screen grid place-items-center">
            <div className="bg-dark-blue rounded-xl p-5 w-[43%]">
                <div className="bg-dark text-blue rounded-xl p-10 w-full">
                    <p className="text-sm">All recipes/Vegetarian</p>
                    <p className="text-5xl mt-3 mb-5">All recipes/Vegetarian</p>

                    <div className="w-full mt-5 space-y-3 mb-7">
                        <SearchBox />
                        <div className="space-y-2">
                            {ChipList.map((m, i) => (
                                <div className="flex space-x-4">
                                    {m.map((n, j) => (
                                        <Chip active={i === 0 && j === 2} label={n} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="font-light text-center">
                        Inspired by{" "}
                        <a
                            href="https://uidesigndaily.com/posts/figma-search-tags-dark-mode-day-1487"
                            className="mt-5 font-medium hover:underline"
                            target="_blank"
                        >
                            uidesigndaily.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
