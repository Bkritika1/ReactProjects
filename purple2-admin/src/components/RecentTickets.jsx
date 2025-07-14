import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../features/ticket/ticketSlice";
import "./RecentTickets.css"; // ✅ Import your CSS

const RecentTickets = () => {
  const dispatch = useDispatch();
  const { list = [], status } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const getStatusStyle = (status) => {
    const styles = {
      DONE: { background: "#00c292", color: "white" },
      PROGRESS: { background: "#f4c63d", color: "#000" },
      "ON HOLD": { background: "#03a9f3", color: "#fff" },
      REJECTED: { background: "#fb9678", color: "#fff" }
    };
    return styles[status] || {};
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="ticket-container">
      <h2>Recent Tickets</h2>
      <div className="ticket-table-wrapper">
        <table className="ticket-table">
          <thead>
            <tr>
              <th>Assignee</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Last Update</th>
              <th>Tracking ID</th>
            </tr>
          </thead>
          <tbody>
            {list.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <img
                    src={ticket.avatar}
                    alt={ticket.assignee}
                  />
                  {ticket.assignee}
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span style={getStatusStyle(ticket.status)}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.date}</td>
                <td>{ticket.trackingId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTickets;



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTickets } from "../features/ticket/ticketSlice";

// const RecentTickets = () => {
//   const dispatch = useDispatch();
//   const { list, status } = useSelector((state) => state.tickets);

//   useEffect(() => {
//     dispatch(fetchTickets());
//   }, [dispatch]);

//   const getStatusStyle = (status) => {
//     const styles = {
//       DONE: { background: "#00c292", color: "white" },
//       PROGRESS: { background: "#f4c63d", color: "#000" },
//       "ON HOLD": { background: "#03a9f3", color: "#fff" },
//       REJECTED: { background: "#fb9678", color: "#fff" }
//     };
//     return styles[status] || {};
//   };

//   if (status === "loading") return <p>Loading...</p>;

//   return (
//     <div className="ticket-container">
//       <h2>Recent Tickets</h2>
//       <table className="ticket-table">
//         <thead>
//           <tr>
//             <th>Assignee</th>
//             <th>Subject</th>
//             <th>Status</th>
//             <th>Last Update</th>
//             <th>Tracking ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((ticket) => (
//             <tr key={ticket.id}>
//               <td>
//                 <img
//                   src={ticket.avatar}
//                   alt={ticket.assignee}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     borderRadius: "50%",
//                     marginRight: "10px",
//                     verticalAlign: "middle"
//                   }}
//                 />
//                 {ticket.assignee}
//               </td>
//               <td>{ticket.subject}</td>
//               <td>
//                 <span
//                   style={{
//                     padding: "4px 10px",
//                     borderRadius: "6px",
//                     fontSize: "12px",
//                     fontWeight: "bold",
//                     ...getStatusStyle(ticket.status)
//                   }}
//                 >
//                   {ticket.status}
//                 </span>
//               </td>
//               <td>{ticket.date}</td>
//               <td>{ticket.trackingId}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecentTickets;
