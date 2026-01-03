import { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { Providers } from "./providers";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="untitled" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
