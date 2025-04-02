import React from "react";

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
          ×
        </button>
        <h2 className="text-xl font-bold text-center mb-4">Donate Now</h2>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Bank Account Details</h3>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Name of Account</td>
                <td className="border border-gray-300 px-4 py-2">MATASHRAY WELFARE FOUNDATION</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Account No</td>
                <td className="border border-gray-300 px-4 py-2">000705055768</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">IFSC Code</td>
                <td className="border border-gray-300 px-4 py-2">ICIC0000007</td>
              </tr>
              {/* <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Customer ID</td>
                <td className="border border-gray-300 px-4 py-2">597213360</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Branch Sol ID</td>
                <td className="border border-gray-300 px-4 py-2">0007</td>
              </tr> */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Account Type</td>
                <td className="border border-gray-300 px-4 py-2">Current Account</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Branch Address</h3>
          <p>9A Phelps Building, Connaught Place, New Delhi - 110001</p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;