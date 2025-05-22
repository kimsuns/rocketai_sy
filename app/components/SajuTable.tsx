import { COL_LABELS, SajuAllType } from "../lib/types";
import SajuBlock from "./SajuBlock";

export default function SajuTable({ data }: { data: SajuAllType }) {
  const currentLang = "hanja";

  console.log("받은데이터", data);

  return (
    <div>
      <table className="table-fixed w-full h-full text-center">
        <thead>
          <tr style={{ fontSize: "clamp(4px, 4vw, 20.92px)" }}>
            <th className="border-r-2 border-b-2 border-black"></th>
            <th className="border-r-1  border-r-gray-300 border-b-2 border-black h-full">
              {COL_LABELS.time[currentLang]}
            </th>

            <th className="border-r-1   border-r-gray-300 border-b-2 border-black">
              {COL_LABELS.day[currentLang]}
            </th>

            <th className="border-r-1  border-r-gray-300 border-b-2 border-black">
              {COL_LABELS.month[currentLang]}
            </th>
            <th className="border-r-2 border-b-2 border-black">
              {COL_LABELS.year[currentLang]}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.saju.map((item, index) => {
            const bottomBorder =
              item.category.ko === "천간"
                ? "border-b-1 border-b-gray-300"
                : "border-b-2";
            return (
              <tr key={index} className="">
                <th className={`border-r-2 ${bottomBorder} border-black`}>
                  <div className="flex flex-col">
                    <div style={{ fontSize: "clamp(4px, 4vw, 12px)" }}>
                      {item.category.hanja}
                    </div>
                    <div style={{ fontSize: "clamp(4px, 4vw, 7.82px)" }}>
                      ({item.category.ko})
                    </div>
                  </div>
                </th>
                <td
                  className={`border-r-1 border-r-gray-300 ${bottomBorder} border-black bg-white`}
                >
                  <SajuBlock data={item.time} />
                </td>
                <td
                  className={`border-r-1  border-r-gray-300 ${bottomBorder} border-black bg-white`}
                >
                  <SajuBlock data={item.day} />
                </td>
                <td
                  className={`border-r-1  border-r-gray-300 ${bottomBorder} border-black bg-white`}
                >
                  <SajuBlock data={item.month} />
                </td>
                <td
                  className={`border-r-2 ${bottomBorder} border-black bg-white`}
                >
                  {Array.isArray(item.year) ? (
                    <>
                      {item.year.map((dataItem, index) => (
                        <SajuBlock key={index} data={dataItem} />
                      ))}
                    </>
                  ) : (
                    <SajuBlock data={item.year} />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
