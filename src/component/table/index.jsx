/* eslint-disable react/prop-types */
import "./index.scss";

function Table({ columns, dataSource }) { 
    /*const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },       
    ]
    */
    /* dataSource = [
    {
        id: 1,
        name: 'John Brown',
    },
    
    nếu muốn lấy name thì thay đổi cách viết data.name thì đổi qua data['name']
    */

  return (
    <table className="table" border={1}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.dataIndex}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.dataIndex}>{item[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table