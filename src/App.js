import logo from './logo.svg';
import './App.css';
import ProgressBar from './progress';
import InfiniteScroll from './infiniteScroll';
import Search from './search';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function App() {
  const parentData = [
    { parentName: 'Parent 1', children: [{ childName: 'Child 1.1' }, { childName: 'Child 1.2' }] },
    { parentName: 'Parent 2', children: [{ childName: 'Child 2.1' }, { childName: 'Child 2.2' }] },
    { parentName: 'Parent 3', children: [{ childName: 'Child 2.1' }, { childName: 'Child 2.2' }] },
  ];

  return (
    <TableContainer component={Paper}>
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
  );
}

export default App;
