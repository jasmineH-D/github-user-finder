"use client";

import { CacheProvider } from "@jazz-ui/next-js";
import { ChakraProvider } from "@jazz-ui/react";

export function Providers({ children }) {
	return (
		<CacheProvider>
			<JazzProvider>{children}</JazzProvider>
		</CacheProvider>
	);
}
