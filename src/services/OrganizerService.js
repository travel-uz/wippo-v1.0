import ApiService from './ApiService'

export async function apiGetOrganizerList(data) {
    console.log(data, 'dta')
    return ApiService.fetchData({
        url: '/api/organizer/get-list',
        method: 'post',
        data,
    })
}