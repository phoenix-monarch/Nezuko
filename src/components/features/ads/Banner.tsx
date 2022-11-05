/* eslint-disable @next/next/no-img-element */
import CircleButton from "@/components/shared/CircleButton";
import classNames from "classnames";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Banner = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <div
      className={classNames(
        "z-[9999] banner-ads fixed bottom-4 left-1/2 -translate-x-1/2",
        !isShow && "hidden"
      )}
    >
      <a href="https://cwin999.com/?a=31913">
        <img
          src="https://dimg04.c-ctrip.com/images/0103c12000a55gui38AEB.gif?proc=autoorient"
          alt="banner"
          className="min-w-[350px] min-h-[100px]"
        />
      </a>

      <div className="hidden hidden-banner"></div>

      <CircleButton
        onClick={handleClose}
        className="!bg-background-600 absolute -top-5 -right-5"
        secondary
        iconClassName="w-8 h-8"
        LeftIcon={AiOutlineClose}
      />
    </div>
  );
};

export default React.memo(Banner);
