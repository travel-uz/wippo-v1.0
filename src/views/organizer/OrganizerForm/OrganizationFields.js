import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
// import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'

export const categories = [
    { label: 'New', value: '1' },
    { label: 'Registered', value: '2' },
    { label: 'Allowed', value: '3' },
    { label: 'Bloacked', value: '4' },
]

const OrganizationFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Organizations</h5>
            <p className="mb-6">Section to config the organizer attribute</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Status"
                        invalid={errors.category && touched.category}
                        errorMessage={errors.category}
                    >
                        <Field name="category">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={categories}
                                    value={categories.filter(
                                        (category) =>
                                            category.value === values.category
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.value
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Phone"
                        invalid={errors.vendor && touched.vendor}
                        errorMessage={errors.vendor}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="vendor"
                            placeholder="Phone"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Login"
                        invalid={errors.brand && touched.brand}
                        errorMessage={errors.brand}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="brand"
                            placeholder="Login"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Password"
                        invalid={errors.vendor && touched.vendor}
                        errorMessage={errors.vendor}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="vendor"
                            placeholder="Password"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default OrganizationFields
