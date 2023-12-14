import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTable, usePagination } from "react-table";
import { Link, useNavigate } from 'react-router-dom';
import { deleteRecord, getAllRecords } from '../api/record';


const AllRecords = () => {

  const navigation = useNavigate();

  const [records, setRecords] = useState([]);
  const [size, setSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5);
  const [isPressed, setIsPressed] = useState(false);

  const getAllRecord = async () => {
    setRecords([]);
    const res = await getAllRecords(pageSize, currentPage);
    setRecords(res.data);
    setSize(res.totalRecords);
  }

  useEffect(() => {
    getAllRecord()
  }, [currentPage, pageSize])

  useEffect(() => {
    if (currentPage > Math.ceil(size / pageSize)) {
      setCurrentPage(1);
    }
  }, [records, size])

  const columns = useMemo(
    () => [
      { Header: `ID`, accessor: '_id' },
      { Header: `Developer Name`, accessor: 'developerName' },
      { Header: `Project Name`, accessor: 'projectName' },
      { Header: `Unit`, accessor: 'unit' },
      { Header: `Unit Type`, accessor: 'unitType' },
      { Header: `Location`, accessor: 'location' },
      { Header: `Action`, accessor: 'action' },
    ],
    []
  );

  const data = useMemo(() => records, [records]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useTable({ columns, data, manualPagination: true, }, usePagination);

  const handleNextPage = () => {
    if (currentPage <= Math.ceil(size / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage !== 0 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const gotoPageHandler = (pageNo) => {
    if (pageNo <= Math.ceil(size / pageSize) && pageNo > 0) {
      setCurrentPage(pageNo);
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  }

  const goToLastPage = () => {
    setCurrentPage(Math.ceil(size / pageSize))
  }

  const changePageSizeHandler = (pageSize) => {
    setPageSize(pageSize);
  }

  const handleNavigation = (navlink) => {
    navigation(navlink);
  }

  const handleDelete = async (id) => {
    const isSure = window.confirm("Are you sure you want to delete this record?")
    if (isSure) {
      setIsPressed(true);
      try {
        deleteRecord(id).then((data) => {
          console.log(data)
          setRecords(records.filter(record => record._id !== id))}
        )
      } catch (error) {

      }
      setTimeout(() => {
        setIsPressed(false);
      }, 1000);
    }
  }

  return (
    <>
      {data.length > 0 && <div className='d-flex flex-column align-items-center mt-5'>
        <table className='table table-hover table-striped' {...getTableProps()}>
          <thead style={{ borderBottom: '1px solid #6c757d' }} className='font-color' >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th scope='col' className='text-center' {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='' style={{ fontSize: '14px' }} >
            {page.map((row, i) => {
              prepareRow(row);
              const rowId = row.original._id;
              return (
                <tr className='py-4' {...row.getRowProps()} key={i}>
                  {row.cells.map((cell) => (
                    (cell.column.id === 'action' ? (
                      <td style={{ verticalAlign: 'center' }} className='text-center py-1'>
                        {/* <button disabled={isPressed} className='btn btn-outline-light mx-1 btn-sm'>Details</button>
                        <button disabled={isPressed} onClick={() => handleNavigation()} className='btn btn-outline-light mx-1 btn-sm'>Edit</button> */}
                        <button disabled={isPressed} onClick={() => handleDelete(rowId)} className='btn btn-outline-light mx-1 btn-sm'>Delete</button>
                      </td>) : (
                      <td style={{ verticalAlign: 'center' }} className='text-center ' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))
                  ))}
                </tr>
              );
            })}
          </tbody>
          <tfoot style={{}}></tfoot>
        </table>
        {/* Pagination controls */}
        <div className='font-color'>
          <button onClick={() => goToFirstPage()} disabled={currentPage === 1}>
            {'<<'}
          </button>
          <button onClick={() => handlePreviousPage()} disabled={currentPage === 1}>
            {'<'}
          </button>
          <button onClick={() => handleNextPage()} disabled={currentPage === Math.ceil(size / pageSize)}>
            {'>'}
          </button>
          <button onClick={() => goToLastPage()} disabled={currentPage === Math.ceil(size / pageSize)}>
            {'>>'}
          </button>
          <span className='ms-3'>
            {('page')}{' '}
            <strong>
              {currentPage} {('of')} {Math.ceil(size / pageSize)}
            </strong>{' '}
          </span>
          <span>
            | {('goto Page')}{' '}
            <input
              type="number"
              onWheel={() => document.activeElement.blur()}
              defaultValue={currentPage}
              onChange={(e) => {
                const pageNumber = Number(e.target.value);
                gotoPageHandler(pageNumber);
              }}
            />
          </span>
          <select
            className='ms-3'
            value={pageSize}
            onChange={(e) => {
              changePageSizeHandler(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {('show')} {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>}
    </>
  )
}

export default AllRecords