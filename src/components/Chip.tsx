import { useState } from "react";

interface IProps {
    active?: boolean;
    label?: string;
}

export default function Chip(props: IProps) {
    const { active, label } = props;
    const [isActive, setIsActive] = useState(active);

    return (
        <span
            className={
                (isActive
                    ? "bg-blue text-dark hover:bg-dark-blue hover:text-blue"
                    : "bg-dark-blue hover:bg-blue hover:text-dark") +
                " rounded-3xl cursor-pointer p-2 px-4 w-auto font-light transition duration-700 ease-in-out"
            }
            onClick={() => setIsActive(p => !p)}
        >
            {label}
        </span>
    );
}
