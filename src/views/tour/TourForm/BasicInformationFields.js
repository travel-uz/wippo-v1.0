import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const categories = [
    { label: 'Bags', value: 'bags' },
    { label: 'Cloths', value: 'cloths' },
    { label: 'Devices', value: 'devices' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Watches', value: 'watches' },
]

const BasicInformationFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider>
            <h5>Basic Information</h5>
            <p className="mb-6">
                Section to config basic organizer information
            </p>
            <FormItem
    label="Organizer Name (Russian)"
    invalid={errors.title && touched.title?.ru}
    errorMessage={errors.title?.ru}
>
    <Field
        type="text"
        autoComplete="off"
        name="title.ru"
        placeholder="Name (Russian)"
        component={Input}
    />
</FormItem>

<FormItem
    label="Organizer Name (English)"
    invalid={errors.title && touched.title?.en}
    errorMessage={errors.title?.en}
>
    <Field
        type="text"
        autoComplete="off"
        name="title.en"
        placeholder="Name (English)"
        component={Input}
    />
</FormItem>

<FormItem
    label="Organizer Name (Uzbek)"
    invalid={errors.title && touched.title?.uz}
    errorMessage={errors.title?.uz}
>
    <Field
        type="text"
        autoComplete="off"
        name="title.uz"
        placeholder="Name (Uzbek)"
        component={Input}
    />
</FormItem>

            {/* <FormItem
                label="Code"
                invalid={errors.productCode && touched.productCode}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="productCode"
                    placeholder="Code"
                    component={Input}
                />
            </FormItem> */}
            <FormItem
                label="Description (Russian)"
                labelClass="!justify-start"
                invalid={errors.description && touched.description?.ru}
                errorMessage={errors.description?.ru}
            >
                <Field name="description.ru">
                    {({ field, form }) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>
            <FormItem
                label="Description (English)"
                labelClass="!justify-start"
                invalid={errors.description && touched.description?.en}
                errorMessage={errors.description?.en}
            >
                <Field name="description.en">
                    {({ field, form }) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>
            <FormItem
                label="Description (Uzbek)"
                labelClass="!justify-start"
                invalid={errors.description && touched.description?.uz}
                errorMessage={errors.description?.uz}
            >
                <Field name="description.uz">
                    {({ field, form }) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>

          
        </AdaptableCard>
    )
}

export default BasicInformationFields
