import React from "react";
import DropDown from "./DropDown";

const JobList = ({ jobs, handleStatusChange, deleteJob }) => {
  return (
    <>
      <div className="container">
        <div className="list-container component-shadow">
          {jobs.map((item, index) => {
            return (
              <ul key={index} className="list ">
                <li className="list-items">
                  <div className="verify-steps-num">
                    <span>{index + 1}</span>
                  </div>
                </li>
                <li className="list-items">{item.company}</li>
                <li className="list-items">{item.jobTitle}</li>
                <li className="list-items">${item.salary}</li>
                <li className="list-items">{item.appliedAt.slice(0, 10)}</li>
                <li className="list-items">
                  <DropDown
                    status={item.status}
                    onChange={(e) =>
                      handleStatusChange(index, e.target.value, item.id)
                    }
                  />
                </li>
                <li className="list-items">
                  <button
                    key={item.id}
                    className="delete-btn"
                    onClick={() => deleteJob(item.id)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default JobList;
