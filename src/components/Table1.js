import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Polygon1 from "../Polygon 1.png";
import Polygon4 from "../Polygon 4.png"

const Table1 = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="px-16 py-20">
      <h1 className="text-2xl mb-20 text-stone-800 font-semibold text-center">GOLD PRICE TODAY IN MAJOR CITIES OF PAKISTAN</h1>
      <div className="Tabs">
        <ul className="nav flex justify-around w-3/4 mx-auto">
          <TabNavItem title="Lahore" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Karachi" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Islamabad" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>

        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-b">
                        <tr>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                          Gram
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                          24K Gold Price
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                          Daily Price Change
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          1 Gram
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          12930<span>PKR</span>
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          +0.54%
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          8 Gram
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          103,440<span>PKR</span>
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          +0.54%
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          10 Gram
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          129,300<span>PKR</span>
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          -0.15%
                          </td>
                        </tr>
                        <tr className="">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          100 Gram
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          1,293,000<span>PKR</span>
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                          -0.15%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
          <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-b">
                        <tr>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            First
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            Last
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Larry
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Wild
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
          <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-b">
                        <tr>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            First
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            Last
                          </th>
                          <th scope="col" className="text-center font-semibold font-medium text-gray-700 px-6 py-4 text-2xl">
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Larry
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            Wild
                          </td>
                          <td className="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                            @twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Table1;