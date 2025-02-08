import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetOrganizerItem } from 'services/OrganizerService'
import {
    apiPutSalesProduct,
    apiDeleteSalesProducts,
} from 'services/SalesService'

export const getOrganizerItem = createAsyncThunk(
    'getOrganizerItem/data/getOrganizerItem',
    async (data) => {
        const response = await apiGetOrganizerItem(data)
        return response.data
    }
)

export const updateProduct = async (data) => {
    const response = await apiPutSalesProduct(data)
    return response.data
}

export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'organizerEdit/data',
    initialState: {
        loading: false,
        productData: [],
    },
    reducers: {},
    extraReducers: {
        [getOrganizerItem.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.productData = action.payload
            state.loading = false
        },
        [getOrganizerItem.pending]: (state) => {
            state.loading = true
        },
    },
})

export default dataSlice.reducer
