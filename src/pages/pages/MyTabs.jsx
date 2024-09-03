import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'tailwindcss/tailwind.css';

const MyTabs = () => {
  return (
    <Tabs>
      <TabList className="flex border-b-2 border-gray-200">
        <Tab className={({ selected }) => `px-4 py-2 cursor-pointer ${selected ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}>
          Tab 1
        </Tab>
        <Tab className={({ selected }) => `px-4 py-2 cursor-pointer ${selected ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}>
          Tab 2
        </Tab>
        <Tab className={({ selected }) => `px-4 py-2 cursor-pointer ${selected ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}>
          Tab 3
        </Tab>
        <Tab className={({ selected }) => `px-4 py-2 cursor-pointer ${selected ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}>
          Tab 4
        </Tab>
      </TabList>

      <TabPanel>
        <div className="p-4">
          <p>Content for Tab 1</p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">
          <p>Content for Tab 2</p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">
          <p>Content for Tab 3</p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">
          <p>Content for Tab 4</p>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;