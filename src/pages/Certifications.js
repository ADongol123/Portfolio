import React from "react";
import Main from "../layouts/Main";

const Certifications = () => {
  return (
    <div>
      <Main title="About" description="Learn about Aayush Dongol">
        <div>
          <h1>My Certifications</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <b>Data Science Foundation: Data Engineering</b>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                Issuing Organization{" "}
                <img
                  style={{ height: "50px", width: "50px" }}
                  src="https://via.placeholder.com/15"
                />
              </div>
            </div>
            <button>View</button>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Certifications;
