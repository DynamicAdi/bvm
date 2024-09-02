import { DM_Sans, Inter, Poppins } from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--main-font"
});

export const popins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--secondary-font"
});

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--third-font"
})