// import { COL_LABELS, MOCK_SAJU, ROW_LABELS } from "../lib/types";
// import { Saju, SajuProps } from "../views/Saju2";

// export default function SajuTable2({ data }: { data: Saju }) {
//   // const { id, name, birth, time, saju } = data;
//   const currentLang = "hanja";

//   const saju_col = ["time", "day", "month", "year"];
//   const saju_row = [
//     "sipseong1",
//     "cheongan",
//     "jiji",
//     "sipseong2",
//     "sipiunseong",
//     "sipisinsal",
//     "gwiin",
//   ];

//   console.log("받은데이터", data);

//   // const getCellClass = (isLastCol, isCheonganRow, isNextRowJiji) => {
//   //   const vertical = isLastCol
//   //     ? "border-r-2 border-r-black"
//   //     : "border-r border-r-gray-400";

//   //   const horizontal =
//   //     isCheonganRow && isNextRowJiji
//   //       ? "border-b border-b-gray-400"
//   //       : "border-b-2 border-b-black";

//   //   const classValue = `p-2 text-sm text-center ${vertical} ${horizontal}`;
//   //   return classValue;
//   // };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr className="">
//             <th className="border-r-2 border-b-2 border-black"></th>
//             <th className="border-r-1 border-b-2 border-black">
//               {COL_LABELS.time[currentLang]}
//             </th>

//             <th className="border-r-1 border-b-2 border-black">
//               {COL_LABELS.day[currentLang]}
//             </th>

//             <th className="border-r-1 border-b-2 border-black">
//               {COL_LABELS.month[currentLang]}
//             </th>
//             <th className="border-r-2 border-b-2 border-black">
//               {COL_LABELS.year[currentLang]}
//             </th>

//             {/* {saju_col.map((colKey, index) => {
//               const isLastCol = index === saju_col.length - 1;
//               const borderRightColor = isLastCol
//                 ? "border-r-2 border-black"
//                 : "border-r border-gray-400";
//               return (
//                 <th
//                   key={colKey}
//                   className={`p-2 text-lg font-semibold text-center border-b-2 border-b-black  ${borderRightColor}`}
//                 >
//                   {COL_LABELS[colKey][currentLang]}
//                 </th>
//               );
//             })} */}
//           </tr>
//         </thead>
//         <tbody>
//           {/* {MOCK_SAJU[0].saju.map((item) => {
//                 let ret = <tr></tr>

//                 if(item.time.category == "십성"){
//                     ret =TRCM(ITEM)
//                 }
//                 else if( item.time.category ="WLWL"
//  <tr>
//                       <td>{item.time.haja}</td>
//                       <td>{item.time.haja}</td>
//                       <td>{item.time.haja}</td>
//                       <td>{item.time.haja}</td>
//                     </tr>
//                 )
//             return ret;
//           })} */}

//           {/* {saju_row.map((rowKey, rowIndex) => {
//             // 천간 & 지지 사이 회색줄
//             const isCheonganRow = rowKey === "cheongan";
//             const isNextRowJiji = saju_row[rowIndex + 1] === "jiji";
//             const nextBorderBottomGray =
//               isCheonganRow && isNextRowJiji
//                 ? "border-b border-gray-400"
//                 : "border-b-2 border-b-black";
//             return (
//               <tr>
//                 <th
//                   className={`p-1 text-center border-r-2 border-r-black  ${nextBorderBottomGray} `}
//                 >
//                   <div className="text-sm">
//                     {ROW_LABELS[rowKey][currentLang]}
//                   </div>
//                   <div className="text-xs">{ROW_LABELS[rowKey]["kr"]}</div>
//                 </th>

//                 {saju_col.map((colKey, colIndex) => {
//                   const value = data[rowKey]?.[colKey] ?? "-";
//                   const isLastCol = colIndex === saju_col.length - 1;
//                   const borderRightColor = isLastCol
//                     ? "border-r-2 border-r-black"
//                     : "border-r border-gray-400";

//                   console.log("벨류값", data[rowKey]);
//                   return (
//                     <th
//                       key={`${rowKey}-${colKey}`}
//                       className={`p-1 text-center border-b ${nextBorderBottomGray} border-r ${borderRightColor} `}
//                     >
//                       {value}
//                     </th>
//                   );
//                 })}
//               </tr>
//             );
//           })} */}
//         </tbody>
//       </table>
//     </div>
//   );
// }
