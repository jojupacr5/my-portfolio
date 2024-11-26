import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
} from "@/components/icons";
import { titleFont } from "@/config/fonts";
import { ActiveLink } from "./ActiveLink";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
 

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex flex-col" href="/">
            <span 
              className={clsx(
                titleFont.variable,
                "antialiased font-title text-4xl tracking-tight m-0 p-0"
              )}
            >JP.</span>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <ActiveLink key={item.href} path={item.href} text={item.label} />
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal className="dark:text-white-primary text-secondary hover:!text-primary dark:hover:text-primary" aria-label="Github" href={siteConfig.links.github} >
            <GithubIcon />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal className="dark:text-white-primary text-secondary hover:!text-primary dark:hover:text-primary" aria-label="Github" href={siteConfig.links.github} >
          <GithubIcon />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 h-full flex flex-col justify-center items-center gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <ActiveLink key={item.href} path={item.href} text={item.label} />
          ))}

          <div className="flex items-center mt-4 gap-4">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="dark:text-white-primary text-secondary hover:!text-primary" />
            </Link>
            <Link isExternal aria-label="twitter" href={siteConfig.links.twitter}>
              <TwitterIcon className="dark:text-white-primary text-secondary hover:!text-primary" />
            </Link>
            <Link isExternal aria-label="twitter" href={siteConfig.links.linkedin}>
              <FaLinkedin className="w-5 h-5 dark:text-white-primary text-secondary hover:!text-primary" />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
