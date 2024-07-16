




import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope, FaTimes } from 'react-icons/fa';
import './Sidebar.css'; // Ensure you have appropriate styles for mobile view
import set from "../../assets/set.png"
import shield from "../../assets/shield.png"
import pf from "../../assets/pf.png"
import list from "../../assets/list.png"
import graph from "../../assets/graph.png"
import fav from "../../assets/fav.png"
import Dashboard from "../../assets/Dashboard.png"
import log from "../../assets/log.png"

const Sidebar = ({ activeTab, setActiveTab, setSidebarVisible }) => {
  const handleItemClick = (tab) => {
    setActiveTab(tab);
    setSidebarVisible(false); // Hide the sidebar on item click for mobile view
  };

  return (
    <div className="sidebar bg-white">
      <ListGroup className="list-group-flush mt-4 ms-4">
        <div className="mt-5 d-flex justify-content-between align-items-center">
          <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
          <Button 
            className="close-sidebar-button d-md-none border-0" 
            style={{background:"none"}} 
            onClick={() => setSidebarVisible(false)}
          >
            <FaTimes style={{ color: "#888888 " }} />
          </Button>
        </div>
        <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
        <ListGroup.Item
          className="border-0 rounded-5 mt-5 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Home')}
          active={activeTab === 'Home'}
        >
         <img src={Dashboard} className="mx-2 "/> Dashboard
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Profile')}
          active={activeTab === 'Profile'}
        >
          <img src={graph} className="mx-2"/> Activity
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Settings')}
          active={activeTab === 'Settings'}
        >
          <img src={list} className="mx-2"/> My Listing
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Messages')}
          active={activeTab === 'Messages'}
        >
          <img src={fav} className="mx-2"/> Favourites
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('SavedProfile')}
          active={activeTab === 'SavedProfile'}
        >
          <img src={pf} className="mx-2"/> Saved Profile
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('AccountSettings')}
          active={activeTab === 'AccountSettings'}
        >
          <img src={shield} className="mx-2"/> Account Settings
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Security')}
          active={activeTab === 'Security'}
        >
          <img src={set} className="mx-2"/> Security
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 rounded-5 mt-3 d-flex align-items-center"
          action
          onClick={() => handleItemClick('Logout')}
          active={activeTab === 'Logout'}
        >
          <img src={log} className="mx-2"/> Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
