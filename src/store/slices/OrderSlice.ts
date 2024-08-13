import { createSlice } from '@reduxjs/toolkit'
import { Client, ComboInOrder, FoodInOrder, Pizza, PizzaInOrder, Staff } from '../../types'
export interface OrderState {
  note: string
  paymentMethod: string
  state: string
  client: Client | null
  staff: Staff | null
  comboInOrders: ComboInOrder[]
  pizzaInOrders: PizzaInOrder[]
  foodInOrders: FoodInOrder[]
  total: number
}
const initialState: OrderState = {
  note: '',
  paymentMethod: 'Cash',
  state: 'Waiting',
  client: null,
  staff: null,
  comboInOrders: [],
  pizzaInOrders: [],
  foodInOrders: [],
  total: 0
}
const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    AddPizzaToOrder: (state, action) => {
      const pizza: Pizza = action.payload.chosenPizza
      const base: string = action.payload.base
      const index = state.pizzaInOrders.findIndex((p) => p.pizza.pizzaId === pizza.pizzaId && p.base === base)
      if (index === -1) {
        const pizzaInOrder = {
          quantity: 1,
          priceAtBill: pizza.price,
          base: base,
          pizza: pizza
        }
        state.pizzaInOrders.push(pizzaInOrder)
      } else {
        state.pizzaInOrders[index].quantity = state.pizzaInOrders[index].quantity + 1
      }
      state.total = state.total + pizza.price
    },
    AddFoodToOrder: (state, action) => {
      const food = action.payload
      const index = state.foodInOrders.findIndex((f) => f.food.foodId === food.foodId)
      if (index === -1) {
        const foodInOrder = {
          quantity: 1,
          priceAtBill: food.price,
          food: food
        }
        state.foodInOrders.push(foodInOrder)
      } else {
        state.foodInOrders[index].quantity = state.foodInOrders[index].quantity + 1
      }
      state.total = state.total + food.price
    },
    AddComboToOrder: (state, action) => {
      const combo = action.payload
      const index = state.comboInOrders.findIndex((c) => c.combo.comboId === combo.comboId)
      if (index === -1) {
        const comboInOrder = {
          quantity: 1,
          priceAtBill: combo.price,
          combo: combo
        }
        state.comboInOrders.push(comboInOrder)
      } else {
        state.comboInOrders[index].quantity = state.comboInOrders[index].quantity + 1
      }
      state.total = state.total + combo.price
    },

    deleteItemInOrder: (state, action) => {
      const { type, index } = action.payload
      switch (type) {
        case 'pizza':
          state.total = state.total - state.pizzaInOrders[index].priceAtBill * state.pizzaInOrders[index].quantity
          state.pizzaInOrders.splice(index, 1)
          break
        case 'food':
          state.total = state.total - state.foodInOrders[index].priceAtBill * state.foodInOrders[index].quantity
          state.foodInOrders.splice(index, 1)
          break
        case 'combo':
          state.total = state.total - state?.comboInOrders[index].priceAtBill * state.comboInOrders[index].quantity
          state.comboInOrders.splice(index, 1)
          break
        default:
          break
      }
    },
    changeQuantity: (state, action) => {
      const { type, index, quantity } = action.payload
      switch (type) {
        case 'pizza':
          state.total =
            state.total + state.pizzaInOrders[index].priceAtBill * (quantity - state.pizzaInOrders[index].quantity)
          state.pizzaInOrders[index].quantity = quantity
          break
        case 'food':
          state.total =
            state.total + state.foodInOrders[index].priceAtBill * (quantity - state.foodInOrders[index].quantity)
          state.foodInOrders[index].quantity = quantity
          break
        case 'combo':
          state.total =
            state.total + state.comboInOrders[index].priceAtBill * (quantity - state.comboInOrders[index].quantity)
          state.comboInOrders[index].quantity = quantity
          break
        default:
          break
      }
    },
    resetOrder: () => {
      return initialState
    }
  }
})
export const { AddPizzaToOrder, AddFoodToOrder, AddComboToOrder, deleteItemInOrder, changeQuantity, resetOrder } =
  orderSlice.actions
export default orderSlice.reducer
