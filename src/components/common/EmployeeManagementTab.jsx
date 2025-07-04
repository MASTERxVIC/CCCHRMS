import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Personal Information', path: '/personal-information' },
  { name: 'Company Information', path: '/company-information' },
  { name: 'Professional Background', path: '/pro-information' },
  { name: 'Financial Details', path: '/financial-information' },
  { name: 'Documents Upload', path: '/upload-documents' }
];

const EmployeeManagementTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  // Set active tab based on current path
  useEffect(() => {
    const index = tabs.findIndex((tab) => location.pathname.includes(tab.path));
    setActiveTab(index >= 0 ? index : 0);
  }, [location.pathname]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(tabs[index].path);
  };

  return (
    <div className="flex space-x-4 p-2 mt-6 rounded-lg">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => handleTabClick(idx)}
          className={`px-4 py-1 rounded border cursor-pointer transition ${
            activeTab === idx
              ? 'border-gray-500 shadow text-black'
              : 'border-gray-200 text-gray-600 hover:text-black'
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default EmployeeManagementTab;
