import ApiService from './ApiService'

export async function apiGetOrganizerList(data) {
    return ApiService.fetchData({
        url: '/api/organizer/get-list',
        method: 'post',
        data,
    })
}