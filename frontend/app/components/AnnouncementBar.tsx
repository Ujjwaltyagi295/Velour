import { motion } from "framer-motion";

const AnnouncementBar = () => {
  const announcements = [
    "Free returns within 30 days",
    "Black Friday Sale →",
  ];

  return (
    <div className="w-full bg-neutral-900 text-white text-xs py-2 overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        style={{ width: "fit-content" }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-shrink-0 mx-8">
            {announcements.map((announcement, idx) => (
              <span key={idx} className="mx-12 flex-shrink-0">
                {announcement}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
