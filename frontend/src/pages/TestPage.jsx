import React, {useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

const TestPage = () => {
    const [message, setMessege] = useState([]);
    const [data, setData] = useState([]);

    //test
    // const columnData = useMemo(() => columns, [columns]);
    // const rowData = useMemo(() => rows, [rows]);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "orderDate",
          headerName: "오더등록일",
          width: 150,
          type: "number",
          editable: true,
        },
      ];

      const rows = [
        {
          id: "1",
          orderDate: "2021-12-03",
        },
      ];

    
    useEffect( () => {
        axios.get('/testPage')
            .then(res => {
                let dataArr = [];

                dataArr = res.data.data;
                console.log(dataArr);

                setData(dataArr[0].WRITER);
                setMessege(res.data.message);
    
            }).catch(console.error);
    },[]);


    return (
        <>
            <div>
                <br/>
                <br/>
                <br/>
                <h1>TEST PAGE</h1>
                message : {message}<br/>
                data : {data}<br/>
                data : {data}<br/>
            </div>

            <br />
            <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                // isRowSelectable={(params: any) => params.row.OrderAmount > 1}
            />
    </div>
            
        </>    

    )
}

export default TestPage;