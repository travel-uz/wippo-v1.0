import ApiService from './ApiService'

export async function apiGetOrganizerList(data) {
    return ApiService.fetchData({
        url: '/api/organizer/list',
        method: 'post',
        data,
    })
}
export async function apiCreateOrganizer(data) {
    return ApiService.fetchData({
        url: '/api/organizer/create',
        method: 'post',
        data,
    })
}