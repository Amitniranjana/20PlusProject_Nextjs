'use client'

import Interest from "@/component/interest";
import Profile from "@/component/profile";
import Setting from "@/component/setting";
import type { FormData } from "@/component/formTypes";
import { useState } from "react";

export default function Tabform() {
  const [data, setData] = useState<FormData>({
    profile: {
      name: " ",
      age: " ",
      gender: " ",
    },
    intrests: {
      intrestData: [],
      checkboxes: ["coding", "mentoring", "writing", "music"],
    },
    setting: {
      settingData: " ",
      data: ["dark", "theme"],
    },
  });

  const [crntTab, setCrntTab] = useState(0);
  const tab = [
    {
      name: "Profile",
      component: Profile,
    },
    { name: "Interest", component: Interest },

    {
      name: "Setting",
      component: Setting,
    },
  ];

  const ActiveComponent = tab[crntTab].component;
  const handleNextButton = () => {
    setCrntTab((prev) => prev + 1);
  };
  const handlePrevButton = () => {
    setCrntTab((prev) => prev - 1);
  };
 return (
    <div className="tabform-container">
      <h2>Multi-Step Form</h2>
      <div className="tabsContainer">
        {tab.map((val, idx) => (
          <div className="tabs" key={idx}>
            <button onClick={() => setCrntTab(idx)}>
              {val.name}
            </button>
          </div>
        ))}
      </div>

      <div className="sections">
        <ActiveComponent data={data} setData={setData} />
      </div>

      <div className="nav-buttons">
        {crntTab > 0 && <button onClick={handlePrevButton}>Prev</button>}
        {crntTab < 2 && <button onClick={handleNextButton}>Next</button>}
        {crntTab === 2 && <button onClick={() => alert("Form Submitted!")}>Submit</button>}
      </div>

      <div className="data-preview">
        {Object.entries(data.profile).map(([keys, vals], idx) => (
          <div key={idx}>
            <strong>{keys}</strong> : {vals}
          </div>
        ))}
      </div>
    </div>
  );
}
