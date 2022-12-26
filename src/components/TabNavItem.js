import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <button onClick={handleClick} className={activeTab === id ? "active mb-10 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-1 px-8 rounded-full text-2xl" : "text-2xl mb-10"}>
     { title }
   </button>
 );
};
export default TabNavItem;