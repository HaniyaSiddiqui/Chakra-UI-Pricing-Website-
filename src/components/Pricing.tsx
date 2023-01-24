"use client";
import React from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  Stack,
  StackProps
} from '@chakra-ui/react';
import { CheckIcon } from '@/icons/Icon';


export const ListItem = (props:StackProps) => {
  const {children,...rest} =props;
  return (
    <HStack as='li' spacing='20px' {...rest} alignItems="start">
      <Icon as={CheckIcon}  w='22px' h='22px'  />
      <Text textAlign={['left','left','center']}>{children}</Text>
    </HStack>
  )
};

export default function Pricing() {
  return (
    <Box mx='6'>
      <Box 
        as='section'
        maxW='994px' 
        margin='auto'
        mt='-254px' 
        borderRadius="xl" 
        overflow="hidden"
        boxShadow= ' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      >
            <Flex direction={["column","column","row"]}>
                <Box  bg='#F0EAFB' p='60px'  
                  
                  
                    
                    textAlign='center'
                >
                      <Text  fontWeight="800" fontSize={['2xl','2xl','3xl']}>Premium PRO</Text>
                      <Heading as="h3" fontSize={['5xl','5xl','6xl']} mt="16px">$329</Heading>
                      <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">billed just once</Text>
                      <Button 
                    
                      colorScheme="purple" 
                      
                    
                      size="lg" 
                      width="282px" 
                      mt="6">Get Started</Button>
                </Box>

                <Box p="60px" fontSize="18px" bg='white'>
                  <Text    textAlign='left'>Access these features when you get this pricing package for your business.</Text>
                  <Stack as="ul" spacing="20px" pt='24px'>
                      <ListItem>International calling and messaging API</ListItem>
                      <ListItem>Additional phone numbers</ListItem>
                      <ListItem>Automated messages via Zapier</ListItem>
                      <ListItem>24/7 support and consulting</ListItem>

                  </Stack>

                </Box>
            </Flex>
      </Box>
    </Box>
  )
}
