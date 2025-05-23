import { SajuDetailType } from "../lib/types";

export default function SajuBlock({ data }: { data: SajuDetailType | null }) {
  if (!data)
    return (
      <div className="text-cente" style={{ fontSize: "clamp(4px, 4vw, 12px)" }}>
        (없음)
      </div>
    );
  const { hanja, ko, topKo, midHanja, botHanja, color } = data;

  // #F9F9F9

  const textColor = color === "#F9F9F9" ? "text-black" : "text-white";
  const border = color === "#F9F9F9" ? "border border-black" : "";

  return (
    <>
      {color ? (
        <div className="p-1 flex justify-center">
          <div
            className={`flex flex-col items-center rounded-[12.5px] ${textColor} ${border} w-[55.45px] p-1`}
            style={{ backgroundColor: color }}
          >
            <div
              className="mb-[-5px]"
              style={{ fontSize: "clamp(4px, 4vw, 7.6px)" }}
            >
              {topKo}
            </div>
            <div className="" style={{ fontSize: "clamp(4px, 4vw, 25.11px)" }}>
              {midHanja}
            </div>
            <div
              className="mt-[-5px]"
              style={{ fontSize: "clamp(4px, 4vw, 8.37px)" }}
            >
              {botHanja}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-1">
          <div
            className="font-semibold"
            style={{ fontSize: "clamp(4px, 4vw, 17px)" }}
          >
            {hanja}
          </div>
          <div
            className="mt-[-3px]"
            style={{ fontSize: "clamp(4px, 4vw, 12px)" }}
          >
            ({ko})
          </div>
        </div>
      )}
    </>
  );
}
