import ApiService from './ApiService'

export async function apiGetOrganizerList(data) {
    return ApiService.fetchData({
        url: '/api/admin/organizer/list',
        method: 'post',
        data,
    })
}
export async function apiCreateOrganizer(data) {
    return ApiService.fetchData({
        url: '/api/admin/organizer/create',
        method: 'post',
        data,
    })
}   
export async function apiDeleteOrganizer(data) {
    return ApiService.fetchData({
        url: '/api/admin/organizer/delete',
        method: 'post',
        data,
    }) 
}
