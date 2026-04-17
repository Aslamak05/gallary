import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selected = location.state;

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!selected) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-600 mb-4 text-lg">No image selected for payment.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-cyan-500 text-white px-6 py-2 rounded-lg shadow hover:bg-cyan-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000); // simulate 2s payment
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-purple-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 flex flex-col items-center relative">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">Purchase Receipt</h1>

        {/* Image Preview */}
        <img
          src={selected.loc}
          alt={selected.name}
          className="w-full h-64 object-cover rounded-xl mb-4 shadow"
        />

        {/* Image Name and Tag */}
        <p className="text-lg font-medium mb-4 text-center">
          {selected.name} -{" "}
          <span className={`font-bold ${selected.tags[0] === "Free" ? "text-green-500" : "text-yellow-500"}`}>
            {selected.tags[0]}
          </span>
        </p>

        {/* Dummy Receipt Section */}
        <div className="bg-gray-50 rounded-xl p-4 w-full mb-6 shadow-inner relative">
          <p className="text-sm text-gray-500 mb-2">Payment Gateway: <span className="text-indigo-600 font-semibold">GP Paytm</span></p>
          <p className="text-sm text-gray-500 mb-2">Transaction ID: <span className="text-indigo-700 font-mono">TXN{Math.floor(Math.random() * 1000000)}</span></p>
          <p className="text-sm text-gray-500 mb-2">Receiver: <span className="text-indigo-600">dummy@paytm.com</span></p>
          <p className="text-sm text-gray-500">Amount: <span className="font-bold text-indigo-700">2$</span></p>

          {/* Fun Sticker */}
          <div className="absolute top-2 right-2 text-yellow-400 font-bold animate-bounce text-xl">
            💰
          </div>
        </div>

        {/* Payment / Download Button */}
        {!success ? (
          <button
            onClick={handlePayment}
            disabled={processing}
            className={`w-full bg-indigo-500 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-600 transition font-semibold ${
              processing ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {processing ? "Processing Payment..." : `Pay Now ${selected.tags[0] === "Premium" ? "$2" : ""}`}
          </button>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg mb-4 shadow-inner w-full text-center animate-pulse">
              ✅ Payment Successful!
            </div>
            <a href={selected.loc} download>
              <button className="w-full bg-cyan-500 text-white px-6 py-3 rounded-xl shadow hover:bg-cyan-600 transition font-semibold">
                Download Image
              </button>
            </a>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-gray-500 hover:text-gray-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Pay;
