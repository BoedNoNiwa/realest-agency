import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

export default function Property({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }) {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex as={motion.div} whileHover={{scale: 1.05}} whileTap={{scale: 1}}
            flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer" margin="auto">
                <Box>
                    <Image 
                    src={coverPhoto? coverPhoto.url : "https://cdn.discordapp.com/attachments/716689021895573647/966894260022575104/mehiko.png"} 
                    alt={coverPhoto.title}
                    width={400}
                    height={200}
                    />
                </Box>
                <Box w="full">
                    <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                            <Text fontWeight="bold" fontSize="large">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                        </Flex>
                        <Box>
                            <Avatar size="md" src={agency?.logo?.url} alt={agency?.name} border="1px solid" />
                        </Box>
                    </Flex>
                    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400" >
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}