import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-2/12 min-h-screen border-[1.5px] border-slate-300 border-t-0 custom-sidebar">
      <div className="pt-4 pl-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 border-[1px] border-gray-300 border-r-0 p-1.5 rounded-sm rounded-tr-none rounded-br cursor-pointer">
          <img src={assets.add_icon} />
          <p>Add Items</p>
        </div>
        <div className="flex items-center gap-3 border-[1px] border-gray-300 border-r-0 p-1.5 rounded-sm rounded-tr-none rounded-br-none cursor-pointer">
          <img src={assets.order_icon} />
          <p>List Items</p>
        </div>
        <div className="flex items-center gap-3 border-[1px] border-gray-300 border-r-0 p-1.5 rounded-sm rounded-tr-none rounded-br cursor-pointer">
          <img src={assets.order_icon} />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
