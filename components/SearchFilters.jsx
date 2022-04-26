import React from 'react'
import { useState, useEffect } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import router  from 'next/router'
import Image from 'next/image'
import { MdCancel } from 'react-icons/md'
import { filterData, GetFilterValue, getFilterValues } from '../utils/filterData'


function SearchFilters() {
  
    const [filters, setFilters] = useState(filterData)
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathName: path, query })
    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap" >
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select placeholder={filter.placeholder} width="fit-content"p="2" cursor="pointer"
                    onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}>

                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
  )
}

export default SearchFilters