import education from 'src/assets/images/education.png';
import entertainment from 'src/assets/images/entertainment.png';
import medical from 'src/assets/images/medical.png';

export const issues = [
  {
    id: 0,
    imgSrc: entertainment,
    title: '打造休閒天堂！\n推廣寵物休閒與娛樂場所',
    tag: '喵的福利',
    tagColor: '#BEEADB',
    items: [
      {
        id: 0,
        title: '設立寵物醫療基金',
        description: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
      },
      {
        id: 1,
        title: '提供醫療補助',
        description: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
      },
      {
        id: 2,
        title: '合作動物醫院',
        description: '目前已有和超過 200 家動物醫院進行初步的合作討論',
      },
    ]
  },
  {
    id: 1,
    imgSrc: medical,
    title: '為毛孩子謀福利！\n推動寵物醫療保障方案案',
    tag: '喵的保障',
    tagColor: '#F7ECE1',
    items: [
      {
        id: 0,
        title: '建立寵物公園',
        description: '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。',
      },
      {
        id: 1,
        title: '推廣寵物友善商家',
        description: '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。',
      },
      {
        id: 2,
        title: '舉辦寵物活動和工作坊',
        description: '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。',
      },
    ]
  },
  {
    id: 2,
    imgSrc: education,
    title: '推廣寵物飼養教育！\n讓愛更加專業',
    tag: '喵的教育',
    tagColor: '#FDD',
    items: [
      {
        id: 0,
        title: '建立寵物飼養教育中心',
        description: '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
      },
      {
        id: 1,
        title: '推廣寵物飼養課程',
        description: '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
      },
      {
        id: 2,
        title: '製作教育資料',
        description: '出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。',
      },
    ]
  },
];
