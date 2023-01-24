'use client'
import React from 'react'
import {Box,Flex,Stack,HStack,Icon,Text,StackProps} from '@chakra-ui/react'
import { MoneyBackGuaranteeIcon } from '@/icons/Icon'
import { HassleFreeIcon } from '@/icons/Icon'
import { MonthlySubscriptionIcon } from '@/icons/Icon'

interface FeatureProps extends StackProps{
    icon: React.ElementType;
}
function Feature(props:FeatureProps) {
  const {icon,children, ...rest} = props;
  return (
    <HStack {...rest} spacing='6'>
      <Icon as={icon} boxSizze='12' />
      <Text textAlign='left' fontSize='lg' fontWeight='bold' >
        {children}
        </Text>    
</HStack>
  )
}




export function Features(){
  return(

    <Box maxW='1024px' m='auto' pt='60px' pb='8' as='section'>
    <Stack
      px='12'
      direction={['column', 'column', 'row']}
      spacing={['6', '6', '5']}
    >
      <Feature icon={MoneyBackGuaranteeIcon}>
        30 days money back Guarantee
      </Feature>
      <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
      <Feature icon={MonthlySubscriptionIcon}>
        No monthly subscription Pay once and for all
      </Feature>
    </Stack>
  </Box>
  )
}