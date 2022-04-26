import React from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, Button, IconButton, Flex, Box, Spacer, Icon } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

function Navbar() {
  return (
    <Flex p="2" borderBottom="1px" borderColor="blue.400" >
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2" >
                Realest
            </Link>
        </Box>
        <Spacer />
        <Box marginRight="2" color="blue.800">
            <Link href="/search" passHref >
                <Button rightIcon={<BsSearch />}>Search Properties</Button>
            </Link>
        </Box>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList border="0.5px solid" borderColor="gray.300" >
                    <Link href="/" passHref >
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref >
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref >
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref >
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar