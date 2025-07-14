
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../features/project/projectSlice';
import './Project.css';

const ProjectList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === 'loading') return <p className="center">Loading projects...</p>;
  if (status === 'rejected') return <p className="center error">{error}</p>;

  return (
    <div className="project-container">
      <h2 className="project-title">Project Status</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{new Date(project.dueDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              })}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor: getColor(project.progress),
                    }}
                  ></div>
                </div>
                <span className="progress-text">{project.progress}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getColor(progress) {
  if (progress >= 80) return '#3498db';    // blue
  if (progress >= 60) return '#9b59b6';    // purple
  if (progress >= 40) return '#f1c40f';    // yellow
  return '#e67e22';                        // orange
}

export default ProjectList;

// // src/components/ProjectList.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProjects } from '../features/project/projectSlice';

// const ProjectList = () => {
//   const dispatch = useDispatch();

//   const { list, status, error } = useSelector((state) => state.project);

//   useEffect(() => {
//     // Dispatch fetchProjects when component mounts
//     dispatch(fetchProjects());
//   }, [dispatch]);

//   if (status === 'loading') return <p>Loading projects...</p>;
//   if (status === 'rejected') return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Project List</h2>a
//       <ul>
//         {list.map((project) => (
//           <li key={project.id}>
//             <strong>{project.name}</strong> - Due: {project.dueDate} - Progress: {project.progress}%
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;
