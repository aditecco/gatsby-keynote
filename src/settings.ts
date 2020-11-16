
/* ---------------------------------
Settings
--------------------------------- */

import { ISettings } from "./types";
import cssColors from "./styles/partials/_colors.scss"
import cssTypography from "./styles/partials/_typography.scss"


export const SETTINGS: ISettings = {
  "accent-primary": cssColors?.accent01 ?? "#dadada",
  "accent-secondary": cssColors?.accent02 ?? "white",
  font: cssTypography?.font ?? '"Helvetica, Arial", sans-serif',
  transition: "immediate",
  "main-logo": `//logo.clearbit.com/airbnb.com?size=90`,
  "deck-title": "Example Deck",
}
