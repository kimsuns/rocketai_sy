import { MOCK_SAJU } from "./lib/types";
import Saju from "./views/Saju";

export default function Home() {
  const data = MOCK_SAJU[0];

  return (
    <div
      className={`flex flex-col items-center w-full max-w-md  bg-[#F5F3EC] `}
    >
      <div className="relative w-full">
        <img src={"/assets/Group1.svg"} alt="title" className="w-full" />
        <div
          className="absolute top-[85.5%] left-[35%] translate-x-[-50%] text-center leading-snug"
          style={{ fontSize: "clamp(7px, 4vw, 18px)" }}
        >
          이제 본격적으로
          <br />
          {data.name}님의 사주팔자를
          <br /> 분석해볼 차례네요.
        </div>
      </div>
      <div className="w-full">
        <img src={"/assets/Group2.svg"} alt="2" className="w-full pr-[7%]" />
      </div>
      <div
        className="relative w-full"
        style={{ transform: "translateY(-20%)" }}
      >
        <img src={"/assets/Group3.svg"} alt="3" className="w-full" />
        <div
          className="absolute top-[14%] left-[39%] translate-x-[-50%] text-center leading-snug "
          style={{ fontSize: "clamp(7px, 4vw, 18px)" }}
        >
          제가 {data.name}님의 사주를
          <br /> 보기 쉽게 표로 정리했어요
        </div>
        <div
          // ref={sajuRef}
          className="absolute w-full top-[92%] p-3 bottom-[clamp(10px,5vw,30px)]"
        >
          <Saju data={data} />
        </div>
      </div>
    </div>
  );
}
