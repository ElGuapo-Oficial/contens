"use client"

import { useState } from 'react';
import styles from "./page.module.css";
import MyBox from "@/components/box/box";
import Image from 'next/image';
import { IContainer } from '../../data/containersData';
import Pagination from '@mui/material/Pagination';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';

//filter combo
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Theme, useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const names = [
  'Precio: Menor a Mayor',
  'Precio: Mayor a Menor',
  'Tamaño: Menor a Mayor',
  'Tamaño: Mayor a Menor',
  'Nuevos arribos',
];

import containerData from '../../data/containersData';

const minDistance = 10;

function valuetext(value: number) {
  return `${value}°C`;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Home() {
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const [personName, setPersonName] = useState<string[]>([]);
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div style={{width: '100%'}}>
      {/* The Select */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="OrdenarPor" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* The Main Area  */}
      <div className={styles.main}>
        <div className={styles.filters}>
          <MyBox title={'Identificador'}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Id" variant="outlined" size="small" />
            </Box>
          </MyBox>
          <MyBox title={'Tamaño'}>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Todos" />
              <FormControlLabel control={<Checkbox />} label="20ft" />
              <FormControlLabel control={<Checkbox />} label="40ft" />
              <FormControlLabel control={<Checkbox />} label="45ft" />
            </div>
          </MyBox>
          <MyBox title={'Precio'} >
            <div>
              <div style={{ padding: "20px" }}>
                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </div>
            </div>
          </MyBox>
          <MyBox title={'Venta o Renta'}>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Todos" />
              <FormControlLabel control={<Checkbox />} label="Venta" />
              <FormControlLabel control={<Checkbox />} label="Renta" />
            </div>
          </MyBox>
          <MyBox title={'Estado'}>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="E1" />
              <FormControlLabel control={<Checkbox />} label="E2" />
              <FormControlLabel control={<Checkbox />} label="E3" />
            </div>
          </MyBox>
        </div>
        <div className={styles.items}>
          {containerData.map((item, index) => <div className={styles.gridItem}><MyBox key={item.id} title={`Box-${index + 1}`}><Card cardData={item} /></MyBox></div>)}
        </div>
      </div>
      {/* The Pagination  */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '35px' }}>
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

interface CardProps {
  cardData: IContainer;  // Replace 'any' with a more specific type as needed
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className={styles.card}>
      {/* <div style={{ backgroundColor: 'yellow' }}> */}
      <div>
        <Image
          src={cardData.image}
          alt="Responsive Image"
          width={200}
          height={200}
        />
      </div>
      <div style={{ marginLeft: '5px' }}>
        <TextField
          id="standard-read-only-input"
          label="Identificador"
          defaultValue={cardData.id}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          size="small"
        />
        {/* <div>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            size="small"
          />
        </div> */}
        <TextField
          id="standard-read-only-input"
          label="Tamaño"
          defaultValue={`${cardData.size.height}ft x ${cardData.size.width}ft x ${cardData.size.length}ft`}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          size="small"
        />
        <TextField
          id="standard-read-only-input"
          label="Estado"
          defaultValue={cardData.condition}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          size="small"
        />
        <TextField
          id="standard-read-only-input"
          label="Disponibilidad"
          defaultValue={cardData.availability}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          size="small"
        />
        {/* <TextField
          id="standard-read-only-input"
          label="Precio"
          defaultValue={`$ ${cardData.price}`}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          size="small"
        /> */}
        <div style={{margin: '10px'}}>
          <Chip label={`  $${cardData.price}  `} color="error" />
        </div>
      </div>
    </div>
  )
}