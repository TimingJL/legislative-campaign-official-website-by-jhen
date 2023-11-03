import catFirst from 'src/assets/images/event-cat-first.png';
import model from 'src/assets/images/event-model.png';
import street from 'src/assets/images/event-street.png';

export const events = [
  {
    id: 0,
    pin: true,
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    description: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    imgSrc: catFirst,
    date: "2023/12/26",
  },
  {
    id: 1,
    pin: false,
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    description: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    imgSrc: street,
    date: "2023/12/24"
  },
  {
    id: 2,
    pin: false,
    title: "收容所模特兒大比拼！",
    description: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    imgSrc: model,
    date: "2023/12/20"
  },
];
