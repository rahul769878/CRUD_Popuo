import { Button } from '@mui/base';
import React, { useState } from 'react';
import AppointmentDisplay from './AppointmentDisplay';
import AppointmentForm from './AppointmentForm';

const Appointment = () => {
    const [data,setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(-1);

    const openForm = () => {
        setOpen(true);
      };
  
      const closeForm = () => {
          setOpen(false);
        };

        const deleteItem=(id)=>{
           let newData = [...data].filter((item)=>{
            return item.id !== id
           })
           setData(newData);
        }

        const editItem=(id)=>{
           setOpen(true)
           setId(id);
        }

    return <div>
      <Button variant="outlined" onClick={openForm}>
        Open form dialog
      </Button>
        <AppointmentForm data={data} setData={setData} open={open} openForm={openForm} closeForm={closeForm} id={id} setId={setId}/>
        <AppointmentDisplay data={data} deleteItem={deleteItem} editItem={editItem}/>
    </div>;
}



export default Appointment;