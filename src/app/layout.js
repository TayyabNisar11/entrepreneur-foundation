import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import AppTheme from "@/theme";

export const metadata = {
  title: "Enterpreneur Foundation",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppTheme>{children}</AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
