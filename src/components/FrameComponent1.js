import { useMemo } from "react";

const FrameComponent1 = ({
  educationInnovation,
  educationDemandsDynamicSo,
  weCraftArchitecturesThatS,
  eLearningPlatformsStudent,
  systemsAndAdministrativeP,
  empoweringEducationalInst,
  deliverQualityEducationWh,
  resourcesEffectively,
  propGap,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
      // minWidth: propMinWidth,
    };
  }, [propGap]);

  return (
    <div
      className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[41px_0px] min-w-[591px] max-w-full text-left text-29xl text-white font-poppins mq750:gap-[41px_0px] mq750:min-w-full mq1225:flex-1"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start py-0  box-border max-w-full">
        <h1 className="m-0 h-[72px] relative text-inherit font-semibold font-inherit inline-block mq450:text-10xl mq750:text-19xl">
          {educationInnovation}
        </h1>
      </div>
      <h3 className="m-0 relative  font-medium font-inherit text-center mq450:text-3xl ">
        <p className="m-0">{educationDemandsDynamicSo}</p>
        <p className="m-0">{weCraftArchitecturesThatS}</p>
        <p className="m-0">{eLearningPlatformsStudent}</p>
        <p className="m-0">{systemsAndAdministrativeP}</p>
        <p className="m-0">{empoweringEducationalInst}</p>
        <p className="m-0">{deliverQualityEducationWh}</p>
        <p className="m-0">{resourcesEffectively}</p>
      </h3>
    </div>
  );
};

export default FrameComponent1;
