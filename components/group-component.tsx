import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4849px] left-[155px] shadow-[114px_75px_62px_rgba(19,_95,_132,_0.13)] rounded-lg bg-mediumvioletred-400 w-[380.6px] h-[357.3px] text-left text-lg text-neutral-10 font-poppins ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-lg w-full h-full hidden"
        alt=""
        src="/rectangle-2.svg"
      />
      <img
        className="absolute top-[38.6px] left-[42.8px] w-[20.4px] h-[21.4px] overflow-hidden"
        alt=""
        src="/07-iconquote-large-1.svg"
      />
      <img
        className="absolute top-[199.7px] left-[317.6px] w-[21.4px] h-[21.4px] overflow-hidden"
        alt=""
        src="/07-iconquote-large-reverse.svg"
      />
      <div className="absolute top-[259.9px] left-[27.3px] w-[340.7px] h-[58.3px]">
        <div className="absolute h-[calc(100%_-_6.8px)] top-[3.9px] bottom-[2.9px] left-[75.7px] w-[265px]">
          <div className="absolute top-[36.9px] left-[0px] w-[207.7px] h-[11.7px] overflow-hidden hidden" />
          <div className="absolute top-[4.8px] left-[0px] w-[265px] h-[19.4px] overflow-hidden hidden" />
          <b className="absolute top-[0px] left-[0px] leading-[140%] font-bold inline-block w-[176.6px] h-[24.3px]">
            Aaron Boby
          </b>
          <div className="absolute top-[32px] left-[0px] text-sm leading-[140%] text-lightblue inline-block w-[194.6px] h-[19.4px]">
            2 November 2021
          </div>
        </div>
        <img
          className="absolute h-full w-[17.11%] top-[0px] right-[82.89%] bottom-[0px] left-[0%] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/contentroundgrayicon.svg"
        />
      </div>
      <div className="absolute top-[71.6px] left-[42.8px] text-xl leading-[150%] font-heebo inline-block w-[295.1px] h-[116.5px] mq450:text-base mq450:leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </div>
  );
};

export default GroupComponent;
