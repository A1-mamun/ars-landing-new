import { ContactForm } from "@/components";

const Contacts = () => {
  return (
    <section
      className="padding-responsive"
      style={{
        background:
          "linear-gradient(to bottom, rgba(34, 169, 225, 0.5), rgba(215, 239, 249, 1)), linear-gradient(to right top, rgba(5, 144, 200, 0.02), rgba(13, 36, 38, 1))",
      }}
    >
      <h1 className="pt-10 lg:pt-7 pb-3 pl-3 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
        Contact
      </h1>
      <div className="bg-midnight-blue flex flex-col lg:flex-row gap-7 px-5 md:px-10 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-24 rounded-3xl">
        <div className="text-white space-y-6 md:space-y-8 lg:space-y-10 w-full lg:w-1/2">
          <h3 className="text-xl md:text-2xl xl:text-3xl w-full md:w-3/4 lg:w-full ">
            If you&apos;d like to know more then please call, message or follow
            ARS
          </h3>

          <div className="flex gap-12 xxs:gap-24 md:gap-28 xl:gap-48 text-sm md:text-base">
            <h5 className="text-cyan-blue font-medium">Address</h5>
            <p>
              7012 Al Farazdaq St
              <br />
              Ad Dhubbat
              <br />
              Riyadh 12627
              <br />
              Saudi Arabia
            </p>
          </div>
          <div className="flex gap-14 xxs:gap-[104px] md:gap-[123px] xl:gap-[200px] text-sm md:text-base">
            <h5 className="text-cyan-blue font-medium">Phone</h5>
            <p>+966 50 312 4449</p>
          </div>
          <div className="flex gap-10 xxs:gap-7 md:gap-9 xl:gap-28 text-sm md:text-base">
            <h5 className="text-cyan-blue font-medium max-xxs:hidden">
              General enquiries
            </h5>
            <h5 className="text-cyan-blue font-medium xxs:hidden">
              General
              <br />
              enquiries
            </h5>
            <p className="hidden xxs:inline">inquiries@arsystems.org</p>
            <p className="inline xxs:hidden">
              inquiries@
              <br />
              arsystems.org
            </p>
          </div>
        </div>
        <div className="w-[1px] bg-cyan-blue-50 hidden lg:block"></div>
        <hr className="border-cyan-blue-50 lg:hidden" />

        <div className="w-full lg:w-1/2">
          <h3 className="text-xl md:text-2xl xl:text-3xl text-white mb-8">
            Enquiries
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
