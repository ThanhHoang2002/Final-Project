export const combo = {
  code: 1000,
  message: 'Get combo by category successfully',
  result: [
    {
      comboId: 'combo1',
      name: 'Party Pack 520K',
      price: 520000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FCombo_1.jpg?alt=media&token=11056c8c-2b3a-483f-ab8f-c22481dec897',
      category: 'Combo',
      des: 'Combo dành cho nhóm 4-5 người, gồm 2 pizza BBQ gà cỡ M đế mỏng giòn và set đùi gà rán(4 miếng)',
      foodInCombos: [
        {
          foodInComboId: 1,
          quantity: 1,
          food: {
            foodId: 'food1',
            name: 'Đùi gà rán (4 miếng)',
            price: 120000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood1.jpg?alt=media&token=de4de56e-1d26-40e3-b3d0-1eb461224882',
            des: 'Đùi gà chiên với từng xớ gà đậm vị cùng lớp da giòn rụm bên ngoài',
            foodCategory: 'CHICKEN_LOVER'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 1,
          quantity: 2,
          base: 'Đế mỏng giòn',
          pizza: {
            pizzaId: 'bbq_ckn_m',
            size: 'Vừa',
            price: 219000,
            pizzaType: {
              pizzaTypeId: 'bbq_ckn',
              name: 'The Barbecue Chicken Pizza',
              des: 'gà BBQ, ớt chuông, ớt xanh, cà chua, hành tím, sốt BBQ',
              category: 'Chicken Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fbig_meat.jpg?alt=media&token=815528c4-3aab-4425-aa17-f85048ef268c',
              pizzas: [
                {
                  pizzaId: 'bbq_ckn_l',
                  size: 'Lớn',
                  price: 319000,
                  name: 'The Barbecue Chicken Pizza'
                },
                {
                  pizzaId: 'bbq_ckn_m',
                  size: 'Vừa',
                  price: 219000,
                  name: 'The Barbecue Chicken Pizza'
                },
                {
                  pizzaId: 'bbq_ckn_s',
                  size: 'Nhỏ',
                  price: 119000,
                  name: 'The Barbecue Chicken Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo2',
      name: 'Combo Pizza & Đồ uống',
      price: 100000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FCombo_2.jpg?alt=media&token=a3e21bb3-bd11-43c8-8cae-4f924eeb6e02',
      category: 'Combo',
      des: 'Combo ưu đãi gồm 1 pizza Hawaiian cỡ S đế giòn xốp và 1 lon Pepsi',
      foodInCombos: [
        {
          foodInComboId: 8,
          quantity: 1,
          food: {
            foodId: 'food15',
            name: 'Pepsi 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood15.jpg?alt=media&token=5237a1e3-97e5-480a-a60d-3997a4172c57',
            des: 'Pepsi 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 2,
          quantity: 1,
          base: 'Đế giòn xốp',
          pizza: {
            pizzaId: 'hawaiian_s',
            size: 'Nhỏ',
            price: 62000,
            pizzaType: {
              pizzaTypeId: 'hawaiian',
              name: 'The Hawaiian Pizza',
              des: 'đùi heo xông khói, dứa, phô mai Mozzarella',
              category: 'Classic Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fhawaiian.jpg?alt=media&token=d29310fa-64ea-4902-8d4f-dd40f26d34a4',
              pizzas: [
                {
                  pizzaId: 'hawaiian_l',
                  size: 'Lớn',
                  price: 212000,
                  name: 'The Hawaiian Pizza'
                },
                {
                  pizzaId: 'hawaiian_m',
                  size: 'Vừa',
                  price: 131000,
                  name: 'The Hawaiian Pizza'
                },
                {
                  pizzaId: 'hawaiian_s',
                  size: 'Nhỏ',
                  price: 62000,
                  name: 'The Hawaiian Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo3',
      name: 'Combo Pizza & Gà',
      price: 220000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FCombo_3.jpg?alt=media&token=68629560-2f00-4249-b77e-3f11e1f10f60',
      category: 'Combo',
      des: 'Combo ưu đãi gồm 1 pizza Pepperoni cỡ S đế mỏng giòn, 1 set gà (4 miếng) và 1 lon Pepsi ',
      foodInCombos: [
        {
          foodInComboId: 2,
          quantity: 1,
          food: {
            foodId: 'food2',
            name: 'Cánh gà rán (4 miếng)',
            price: 120000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood2.jpg?alt=media&token=63182f50-eb5e-4e69-9aae-6ffc71cdd9ea',
            des: 'Cánh gà chiên với từng xớ gà đậm vị cùng lớp da giòn rụm bên ngoài',
            foodCategory: 'CHICKEN_LOVER'
          }
        },
        {
          foodInComboId: 9,
          quantity: 1,
          food: {
            foodId: 'food15',
            name: 'Pepsi 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood15.jpg?alt=media&token=5237a1e3-97e5-480a-a60d-3997a4172c57',
            des: 'Pepsi 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 3,
          quantity: 1,
          base: 'Đế mỏng giòn',
          pizza: {
            pizzaId: 'pepperoni_s',
            size: 'Nhỏ',
            price: 44000,
            pizzaType: {
              pizzaTypeId: 'pepperoni',
              name: 'The Pepperoni Pizza',
              des: 'phô mai Mozzarella, thịt nguội',
              category: 'Classic Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fpepperoni.jpg?alt=media&token=29b6aa0c-562f-4efb-b205-0f8282e13118',
              pizzas: [
                {
                  pizzaId: 'pepperoni_l',
                  size: 'Lớn',
                  price: 181000,
                  name: 'The Pepperoni Pizza'
                },
                {
                  pizzaId: 'pepperoni_m',
                  size: 'Vừa',
                  price: 112000,
                  name: 'The Pepperoni Pizza'
                },
                {
                  pizzaId: 'pepperoni_s',
                  size: 'Nhỏ',
                  price: 44000,
                  name: 'The Pepperoni Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo4',
      name: 'Combo Pizza & Bánh mì',
      price: 222000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FCombo_4.jpg?alt=media&token=5c5c519c-e02d-4985-9e08-a02a47d44801',
      category: 'Combo',
      des: 'Combo ưu đãi gồm 1 pizza spicy Italian cỡ M đế giòn xốp, bánh mì bơ tỏi và 1 lon Pepsi ',
      foodInCombos: [
        {
          foodInComboId: 3,
          quantity: 1,
          food: {
            foodId: 'food7',
            name: 'Bánh mì bơ tỏi',
            price: 30000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood7.jpg?alt=media&token=86ff6ca9-5fec-4d9e-9757-af7dacebc488',
            des: 'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng',
            foodCategory: 'Starter'
          }
        },
        {
          foodInComboId: 10,
          quantity: 1,
          food: {
            foodId: 'food15',
            name: 'Pepsi 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood15.jpg?alt=media&token=5237a1e3-97e5-480a-a60d-3997a4172c57',
            des: 'Pepsi 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 4,
          quantity: 1,
          base: 'Đế giòn xốp',
          pizza: {
            pizzaId: 'spicy_ital_m',
            size: 'Vừa',
            price: 212000,
            pizzaType: {
              pizzaTypeId: 'spicy_ital',
              name: 'The Spicy Italian Pizza',
              des: 'thịt nguội Ý, cà chua, phô mai dê, Atiso, ớt xanh muối, tỏi',
              category: 'Supreme Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fspicy_ital.jpg?alt=media&token=fe3fddb3-1445-444a-ba14-2d0cc32a2b99',
              pizzas: [
                {
                  pizzaId: 'spicy_ital_l',
                  size: 'Lớn',
                  price: 319000,
                  name: 'The Spicy Italian Pizza'
                },
                {
                  pizzaId: 'spicy_ital_m',
                  size: 'Vừa',
                  price: 212000,
                  name: 'The Spicy Italian Pizza'
                },
                {
                  pizzaId: 'spicy_ital_s',
                  size: 'Nhỏ',
                  price: 112000,
                  name: 'The Spicy Italian Pizza'
                }
              ]
            }
          }
        }
      ]
    }
  ]
}
export const percent = {
  code: 1000,
  message: 'Get combo by category successfully',
  result: [
    {
      comboId: 'combo9',
      name: 'Mua 1 tặng 1',
      price: 200000,
      dayStart: '2024-04-30T17:00:00.000+00:00',
      dayEnd: '2024-05-01T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FSuper_deal.jpg?alt=media&token=1e67538f-a7aa-4e1a-a850-ec436323beb0',
      category: '50PERCENTOFF',
      des: 'Siêu Deal mua 1 tặng 1 pizza Mecican cỡ M đế mỏng giòn',
      foodInCombos: [],
      pizzaInCombos: [
        {
          pizzaInComboId: 9,
          quantity: 2,
          base: 'Đế mỏng giòn',
          pizza: {
            pizzaId: 'mexicana_m',
            size: 'Vừa',
            price: 200000,
            pizzaType: {
              pizzaTypeId: 'mexicana',
              name: 'The Mexicana Pizza',
              des: 'cà chua, ớt chuông, ớt Jalapeno, hành tím, rau mùi, ngô, sốt Chipotle, tỏi',
              category: 'Vegetarian Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fmexicana.jpg?alt=media&token=fe62f335-df59-477b-b653-e6f46b3160f7',
              pizzas: [
                {
                  pizzaId: 'mexicana_l',
                  size: 'Lớn',
                  price: 306000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_m',
                  size: 'Vừa',
                  price: 200000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_s',
                  size: 'Nhỏ',
                  price: 100000,
                  name: 'The Mexicana Pizza'
                }
              ]
            }
          }
        }
      ]
    }
  ]
}
export const mybox = {
  code: 1000,
  message: 'Get combo by category successfully',
  result: [
    {
      comboId: 'combo5',
      name: 'Combo My Box 1',
      price: 350000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FBox_1.jpg?alt=media&token=617c7210-575d-4c26-b597-a4b8f7c3ed2f',
      category: 'MYBOX_2023',
      des: 'Box gồm 1 Pizza Greek cỡ L đế kéo tay truyền thống, 1 khoai tây chiên và 1 Pepsi không calo',
      foodInCombos: [
        {
          foodInComboId: 4,
          quantity: 1,
          food: {
            foodId: 'food8',
            name: 'Khoai tây chiên',
            price: 60000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood8.jpg?alt=media&token=376d1f2b-b58f-4e9a-989e-2be9ffb1de6d',
            des: 'Khoai Tây Chiên Với Xốt Cà Chua',
            foodCategory: 'Starter'
          }
        },
        {
          foodInComboId: 11,
          quantity: 1,
          food: {
            foodId: 'food16',
            name: 'Pepsi không calo 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood16.jpg?alt=media&token=a4f44068-b2f0-4538-8395-bb3d63db1545',
            des: 'Pepsi không calo 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 5,
          quantity: 1,
          base: 'Đế kéo tay truyền thống',
          pizza: {
            pizzaId: 'the_greek_l',
            size: 'Lớn',
            price: 312000,
            pizzaType: {
              pizzaTypeId: 'the_greek',
              name: 'The Greek Pizza',
              des: 'ô liu Kalamata, phô mai Feta, cà chua, tỏi, thịt bò hầm, hành tím',
              category: 'Classic Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fthe_greek.jpg?alt=media&token=cf23ee98-31b2-480c-8719-a3523035ef71',
              pizzas: [
                {
                  pizzaId: 'the_greek_l',
                  size: 'Lớn',
                  price: 312000,
                  name: 'The Greek Pizza'
                },
                {
                  pizzaId: 'the_greek_m',
                  size: 'Vừa',
                  price: 200000,
                  name: 'The Greek Pizza'
                },
                {
                  pizzaId: 'the_greek_s',
                  size: 'Nhỏ',
                  price: 100000,
                  name: 'The Greek Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo6',
      name: 'Combo My Box 2',
      price: 650000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FBox_2.jpg?alt=media&token=789f2cce-fe16-4adc-928d-46af282c8bfd',
      category: 'MYBOX_2023',
      des: 'Box gồm 2 Pizza Mexician cỡ L đế kéo tay truyền thống, 1 bánh mì bơ và 4 Pepsi không calo',
      foodInCombos: [
        {
          foodInComboId: 5,
          quantity: 1,
          food: {
            foodId: 'food7',
            name: 'Bánh mì bơ tỏi',
            price: 30000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood7.jpg?alt=media&token=86ff6ca9-5fec-4d9e-9757-af7dacebc488',
            des: 'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng',
            foodCategory: 'Starter'
          }
        },
        {
          foodInComboId: 12,
          quantity: 4,
          food: {
            foodId: 'food16',
            name: 'Pepsi không calo 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood16.jpg?alt=media&token=a4f44068-b2f0-4538-8395-bb3d63db1545',
            des: 'Pepsi không calo 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 6,
          quantity: 2,
          base: 'Đế kéo tay truyền thống',
          pizza: {
            pizzaId: 'mexicana_l',
            size: 'Lớn',
            price: 306000,
            pizzaType: {
              pizzaTypeId: 'mexicana',
              name: 'The Mexicana Pizza',
              des: 'cà chua, ớt chuông, ớt Jalapeno, hành tím, rau mùi, ngô, sốt Chipotle, tỏi',
              category: 'Vegetarian Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fmexicana.jpg?alt=media&token=fe62f335-df59-477b-b653-e6f46b3160f7',
              pizzas: [
                {
                  pizzaId: 'mexicana_l',
                  size: 'Lớn',
                  price: 306000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_m',
                  size: 'Vừa',
                  price: 200000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_s',
                  size: 'Nhỏ',
                  price: 100000,
                  name: 'The Mexicana Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo7',
      name: 'Combo My Box 3',
      price: 250000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FBox_3.jpg?alt=media&token=5c1264f4-af4b-45cc-ba1b-9ffb190959f9',
      category: 'MYBOX_2023',
      des: 'Box gồm 1 Pizza Mexician cỡ M đế kéo tay truyền thống, 1 khoai tây chiên và 1 Pepsi không calo',
      foodInCombos: [
        {
          foodInComboId: 6,
          quantity: 1,
          food: {
            foodId: 'food8',
            name: 'Khoai tây chiên',
            price: 60000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood8.jpg?alt=media&token=376d1f2b-b58f-4e9a-989e-2be9ffb1de6d',
            des: 'Khoai Tây Chiên Với Xốt Cà Chua',
            foodCategory: 'Starter'
          }
        },
        {
          foodInComboId: 13,
          quantity: 1,
          food: {
            foodId: 'food16',
            name: 'Pepsi không calo 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood16.jpg?alt=media&token=a4f44068-b2f0-4538-8395-bb3d63db1545',
            des: 'Pepsi không calo 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 7,
          quantity: 1,
          base: 'Đế kéo tay truyền thống',
          pizza: {
            pizzaId: 'mexicana_m',
            size: 'Vừa',
            price: 200000,
            pizzaType: {
              pizzaTypeId: 'mexicana',
              name: 'The Mexicana Pizza',
              des: 'cà chua, ớt chuông, ớt Jalapeno, hành tím, rau mùi, ngô, sốt Chipotle, tỏi',
              category: 'Vegetarian Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fmexicana.jpg?alt=media&token=fe62f335-df59-477b-b653-e6f46b3160f7',
              pizzas: [
                {
                  pizzaId: 'mexicana_l',
                  size: 'Lớn',
                  price: 306000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_m',
                  size: 'Vừa',
                  price: 200000,
                  name: 'The Mexicana Pizza'
                },
                {
                  pizzaId: 'mexicana_s',
                  size: 'Nhỏ',
                  price: 100000,
                  name: 'The Mexicana Pizza'
                }
              ]
            }
          }
        }
      ]
    },
    {
      comboId: 'combo8',
      name: 'Combo My Box 4',
      price: 130000,
      dayStart: '1999-12-31T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fcombo%2FBox_4.jpg?alt=media&token=f82aa29f-522a-42c3-a241-d188bfbf1ff4',
      category: 'MYBOX_2023',
      des: 'Box gồm 1 Pizza Spinach Petso cỡ S đế xốp giòn, 1 bánh mì bơ và 1 Pepsi không calo',
      foodInCombos: [
        {
          foodInComboId: 7,
          quantity: 1,
          food: {
            foodId: 'food7',
            name: 'Bánh mì bơ tỏi',
            price: 30000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood7.jpg?alt=media&token=86ff6ca9-5fec-4d9e-9757-af7dacebc488',
            des: 'Bánh Mì Bơ Tỏi Nướng Giòn Ngon Phủ Xốt Bơ Tỏi Thơm Nồng',
            foodCategory: 'Starter'
          }
        },
        {
          foodInComboId: 14,
          quantity: 1,
          food: {
            foodId: 'food16',
            name: 'Pepsi không calo 330ml(Lon)',
            price: 25000,
            image:
              'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ffood%2Ffood16.jpg?alt=media&token=a4f44068-b2f0-4538-8395-bb3d63db1545',
            des: 'Pepsi không calo 330ml(Lon)',
            foodCategory: 'Drink'
          }
        }
      ],
      pizzaInCombos: [
        {
          pizzaInComboId: 8,
          quantity: 1,
          base: 'Đế giòn xốp',
          pizza: {
            pizzaId: 'spin_pesto_s',
            size: 'Nhỏ',
            price: 112000,
            pizzaType: {
              pizzaTypeId: 'spin_pesto',
              name: 'The Spinach Pesto Pizza',
              des: 'rau chân vịt, Atiso, cà chua, cà chua phơi khô, tỏi, sốt Pesto',
              category: 'Vegetarian Pizza',
              image:
                'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fspin_pesto.jpg?alt=media&token=ff8582b8-46df-418a-a7a6-180bf7519dbc',
              pizzas: [
                {
                  pizzaId: 'spin_pesto_l',
                  size: 'Lớn',
                  price: 319000,
                  name: 'The Spinach Pesto Pizza'
                },
                {
                  pizzaId: 'spin_pesto_m',
                  size: 'Vừa',
                  price: 212000,
                  name: 'The Spinach Pesto Pizza'
                },
                {
                  pizzaId: 'spin_pesto_s',
                  size: 'Nhỏ',
                  price: 112000,
                  name: 'The Spinach Pesto Pizza'
                }
              ]
            }
          }
        }
      ]
    }
  ]
}
export const buyOneGetThree = {
  code: 1000,
  message: 'Get combo by category successfully',
  result: [
    {
      comboId: 'combo10',
      name: 'Mua 1 được 3  (Cỡ Vừa)',
      price: 230000,
      dayStart: '2024-04-30T17:00:00.000+00:00',
      dayEnd: '2024-12-30T17:00:00.000+00:00',
      image: 'https://cdn.pizzahut.vn/images/Web_V3/Products_MenuTool/B1G2 PEPSI _20240509165157TA0.jpeg',
      category: 'BUY1GET3',
      des: 'Mua 1 Tặng 2: Mua 01 Bánh Pizza Cỡ Vừa. Được Tặng Ngay 01 Pepsi/7Up/Mirinda 1.5 L. Cùng 01 Pizza Phô Mai Cao Cấp (P)/ 01 Khoai Tây Chiên/ 01 Bánh Cuộn Phô Mai',
      foodInCombos: [],
      pizzaInCombos: []
    }
  ]
}
