import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'
import { Category } from '../../types'
import { getAllCategory } from '../../features/category/api/getAllCategory'

export interface CategoriesState {
  categories: Category[]
  state: 'idle' | 'loading' | 'succeeded' | 'failed'
}
const initialState: CategoriesState = {
  categories: [],
  state: 'idle' // 'idle' | 'loading' | 'succeeded' | 'failed'
}
export const fetchAllCategories = createAsyncThunk<Category[], void, { rejectValue: SerializedError }>(
  'categories/fetchAllCategories',
  async () => {
    const data = await getAllCategory()
    return data
  }
)
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.state = 'loading'
    })
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.state = 'succeeded'
      state.categories = action.payload
    })
    builder.addCase(fetchAllCategories.rejected, (state) => {
      state.state = 'failed'
    })
  }
})
