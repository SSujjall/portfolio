import { useState } from "react";

interface PortfolioItemProps {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
    description: string;
}

function PortfolioItem({
    title,
    imgUrl,
    stack,
    link,
    description,
}: PortfolioItemProps) {
    const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

    return (
        <div
            className="duration-200 border dark:border-stone-500 
             drop-shadow-md dark:shadow-gray-600 dark:shadow-md rounded-lg overflow-hidden"
        >
            <a
                href={link}
                className="block relative w-full pb-[56.25%] overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)} // Set hover state
                onMouseLeave={() => setIsHovered(false)} // Reset hover state
            >
                <img
                    src={imgUrl}
                    alt="portfolio"
                    className={`absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-all duration-300 ease-in-out ${isHovered
                        ? "filter blur-sm transform scale-105"
                        : "filter-none transform scale-100"
                        }`}
                    loading="lazy"
                />

                {/* Show description on hover */}
                {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                        <p className="text-center">{description}</p>
                    </div>
                )}
            </a>

            <div className="w-full p-4 bg-white dark:bg-stone-900">
                <h3 className="text-lg md:text-xl mb-2 md-mb-3 font-semibold pointer-events-none">
                    {title}
                </h3>

                <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-cs md:text-sm">
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 pointer-events-none 
                            font-semibold border-2 border-stone-900 dark:border-stone-200 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default PortfolioItem;
