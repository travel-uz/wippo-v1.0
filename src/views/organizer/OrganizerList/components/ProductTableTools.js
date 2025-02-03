import React from 'react'
import { Button } from 'components/ui'
import {  HiPlusCircle } from 'react-icons/hi'
// import OrganaizerFilter from './OrganaizerFilter'
import { Link } from 'react-router-dom'
import OrganizerTableSearch from './OrganizerTableSearch'

const ProductTableTools = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <OrganizerTableSearch />
            {/* <OrganaizerFilter /> */}
            <Link
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/product-list.csv"
                target="_blank"
                download
            >
                {/* <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button> */}
            </Link>
            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/app/organizer/organizer-new"
            >
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                    Add Organizer
                </Button>
            </Link>
        </div>
    )
}

export default ProductTableTools
