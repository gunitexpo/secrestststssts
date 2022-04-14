import { useEffect, useState } from "react";
import useWindowDimensions from "../../helpers/screenDimentions";
import "../css/table.css";
import AvgGradePerAssigment from "./avgGradePerAssigment";
import FinallAvgGrade from "../js/finallAvgGrade";

const LeadersTable = ({ data, colums }) => {
  const [dataInfo, setDataInfo] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDataInfo(data);
  }, [data]);

  const onFinish = (text) => {
    const filteredData = dataInfo.filter((item) =>
      item.schoolName.includes(text.target.value)
    );
    if (text.target.value !== "") {
      setDataInfo(filteredData);
    } else {
      setDataInfo(data);
    }
  };

  const handleWatchTasks = (e) => {
    e.target.parentElement.lastChild.style.display === "flex"
      ? (e.target.parentElement.lastChild.style.display = "none")
      : (e.target.parentElement.lastChild.style.display = "flex");
  };

  return (
    <div className="table-component-wrraper">
      <div id="search-wrapper">
        {width > 900 ? (
          <h3 className="participating-classes-table-header">
            :כל בתי הספר המשתתפים
          </h3>
        ) : (
          ""
        )}
        <input
          onBlur={onFinish}
          id="search-input"
          placeholder="חיפוש לפי בית ספר או עיר"
          type={"text"}
        />
        {width > 900 ? (
          <button
            className="search-button"
            onClick={() => {
              let id = document.getElementById("search-input");
              id.value = null;
              setDataInfo(data);
            }}
          >
            נקה חיפוש
          </button>
        ) : (
          ""
        )}
      </div>

      <table id="table">
        <thead id="table-head">
          <tr id="table-head">
            {colums.map((column, index) => (
              <td key={index}>{column}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataInfo.map((row, index) => {
            if (width > 900) {
              return (
                <tr key={index}>
                  <td>{<AvgGradePerAssigment lessons={row.lessons} />}</td>
                  <td>{<FinallAvgGrade isForTable grade={row.average} />}</td>
                  <td>{row.studentsCount}</td>
                  <td>{row.name}</td>
                  <td>{row.schoolName}</td>
                  <td>{index}</td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <button onClick={handleWatchTasks}>צפייה במטלות</button>
                      <AvgGradePerAssigment isForMobileTable
                        lessons={row.lessons}
                      />
                    </div>
                  </td>
                  <td>{row.average}</td>
                  <td>{row.studentsCount}</td>
                  <td>{row.name}</td>
                  <td>{row.schoolName}</td>
                  <td>{index}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeadersTable;
