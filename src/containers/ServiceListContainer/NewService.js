import { Button, Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const NewService = ({ onSubmit}) => {
  const [open, setOpen] = useState(false);
  const [period, setPeriod] = useState(15);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, price, period });
    handleClose();
  };

  return <>
    <Button variant="contained" onClick={() => setOpen(true)}>新增服務</Button>
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>新增服務</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="服務名稱"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          name="price"
          label="價格(台幣)"
          fullWidth
          variant="standard"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="demo-simple-select-label">時間(分鐘)</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="period"
            name="period"
            label="時間(分鐘)"
            onChange={handleChange}
            value={period}
          >
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={120}>120</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button type="submit" variant="contained">新增</Button>
      </DialogActions>
    </Dialog>
  </>
}

export default NewService;