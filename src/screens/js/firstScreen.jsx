import LeadingClasses from "../../components/js/leadingClasses";
import { LeadersTable } from "../../components/js/newTable";
import useWindowDimensions from "../../helpers/screenDimentions";
import "../css/firstScreen.css";

//dummy data
const tableDummyData = [
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 90,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 94,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 92,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 90 },
      { classAverage: 90 },
      { classAverage: 70 },
      { classAverage: 90 },
      { classAverage: 80 },
    ],
  },
];

const cardsDummyData = [
  {
    average: 90,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 90,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 70,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 98,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: `כיתה ו 1 קרית גת`,
    schoolName: "בית הספר אגמים",
  },
  {
    average: 90,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 90,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 70,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 98,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: `כיתה ו 1 קרית גת`,
    schoolName: "בית הספר אגמים",
  },
  {
    average: 90,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 90,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 70,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 98,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: `כיתה ו 1 קרית גת`,
    schoolName: "בית הספר אגמים",
  },
];

const FirstScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="all-schools-list-button"
          onClick={() => {
            window.location.href = "/#table";
          }}
        >
          :כל בתי הספר המשתתפים
        </button>
      </div>

      <LeadingClasses classes={cardsDummyData} />

      <br></br>
      <br></br>

      <LeadersTable
        isMobile={width > 1125 ? false : true}
        rows={tableDummyData}
      ></LeadersTable>

      <br></br>
      <br></br>
    </>
  );
};

export default FirstScreen;
