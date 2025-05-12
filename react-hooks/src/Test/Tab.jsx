import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("React");

  const tabs = ["React", "JavaScript", "Java", "HTML", "CSS"];

  return (
    <div className="w-full">
      {/* Tab headers */}
      <ul className="flex space-x-4 border-b-2 border-gray-200 mb-4">
        {tabs.map((tab) => (
          <li key={tab}>
          
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block px-4 py-2 transition font-semibold
                ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-400'
                }`}
            >
              {tab}
            </button>

          </li>
        ))}
      </ul>

      {/* Tab content */}
      <div className="p-4 bg-gray-100 rounded shadow">
        {
          activeTab === "React" ? <p>You selected <strong>React</strong>.</p> :
          activeTab === "JavaScript" ? <p>You selected <strong>JavaScript</strong>.</p> :
          activeTab === "Java" ? <p>You selected <strong>Java</strong>.</p> :
          activeTab === "HTML" ? <p>You selected <strong>HTML</strong>.</p> :
          <p>You selected <strong>CSS</strong>.</p>
        }
      </div>
    </div>
  );
};

export default Tabs;
