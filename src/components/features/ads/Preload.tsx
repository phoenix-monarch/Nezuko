/* eslint-disable @next/next/no-img-element */
import CircleButton from "@/components/shared/CircleButton";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import nookies from "nookies";

const PRELOAD_COOKIE = "kaguya_preload";

const Preload = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    let shownTime = Number(nookies.get(null)?.[PRELOAD_COOKIE]);

    shownTime = isNaN(shownTime) ? 0 : shownTime;

    if (shownTime >= 3) {
      return;
    }

    setIsShow(false);

    nookies.set(null, PRELOAD_COOKIE, String(shownTime + 1), {
      // 3 hours
      maxAge: 3 * 60 * 60,
      path: "/",
    });
  };

  useEffect(() => {
    let shownTime = Number(nookies.get(null)?.[PRELOAD_COOKIE]);

    if (shownTime >= 3) {
      setIsShow(false);
    }
  }, []);

  return isShow ? (
    <div className="fixed inset-0  z-[9999]">
      <div className="bg-black/80 absolute inset-0 z-40"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <a href="https://cwin999.com/?a=31913">
          <img
            src="https://dimg04.c-ctrip.com/images/0105m12000a52tpbe2E50.gif?proc=autoorient"
            alt="preload"
          />
        </a>

        <CircleButton
          onClick={handleClose}
          className="!bg-background-600 absolute -top-5 -right-5"
          secondary
          iconClassName="w-8 h-8"
          LeftIcon={AiOutlineClose}
        />
      </div>
    </div>
  ) : null;
};

export default Preload;
