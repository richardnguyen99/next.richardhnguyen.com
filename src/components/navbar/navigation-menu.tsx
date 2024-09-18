"use client";

import * as React from "react";
import Link from "next/link";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { FrontMatter } from "@/lib/mdx";
import {
  NavigationMenu as UINavigationMenu,
  NavigationMenuContent as UNavigationMenuContent,
  NavigationMenuItem as UINavigationMenuItem,
  NavigationMenuList as UINavigationList,
  NavigationMenuTrigger as UINavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavbarContext } from "./context";
import NavigationMobile from "./navigation-mobile";
import NavigationMenuList from "./navigation-menu-list";
import NavigationMenuLatestPost from "./navigation-menu-latest-post";

export type HeaderDataProps = {
  latestPost: FrontMatter;
  mostViewedCategories: Array<{
    url: string;
    category: string;
  }>;
  mostViewedTags: Array<{
    url: string;
    tag: string;
  }>;
};

const NavigationMenu: React.FC<HeaderDataProps> = ({
  latestPost,
  mostViewedCategories,
  mostViewedTags,
}) => {
  const navbarContext = useNavbarContext();
  const [isListReady, setIsListReady] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<number | null>(null);

  const handleValueChange = React.useCallback(
    (value: string) => {
      if (value === "" || value.length === 0) {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }

        navbarContext.handleIsOpen(false);
        setIsListReady(false);
      } else {
        const id = window.setTimeout(() => {
          setIsListReady(true);
        }, 300);
        setTimeoutId(id);
        navbarContext.handleIsOpen(true);
      }
    },
    [navbarContext, timeoutId],
  );

  React.useEffect(() => {
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <UINavigationMenu onValueChange={handleValueChange}>
      <div
        className={cn(
          "pointer-events-none z-[-1] transform-gpu",
          "ease-out-cubic transition-[opacity,transform] duration-300",
          "absolute left-1/2 top-0 h-[42.5rem] w-[200%]",
          "-translate-x-[100vw]",
          "bg-white blur-[200px] saturate-[2]",
          {
            "-translate-y-[100%] opacity-0": !navbarContext.isOpen,
            "-translate-y-1/2 opacity-100": navbarContext.isOpen,
          },
        )}
      ></div>

      <div
        className={cn(
          "ease-out-cubic relative z-50 mx-auto h-full min-h-[3.125rem] w-full transform-gpu bg-white backdrop-blur transition duration-300 md:h-[3.125rem] md:backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "ease-curve-d relative mx-[var(--gutter-size)] flex min-h-[3.125rem] w-[var(--container-size)] items-center justify-between transition duration-300 [&>div]:h-full",
          )}
        >
          <Link
            href="/"
            passHref
            className={cn(
              "flex items-center justify-center",
              "h-10 w-10 rounded-full p-2",
              "hover:bg-slate-100",
            )}
            onClick={() => navbarContext.handleIsOpen(false)}
          >
            <div className="h-full w-full bg-black"></div>
          </Link>

          <div
            className={cn(
              "ml-auto flex items-center justify-center gap-[0.5rem] md:hidden",
            )}
          >
            <button
              className={cn(
                "group relative block",
                "h-10 w-10 rounded-full p-2",
                "hover:bg-neutral-100",
                "ease-curve-d transition-opacity duration-300",
                {
                  "opacity-0": navbarContext.isOpen,
                  "opacity-100": !navbarContext.isOpen,
                },
              )}
              type="button"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-full w-full" />
            </button>

            <button
              className={cn(
                "group relative block",
                "h-10 w-10 rounded-full p-2",
                "hover:bg-neutral-100",
              )}
              type="button"
              aria-label="menu"
              onClick={() => navbarContext.handleIsOpen(!navbarContext.isOpen)}
            >
              <HamburgerMenuIcon className="h-full w-full" />
            </button>
          </div>

          <div className="[&>div]:!static [&>div]:h-full">
            <UINavigationList
              className={cn(
                "hidden h-full items-center justify-center md:flex",
              )}
            >
              <UINavigationMenuItem>
                <UINavigationMenuTrigger>Articles</UINavigationMenuTrigger>

                <UNavigationMenuContent className="lg:left-[calc(0.5_*_(100%-1024px))]">
                  <div className="data-[]: relative grid w-full grid-cols-[repeat(2,calc(20px+(0.5*(min(100%,68rem)-352px))))_1fr]">
                    <NavigationMenuList
                      title="Categories"
                      initialDelay={0}
                      items={mostViewedCategories.map((category) => ({
                        text: category.category,
                        url: category.url,
                      }))}
                      isListReady={isListReady}
                    />

                    <NavigationMenuList
                      title="Tags"
                      initialDelay={mostViewedCategories.length * 50}
                      items={mostViewedTags.map((tag) => ({
                        text: tag.tag,
                        url: tag.url,
                      }))}
                      isListReady={isListReady}
                    />

                    <NavigationMenuLatestPost
                      isListReady={isListReady}
                      initialDelay={
                        (mostViewedCategories.length +
                          mostViewedTags.length +
                          1) *
                        50
                      }
                      latestPost={latestPost}
                    />
                  </div>
                </UNavigationMenuContent>
              </UINavigationMenuItem>

              <UINavigationMenuItem>
                <UINavigationMenuTrigger>Gists</UINavigationMenuTrigger>
                <UNavigationMenuContent className="lg:left-[calc(0.5_*_(100%_-_1024px))]"></UNavigationMenuContent>
              </UINavigationMenuItem>

              <UINavigationMenuItem>
                <UINavigationMenuTrigger>About</UINavigationMenuTrigger>
                <UNavigationMenuContent className="lg:left-[calc(0.5_*_(100%_-_1024px))]"></UNavigationMenuContent>
              </UINavigationMenuItem>
            </UINavigationList>
          </div>

          <button
            className={cn(
              "group relative hidden md:block",
              "h-10 w-10 rounded-full p-2",
              "hover:bg-neutral-100",
            )}
            type="button"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-full w-full" />
          </button>
        </div>
      </div>

      <NavigationMobile />
    </UINavigationMenu>
  );
};

export default NavigationMenu;
