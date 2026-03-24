import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
  description: string;
}

function PortfolioModal({
  isOpen,
  onClose,
  title,
  imgUrl,
  stack,
  link,
  description,
}: PortfolioModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Bottom sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50
                       bg-white dark:bg-stone-900
                       rounded-t-2xl overflow-hidden
                       max-h-[85vh] flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              {/* Image */}
              <div className="relative w-full pb-[52%] bg-stone-100 dark:bg-stone-800">
                <img
                  src={imgUrl}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h2
                  className="text-base font-bold tracking-tight
                               text-stone-900 dark:text-stone-100 mb-2"
                >
                  {title}
                </h2>

                <p
                  className="text-sm text-stone-500 dark:text-stone-400
                               leading-relaxed mb-4"
                >
                  {description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {stack.map((item, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-0.5 text-[11px] font-medium
                                 bg-stone-100 dark:bg-stone-800
                                 text-stone-600 dark:text-stone-300
                                 border border-stone-200 dark:border-stone-700
                                 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Link button */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2.5 rounded-xl
                             bg-stone-900 dark:bg-stone-100
                             text-white dark:text-stone-900
                             text-sm font-semibold
                             active:opacity-80 transition-opacity"
                  onClick={onClose}
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default PortfolioModal;
