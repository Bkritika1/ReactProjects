import ProjectList from "../components/ProjectList";
import Calendar from "./Calendar";
import RecentUpdates from "./RecentUpdates";
import TodoList from "./ToDoList";
import './Dashboard.css'
import RecentTickets from "./RecentTickets";
import VisitStatsChart from "./VisitStatsChart";
import TrafficSourceChart from "./TrafficSourceChart";
import SummaryCards from "./SummaryCards";


export default function Dashboard() {
    return (
        <div className="dashboard">
            <h2 className="dash">Dashboard</h2>
            <SummaryCards />
            <div className="chart-Graph">
                <VisitStatsChart />
                <TrafficSourceChart />
            </div>
            <RecentTickets />
            <div className="dashboard-container">
                <Calendar />
                <RecentUpdates />
            </div>
            <div className="dashboard-container2">
                <ProjectList />
                <TodoList />
            </div>
        </div>
    )
}