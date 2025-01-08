"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import styles from "./navbar.module.css";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Image
          src="/assets/logo.png"
          alt="Pick My University"
          width={80}
          height={100}
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className={styles.navItem} href="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={styles.navItem} href="/#about">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={styles.navItem} href="/#services">
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={styles.navItem} href="/gallery">
                Gallery
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className={styles.navItem}>Countries</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex min-h-40 h-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative"
                        href="/"
                      >
                        <Image
                          className="object-contain"
                          src="/assets/navmenuImg.png"
                          alt="pick my university"
                          fill
                        />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <Link className={styles.navLinkBox} href="/countries/russia">
                    <p className={styles.navLinkTitle}>Russia</p>
                    <p className={styles.navLinkDesc}>
                      Explore 8 Premier Medical Universities
                    </p>
                  </Link>
                  <Link className={styles.navLinkBox} href="/countries/georgia">
                    <p className={styles.navLinkTitle}>Georgia</p>
                    <p className={styles.navLinkDesc}>
                      Explore 6 Premier Medical Universities
                    </p>
                  </Link>
                  <Link
                    className={styles.navLinkBox}
                    href="/countries/kyrgyzstan"
                  >
                    <p className={styles.navLinkTitle}>Kyrgyzstan</p>
                    <p className={styles.navLinkDesc}>
                      Explore 2 Premier Medical Universities
                    </p>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link className={styles.button} href="/">
          Contact Us
        </Link>
      </div>
      <div className={styles.mobNav}>
        <Image
          src="/assets/logo.png"
          alt="Pick My University"
          width={60}
          height={70}
        />
        <button onClick={() => setIsOpen(true)}>
          <RiMenu3Line size={40} />
        </button>
        <div
          onClick={() => setIsOpen(false)}
          className={`${isOpen ? styles.overlay : styles.overlayHidden}`}
        ></div>
        <div
          className={`${styles.sideBar} ${isOpen ? styles.sideBarOpen : ""}`}
        >
          <div className="w-full flex justify-end px-4 py-5">
            <button onClick={() => setIsOpen(false)}>
              <MdClose size={40} />
            </button>
          </div>
          <ul className="px-6 flex flex-col gap-2">
            <li className={styles.mobNavElement}>
              <Link onClick={() => setIsOpen(false)} href="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className={styles.mobNavElement}
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className={styles.mobNavElement}
            >
              <Link href="/#services">Services</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className={styles.mobNavElement}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <figure className="flex flex-col gap-2">
              <figcaption className={styles.mobNavElement}>
                Countries
              </figcaption>
              <ul className="flex flex-col gap-1 list-disc ml-8">
                <li>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={styles.mobNavCountry}
                    href="/countries/russia"
                  >
                    Russia
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={styles.mobNavCountry}
                    href="/countries/georgia"
                  >
                    Georgia
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={styles.mobNavCountry}
                    href="/countries/kyrgyzstan"
                  >
                    Kyrgyzstan
                  </Link>
                </li>
              </ul>
            </figure>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
