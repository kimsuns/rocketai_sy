// import { COL_LABELS, ROW_LABELS } from "../lib/types";

// export interface SajuData {
//   time: string;
//   day: string;
//   month: string;
//   year: string;
// }

// export interface Saju {
//   sipseong1: SajuData;
//   cheongan: SajuData;
//   jiji: SajuData;
//   sipseong2: SajuData;
//   sipiunseong: SajuData;
//   sipisinsal: SajuData;
//   gwiin: SajuData;
// }

// export interface SajuProps {
//   id: string;
//   name: string;
//   birth: string;
//   time: string;
//   saju: Saju;
// }

// const saju_col = ["time", "day", "month", "year"];
// const saju_row = [
//   "sipseong1",
//   "cheongan",
//   "jiji",
//   "sipseong2",
//   "sipiunseong",
//   "sipisinsal",
//   "gwiin",
// ];

// export default function Saju2({ data }: SajuProps) {
//   const { name, birth, time, saju } = data;
//   const currentLang = "hanja";
//   console.log("사주", saju);
//   return (
//     <div className="flex flex-col items-center p-5 border-3">
//       <div>
//         <p>{name}님의 사주</p>
//         <p>
//           {birth} {time}
//         </p>
//       </div>

//       {/* 사주테이블 */}
//       <div>
//         <div className={`grid grid-cols-${saju_col.length + 1}`}>
//           <div className="border-r-2 border-b-2 border-black"></div>
//           {saju_col.map((colKey, index) => {
//             const isLastCol = index === saju_col.length - 1;
//             const borderRightColor = isLastCol
//               ? "border-r-2 border-black"
//               : "border-r border-gray-400";
//             return (
//               <div
//                 key={colKey}
//                 className={`p-2 text-lg font-semibold text-center border-b-2 border-b-black  ${borderRightColor}`}
//               >
//                 {COL_LABELS[colKey][currentLang]}
//               </div>
//             );
//           })}

//           {/* 데이터 행 */}
//           {saju_row.map((rowKey, rowIndex) => {
//             // 천간 & 지지 사이 회색줄
//             const isCheonganRow = rowKey === "cheongan";
//             const isNextRowJiji = saju_row[rowIndex + 1] === "jiji";
//             const nextBorderBottomGray =
//               isCheonganRow && isNextRowJiji
//                 ? "border-b border-gray-400"
//                 : "border-b-2 border-b-black";
//             return (
//               <>
//                 <div
//                   className={`p-1 text-center border-r-2 border-r-black  ${nextBorderBottomGray} `}
//                 >
//                   <div className="text-sm">
//                     {ROW_LABELS[rowKey][currentLang]}
//                   </div>
//                   <div className="text-xs">{ROW_LABELS[rowKey]["kr"]}</div>
//                 </div>
//                 {saju_col.map((colKey, colIndex) => {
//                   const value = saju[rowKey]?.[colKey] ?? "-";
//                   const isLastCol = colIndex === saju_col.length - 1;
//                   const borderRightColor = isLastCol
//                     ? "border-r-2 border-r-black"
//                     : "border-r border-gray-400";
//                   return (
//                     <div
//                       key={`${rowKey}-${colKey}`}
//                       className={`p-1 text-center border-b ${nextBorderBottomGray} border-r ${borderRightColor} `}
//                     >
//                       {value}
//                     </div>
//                   );
//                 })}
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
