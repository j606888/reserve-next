import { Button, Dialog, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const EditService = ({ service, onSave, onClose }) => {
  const [period, setPeriod] = useState(service.period);
  const [name, setName] = useState(service.name);
  const [price, setPrice] = useState(service.price);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    setPeriod(service.period);
    setName(service.name); 
    setPrice(service.price);
  }, [service]);

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ ...service, name, price, period });
    handleClose();
  };

  return <>
    <Dialog
      open={!!service}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>編輯服務</DialogTitle>
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
        <Button type="submit" variant="contained">儲存</Button>
      </DialogActions>
    </Dialog>
  </>
}

export default EditService;