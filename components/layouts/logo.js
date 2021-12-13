import Image from 'next/image';
import { Text, useColorModeValue, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items:center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg)
    }
`

const Logo = () => {

    const footPrintImg = `/images/dog${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="">
            <Image src={footPrintImg} width={20} height={20}/>
            <a>
                <LogoBox>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}>
                        Milan Adhikari
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )

}

export default Logo