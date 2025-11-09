import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Search, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menu = [
    { name: "Clothing" },
    { name: "Bags" },
    { name: "Sale" },
    { name: "Lookbook" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setHidden(window.scrollY > window.innerHeight / 2);
    };

    // ✅ Call immediately to set correct state on page load / refresh
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "bg-transparent py-4"
      }`}
      initial={{ y: 0 }}
      animate={{ y: hidden ? -500 : 0, pointerEvents: hidden ? "none" : "auto" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-row items-center justify-between w-full px-4 md:px-8 text-white">
        <div className="flex items-center gap-1 md:gap-8">
          <button className="p-2 hover:opacity-80 transition-opacity">
            <Menu size={24} />
          </button>

          <button className="md:hidden p-2 hover:opacity-80 transition-opacity">
            <Search size={20} />
          </button>

          <div className="hidden lg:flex flex-row gap-6 xl:gap-8">
            {menu.map((m) => (
              <button
                key={m.name}
                className="text-sm font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          animate={{
            scale: scrolled ? 0.8 : 1,
            y: scrolled ? 5 : 0,
          }}
          transition={{
            duration: 0.0,
            ease: "easeInOut",
          }}
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
            scrolled ? "top-1/2 -translate-y-1/2" : "top-[20vh] md:top-[15vh]"
          }`}
        >
          <motion.h1
            className={`title5 tracking-[0.2em] transition-all duration-300 ${
              scrolled
                ? "text-3xl md:text-3xl"
                : "text-5xl sm:text-6xl md:text-7xl lg:text-[10rem]"
            }`}
          >
            VELOUR
          </motion.h1>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 md:gap-6">
          <button className="p-2 hover:opacity-80 transition-opacity">
            <Search size={20} />
          </button>
          <button className="p-2 hover:opacity-80 transition-opacity">
            <User size={20} />
          </button>
          <button className="p-2 hover:opacity-80 transition-opacity">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile icons */}
        <div className="flex md:hidden items-center gap-1">
          <button className="p-2 hover:opacity-80 transition-opacity">
            <User size={20} />
          </button>
          <button className="p-2 hover:opacity-80 transition-opacity">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
