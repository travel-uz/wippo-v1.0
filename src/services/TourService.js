import ApiService from './ApiService'

export async function apiGetTourList(data) {
    return ApiService.fetchData({
        url: '/api/admin/tour/list',
        method: 'post',
        data,
    })
}

export async function apiDeleteTour(data) {
    return ApiService.fetchData({
        url: '/api/admin/tour/delete',
        method: 'post',
        data,
    })
}