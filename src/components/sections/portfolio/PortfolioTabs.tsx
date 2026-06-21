export type PortfolioTab = "Development + Design" | "Photography";

type PortfolioTabsProps = {
  activeTab: PortfolioTab;
  onChange: (tab: PortfolioTab) => void;
};

const tabs: PortfolioTab[] = ["Development + Design", "Photography"];
const tabBaseClass =
  "cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-700 font-medium rounded-xs transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:bg-gray-300";

const PortfolioTabs = ({ activeTab, onChange }: PortfolioTabsProps) => (
  <div className="flex flex-wrap bg-gray-200 px-2 py-2 rounded-sm leading-none mt-12 xl:mt-0">
    {tabs.map((tab) => (
      <button
        key={tab}
        type="button"
        className={`${tabBaseClass}${activeTab === tab ? " !bg-primary-500 !text-gray-100" : ""}`}
        aria-pressed={activeTab === tab}
        onClick={() => onChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default PortfolioTabs;
