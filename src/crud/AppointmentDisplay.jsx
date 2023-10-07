import React from 'react';

const AppointmentDisplay = (props) => {
    return <div className='container mt-5'>
       {props.data.map((item,index)=>{
        return  <table class="table">
        <thead>
          <tr>
            <th scope="col">Contact Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Contact Type</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{item.contactName}</th>
            <td>{item.email}</td>
            <td>{item.contactType}</td>
            <td>{item.contactNumber}</td>
            <td><button type="button" class="btn btn-danger" onClick={()=>{props.deleteItem(item.id)}}>Delete</button></td>
            <td><button type="button" class="btn btn-primary" onClick={()=>{props.editItem(item.id)}}>Edit</button></td>
          </tr>
        </tbody>
      </table>
       })}
    </div>;
}



export default AppointmentDisplay;