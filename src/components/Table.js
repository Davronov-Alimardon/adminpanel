import React from "react";

const Table = () => {
  const tableData = {
    invoiceID: ["#AHGA68", "#AHGW54", "#AHX123", "#AHY456", "#AHZ789", "#AHA987", "#AHB654", "#AHC321", "#AHD987"],
    date: ["23/09/2022", "02/11/2023", "15/03/2022", "08/06/2023", "12/01/2022", "30/07/2023", "19/05/2022", "05/09/2023", "22/11/2022"],
    customer: ["Jacob Marcus", "Dwayne Statham", "Ella Johnson", "Sophie Turner", "Liam Williams", "Ava Smith", "Noah Davis", "Olivia Brown", "Mia Wilson"],
    payAmout: ["$100", "$143", "$200", "$180", "$120", "$300", "$250", "$190", "$220"],
    paidAmount: ["$521", "$965", "$800", "$720", "$600", "$950", "$820", "$750", "$890"],
    due: ["$758", "$245", "$600", "$760", "$980", "$350", "$480", "$550", "$410"],
  };

  return (
    <div className="relative overflow-x-auto rounded-lg mt-10">
      <table className="w-full bg-white text-sm text-left text-black font-poppins ">
        <thead className="text-md text-black bg-white">
          <tr className="border-b-2">
            <th className="p-[24px]" scope="col">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice ID
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Payable Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Paid Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Due
            </th>
          </tr>
        </thead>
        <tbody className="text-[#595959]">
          {tableData.invoiceID.map((invoice, index) => (
            <tr key={index} className="border-b-2">
              <td className="p-[24px]">
                <div className="flex items-center">
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-${index}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-3 text-[#0B63F8]">{invoice}</td>
              <td className="px-6 py-3">{tableData.date[index]}</td>
              <td className="px-6 py-3">{tableData.customer[index]}</td>
              <td className="px-6 py-3">{tableData.payAmout[index]}</td>
              <td className="px-6 py-3">{tableData.paidAmount[index]}</td>
              <td className="px-6 py-3">{tableData.due[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
