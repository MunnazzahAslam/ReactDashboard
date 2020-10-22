import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  table: {
    minWidth: 350,
    alignItems:'center'
  },
});

function createData(id, vendor, api, usecase) {
  return {id, vendor, api, usecase };
}

const rows = [
  createData(1,'Vonage','Education','Colleges'),
  createData(2,'Bluebird','Entertainment','Cinema'),
  createData(3,'Sky','University','Library'),
  createData(4,'Vonage','Education','Colleges'),
  createData(5,'Bluebird','Entertainment','Cinema'),
  createData(6,'Sky','University','Library'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <Table className={classes.table} aria-label="simple table" style={{ width: '85%', margin: '50px' , backgroundColor:'white', borderRadius:'10px'}}>
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>API</TableCell>
            <TableCell>Usecase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.api}</TableCell>
              <TableCell>{row.usecase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
