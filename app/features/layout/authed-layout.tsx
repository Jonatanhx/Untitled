import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";

export function AuthedLayout({ children }: PropsWithChildren) {
  return (
    <AppShell>
      <AppShell.Header></AppShell.Header>
      <AppShell.Navbar></AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
