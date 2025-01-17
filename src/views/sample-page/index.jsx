import { useState,useEffect } from "react";
// material-ui
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { getMembers } from "db/actions";

// ==============================|| SAMPLE PAGE ||============================== //

const Members = () => {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'valid', headerName: 'Valid until', width: 250 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'birthday', headerName: 'Birthday', width: 150 }
    // Add more columns as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMembers();
        setData(response);
      } 
      catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return(
    <MainCard title="Members">
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
      </div>
    </MainCard>
  )
};
  

export default Members;
