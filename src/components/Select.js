import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ControlledOpenSelect({selectedValue, setSelectedValue, menuItems, label, id}) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(menuItems);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id={'label' + id.toString()} shrink={true}> {label} </InputLabel>
        <Select
          labelId={"label" + id.toString()} 
          id={id}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedValue}
          label="Age"
          onChange={handleChange}
        >
        { menuItems.map((element, index) => <MenuItem key={index} value={element.id}>{element.label.toString()}</MenuItem> )}
        </Select>
      </FormControl>
    </div>
  );
}