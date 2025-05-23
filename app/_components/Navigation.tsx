import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import { Link as UILink } from "@nextui-org/link"
import logo from "@public/Logo.png"
import Image from "next/image"
import Link from "next/link"
import { EmailIcon } from "@app/_components/icons/EmailIcon"
import { GitHubIcon } from "@app/_components/icons/GitHubIcon"

export const Navigation = () => {
  return (
    <Navbar maxWidth="xl" height="5rem" isBordered>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <Image
            className="hidden sm:block"
            src={logo}
            alt="logo de herramientas utm"
            width={50}
            height={50}
          />
          <Image
            className="block sm:hidden"
            src={logo}
            alt="logo de herramientas utm"
            width={42}
            height={42}
          />
          <p className="hidden md:block font-bold text-xl text-inherit">
            Herramientas UTM
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="flex gap-3 md:gap-6" justify="end">
        <NavbarItem>
          <UILink
            color="foreground"
            href="mailto:emanuel.palestino.h@gmail.com"
            className="flex items-center gap-1"
            aria-label="correo de contacto"
          >
            <EmailIcon />
            <span className="hidden md:block h-[26px]">Contacto</span>
          </UILink>
        </NavbarItem>

        <NavbarItem>
          <UILink
            color="foreground"
            isExternal
            href="https://github.com/Emanuel-Palestino/utm-tools"
            className="flex items-center gap-1"
            aria-label="contribuir al proyecto"
          >
            <GitHubIcon />
            <span className="hidden md:block h-[26px]">Contribuir</span>
          </UILink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
