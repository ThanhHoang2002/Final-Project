export const pizzaType = {
  code: 1000,
  message: 'Get all pizza type successfully',
  result: [
    {
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
    },
    {
      pizzaTypeId: 'big_meat',
      name: 'The Big Meat Pizza',
      des: 'thịt xông khói, thịt nguội, xúc xích Ý, sốt Chorizo',
      category: 'Classic Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fbbq_ckn.jpg?alt=media&token=48fe3bfd-9691-42c9-baff-d93d696bb691',
      pizzas: [
        {
          pizzaId: 'big_meat_l',
          size: 'Lớn',
          price: 312000,
          name: 'The Big Meat Pizza'
        },
        {
          pizzaId: 'big_meat_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Big Meat Pizza'
        },
        {
          pizzaId: 'big_meat_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Big Meat Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'brie_carre',
      name: 'The Brie Carre Pizza',
      des: 'phô mai Brie Carre, giăm bông Ý, hành tây caramel, lê, xạ hương, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fbrie_carre.jpg?alt=media&token=5116ba84-d27f-4d5d-bcfe-eda89e270552',
      pizzas: [
        {
          pizzaId: 'brie_carre_s',
          size: 'Nhỏ',
          price: 391000,
          name: 'The Brie Carre Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'calabrese',
      name: 'The Calabrese Pizza',
      des: 'xúc xích Nduja, thịt xông khói Ý, cà chua, hành tím, ớt Pepperoncini, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fcalabrese.jpg?alt=media&token=abe23eec-9d8a-4631-9fdf-0e3ee6d9bbad',
      pizzas: [
        {
          pizzaId: 'calabrese_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Calabrese Pizza'
        },
        {
          pizzaId: 'calabrese_m',
          size: 'Vừa',
          price: 206000,
          name: 'The Calabrese Pizza'
        },
        {
          pizzaId: 'calabrese_s',
          size: 'Nhỏ',
          price: 106000,
          name: 'The Calabrese Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'cali_ckn',
      name: 'The California Chicken Pizza',
      des: 'gà, Atiso, rau chân vịt, tỏi, ớt Jalapeno, phô mai Fontina, phô mai Gouda',
      category: 'Chicken Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fcali_ckn.jpg?alt=media&token=b04b1116-9ae3-4612-8380-61c599ce4356',
      pizzas: [
        {
          pizzaId: 'cali_ckn_l',
          size: 'Lớn',
          price: 319000,
          name: 'The California Chicken Pizza'
        },
        {
          pizzaId: 'cali_ckn_m',
          size: 'Vừa',
          price: 219000,
          name: 'The California Chicken Pizza'
        },
        {
          pizzaId: 'cali_ckn_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The California Chicken Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'ckn_alfredo',
      name: 'The Chicken Alfredo Pizza',
      des: 'gà, hành tím, ớt chuông, nấm, phô mai Asiago, sốt Alfredo',
      category: 'Chicken Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fckn_alfredo.jpg?alt=media&token=62958268-1c03-4f1f-8861-5dd6c3341d15',
      pizzas: [
        {
          pizzaId: 'ckn_alfredo_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Chicken Alfredo Pizza'
        },
        {
          pizzaId: 'ckn_alfredo_m',
          size: 'Vừa',
          price: 219000,
          name: 'The Chicken Alfredo Pizza'
        },
        {
          pizzaId: 'ckn_alfredo_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The Chicken Alfredo Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'ckn_pesto',
      name: 'The Chicken Pesto Pizza',
      des: 'gà, cà chua, ớt chuông, rau chân vịt, tỏi, sốt Pesto',
      category: 'Chicken Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fckn_pesto.jpg?alt=media&token=77742fa9-80fc-446c-b768-88714c3c06bd',
      pizzas: [
        {
          pizzaId: 'ckn_pesto_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Chicken Pesto Pizza'
        },
        {
          pizzaId: 'ckn_pesto_m',
          size: 'Vừa',
          price: 219000,
          name: 'The Chicken Pesto Pizza'
        },
        {
          pizzaId: 'ckn_pesto_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The Chicken Pesto Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'classic_dlx',
      name: 'The Classic Deluxe Pizza',
      des: 'thịt nguội, nấm, hành tím, ớt chuông, thịt xông khói',
      category: 'Classic Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fclassic_dlx.jpg?alt=media&token=3a37ceed-ce2b-4390-a450-4edb38974191',
      pizzas: [
        {
          pizzaId: 'classic_dlx_l',
          size: 'Lớn',
          price: 312000,
          name: 'The Classic Deluxe Pizza'
        },
        {
          pizzaId: 'classic_dlx_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Classic Deluxe Pizza'
        },
        {
          pizzaId: 'classic_dlx_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Classic Deluxe Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'five_cheese',
      name: 'The Five Cheese Pizza',
      des: 'phô mai Mozzarella, phô mai Provolone, phô mai Gouda hun khói, phô mai Romano, phô mai xanh, tỏi',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Ffive_cheese.jpg?alt=media&token=ae585090-54fd-4d05-975b-04a329465f0c',
      pizzas: [
        {
          pizzaId: 'five_cheese_l',
          size: 'Lớn',
          price: 262000,
          name: 'The Five Cheese Pizza'
        },
        {
          pizzaId: 'five_cheese_m',
          size: 'Vừa',
          price: 188000,
          name: 'The Five Cheese Pizza'
        },
        {
          pizzaId: 'five_cheese_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Five Cheese Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'four_cheese',
      name: 'The Four Cheese Pizza',
      des: 'phô mai Ricotta, phô mai DOP, phô mai Mozzarella, phô mai Parmigiano Reggiano, tỏi',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Ffour_cheese.jpg?alt=media&token=9c597fa6-0766-4962-bff5-f444883d030e',
      pizzas: [
        {
          pizzaId: 'four_cheese_l',
          size: 'Lớn',
          price: 249000,
          name: 'The Four Cheese Pizza'
        },
        {
          pizzaId: 'four_cheese_m',
          size: 'Vừa',
          price: 169000,
          name: 'The Four Cheese Pizza'
        },
        {
          pizzaId: 'four_cheese_s',
          size: 'Nhỏ',
          price: 94000,
          name: 'The Four Cheese Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'green_garden',
      name: 'The Green Garden Pizza',
      des: 'rau chân vịt, nấm, cà chua, ô liu xanh, phô mai Feta',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fgreen_garden.jpg?alt=media&token=ca4602e0-92b1-4cd1-9c09-7303157ffbf7',
      pizzas: [
        {
          pizzaId: 'green_garden_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Green Garden Pizza'
        },
        {
          pizzaId: 'green_garden_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Green Garden Pizza'
        },
        {
          pizzaId: 'green_garden_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Green Garden Pizza'
        }
      ]
    },
    {
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
    },
    {
      pizzaTypeId: 'ital_cpcllo',
      name: 'The Italian Capocollo Pizza',
      des: 'thịt nguội Ý, ớt chuông, cà chua, phô mai dê, tỏi, kinh giới cay',
      category: 'Classic Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fital_cpcllo.jpg?alt=media&token=5eb692f1-3876-47ce-b88c-6ed19ceed2c4',
      pizzas: [
        {
          pizzaId: 'ital_cpcllo_l',
          size: 'Lớn',
          price: 312000,
          name: 'The Italian Capocollo Pizza'
        },
        {
          pizzaId: 'ital_cpcllo_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Italian Capocollo Pizza'
        },
        {
          pizzaId: 'ital_cpcllo_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Italian Capocollo Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'ital_supr',
      name: 'The Italian Supreme Pizza',
      des: 'xúc xích Calabrese, thịt nguội Ý, cà chua, hành tím, ô liu xanh, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fital_supr.jpg?alt=media&token=a95bc8ed-fd48-4610-ad7e-794feeaad853',
      pizzas: [
        {
          pizzaId: 'ital_supr_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Italian Supreme Pizza'
        },
        {
          pizzaId: 'ital_supr_m',
          size: 'Vừa',
          price: 212000,
          name: 'The Italian Supreme Pizza'
        },
        {
          pizzaId: 'ital_supr_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Italian Supreme Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'ital_veggie',
      name: 'The Italian Vegetables Pizza',
      des: 'cà tím, Atiso, cà chua, bí, ớt chuông, tỏi, sốt Pesto',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fital_veggie.jpg?alt=media&token=1167042c-6d08-4a60-be83-25a782a42555',
      pizzas: [
        {
          pizzaId: 'ital_veggie_l',
          size: 'Lớn',
          price: 325000,
          name: 'The Italian Vegetables Pizza'
        },
        {
          pizzaId: 'ital_veggie_m',
          size: 'Vừa',
          price: 219000,
          name: 'The Italian Vegetables Pizza'
        },
        {
          pizzaId: 'ital_veggie_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The Italian Vegetables Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'mediterraneo',
      name: 'The Mediterranean Pizza',
      des: 'rau chân vịt, Atiso, ô liu Kalamata, cà chua phơi khô, phô mai Feta, cà chua mận, hành tím',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fmediterraneo.jpg?alt=media&token=607c1c21-15e4-4042-a558-c1b0d79ba8b0',
      pizzas: [
        {
          pizzaId: 'mediterraneo_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Mediterranean Pizza'
        },
        {
          pizzaId: 'mediterraneo_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Mediterranean Pizza'
        },
        {
          pizzaId: 'mediterraneo_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Mediterranean Pizza'
        }
      ]
    },
    {
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
    },
    {
      pizzaTypeId: 'napolitana',
      name: 'The Napolitana Pizza',
      des: 'cà chua, cá cơm, ô liu xanh, hành tím, tỏi',
      category: 'Classic Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fnapolitana.jpg?alt=media&token=d8787ed7-0be0-4374-b0f7-c1364f416ae1',
      pizzas: [
        {
          pizzaId: 'napolitana_l',
          size: 'Lớn',
          price: 312000,
          name: 'The Napolitana Pizza'
        },
        {
          pizzaId: 'napolitana_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Napolitana Pizza'
        },
        {
          pizzaId: 'napolitana_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Napolitana Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'pep_msh_pep',
      name: 'The Pepperoni, Mushroom, and Peppers Pizza',
      des: 'thịt nguội, nấm, ớt xanh',
      category: 'Classic Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fpep_msh_pep.jpg?alt=media&token=0122ceb5-695b-4a50-a5b8-97d678f93a3b',
      pizzas: [
        {
          pizzaId: 'pep_msh_pep_l',
          size: 'Lớn',
          price: 238000,
          name: 'The Pepperoni, Mushroom, and Peppers Pizza'
        },
        {
          pizzaId: 'pep_msh_pep_m',
          size: 'Vừa',
          price: 162000,
          name: 'The Pepperoni, Mushroom, and Peppers Pizza'
        },
        {
          pizzaId: 'pep_msh_pep_s',
          size: 'Nhỏ',
          price: 75000,
          name: 'The Pepperoni, Mushroom, and Peppers Pizza'
        }
      ]
    },
    {
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
    },
    {
      pizzaTypeId: 'peppr_salami',
      name: 'The Pepper Salami Pizza',
      des: 'xúc xích Genoa, thịt nguội Ý, thịt nguội, cà chua, phô mai Asiago, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fpeppr_salami.jpg?alt=media&token=0f1c9d9f-8249-4f7c-b8eb-c9e99fe33a09',
      pizzas: [
        {
          pizzaId: 'peppr_salami_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Pepper Salami Pizza'
        },
        {
          pizzaId: 'peppr_salami_m',
          size: 'Vừa',
          price: 212000,
          name: 'The Pepper Salami Pizza'
        },
        {
          pizzaId: 'peppr_salami_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Pepper Salami Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'prsc_argla',
      name: 'The Prosciutto and Arugula Pizza',
      des: 'Prosciutto di San Daniele, Arugula, phô mai Mozzarella',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fprsc_argla.jpg?alt=media&token=256d68c6-dbe1-4a99-a773-9f04c0cdbc43',
      pizzas: [
        {
          pizzaId: 'prsc_argla_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Prosciutto and Arugula Pizza'
        },
        {
          pizzaId: 'prsc_argla_m',
          size: 'Vừa',
          price: 212000,
          name: 'The Prosciutto and Arugula Pizza'
        },
        {
          pizzaId: 'prsc_argla_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Prosciutto and Arugula Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'sicilian',
      name: 'The Sicilian Pizza',
      des: 'xúc xích Coarse Sicilian, cà chua, ô liu xanh, xúc xích Luganega, hành, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fsicilian.jpg?alt=media&token=2b299701-0551-47f9-a81f-60ef0725261f',
      pizzas: [
        {
          pizzaId: 'sicilian_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Sicilian Pizza'
        },
        {
          pizzaId: 'sicilian_m',
          size: 'Vừa',
          price: 206000,
          name: 'The Sicilian Pizza'
        },
        {
          pizzaId: 'sicilian_s',
          size: 'Nhỏ',
          price: 106000,
          name: 'The Sicilian Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'soppressata',
      name: 'The Soppressata Pizza',
      des: 'xúc xích Soppressata, phô mai Fontina, phô mai Mozzarella, nấm, tỏi',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fsoppressata.jpg?alt=media&token=e1fbeae2-54cb-4dfc-aac8-44cd5e827d7b',
      pizzas: [
        {
          pizzaId: 'soppressata_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Soppressata Pizza'
        },
        {
          pizzaId: 'soppressata_m',
          size: 'Vừa',
          price: 212000,
          name: 'The Soppressata Pizza'
        },
        {
          pizzaId: 'soppressata_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Soppressata Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'southw_ckn',
      name: 'The Southwest Chicken Pizza',
      des: 'gà, cà chua, ớt chuông, hành tím, ớt Jalapeno, ngô, rau mùi, sốt Chipotle',
      category: 'Chicken Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fsouthw_ckn.jpg?alt=media&token=11fffc77-8f8c-40a5-9ddf-08af2c246612',
      pizzas: [
        {
          pizzaId: 'southw_ckn_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Southwest Chicken Pizza'
        },
        {
          pizzaId: 'southw_ckn_m',
          size: 'Vừa',
          price: 219000,
          name: 'The Southwest Chicken Pizza'
        },
        {
          pizzaId: 'southw_ckn_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The Southwest Chicken Pizza'
        }
      ]
    },
    {
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
    },
    {
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
    },
    {
      pizzaTypeId: 'spinach_fet',
      name: 'The Spinach and Feta Pizza',
      des: 'rau chân vịt, nấm, hành tím, phô mai Feta, tỏi',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fspinach_fet.jpg?alt=media&token=4d384e18-3b4a-42fc-8c78-93e0dd735dfa',
      pizzas: [
        {
          pizzaId: 'spinach_fet_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Spinach and Feta Pizza'
        },
        {
          pizzaId: 'spinach_fet_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Spinach and Feta Pizza'
        },
        {
          pizzaId: 'spinach_fet_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Spinach and Feta Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'spinach_supr',
      name: 'The Spinach Supreme Pizza',
      des: 'rau chân vịt, hành tím, thịt nguội, cà chua, Atiso, ô liu Kalamata, tỏi, phô mai Asiago',
      category: 'Supreme Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fspinach_supr.jpg?alt=media&token=8941b89c-8168-4175-b275-d1eb73d607b6',
      pizzas: [
        {
          pizzaId: 'spinach_supr_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Spinach Supreme Pizza'
        },
        {
          pizzaId: 'spinach_supr_m',
          size: 'Vừa',
          price: 212000,
          name: 'The Spinach Supreme Pizza'
        },
        {
          pizzaId: 'spinach_supr_s',
          size: 'Nhỏ',
          price: 112000,
          name: 'The Spinach Supreme Pizza'
        }
      ]
    },
    {
      pizzaTypeId: 'thai_ckn',
      name: 'The Thai Chicken Pizza',
      des: 'gà, dứa, cà chua, ớt chuông, sốt cay ngọt Thái',
      category: 'Chicken Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fthai_ckn.jpg?alt=media&token=5cb2817b-7ded-4edb-b247-2e0205e8f489',
      pizzas: [
        {
          pizzaId: 'thai_ckn_l',
          size: 'Lớn',
          price: 319000,
          name: 'The Thai Chicken Pizza'
        },
        {
          pizzaId: 'thai_ckn_m',
          size: 'Vừa',
          price: 219000,
          name: 'The Thai Chicken Pizza'
        },
        {
          pizzaId: 'thai_ckn_s',
          size: 'Nhỏ',
          price: 119000,
          name: 'The Thai Chicken Pizza'
        }
      ]
    },
    {
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
    },
    {
      pizzaTypeId: 'veggie_veg',
      name: 'The Vegetables + Vegetables Pizza',
      des: 'nấm, cà chua, ớt chuông, ớt xanh, hành tím, bí, rau chân vịt, tỏi',
      category: 'Vegetarian Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fpizza%2Fveggie_veg.jpg?alt=media&token=149f571b-1876-4508-b03b-7107f9d28d95',
      pizzas: [
        {
          pizzaId: 'veggie_veg_l',
          size: 'Lớn',
          price: 306000,
          name: 'The Vegetables + Vegetables Pizza'
        },
        {
          pizzaId: 'veggie_veg_m',
          size: 'Vừa',
          price: 200000,
          name: 'The Vegetables + Vegetables Pizza'
        },
        {
          pizzaId: 'veggie_veg_s',
          size: 'Nhỏ',
          price: 100000,
          name: 'The Vegetables + Vegetables Pizza'
        }
      ]
    }
  ]
}
