import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

function ModalProject() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >


<Button
  onClick={handleOpen}
  className="!text-white !bg-gradient-to-r from-blue-400 to-purple-400 !square-full !px-2 !mb-1 !mt-0 !py-1 !text-sm !mr-2"
  disableElevation 
  variant="contained"
>
  Plus de détails 
</Button>



      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '20%' }}>
          <h2>Informations du projet</h2>
          <p>Description détaillée du projet ici.</p>
         
        </Box>
      </Modal>
    </div>
  );
}

export default ModalProject;
