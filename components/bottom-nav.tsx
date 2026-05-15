"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Braces, Atom } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.includes(path);
  };

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/section/javascript", icon: Braces, label: "JavaScript" },
    { href: "/section/react", icon: Atom, label: "React" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const isJS = item.href.includes("javascript");
          const isReact = item.href.includes("react");

          let activeColor = "text-primary";
          if (isJS && active) activeColor = "text-js";
          if (isReact && active) activeColor = "text-react";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-3 px-6 transition-colors ${
                active ? activeColor : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
