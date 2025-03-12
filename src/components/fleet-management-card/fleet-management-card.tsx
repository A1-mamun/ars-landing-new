"use client";
import { motion } from "framer-motion";

const FleetManagementCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12 xl:gap-18 2xl:gap-20 border-b border-black pb-10 lg:pb-14 xl:pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-10"
      >
        <h1 className="text-ars-cyan text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold">
          Streamline operations and enhance efficiency with ARS automation
          systems.
        </h1>
        <h6 className="text-midnight-blue text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
          Smart Task Assignment
        </h6>
        <p className="text-black text-base md:text-lg lg:text-xl 2xl:text-2xl">
          ARS FM intelligently assigns tasks to the most suitable AMR
          (Autonomous Mobile Robot) or AGV (Automated Guided Vehicle) based on
          real-time fleet conditions, workload distribution, and efficiency
          parameters. The system leverages opportunity charging to ensure that
          robots remain operational without unnecessary downtime, maximizing
          productivity while reducing energy consumption. This automated task
          allocation reduces human intervention and enhances workflow precision.
        </p>
      </motion.div>
      <div className="w-full md:w-1/2 bg-[#151721] rounded-3xl"></div>
    </div>
  );
};

export default FleetManagementCard;
