import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  import { FaWhatsapp, FaInstagram } from "react-icons/fa";
  import { AiOutlineDiscord } from "react-icons/ai";

  const Navigation = () => (
    <NavigationMenu>
            <NavigationMenuList>
                {/* Projects */}
                <NavigationMenuItem>
                <NavigationMenuTrigger>My Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-5 grid-cols-[.75fr_1fr] h-[316px] font-cabinet w-[600px]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-400/50 to-slate p-6 no-underline outline-none focus:shadow-md mt-2"
                            href="/"
                        >
                            <p className="text-center text-base leading-tight text-muted-foreground">
                            If you'd like to view my projects please click one of the buttons below 💖
                            </p>
                        </a>
                        </NavigationMenuLink>
                    {/* Main Projects Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            "block select-none rounded-md p-3 text-center leading-none no-underline outline-none transition-colors bg-blue-100/50 hover:bg-blue-300 focus:bg-slate-900 focus:text-white"
                            href="/main-projects"
                        >
                        <div className="text-base font-medium leading-none mt-1 text-center">Main Projects</div>
                        </a>
                    </NavigationMenuLink>
                    {/* Mini Projects Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            "block select-none text-center rounded-md p-3 leading-none no-underline outline-none transition-colors bg-blue-100/50 hover:bg-blue-300 focus:bg-slate-900 focus:text-white"
                            href="/mini-projects"
                        >
                        <div className="text-base font-medium leading-none mt-1">Mini Projects</div>
                        </a>
                    </NavigationMenuLink>
                    {/* Active Projects Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            "block select-none text-center rounded-md p-3 leading-none no-underline outline-none transition-colors bg-blue-100/50 hover:bg-blue-300 focus:bg-slate-900 focus:text-white"
                            href="/active-projects"
                        >
                        <div className="text-base font-medium from-neutral-500 leading-none mt-1">Active Projects</div>
                        </a>
                    </NavigationMenuLink>
                    </li>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Me */}
                <NavigationMenuItem>
                <NavigationMenuTrigger>Contact Me</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-5 grid-cols-[.75fr_1fr] font-cabinet w-[600px]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex h-fit w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-400/50 to-slate p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                        >
                            <p className="text-center text-base leading-tight text-muted-foreground">
                            If you'd like to contact me please click one of the buttons below
                            </p>
                        </a>
                        </NavigationMenuLink>
                    {/* Whatsapp Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            " select-none flex items-center justify-center rounded-md p-3 text-center leading-none no-underline outline-none transition-colors bg-green-200/50 hover:bg-green-400 focus:bg-slate-900 focus:text-white"
                            href='https://wa.me/+94772350712'
                            target='_blank'
                        >
                        <FaWhatsapp className="mr-2 text-2xl"/>
                        <div className="text-base font-medium leading-none">Whatsapp</div>
                        </a>
                    </NavigationMenuLink>
                    {/* Discord Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            " select-none flex items-center justify-center text-center rounded-md p-3 leading-none no-underline outline-none transition-colors bg-blue-200/50 hover:bg-blue-400 focus:bg-slate-900 focus:text-white"
                            href='https://discord.com/users/1040597411116089424'
                            target='_blank'
                        >
                        <AiOutlineDiscord className="mr-2 text-2xl"/>
                        <div className="text-base font-medium leading-none">Discord</div>
                        </a>
                    </NavigationMenuLink>
                    {/* Instagram Link */}
                    <NavigationMenuLink asChild className="mt-2">
                        <a
                        className=
                            "flex items-center justify-center select-none text-center rounded-md p-3 leading-none no-underline outline-none transition-colors bg-orange-200/50 hover:bg-orange-300 focus:bg-slate-900 focus:text-white"
                            href='https://www.instagram.com/everybodyhatesriddle'
                            target='_blank'
                        >
                        <FaInstagram className="mr-2 text-2xl"/>
                        <div className="text-base font-medium from-neutral-500 leading-none">Instagram</div>
                        </a>
                    </NavigationMenuLink>
                    </li>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>

                {/* TODO: Add Download CV with About Me NavItems */}

            </NavigationMenuList>
            </NavigationMenu>
  );

export default Navigation
