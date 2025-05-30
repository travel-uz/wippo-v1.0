import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignUp } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'

function useAuth() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const query = useQuery()

    const { token, signedIn } = useSelector((state) => state.auth.session)

    const { userInfo } = useSelector((state) => state.auth.user)

    const signIn = async (values) => {
        try {
            const resp = await apiSignIn(values)
            // console.log('resp', resp.data)
            if (resp.data) {
                const { accessToken } = resp.data
                dispatch(onSignInSuccess(accessToken))
                if (resp.data.admin) {
                    dispatch(
                        setUser(
                            resp.data.admin || {
                                avatar: '',
                                userName: 'Anonymous',
                                authority: ['USER'],
                                email: '',
                            }
                        )
                    )
                }
                const redirectUrl = '/app/oranizer/organizer-list'

                navigate(
                    redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath
                )
                return {
                    status: 'success',
                    message: '',
                }
            }
        } catch (errors) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signUp = async (values) => {
        try {
            const resp = await apiSignUp(values)
            if (resp.data) {
                const { accessToken } = resp.data
                dispatch(onSignInSuccess(accessToken))
                if (resp.data.user) {
                    dispatch(
                        setUser(
                            userInfo || {
                                avatar: '',
                                userName: 'Anonymous',
                                authority: ['USER'],
                                email: '',
                            }
                        )
                    )
                }
                const redirectUrl = query.get(REDIRECT_URL_KEY)
                navigate(
                    redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath
                )
                return {
                    status: 'success',
                    message: '',
                }
            }
        } catch (errors) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const handleSignOut = () => {
        dispatch(onSignOutSuccess())
        dispatch(setUser(initialState))
        navigate(appConfig.unAuthenticatedEntryPath)
    }

    const signOut = async () => {
        handleSignOut()
    }

    return {
        authenticated: token && signedIn,
        signIn,
        signUp,
        signOut,
    }
}

export default useAuth
