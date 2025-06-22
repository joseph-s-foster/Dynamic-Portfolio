import { useEffect } from "react";

export default function useClickOutside(refs = [], onClickOutside) {
  useEffect(() => {
    function handleClick(event) {
      const clickedOutside = refs.every(ref => 
        ref.current && !ref.current.contains(event.target)
      );

      if (clickedOutside) {
        onClickOutside?.();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [refs, onClickOutside]);
}
