import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  useEffect(() => {
    // disables overflow on small screens and mobile devices
    const handleResize = () => {
      if (window.innerWidth < 480) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // applies the correct overflow setting when the component mounts
    handleResize();

    // checks and updates the overflow setting when the window is resized
    window.addEventListener("resize", handleResize);

    // resets overflow, prevents memory leaks, and ensures that the event listener does not continue to execute after the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  // centers the loader on all viewports
  return (
    <div className="loader">
      <BarLoader size={48} color={"#fff"} loading={true} />
    </div>
  );
};

export default Loader;
