import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DatabaseListProps {
  connections: any[];
}

const DatabaseList: React.FC<DatabaseListProps> = ({ connections }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <div style={{ marginTop: '20px' }}>
        <TableContainer component={Paper} >
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Database Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Database Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {connections.map((connection: any) => (
                <StyledTableRow key={connection.id} onClick={() => handleRowClick(connection.id)} style={{ cursor: 'pointer' }}>
                <TableCell>{connection.name}</TableCell>
                <TableCell>{connection.username}</TableCell>
                <TableCell>{connection.type}</TableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default DatabaseList;
