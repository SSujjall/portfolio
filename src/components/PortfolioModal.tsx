import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const touchStartY = useRef(0);
  const scrollTop = useRef(0);

  // Robust scroll lock (fixes iOS Safari too)
  useEffect(() => {
    if (isOpen) {
      scrollTop.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollTop.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollTop.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Swipe-down-to-close on the drag handle
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientY - touchStartY.current;
    if (delta > 60) onClose();
  };

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
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            style={{ willChange: "transform" }}
          >
            {/* Drag handle — touch target for swipe-to-close */}
            <div
              className="flex justify-center pt-3 pb-2 flex-shrink-0 cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-10 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
            </div>

            {/* Scrollable content — overscroll-contain keeps page locked */}
            <div
              className="overflow-y-auto flex-1"
              style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative w-full pb-[52%] bg-stone-100 dark:bg-stone-800">
                <img
                  src={imgUrl}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
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
