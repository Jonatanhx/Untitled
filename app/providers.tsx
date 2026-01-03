import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

export function Providers({ children }: PropsWithChildren) {
  return (
    <div>
      <MantineProvider theme={theme} forceColorScheme="dark">
        {children}
      </MantineProvider>
    </div>
  );
}
