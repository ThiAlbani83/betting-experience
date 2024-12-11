import Sidebar from "../components/Sidebar";
import Terms from "../components/Terms";

const TermsAndConditions = () => {
  const sectionIds = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "section11",
  ];

  return (
    <div className="flex mx-auto md:px-20 px-10 xl:px-0 max-w-[1200px] h-full gap-10 w-full">
      <div className="flex">
        <Sidebar sectionIds={sectionIds} />
        <div
          id="scrollableDiv"
          className="flex-1 mt-10 overflow-y-auto md:mt-20 xl:mt-10"
        >
          <Terms sectionIds={sectionIds} />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
