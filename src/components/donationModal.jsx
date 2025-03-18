import React, { useState } from "react";
import QR from '../assets/qr.svg';
const DonationModal = ({ isOpen, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState("upi");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose} >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"  onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
          ×
        </button>
        <h2 className="text-xl font-bold text-center mb-4">Donate Now</h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${selectedMethod === "upi" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedMethod("upi")}
          >
            UPI / QR Code
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedMethod === "card" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedMethod("card")}
          >
            Card
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedMethod === "netbanking" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedMethod("netbanking")}
          >
            Net Banking
          </button>
        </div>

        {selectedMethod === "upi" && (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h3>
            <img src={QR} alt="QR Code" className="w-40 h-40 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Scan with UPI app</p>
          </div>
        )}

        {selectedMethod === "card" && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Enter Card Details</h3>
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="CVV" className="w-full p-2 border rounded mb-2" />
            <button className="w-full bg-green-500 text-white p-2 rounded">Pay Now</button>
          </div>
        )}

        {selectedMethod === "netbanking" && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Select Bank</h3>
            <select className="w-full p-2 border rounded mb-3">
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis</option>
            </select>
            <button className="w-full bg-blue-500 text-white p-2 rounded">Proceed to Pay</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
