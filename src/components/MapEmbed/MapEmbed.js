import React from "react";

const MapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "2rem" }}>
      <iframe
        title="Chennai Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.050270654627!2d80.21904817507245!3d13.051860987259894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d105b3f6ab%3A0x132f7e41ea756443!2sGemini%20Parson%20Complex!5e0!3m2!1sen!2sin!4v1720156900000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
