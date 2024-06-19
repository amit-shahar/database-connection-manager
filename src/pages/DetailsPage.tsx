import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getConnectionById, removeConnection } from '../api/databaseAPI';
import Loader from '../components/Loader';
import { Box, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const connectionId = id ?? '';
  const [connection, setConnection] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConnectionById(id!);
        setConnection(data);
      } catch (error) {
        console.error('Error fetching connection details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  if (!connection) {
    return <div>Connection not found</div>;
  }

  const handleBack = () => {
    navigate('/');
  };

  const handleRemove = async () => {
    removeConnection(connectionId).then(response => {
        console.log('Connection successfully deleted.');
        navigate('/');
        }).catch(error => {
        console.error('Failed to delete connection.');
        });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <IconButton
        onClick={handleBack}
        style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#ffffff' }}
        aria-label="back"
      >
        <ArrowBackIcon />
      </IconButton>
      <Paper style={{ width: '80%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Database Details</h2>
        <div style={{ textAlign: 'left' }}>
          <p><strong>Database Name:</strong> {connection.name}</p>
          <p><strong>Username:</strong> {connection.username}</p>
          <p><strong>Database Type:</strong> {connection.type}</p>
          <p><strong>URL:</strong> {connection.url}</p>
          <p><strong>Password:</strong> {connection.password}</p>
        </div>
        <Box mt={3} display="flex" justifyContent="center">
          <IconButton onClick={handleRemove} aria-label="remove connection">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </div>
  );
};

export default DetailsPage;
