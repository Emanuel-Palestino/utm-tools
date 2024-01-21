'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import { Link as UILink } from "@nextui-org/link"
import logo from "@/public/Logo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { GitHubIcon, EmailIcon } from "@/app/icons"


const routerTitles: { [key: string]: string } = {
	'/internship': 'Prácticas Profesionales',
	'/social_service': 'Servicio Social',
	'/extraordinario': 'Extraordinario'
}


export const Navigation = () => {

	const router = usePathname()

	useEffect(() => {
		document.title = routerTitles[router] ? `UTM Tools | ${routerTitles[router]}` : 'UTM Tools'
	}, [router])

	return (
		<Navbar maxWidth="xl" height="5rem" isBordered>
			<NavbarBrand>
				<Link href="/" className="flex items-center gap-1 sm:gap-2">
					<Image className="hidden sm:block" src={logo} alt="Logo" width={50} height={50} />
					<Image className="block sm:hidden" src={logo} alt="Logo" width={36} height={36} />
					<p className="hidden sm:block font-bold text-xl text-inherit">Herramientas UTM</p>
				</Link>
			</NavbarBrand>

			<NavbarContent justify="center">
				<h2 className="text-2xl">{routerTitles[router]}</h2>
			</NavbarContent>

			<NavbarContent className="flex gap-2 md:gap-6" justify="end">
				<NavbarItem>
					<UILink color="foreground" href="mailto:emanuel.palestino.h@gmail.com" className="flex items-center gap-1">
						<EmailIcon />
						<span className="hidden sm:block h-[26px]">Contacto</span>
					</UILink>
				</NavbarItem>

				<NavbarItem>
					<UILink color="foreground" isExternal href="https://github.com/Emanuel-Palestino/utm-tools" className="flex items-center gap-1">
						<GitHubIcon />
						<span className="hidden sm:block h-[26px]">Contribuir</span>
					</UILink>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)

}