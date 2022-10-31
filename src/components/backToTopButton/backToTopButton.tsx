import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 100
        ? setBackToTopButton(true)
        : setBackToTopButton(false)
    );
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  return (
    <>
      {backToTopButton && (
        <button
          style={{
            position: `fixed`,
            bottom: `4vh`,
            right: `4vw`,
            height: `5vh`,
            width: `40px`,
            fontSize: `5vh`,
            zIndex: `10`,
            overflow: `hidden`,
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </>
  );
};
