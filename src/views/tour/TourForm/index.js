import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks } from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import OrganizationFields from './OrganizationFields'
// import ProductImages from './ProductImages'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    title: Yup.object().shape({
        en: Yup.string().required('Organizer Name in English is required'),
        ru: Yup.string().required('Organizer Name in Russian is required'),
        uz: Yup.string().required('Organizer Name in Uzbek is required'),
    }),
    description: Yup.object().shape({
        en: Yup.string().required('Organizer Description in required'),
        ru: Yup.string().required('Organizer Description is required'),
        uz: Yup.string().required('Organizer Description is required'),
    }),
    phone: Yup.number().required('Phone Required'),
    login: Yup.string().required('Login Required'),
    password: Yup.string().required('Password Required'),
})

const DeleteProductButton = ({ onDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                type="danger"
                title="Delete product"
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
                confirmButtonColor="red-600"
            >
                <p>
                    Are you sure you want to delete this product? All record
                    related to this product will be deleted as well. This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

const ProductForm = forwardRef((props, ref) => {
    const { type, initialData, onDiscard, onDelete, onFormSubmit } = props
    // onFormSubmit
    console.log(props, 'onDiscard')

    const newId = useUniqueId('product-')

    return (
        <>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                    // tags: initialData?.tags
                    //     ? initialData.tags.map((value) => ({
                    //           label: value,
                    //           value,
                    //       }))
                    //     : [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    // formData.tags = formData.tags.map((tag) => tag.value)
                    if (type === 'new') {
                        formData.id = newId
                        // if (formData.imgList.length > 0) {
                        //     formData.img = formData.imgList[0].img
                        // }
                    }
                    console.log(formData, 'formData')
                    // onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <BasicInformationFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                    <OrganizationFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                </div>
                                {/* <div className="lg:col-span-1">
                                    <ProductImages
                                        type={'logo'}
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                    <ProductImages
                                        type={'banner'}
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                    <ProductImages
                                        type={'extra'}
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                    <ProductImages
                                        type={'main'}
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                </div> */}
                            </div>
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div>
                                    {type === 'edit' && (
                                        <DeleteProductButton
                                            onDelete={onDelete}
                                        />
                                    )}
                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        onClick={() => onDiscard?.()}
                                        type="button"
                                    >
                                        Discard
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

ProductForm.defaultProps = {
    type: 'edit',
    initialData: {
        id: '',
        status: '',
        is_deleted: '',
        created_at: '',
        title: {
            en: '',
            ru: '',
            uz: '',
        },
        description: '',
        phone: '',
        password: '',
        login: '',
        total: '1',
        files: [],
    },
}

export default ProductForm
