import React from 'react'
import ProductForm from 'views/organizer/OrganizerForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateOrganizer } from 'services/OrganizerService'

const ProductNew = () => {
    const navigate = useNavigate()

    const addProduct = async (data) => {
        const response = await apiCreateOrganizer(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addProduct(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Product successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/app/organaizer/organaizer-list')
        }
    }

    const handleDiscard = () => {
        navigate('/app/organizer/organaizer-list')
    }

    return (
        <>
            <ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default ProductNew
