import SajuTable from "../components/SajuTable";
import { SajuAllType } from "../lib/types";

export default function Saju({ data }: { data: SajuAllType }) {
  const { name, birth, born } = data;
  return (
    <div className="relative flex flex-col items-center p-5 border-3 w-full bg-[#F5F3EC]">
      {/* 수평 라인을 맨 바깥 보더까지 확장하는 가로선 - 절대 위치 */}
      <div className="absolute top-[5px] left-0 right-0 h-0 border-t-[1px] border-[#0D2B4D] z-20"></div>
      {/* 하단 가로선 */}
      <div className="absolute bottom-[5px] left-0 right-0 h-0 border-t-[1px] border-[#0D2B4D] z-20"></div>
      {/* 왼쪽 세로줄 연장 */}
      <div className="absolute top-0 bottom-0 left-[5px] w-0 border-l-[1px] border-[#0D2B4D]"></div>
      {/* 오른쪽 세로줄 연장 */}
      <div className="absolute top-0 bottom-0 right-[5px] w-0 border-r-[1px] border-[#0D2B4D]"></div>
      <div className="absolute top-[45px] left-[5px]">
        <img src={"/assets/layer_left.svg"} alt="레이어" width="full" />
      </div>
      <div className="absolute top-[26px] right-[5px]">
        <img src={"/assets/layer_right.svg"} alt="레이어" width="full" />
      </div>

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
