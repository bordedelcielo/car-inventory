// import react from 'react'

// export const DataTable = () => {
//     return (
//         <div>
//             <h2>Cars in Inventory</h2>
//         </div>
//     )
// }

import React, { useState } from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { CarForm } from '../../components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'car_brand', headerName: 'Brand', width: 130 },
    { field: 'car_model', headerName: 'Model', width: 130 },
    { field: 'car_price', headerName: 'Price', width: 130 },
    { field: 'description', headerName: 'Description', width: 130},
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,

    // //   valueGetter: (params: GridValueGetterParams) =>
    //     // `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  interface gridData{
    data:{
      id?:string;
      
    }
  }

  export const DataTable = () => {
      let { carData, getData } = useGetData(); // check to see if carData vs droneData
      let [open, setOpen] = useState(false);
      let [gridData, setData] = useState<GridSelectionModel>([])

      let handleOpen = () =>{
        setOpen(true)
      }

      let handleClose = () =>{
        setOpen(false)
      }

      let deleteData = async () =>{
        await server_calls.delete(`${gridData[0]}`)
        getData()
      }

      console.log(gridData) // a list of the boxes checked

      return (
          <div style={{ height: 400, width: '100%'}}>
              <h2>Cars In Inventory</h2>
              <DataGrid rows={carData} 
                        columns={columns} 
                        pageSize={5} 
                        checkboxSelection
                        onSelectionModelChange= { (newSelectionModel) =>{setData(newSelectionModel);}} 
                        {...carData}
                        />
              <Button onClick={handleOpen}>Update</Button>
              <Button variant='contained' color='error' onClick={deleteData}>Delete</Button>

              {/* Dialog Popup Start */}
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update a Car</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Updating: {gridData[0]}
                  </DialogContentText>
                    <CarForm id={`${gridData[0]}`}/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} style={{backgroundColor:'maroon'}}>Cancel</Button>
                </DialogActions>
              </Dialog>


          </div>
      )
  }