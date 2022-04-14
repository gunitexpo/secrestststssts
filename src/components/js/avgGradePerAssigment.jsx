import "../css/avgGradePerAssigment.css";
import whatColor from "../../helpers/whatColor";
const AssigmentsBadge = ({ assigment, index, isForMobileTable }) => {
 
  
  return (
    <div className="avg-grade-per-assigment-center">
      <div
      style={{background : whatColor(assigment.classAverage)}}
        className={
          isForMobileTable
            ? "avg-grade-per-assigment-mobile-table"
            : "avg-grade-per-assigment"
        }
      >
        {assigment.classAverage && assigment.classAverage}
      </div>
      <h4 style={{ margin: "auto" }}># {index && index}</h4>
    </div>
  );
};





const AvgGradePerAssigment = ({
  lessons,
  isForMobileTable,
  ...htmlAttributes
}) => {
  return (
    <div
      className={
        isForMobileTable
          ? "avg-grade-per-assigment-wrraper-mobile-table"
          : "avg-grade-per-assigment-wrraper"
      }
      {...htmlAttributes}
    >
      {lessons.map((assigment, index) => {
        return (
          <AssigmentsBadge
            isForMobileTable={isForMobileTable}
            assigment={assigment}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AvgGradePerAssigment;
export { AssigmentsBadge };
