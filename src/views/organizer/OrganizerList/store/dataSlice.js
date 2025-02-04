import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetOrganizerList } from 'services/OrganizerService'
import { apiDeleteSalesProducts } from 'services/SalesService'

// Async thunk to fetch organizer data
export const getOrganizer = createAsyncThunk(
    'organizerList/data/getOrganizer',
    async (data) => {
        const response = await apiGetOrganizerList(data)
        console.log(response, 'response')
        return response.data
    }
)

// Async function to delete a product
export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}

// Initial table data
export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
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
    name: 'organizerList/data',
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
            .addCase(getOrganizer.pending, (state) => {
                state.loading = true
            })
            .addCase(getOrganizer.fulfilled, (state, action) => {
                console.log(state, action, 'xx')
                state.productList = [{x:1}]
                state.tableData.total = action.payload.total
                state.loading = false
            })
    },
})

// Export actions and reducer
export const {
    updateProductList,
    setTableData,
    setFilterData,
} = dataSlice.actions

export default dataSlice.reducer