import { useMemo } from "react";

const GroupComponent = ({
  rectangleGroup,
  enterprise,
  architecture,
  design,
  propWidth,
  propPadding,
}) => {
  const solutionDesignsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className="w-[310px] shrink-0 flex flex-col items-center justify-start pt-[50px] pb-11 pr-[41px] pl-[42px] box-border relative gap-[66px] mq450:pt-8 mq450:pb-[29px] mq450:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangleGroup}
      />
            <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-4xl mq750:text-11xl">
        <p className="m-0">{enterprise}</p>
        <p className="m-0">{architecture}</p>
        <p className="m-0">{design}</p>
      </h2>
      <div
        className="w-[250px] flex flex-row items-start justify-end py-0 px-5 box-border text-13xl"
        style={solutionDesignsStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[0px_20px]">
          <h1 className="m-0 relative text-9xl font-normal font-inherit z-[1] mq750:text-7xl mq450:text-lgi">
            More
          </h1>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img
              className="w-[9px] h-3 relative object-contain z-[1]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
