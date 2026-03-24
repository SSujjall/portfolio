import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioModal from "./PortfolioModal";

interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
  description: string;
  index: number;
}

function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  description,
  index,
}: PortfolioItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        className="flex flex-col rounded-2xl overflow-hidden
                   border border-stone-200 dark:border-stone-700/60
                   bg-white dark:bg-stone-900
                   shadow-sm hover:shadow-md dark:shadow-none
                   transition-shadow duration-200"
      >
        {/* Thumbnail */}
        <a
          href={link}
          className="block relative w-full pb-[56.25%] overflow-hidden bg-stone-100 dark:bg-stone-800 border-b border-stone-100 dark:border-stone-700"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleImageClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-stone-200 dark:bg-stone-700" />
          )}
          <img
            src={imgUrl}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover
                        transition-all duration-500 ease-in-out
                        ${isLoaded ? "opacity-100" : "opacity-0"}
                        ${isHovered && window.innerWidth >= 768 ? "blur-sm scale-105" : "scale-100"}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />

          {/* Hover overlay — desktop only */}
          {isHovered && isLoaded && window.innerWidth >= 768 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white p-4">
              <p className="text-xs text-center leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </a>

        {/* Content */}
        <div className="p-3 md:p-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            onClick={handleImageClick}
          >
            <h3
              className="text-xs md:text-sm font-semibold tracking-tight
                         text-stone-900 dark:text-stone-100
                         group-hover:text-stone-500 dark:group-hover:text-stone-400
                         transition-colors duration-150 line-clamp-1"
            >
              {title}
            </h3>
          </a>

          {/* Hidden on mobile — visible md+ */}
          {/* <p
            className="hidden md:block text-xs text-stone-500 dark:text-stone-400
                        leading-relaxed line-clamp-2 mt-1.5 mb-2.5"
          >
            {description}
          </p> */}

          <div
            className="hidden md:flex flex-wrap gap-1 pt-2
                        border-t border-stone-100 dark:border-stone-800"
          >
            {stack.map((item, i) => (
              <span
                key={i}
                className="inline-block px-1.5 py-0.5
                           text-[11px] font-medium
                           bg-stone-100 dark:bg-stone-800
                           text-stone-600 dark:text-stone-300
                           border border-stone-200 dark:border-stone-700
                           rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        imgUrl={imgUrl}
        stack={stack}
        link={link}
        description={description}
      />
    </>
    );
}

export default PortfolioItem;
