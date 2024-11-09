import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ServiceTable = ({ services, onDelete, onEdit }) => {
  return ( <TableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: '#555', fontWeight: 'bold' }}>服務名稱</TableCell>
          <TableCell align="right" sx={{ color: '#555', fontWeight: 'bold' }}>價格(台幣)</TableCell>
          <TableCell align="right" sx={{ color: '#555', fontWeight: 'bold' }}>時間(分鐘)</TableCell>
          <TableCell align="right" sx={{ color: '#555', fontWeight: 'bold' }}>操作</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {services.map((service) => (
          <TableRow
            hover
            key={service.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{service.name}</b>
            </TableCell>
            <TableCell align="right">{service.price}</TableCell>
            <TableCell align="right">{service.period}</TableCell>
            <TableCell align="right">
              <IconButton aria-label="delete" onClick={() => {
                if (window.confirm('確定要刪除此服務嗎？')) {
                  onDelete(service.id);
                }
              }}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => onEdit(service.id)}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>)
}

export default ServiceTable;