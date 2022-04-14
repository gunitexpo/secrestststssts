import whatColor from "../../helpers/whatColor";
import useWindowDimensions from "../../helpers/screenDimentions"
const FinallAvgGrade = ({ grade, isForTable = false }) => {
  const tableStylesWrraper = { display: "flex", justifyContent: "center" };
  const {width} = useWindowDimensions();
  
  const cardsStylesWrraper = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    transform: width > 1125 ? "translateX(-40px)"  :"translate(-40px,-25px)",
  };

  const cardsStylesCircle = {
    borderRadius: "90px",
    color: "#7A55B5",
    background: "white",
    width: width > 1125 ? "60px" : "80px",
    height: width > 1125 ? "60px" : "80px",
    boxShadow: "0 0 3px #DED5ED",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    margin : width > 1125 ?  "" : "2px auto",
    padding : width > 1125 ? "" : "10px"
  };

  const tableStylesCircle = {
    borderRadius: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: whatColor(grade),
    width: "50px",
    height: "50px",
    padding: "10px",
    boxShadow: "0 0 4px black",
    margin: "3px 0",
  };

  return (
    <div style={isForTable ? tableStylesWrraper : cardsStylesWrraper}>
      <div style={isForTable ? tableStylesCircle : cardsStylesCircle}>
        {grade}
      </div>
    </div>
  );
};

export default FinallAvgGrade;
