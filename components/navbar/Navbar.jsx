"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>LOGO</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className={styles.navItem} href="/">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className={styles.navItem} href="#about">
              About
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className={styles.navItem} href="#services">
              Services
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={styles.navItem} href="/gallery">
              Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={styles.navItem}>
              Countries
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <h2>Logo</h2>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <h2>link 1</h2>
                <h2>link 2</h2>
                <h2>link 3</h2>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button></button>
    </div>
  );
};

export default Navbar;
