import carImage1 from "../Assets/1.jpeg";
import carImage2 from "../Assets/2.jpeg";
import carImage3 from "../Assets/3.jpeg";

export const INITIAL_LINKS_CLICKED = {
  kaishajouhou: false,
  kaisharirekishi: false,
  services: false,
  contact: false,
};

export const LINK_CLICKED = {
  textStyle: "text-4xl text-white",
  borderStyle: "w-12 border-b border-white",
};
export const LINK_NOT_CLICKED = {
  textStyle: "text-lg text-gray-400",
  borderStyle: "w-24 border-b border-gray-400",
};

export const INFO = {
  //   kaishajouhou: `会社情報
  //   •会社住所
  //   〒663-8181
  //   兵庫県西宮市若草町１丁目３−１４
  //   •創業
  //   1971年
  //   •資本金
  //   1000万円
  //   •従業員
  //   5人`,
  //   kaisharirekishi: `会社の歴史
  //   •1971年創業
  //   ガソリンスタンド業を創業
  //   •1996年までに
  //   西宮、尼崎などに4店舗を展開
  //   •2016年から
  //   店舗ごとに株式化`,
  //   contact: `
  //   連絡先（できるだけ多い方がいい）
  // •hondy.tanso@icloud.com
  // •07043831177
  // •0798476154
  //   `,
  kaishajouhou: { heading: "kaisha jouhou" },
  kaisharirekishi: {
    heading: `会社の歴史`,
    content: [
      {
        heading: `1971年創業`,
        body: `ガソリンスタンド業を創業 `,
      },
      {
        heading: `1996年までに`,
        body: `西宮、尼崎などに4店舗を展開`,
      },
      {
        heading: `2016年から`,
        body: `店舗ごとに株式化`,
      },
    ],
  },
  services: { heading: "services" },
  contact: { heading: "contacts" },
};

export const IMAGES = [carImage1, carImage2, carImage1];
