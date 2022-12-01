import React, { useState } from 'react';

const ReportModal = ({ cardates }) => {

  const { _id, model } = cardates;

  const [report, setReport] = useState([])

  const hanldeReport = (event) => {
    event.preventDefault()
    const form = event.target;
    const model = form.model.value;
    const id = form.id.value;

    const reportData = {
      model: model,
      id: id,
    }

    console.log(reportData)

    fetch('https://hea-easy-server-devsobuj910.vercel.app/reportData', {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(reportData)
    })
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(e => console.error(e))

  }

  return (

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form onSubmit={hanldeReport}>
              <input defaultValue={model} type="text" name="model" id="" readOnly />
              <br />
              <input defaultValue={_id} type="text" name="id" id="" readOnly />
              <br />
              <button type="submit" data-bs-dismiss="modal" class="btn btn-danger"> Report</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;