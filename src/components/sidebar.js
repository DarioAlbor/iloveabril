import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  FlexProps,
  Tooltip,
} from '@chakra-ui/react';
import {
  FiHome,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { GiCrownedHeart } from "react-icons/gi";
import { TbMusicHeart } from "react-icons/tb";
import { SiTinyletter } from "react-icons/si";

interface LinkItemProps {
  name: string;
  icon: React.ComponentType<{ size: number }>; // Cambiar IconType por React.ComponentType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Inicio', icon: FiHome },
  { name: 'Invitaciones', icon: SiTinyletter },
  { name: 'Canciones', icon: TbMusicHeart },
  { name: 'Momentos', icon: FiStar },
  { name: 'No me mires', icon: FiSettings },
];

export default function SimpleSidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} position="relative">
        <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} onClose={onClose} />
        <Box marginLeft={{ base: 0, md: 60 }} p="4">
        </Box>
      </Box>
    );
  }
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        position="fixed"
        h="100%"
        zIndex={2}  // Asegura que el Sidebar tenga un z-index más alto
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="20" justifyContent="space-between">
          <Tooltip label="Para la persona más hermosa, hecho con lo que más amo<3" placement="right">
            <Box ml="2">
              <Icon as={GiCrownedHeart} fontSize="2xl" />
            </Box>
          </Tooltip>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  }

interface NavItemProps extends FlexProps {
  icon: React.ComponentType<{ size: number }>;
  children: ReactNode;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
  onClose: () => void;
}

const MobileNav = ({ onOpen, onClose, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 15 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent="space-between"
        {...rest}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        </Flex>
    );
  }

export { SidebarContent, NavItem, MobileNav };
