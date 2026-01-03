import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>
            <AppShellHeader>
              <h1>Header</h1>
            </AppShellHeader>

            <AppShellNavbar />

            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
