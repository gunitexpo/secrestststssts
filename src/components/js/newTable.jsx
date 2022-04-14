import { useEffect, useState } from "react";
import "../css/newTable.css";
import AvgGradePerAssigment from "./avgGradePerAssigment";
import FinallAvgGrade from "./finallAvgGrade";
import useWindowDimensions from "../../helpers/screenDimentions";

const TableCell = ({ data, isLessons, isHeader, isMobile, isAverage, isBordered }) => {
  const handleClick = (e) => {
    e.target.parentElement.lastChild.style.display === "flex"
      ? (e.target.parentElement.lastChild.style.display = "none")
      : (e.target.parentElement.lastChild.style.display = "flex");
  };

  if (isAverage) {
    return (
      <div className={isHeader ? "header-cell" : "table-cell"}>
        <FinallAvgGrade isForTable grade={data} />
      </div>
    );
  } else if (!isLessons) {
    return (
      <div className={isHeader ? "header-cell" : "table-cell"}>{data}</div>
    );
  } else {
    if (isMobile) {
      return (
        <div className="table-cell-lessons">
          <button onClick={handleClick}>Click</button>
          <AvgGradePerAssigment
            isForMobileTable
            style={{ display: "none" }}
            lessons={data}
          />
        </div>
      );
    } else {
      return (
        <div className="table-cell-lessons">
          <AvgGradePerAssigment lessons={data} />
        </div>
      );
    }
  }
};

const TableRow = ({ row, isMobile, index, isHeader }) => {
  //check if the row is the table head
  if (isHeader) {
    //if the row is the table head check if its a mobile version ot not
    if (isMobile) {
      return (
        <div className="table-header">
          <TableCell isMobile={isMobile} isHeader data={row.lessons} />
          <TableCell isMobile={isMobile} isHeader data={row.average} />
          <TableCell isMobile={isMobile} isHeader data={row.studentsCount} />
          <TableCell isMobile={isMobile} isHeader data={row.schoolName} />
          <TableCell
            isMobile={isMobile}
            isHeader
            data={row.place ? row.place : index}
          />
        </div>
      );
    } else {
      return (
        <div className="table-header">
          <TableCell isMobile={isMobile} isHeader data={row.average} />
          <TableCell isMobile={isMobile} isHeader data={row.lessons} />
          <TableCell isMobile={isMobile} isHeader data={row.studentsCount} />
          <TableCell isMobile={isMobile} isHeader data={row.name} />
          <TableCell isMobile={isMobile} isHeader data={row.schoolName} />
          <TableCell
            isMobile={isMobile}
            isHeader
            data={row.place ? row.place : index}
          />
        </div>
      );
    }
  } else {
    if (isMobile) {
      return (
        <div className="table-row">
          <TableCell isMobile={isMobile} isLessons data={row.lessons} />
          <TableCell isMobile={isMobile} isAverage data={row.average} />
          <TableCell isMobile={isMobile} data={row.studentsCount} />
          <TableCell isMobile={isMobile} data={row.schoolName} />
          <div className="mobile-place">{index}</div>
        </div>
      );
    } else {
      return (
        <div className="table-row">
          <TableCell isMobile={isMobile} isAverage data={row.average} />
          <TableCell isMobile={isMobile} isLessons data={row.lessons} />
          <TableCell isMobile={isMobile} data={row.studentsCount} />
          <TableCell isMobile={isMobile} data={row.name} />
          <TableCell isMobile={isMobile} data={row.schoolName} />
          <TableCell isBordered isMobile={isMobile} data={index} />
        </div>
      );
    }
  }
};

const LeadersTable = ({ rows, isMobile }) => {
  const [dataInfo, setDataInfo] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDataInfo(rows);
  }, [rows]);

  const onFinish = (text) => {
    const filteredData = dataInfo.filter((item) =>
      item.schoolName.includes(text.target.value)
    );
    if (text.target.value !== "") {
      setDataInfo(filteredData);
    } else {
      setDataInfo(rows);
    }
  };

  const columns = isMobile
    ? {
        lessons: "מטלות",
        average: "ציון ממוצע",
        studentsCount: "תלמידים",
        name: "כיתה",
        schoolName: "שם בית ספר",
      }
    : {
        place: "מקום",
        lessons: "ציון ממוצע למטלה",
        average: "ציון ממוצע",
        studentsCount: "תלמידים",
        name: "כיתה",
        schoolName: "שם בית ספר",
      };

  return (
    <>
      <div id="search-wrapper">
        <input
          onBlur={onFinish}
          id="search-input"
          placeholder={"חיפוש לפי בית ספר או עיר"}
          type={"text"}
        />
        {width > 1125 ? (
          <button
            className="search-button"
            onClick={() => {
              let id = document.getElementById("search-input");
              id.value = null;
              setDataInfo(rows);
            }}
          >
            נקה חיפוש
          </button>
        ) : (
          ""
        )}
        {width > 1125 ? (
          <h3 className="participating-classes-table-header">
            :כל בתי הספר המשתתפים
          </h3>
        ) : (
          ""
        )}
      </div>
      <div className="table">
        <TableRow isHeader isMobile={isMobile} row={columns} />
        {rows.map((row, index) => {
          return (
            <TableRow index={index} key={index} isMobile={isMobile} row={row} />
          );
        })}
      </div>
    </>
  );
};

export { LeadersTable };
