import React from "react";
import StatCard from "../components/StatCard";
import { FaUsers, FaClipboardList, FaDollarSign } from "react-icons/fa";
import TodoList from "../components/TodoList";
import CalendarBox from "../components/CalendarBox";
import ProjectStatus from "../components/ProjectStatus";
import Gallery from "../components/Gallery";

const DashboardPage = () => {
  return (
    <div className="page">
      <h2>Dashboard</h2>
      <div className="cards-row">
        <StatCard icon={<FaUsers />} label="Users" value="1,245" color="#4b49ac" />
        <StatCard icon={<FaClipboardList />} label="Tasks" value="128" color="#2ecc71" />
        <StatCard icon={<FaDollarSign />} label="Revenue" value="$24K" color="#e67e22" />
      </div>
     <div style={{display: 'flex', gap:'5rem'}}>
       <CalendarBox />
      <Gallery />
     </div>

      <div style={{ display: 'flex', gap: '25rem' }}>
        <ProjectStatus />
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardPage;
