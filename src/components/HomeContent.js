import React from 'react';
import { motion } from 'framer-motion';

const HomeContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      whileHover="visible"
      className="w-full relative rounded-xl bg-black overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[100px] box-border gap-[37px_0px] tracking-[normal] text-center text-56xl text-white font-poppins mq750:gap-[37px_0px]"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-center justify-start pt-0 px-5 pb-[103px] box-border gap-[5px_0px] max-w-full mq450:pb-[67px] mq450:box-border"
        >
          <motion.h1
            className="m-0 relative text-inherit font-bold font-inherit mq450:text-26xl mq750:text-41xl"
            variants={textVariants}
          >
            <p className="m-0">Your Workato</p>
            <p className="m-0">Integration Expert</p>
          </motion.h1>
          <motion.div
            className="mt-5 w-[50px] h-[50px] relative rounded-sm bg-darkviolet"
            variants={imageVariants}
          >
            <motion.div
              className="mt-5 absolute top-[0px] left-[calc(50%_-_25px)] rounded-sm bg-darkviolet w-full h-full hidden"
            />
            <motion.img
              className=" absolute h-[54%] w-[42%] top-[24%] right-[28%] bottom-[22%] left-[30%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/vector-1.svg"
              variants={imageVariants}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HomeContent;
