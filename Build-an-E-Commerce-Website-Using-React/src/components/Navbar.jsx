import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink, Flex } from "@chakra-ui/react"

const links = [
    {
        to: "/",
        label: "HOME",
    },
    {
        to: "/contact",
        label: "CONTACT",
    },
    {
        to: "/login",
        label: "LOGIN",
    },
    {
        to: "/about",
        label: "ABOUT",
    },
    {
        to: "/productlist",
        label: "PRODUCTLIST",
    },
]

export default function Navbar() {
  return (
    <Flex align="center" justify="space-around" background="gray.200" color="gray.900" padding="3" >
      {links?.map((link) => (
        <ChakraLink as={ReactRouterLink} key={link.to} to={link.to} > {link.label} </ChakraLink>
      ))}
    </Flex>
  )
}


