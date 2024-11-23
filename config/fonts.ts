import { Limelight, Nunito } from "next/font/google";

export const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
});
export const titleFont = Limelight({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400"],
});