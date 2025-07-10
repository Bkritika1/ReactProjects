import React from "react";
import "./ProjectStatus.css";

const projectData = [
  {
    id: 1,
    name: "Herman Beck",
    dueDate: "May 15, 2015",
    progress: 20,
    color: "#1bcfb4",
  },
  {
    id: 2,
    name: "Messsy Adam",
    dueDate: "Jul 01, 2015",
    progress: 60,
    color: "#ff4747",
  },
  {
    id: 3,
    name: "John Richards",
    dueDate: "Apr 12, 2015",
    progress: 80,
    color: "#f9c80e",
  },
  {
    id: 4,
    name: "Peter Meggik",
    dueDate: "May 15, 2015",
    progress: 50,
    color: "#bb6bd9",
  },
  {
    id: 5,
    name: "Edward",
    dueDate: "May 03, 2015",
    progress: 40,
    color: "#ff9472",
  },
  {
    id: 6,
    name: "Ronald",
    dueDate: "Jun 05, 2015",
    progress: 70,
    color: "#3498db",
  },
];

const ProjectStatus = () => {
  return (
    <div className="project-status">
      <h3>Project Status</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((proj, index) => (
            <tr key={proj.id}>
              <td>{index + 1}</td>
              <td>{proj.name}</td>
              <td>{proj.dueDate}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${proj.progress}%`,
                      backgroundColor: proj.color,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectStatus;
