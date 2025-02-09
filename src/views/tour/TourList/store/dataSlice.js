import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiDeleteTour,
    apiGetTourList,
} from 'services/TourService'

// Async thunk to fetch organizer data
export const getTour = createAsyncThunk(
    'tourList/data/getTour',
    async (data) => {
        const response = await apiGetTourList(data)
        return response.data
    }
)

// Async function to delete a product
// ** temporary commented
export const deleteProduct = async (data) => {
    const response = await apiDeleteTour(data)
    return response.data
}

// Initial table data
export const initialTableData = {
    total: 0,
    offset: 0,
    limit: 10,
    search: '',
    // sort: {
    //     order: '',
    //     key: '',
    // },
}

// Initial filter data
export const initialFilterData = {
    name: '',
    category: ['bags', 'cloths', 'devices', 'shoes', 'watches'],
    status: [0, 1, 2],
    productStatus: 0,
}

// Create the slice
const dataSlice = createSlice({
    name: 'tourList/data',
    initialState: {
        loading: false,
        productList: [],
        tableData: initialTableData,
        filterData: initialFilterData,
    },
    reducers: {
        updateProductList: (state, action) => {
            state.productList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTour.pending, (state) => {
                state.loading = true
            })
            .addCase(getTour.fulfilled, (state, action) => {
                state.productList = action.payload.data
                state.tableData.total = action.payload.total
                state.loading = false
            })
    },
})

// Export actions and reducer
export const { updateProductList, setTableData, setFilterData } =
    dataSlice.actions

export default dataSlice.reducer
