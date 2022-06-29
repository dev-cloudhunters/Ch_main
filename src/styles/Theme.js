import { ThemeType, grommet } from "grommet";
import * as utils from "grommet/utils";
// palette
const palette = {
    blueAction: "#09bcef",
    blueHover: "#089abc",
    blueDark: "#004974",
    grayMedium: "#959699",
    grayLight: "#f7f7f7",
    gold: "#fcb600"
};

// theme
const theme = {
    global: {
        elevation: {
            light: {
                none: "none",
                xsmall: "0px 1px 2px rgba(0, 0, 0, 0.30)",
                small: "0px 2px 4px rgba(0, 0, 0, 0.30)",
                medium: "0px 4px 8px rgba(0, 0, 0, 0.30)",
                large: "0px 8px 16px rgba(0, 0, 0, 0.30)",
                xlarge: "0px 12px 24px rgba(0, 0, 0, 0.30)"
            },
            dark: {
                none: "none",
                xsmall: "0px 2px 2px rgba(255, 255, 255, 0.40)",
                small: "0px 4px 4px rgba(255, 255, 255, 0.40)",
                medium: "0px 6px 8px rgba(255, 255, 255, 0.40)",
                large: "0px 8px 16px rgba(255, 255, 255, 0.40)",
                xlarge: "0px 12px 24px rgba(255, 255, 255, 0.40)"
            }
        },
    },

     card: {
       /*  container: {
            elevation: "small",
        }, */
        
        container: {
            extend: () => `position:relative;min-height:500px;`
        },

        default: {}, 
        color:"white",
        hover: {
            container: {
                elevation: "xlarge",
            },
        },
       
    },

    
};

export { palette };
export default theme;