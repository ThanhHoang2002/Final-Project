export const getAllCategory = async () => {
  const response = [
    {
      CategoryCode: '50PERCENTOFF',
      CategoryName_VN: 'TIẾT KIỆM 50% PIZZA THỨ 2',
      CategoryName_EN: '50% OFF ON 2ND PIZZA',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/MIDDLE-VIE-800X556_202406091324020IL.jpeg',
      PhotoLink_EN:
        'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/MIDDLE-ENG-800X556_20240609224712AQ2.jpeg',
      orderby: '3',
      ComboComponent: true,
      Default_Cate: true,
      HomepageMenu: true
    },
    {
      CategoryCode: 'COMBO',
      CategoryName_VN: 'COMBO',
      CategoryName_EN: 'COMBO',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Mobile - Vie_20240711224730FFM.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Mobile - Eng_202407112247315IK.jpeg',
      orderby: '4',
      ComboComponent: true,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'PIZZA',
      CategoryName_VN: 'PIZZA',
      CategoryName_EN: 'PIZZA',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Pizza_20240206150200BFQ.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Pizza_202402061502019HU.jpeg',
      orderby: '11',
      ComboComponent: false,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'CHICKEN_LOVER',
      CategoryName_VN: 'GHIỀN GÀ',
      CategoryName_EN: 'CHICKEN LOVER',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Ghiền Gà-VIE_20240205152631ZY9.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Ghiền Gà-ENG_20240205152631S7G.jpeg',
      orderby: '12',
      ComboComponent: null,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'MYBOX_2023',
      CategoryName_VN: 'MY BOX',
      CategoryName_EN: 'MY BOX',
      PhotoLink:
        'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/800x556---mybox-pepsi system_20240509105159AMM.jpeg',
      PhotoLink_EN:
        'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/800x556---mybox-pepsi system_202405091052014G4.jpeg',
      orderby: '13',
      ComboComponent: true,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'BUY1GET3',
      CategoryName_VN: 'MUA 1 ĐƯỢC 3',
      CategoryName_EN: 'BUY 1 GET 3',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Mobile-Vie_20240508112810TH0.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Mobile-Eng_20240508112811N92.jpeg',
      orderby: '14',
      ComboComponent: true,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'STARTER',
      CategoryName_VN: 'MÓN KHAI VỊ',
      CategoryName_EN: 'STARTER',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Starter - Vie_20240206150234S1O.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Starter - ENG_20240227130623YWG.jpeg',
      orderby: '16',
      ComboComponent: null,
      Default_Cate: false,
      HomepageMenu: true
    },
    {
      CategoryCode: 'DRINK',
      CategoryName_VN: 'THỨC UỐNG',
      CategoryName_EN: 'DRINK',
      PhotoLink: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Drink - Vie_20240206151049ST8.jpeg',
      PhotoLink_EN: 'https://cdn.pizzahut.vn/images/WEB_V3/CATEGORIES_MenuTool/Drink - ENG_20240206151049Q90.jpeg',
      orderby: '17',
      ComboComponent: null,
      Default_Cate: false,
      HomepageMenu: true
    }
  ]
  return response
}
