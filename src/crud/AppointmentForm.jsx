import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

const AppointmentForm = (props) => {

    let parentData = [...props.data].find((item)=>{
        return item.id === props.id
    })

    const formik = useFormik({
        initialValues : {
            contactName : props.id >0? parentData.contactName :   "",
            email : props.id >0? parentData.email :  "",
            contactType : props.id >0? parentData.contactType : "",
            contactNumber: props.id >0? parentData.contactNumber : ""
        },
        enableReinitialize: true,

        onSubmit :   (values)=> {
            let appointmentData =[...props.data];
            if (props.id >= 0) {
                appointmentData = appointmentData.map((item)=>{
                    if (item.id === props.id) {
                        return {...values,id: props.id}
                    }
                    else{
                        return appointmentData;
                    }
                })
            }else{
                appointmentData.push({...values, id : appointmentData.length +1});
            }
            props.setData(appointmentData);
            console.log(appointmentData);
            props.setId(-1);
            formik.resetForm();
            props.onClose();
       
        }
    })



    return <div>
              <Dialog open={props.open} onClose={props.closeForm}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contact Name"
            type="text"
            fullWidth
            variant="standard"
            name="contactName"
            onChange={formik.handleChange}
            value={formik.values.contactName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email ID"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
      
            <InputLabel htmlFor="max-width">Contact Type</InputLabel>
           <Select
                autoFocus
                name='contactType'
                onChange={formik.handleChange}
                value={formik.values.contactType}
              >
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="cellNumber">Cell Number</MenuItem>
                <MenuItem value="officeNumber">Office Number</MenuItem>
              </Select>
          <TextField
            autoFocus
            margin="dense"
            id="contactNumber"
            label="Contact Number"
            type="text"
            fullWidth
            variant="standard"
            name="contactNumber"
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeForm}>Cancel</Button>
          <Button onClick={formik.handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  
}



export default AppointmentForm;