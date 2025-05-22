import SajuTable from "../components/SajuTable";
import { SajuAllType } from "../lib/types";

export default function Saju({ data }: { data: SajuAllType }) {
  const { name, birth, born } = data;
  return (
    <div className="flex flex-col items-center p-5 border-3 w-full bg-[#F5F3EC]">
      <div className="flex flex-col items-center pt-6 pb-6 w-full">
        <p style={{ fontSize: "clamp(7px, 4vw, 18px)" }}>{name}님의 사주</p>
        <p className="font-bold" style={{ fontSize: "clamp(7px, 5vw, 25px)" }}>
          {birth.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {born}
        </p>
      </div>
      <div>
        <SajuTable data={data} />
      </div>
    </div>
  );
}
