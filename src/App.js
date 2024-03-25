import logo from './logo.svg';
import './App.css';
import ProgressBar from './progress';
import InfiniteScroll from './infiniteScroll';
import Search from './search';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Stepper } from './stepper';
import Otp from './react-otp';
import ShowText from './showText';
import ShowDiv from './showDiv';
import WallClock from './clock';
import AutoCompleteInput from './autoComplete';
import MultiSearchInput from './multi-search';

function App() {
  const MainContext = React.createContext();
  const [text, setText] = useState('');
  const textVal = {}
  return (<>
    {/* <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Parent Name</TableCell>
            <TableCell>Children</TableCell>
            <TableCell>snbnsd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parentData.map((parentRow, parentIndex) => (
            <TableRow key={parentIndex}>
              <TableCell>{parentRow.parentName}</TableCell>
              <TableCell>
                <Table>
                  <TableBody>
                    {parentRow.children.map((childRow, childIndex) => (
                      <TableRow key={childIndex}>
                        <TableCell>{childRow.childName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Search /> */}
    {/* <WallClock/> */}
    {/* <Stepper />
    <ProgressBar />
    <Otp/> */}
    <MultiSearchInput />
  </>
  );
}

export default App;
