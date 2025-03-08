import React, { useState } from "react";

const Fundraiser = () => {
  const [showImage, setShowImage] = useState(false);

  const handleDonateClick = () => {
    setShowImage(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('https://via.placeholder.com/800x400')", // Replace with a meaningful image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          padding: "30px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <h2 style={{ color: "#FFD700", fontSize: "28px", marginBottom: "10px" }}>
          🧡 Support Orphans & the Poor 🧡
        </h2>
        <p style={{ color: "#ddd", fontSize: "18px", marginBottom: "20px" }}>
          Your donation helps provide food, shelter, and education to those in need.
        </p>
        <button
          onClick={handleDonateClick}
          style={{
            backgroundColor: "#FF4500",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 10px rgba(255, 69, 0, 0.5)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#FF6347")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FF4500")}
        >
          🎁 Donate Now
        </button>

        {showImage && (
          <div style={{ marginTop: "20px", animation: "fadeIn 1s ease-in-out" }}>
            <img
            src="https://via.placeholder.com/250x250" // Replace with a meaningful image URL
              alt="Donation QR Code"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Fundraiser;
