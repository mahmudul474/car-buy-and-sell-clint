import React, { useEffect, useState } from 'react';
import Loading from '../../Sheard/Loading/Loading';
import AllReportCard from './AllReportCard';

const AllReport = () => {

  const [allReports, setAllReports] = useState([])

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/allreportData`)
      .then(res => res.json())
      .then(data => {
        setAllReports(data)
        setLoader(false)
      })
      .catch(error => console.log(error))
  }, [allReports])

  if (loader) {
    return <Loading />
  }

  const handleReportDelete = (id) => {
    const proceed = window.confirm("Are you sure deleting your Buyer");
    if (proceed) {
      fetch(`http://localhost:5000/allReportDelete/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.error(e))
    }

  }

  return (
    <div>
      <div className='container mt-3 mb-3'>

        <h3 className='text-center'>All Report List</h3>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {
            allReports.map(allReport => <AllReportCard
              key={allReport._id}
              allReportData={allReport}
              handleReportDelete={handleReportDelete}
            ></AllReportCard>)
          }

        </div>

      </div>
    </div>
  );
};

export default AllReport;