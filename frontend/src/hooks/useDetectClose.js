import { useEffect, useState, useRef } from "react";

const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
        console.log("check1");
      if (ref.current !== null && !ref.current.contains(e.target)) {
        console.log("check2");
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      console.log("check3");
      window.addEventListener("click", onClick);
    }

    return () => {
        console.log("check4");
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
