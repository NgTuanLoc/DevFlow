"use client"
import {ThemeProviderProps, ThemeProvider as NextThemesProvider} from "next-themes";

const Theme = ({children,...props}: ThemeProviderProps ) => {
    return (
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
    )
}
export default Theme
