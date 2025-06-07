
import React, { useCallback, useState } from 'react';
import NotificationsList from './NotificationsList';
import FilterBar from './FilterBar';
import UserProfile from './Userprofile';

const Dashboard = () => {
    const [user] = useState({
        name: 'John Doe',
        email: 'john@example.com',
    });

    const [filter, setFilter] = useState('all');

    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Welcome to the platform!', type: "important" },
        { id: 2, message: 'Your profile is 80% complete.', type: "general" },
    ]);

    const filteredNotifications = notifications.filter((n) =>
        filter === 'all' ? true : n.type === filter
    );

    const refreshNotifications = () => {
        // simulate new notifications coming in
        setNotifications((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                message:` New notification ${prev.length + 1}`,
            },
        ]);
    };

    /* const handleFilter = (type) => {
        setFilter(type);
    }; */

    const handleFilter = useCallback((type) => {
        setFilter(type);
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={refreshNotifications}>Refresh Notifications</button>
            <UserProfile user={user} />
            <FilterBar onFilter={handleFilter} />
            <NotificationsList notifications={filteredNotifications} />
        </div>
    );
};

export default Dashboard;

/* Even though FilterBar is memoized with React.memo, it re-renders on every Dashboard render because handleFilter is a new function every time. */
/* useCallback(fn, deps) is a React Hook that returns a memoized version of the function fn, which only changes if the dependencies (deps) change. */