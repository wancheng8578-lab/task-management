'use client';

import React, { ReactNode } from 'react';
import { utils } from '@/lib';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import { CSSProperties } from '@mui/material/styles';

type Data = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  colspan?: number;
}[][];

type Table = {
  className?: string;
  style?: CSSProperties;
  headers: Data;
  content: Data;
  classNameTable?: string;
};

const Component = ({
  className,
  classNameTable,
  style,
  headers = [],
  content = [],
}: Table) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () => content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, content],
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classNameTable}>
        <TableHead>
          {headers.map((row, index) => {
            return (
              <TableRow key={`row-${index}`}>
                {row.map(({ children, className, style, colspan }, index1) => {
                  return (
                    <TableCell
                      key={`col-${index1}`}
                      className={utils.cn(
                        `py-0 pb-2 align-top`,
                        index !== 0 && `pt-2`,
                        index1 !== 0 && `pl-2`,
                        className,
                      )}
                      style={style}
                      colSpan={colspan}
                    >
                      {children}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        <TableBody>
          {visibleRows.map((row, index) => {
            return (
              <TableRow key={`row-${index}`}>
                {row.map(({ children, className, style, colspan }, index1) => {
                  return (
                    <TableCell
                      key={`col-${index1}`}
                      className={utils.cn(
                        `align-top`,
                        index !== 0 && `pt-2`,
                        index1 !== 0 && `pl-2`,
                        className,
                      )}
                      style={style}
                      colSpan={colspan}
                    >
                      {children}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={content.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export { Component };
