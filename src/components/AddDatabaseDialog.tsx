import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CustomButton from './CustomButton';
import FormField from './FormField';
import { addConnection } from '../api/databaseAPI';

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const AddDatabaseDialog: React.FC<Props> = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleAdd = async () => {
    try {
      const newConnection = { name, url, username, password, type };
      console.log('Adding connection:', newConnection);
      await addConnection(newConnection);
      onAdd();
    } catch (error) {
      console.error('Error adding connection:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Database Connection</DialogTitle>
      <DialogContent>
        <FormField label="Database Name" value={name} onChange={e => setName(e.target.value)} />
        <FormField label="URL" value={url} onChange={e => setUrl(e.target.value)} />
        <FormField label="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <FormField label="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <FormField
          label="Type"
          value={type}
          onChange={e => setType(e.target.value)}
          select
          options={[
            { value: 'Snowflake', label: 'Snowflake' },
            { value: 'Trino', label: 'Trino' },
            { value: 'MySQL', label: 'MySQL' }
          ]}
        />
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={onClose} >Cancel</CustomButton>
        <CustomButton onClick={handleAdd}>Add</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddDatabaseDialog;
