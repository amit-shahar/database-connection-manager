import React, { useState, useEffect } from 'react';
import DatabaseList from '../components/DatabaseList';
import CustomButton from '../components/CustomButton';
import AddDatabaseDialog from '../components/AddDatabaseDialog';
import { getConnections } from '../api/databaseAPI';
import Loader from '../components/Loader';

const HomePage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    try {
      const data = await getConnections();
      setConnections(data);
    } catch (error) {
      console.error('Error fetching connections:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAdd = async () => {
    await fetchConnections(); // Re-fetch connections after adding a new one
    handleDialogClose();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ width: '100%', minHeight: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
            <h1>Database Connections</h1>
            <CustomButton onClick={handleDialogOpen} >+ Add Connection</CustomButton>
            <DatabaseList connections={connections} />
            <AddDatabaseDialog open={dialogOpen} onClose={handleDialogClose} onAdd={handleAdd} />
        </div>
    </div>
  );
};

export default HomePage;
