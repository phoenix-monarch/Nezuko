import Script from "next/script";
import nookies from "nookies";
import { useEffect } from "react";

const POPUNDER_COOKIE = "kaguya_popunder";

const USER_COOKIE = "sb-access-token";

const Popunder = () => {
  useEffect(() => {
    window.addEventListener("click", () => {
      const cookies = nookies.get(null, "");

      if (cookies[USER_COOKIE]) {
        return;
      }

      if (!cookies[POPUNDER_COOKIE]) {
        const pop = window.open(
          "https://expressalike.com/s0dzhz43?key=00598fec8df5e116c292f9f8bc3a7ae9",
          "kaguya_popunder"
        );

        pop.blur();

        window.focus();

        nookies.set(null, POPUNDER_COOKIE, "1", {
          // 3 hours
          maxAge: 3 * 60 * 60,
          path: "/",
        });
      }
    });
  }, []);

  return (
    <Script
      data-cfasync="false"
      src="//dnks065sb0ww6.cloudfront.net/?ssknd=974102"
    ></Script>
  );
};

export default Popunder;