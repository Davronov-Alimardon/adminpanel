import React from "react";

const SalesInfo = () => {
  return (
    <>
      {/* Layer 2 */}
      <h3 className="font-poppins text-[24px] mt-[40px]">Sales Information</h3>

      {/* Layer 3 */}
      <div className="columns-4 w-full mt-[30px] font-poppins">
        <div className="">
          <h3 className="pb-[16px]">Customer</h3>
          <input type="text" className="w-[266px] h-50 py-[13px] pl-[24px]  border border-gray-300 rounded-md" placeholder="Enter Customer Name" />
        </div>
        <div className="">
          <h3 className="pb-[16px]">Invoice ID</h3>
          <input type="text" className="w-[266px] h-50 py-[13px] pl-[24px]  border border-gray-300 rounded-md" placeholder="Enter Invoice ID" />
        </div>
        <div className="">
          <h3 className="pb-[16px]">Start Date</h3>
          <input type="text" className="w-[266px] h-50 py-[13px] pl-[24px]  border border-gray-300 rounded-md" placeholder="Start Date" />
        </div>
        <div className="">
          <h3 className="pb-[16px]">End Date</h3>
          <input type="text" className="w-[290px] h-50 py-[13px] pl-[24px]  border border-gray-300 rounded-md" placeholder="End Date" />
        </div>
      </div>
    </>
  );
};

export default SalesInfo;
