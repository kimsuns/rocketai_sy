// 라벨별 언어 데이터
export const COL_LABELS = {
  time: {
    hanja: "時",
    ko: "시간",
  },
  day: {
    hanja: "日",
    ko: "일간",
  },
  month: {
    hanja: "月",
    ko: "월간",
  },
  year: {
    hanja: "年",
    ko: "연간",
  },
};

// export const ROW_LABELS = {
//   sipseong1: { hanja: "十星1", kr: "십성" },
//   cheongan: { hanja: "天干", kr: "천간" },
//   jiji: { hanja: "地支", kr: "지지" },
//   sipseong2: { hanja: "十星2", kr: "십성" },
//   sipiunseong: { hanja: "十二運星", kr: "십이운성" },
//   sipisinsal: { hanja: "十二神煞", kr: "십이신살" },
//   gwiin: { hanja: "貴人", kr: "귀인" },
// };

// 더미 데이터
// export const MOCK_SAJU_Gu = [
//   {
//     id: "1",
//     name: "김선영",
//     birth: "1980.8.27",
//     time: "08:10",
//     saju: {
//       sipseong1: {
//         time: { han: "상관", ko: "" },
//         day: "비견",
//         month: "상관",
//         year: "상관",
//       },
//       cheongan: {
//         time: "1",
//         day: "2",
//         month: "3",
//         year: "4",
//       },
//       jiji: {
//         time: "5",
//         day: "6",
//         month: "7",
//         year: "8",
//       },
//       sipseong2: {
//         time: "9",
//         day: "10",
//         month: "11",
//         year: "12",
//       },
//       sipiunseong: {
//         time: "13",
//         day: "14",
//         month: "15",
//         year: "16",
//       },
//       sipisinsal: {
//         time: "17",
//         day: "18",
//         month: "19",
//         year: "20",
//       },
//       gwiin: {
//         time: "21",
//         day: "22",
//         month: "23",
//         year: "24",
//       },
//     },
//   },
// ];

export interface SajuDetailType {
  hanja?: string;
  ko?: string;
  topKo?: string;
  midHanja?: string;
  botHanja?: string;
  color?: string;
}

export interface SajuOneType {
  category: SajuDetailType;
  time: SajuDetailType | null;
  day: SajuDetailType | null;
  month: SajuDetailType;
  year: SajuDetailType | SajuDetailType[];
}
export interface SajuAllType {
  id: string;
  name: string;
  birth: Date;
  born: string;
  saju: SajuOneType[];
}

export const MOCK_SAJU: SajuAllType[] = [
  {
    id: "1",
    name: "김선영",
    birth: new Date("1980-08-27T08:10:00"),
    born: "08:10",
    saju: [
      {
        category: { hanja: "十星", ko: "십성" },
        time: { hanja: "傷官", ko: "상관" },
        day: { hanja: "比肩", ko: "비견" },
        month: { hanja: "傷官", ko: "상관" },
        year: { hanja: "傷官", ko: "상관" },
      },
      {
        category: { hanja: "天干", ko: "천간" },
        time: {
          topKo: "임",
          midHanja: "壬",
          botHanja: "陽水",
          color: "#2F2F2F",
        },
        day: {
          topKo: "정",
          midHanja: "丁",
          botHanja: "陰火",
          color: "#C23030",
        },
        month: {
          topKo: "계",
          midHanja: "癸",
          botHanja: "陰水",
          color: "#2F2F2F",
        },
        year: {
          topKo: "계",
          midHanja: "癸",
          botHanja: "陰水",
          color: "#2F2F2F",
        },
      },
      {
        category: { hanja: "地支", ko: "지지" },
        time: {
          topKo: "인",
          midHanja: "寅",
          botHanja: "陽木",
          color: "#18868C",
        },
        day: {
          topKo: "사",
          midHanja: "巳",
          botHanja: "陰火",
          color: "#C23030",
        },
        month: {
          topKo: "해",
          midHanja: "亥",
          botHanja: "陰水",
          color: "#292929",
        },
        year: {
          topKo: "유",
          midHanja: "酉",
          botHanja: "陰金",
          color: "#F9F9F9",
        },
      },

      {
        category: { hanja: "十星", ko: "십성" },
        time: { hanja: "比肩", ko: "비견" },
        day: { hanja: "劫財", ko: "겁재" },
        month: { hanja: "食神", ko: "식신" },
        year: { hanja: "偏財", ko: "편재" },
      },
      {
        category: { hanja: "十二運星", ko: "십이운성" },
        time: { hanja: "死", ko: "사" },
        day: { hanja: "帝旺", ko: "제왕" },
        month: { hanja: "胎", ko: "태" },
        year: { hanja: "長生", ko: "장생" },
      },
      {
        category: { hanja: "十二神殺", ko: "십이신살" },
        time: { hanja: "劫殺", ko: "겁살" },
        day: { hanja: "地殺", ko: "지살" },
        month: { hanja: "驛馬殺", ko: "역마살" },
        year: { hanja: "將星殺", ko: "장성살" },
      },
      {
        category: { hanja: "貴人", ko: "귀인" },
        time: null,
        day: null,
        month: { hanja: "天乙", ko: "천을귀인" },
        year: [
          { hanja: "天乙", ko: "천을귀인" },
          { hanja: "太極", ko: "태극귀인" },
          { hanja: "文昌", ko: "문창귀인" },
        ],
      },
    ],
  },
];
