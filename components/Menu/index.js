import {Button} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react'

import Link from "next/link";


const MyMenu = () => {
    return (
                    
    <Menu>
        <MenuButton as={Button} bg='#81E6D9'  color="#000000">
            Menu
        </MenuButton>
        <MenuList>
            <MenuGroup color="black" title='Consoles'>
            <Link href='/allPlaces'><a><MenuItem color="black">Places</MenuItem></a></Link>
            <Link href='/newPlace'><a><MenuItem color="black">Add a place </MenuItem></a></Link>
            <Link href='/contactInformation'><a><MenuItem color="black">Contact me</MenuItem></a></Link>
            <Link href='/'><a><MenuItem color="black">Home</MenuItem></a></Link>
            </MenuGroup>
        </MenuList>
        </Menu>  
                
    
    );
};

export default MyMenu;
