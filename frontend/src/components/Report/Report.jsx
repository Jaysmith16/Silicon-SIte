import React, { useState } from "react";
import "./Report.css";
import { useLazyGetSubjectBySemQuery } from "../../services/subjectfacultyapi";
import { getToken } from "../../services/LocalStorage";
const Report = () => {
  const token = getToken();
  const [sem, setsem] = useState(-1);
  const [trigger, { data, isSuccess }] = useLazyGetSubjectBySemQuery(
    {
      access_token: token.access_token,
      sem: sem,
    },
    { refetchOnMountOrArgChange: true }
  );
  const downloadreport = (sem) => {
    setsem(sem);
    trigger({
      access_token: token.access_token,
      sem: sem,
    });
    if (isSuccess) {
      const XLSX = require("xlsx");
      const allocation_data = [];
      function myFunction(item, index) {
        let a_data = {
          subject_name: item.name,
          faculty_allocated: item.faculty_allocated
            ? item.faculty_allocated
            : "No Faculty allocated yet",
        };
        allocation_data.push(a_data);
      }
      data.data.forEach(myFunction);
      let binaryWS = XLSX.utils.json_to_sheet(allocation_data);

      // Create a new Workbook
      var wb = XLSX.utils.book_new();

      // Name your sheet
      XLSX.utils.book_append_sheet(wb, binaryWS, "Binary values");

      // export your excel
      XLSX.writeFile(wb, `Sem${sem}_report.xlsx`);
    }
  };

  return (
    <div className="report69">
      <div className="container69">
        <p>SEMESTER 1</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(1)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 2</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(2)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 3</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(3)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 4</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(4)}
        />
      </div>

      <div className="container69">
        <p>SEMESTER 5</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(5)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 6</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(6)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 7</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(7)}
        />
      </div>
      <div className="container69">
        <p>SEMESTER 8</p>
        <input
          type="button"
          className="btn69"
          value="Download"
          onClick={() => downloadreport(8)}
        />
      </div>
    </div>
  );
};

export default Report;
