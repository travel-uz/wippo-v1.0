import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
// import CreatableSelect from 'react-select/creatable'
import { Field } from 'formik'

export const categories = [
    { label: 'New', value: 1 },
    { label: 'Registered', value: 2 },
    { label: 'Allowed', value: 3 },
    { label: 'Bloacked', value: 4 },
]

const OrganizationFields = (props) => {
    const { values, touched, errors } = props

    console.log(values, 'values')
    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Organizations</h5>
            <p className="mb-6">Section to config the organizer attribute</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Status"
                        invalid={errors.status && touched.status}
                        errorMessage={errors.status}
                    >
                        <Field name="status">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={categories}
                                    value={categories.filter(
                                        (category) =>
                                            category.value === values.status
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
                        invalid={errors.phone && touched.phone}
                        errorMessage={errors.phone}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="phone"
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
                        invalid={errors.login && touched.login}
                        errorMessage={errors.login}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="login"
                            placeholder="Login"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Password"
                        invalid={errors.password && touched.password}
                        errorMessage={errors.password}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="password"
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
