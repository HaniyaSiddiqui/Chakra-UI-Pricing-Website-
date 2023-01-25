"use client";
import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react';

export default function Header() {
  return (

    <Box pb='28' as='section'>
      <Box as="section" textAlign={["left", "left", "center"]} color="gray.50" bg="purple.600" p="160px" px="8" >
        <Heading fontWeight="bold" fontSize={['3xl', '3xl', '5xl']} >
          Simple pricing for your business
        </Heading>
        <Text fontWeight="medim" fontSize={['lg', 'lg', '2xl']} pt="4" >Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </Box>

  )
}
