import { useCallback } from "react";
import PropTypes from "prop-types";

const ServicesCardsColumns = ({
  className = "",
  group1000015039,
  iTStrategyAndArchitecture,
  onServicesCardsButtonsClick,
  isDesktop

}) => {
  const onServicesCardsButtonsClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesDescriptionRows']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`border-white border-[0.4px] border-solid flex flex-row items-center justify-start py-2 pl-[13px] pr-3 text-left text-4xs-6 text-white font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
          <img
            className={`${isDesktop ? "w-[159.2px]":"w-100"} h-[189.2px] relative object-cover`}
            loading="lazy"
            alt=""
            src={group1000015039}
          />
          <div className="relative font-semibold">
            {iTStrategyAndArchitecture}
          </div>
        </div>
        <div
          className="w-[36.8px] flex flex-row items-center justify-start gap-[9px] cursor-pointer text-center text-darkslategray"
          onClick={onServicesCardsButtonsClick}
        >
          <div className="flex-1 relative font-semibold inline-block min-w-[33px]">
            More
          </div>
          <img
            className="h-[6.5px] w-[4.8px] relative object-contain"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

ServicesCardsColumns.propTypes = {
  className: PropTypes.string,
  group1000015039: PropTypes.string,
  iTStrategyAndArchitecture: PropTypes.string,

  /** Action props */
  onServicesCardsButtonsClick: PropTypes.func,
};

export default ServicesCardsColumns;
