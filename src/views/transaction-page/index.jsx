import { useState,useEffect } from "react";
// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { getTransactions } from "db/actions";

// ==============================|| SAMPLE PAGE ||============================== //

const Transactions = () => {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'transaction', headerName: 'Transaction', width: 100 },
    { field: 'membership', headerName: 'Membership', width: 250 },
    { field: 'date', headerName: 'Date of purchase', width: 150 }
    // Add more columns as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTransactions();
        setData(response);
      } 
      catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return(
    <MainCard title="Transactions">
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
  

export default Transactions;
