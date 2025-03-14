import React from "react";
import Main from "../layouts/Main";
import cerdata from "../data/cerdata";
import { width } from "@fortawesome/free-brands-svg-icons/faGithub";
const Certifications = () => {
  console.log(cerdata, "data");
  return (
    <div>
      <Main title="About" description="Learn about Aayush Dongol">
        <div>
          <h1>My Certifications</h1>
          <div style={{ display: "flex", flexWrap: "column", gap: "20px",width:"100%" }}>
            {cerdata?.map((details) =>
              <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
                <div>
                  <b>{details?.name}</b>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    Issuing Organization
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={details?.icon}
                    />
                  </div>
                </div>
                <button>View</button>
              </div>
            )}
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Certifications;
