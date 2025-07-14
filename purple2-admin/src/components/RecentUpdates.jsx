import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpdates } from '../features/updates/updateSlice';
import './RecentUpdates.css';

const RecentUpdates = () => {
  const dispatch = useDispatch();
  const { list: updates, status } = useSelector((state) => state.updates);

  useEffect(() => {
    dispatch(fetchUpdates());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading updates...</p>;

  return (
    <div className="updates-container">
      <h3>Recent Updates</h3>

      {updates.map(update => (
        <div key={update.id}>
          <div className="update-meta">
            <span>👤 {update.author}</span>
            <span>📅 {update.date}</span>
          </div>

          <div className="update-gallery">
            {update.images.map((img, i) => (
              <img key={i} src={img} alt="update" />
            ))}
          </div>

          <div className="update-info">
            <img src={update.avatar} alt="avatar" />
            <div>
              <strong>{update.title}</strong>
              <p>{update.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdates;
