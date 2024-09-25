import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('screen');

export const COLORS = {
	primary: "#04764E",
	primaryLight: "#E5F5F0",
	secondary: "#F6DBB3",
	success: "#159E42",
	danger: "#FF3131",
	warning: "#ffb02c",
	dark: "#2f2f2f",
	light: "#E6E6E6",
	info: "#2B39B9",
	white: "#fff",
	label: "#8A8A8A",
	backgroundColor: "#fff",
	black: "#000",
	
	//light theme
	card : "#fff",
	background : "#F9F9F9",
	text : "#1B1B1B",
	title : "#222222",
	borderColor : "#ECECEC",
	input : "rgba(0,0,0,.03)",
	inputborder:"#C1CDD9",
	
	//dark theme
	darkCard : "rgba(255,255,255,.05)",
	darkBackground : "#2F2F2F",
	darkText : "rgba(255,255,255,.6)",
	darkTitle : "#fff",
	darkBorder : "rgba(255,255,255,.2)",
	darkInput : "rgba(255,255,255,.05)",
	darkinputborder:"#C1CDD9",
}

export const SIZES = {
	fontLg: 16,
	font: 14,
	fontSm: 13,
	fontXs: 12,

	//radius
	radius_sm: 8,
	radius: 6,
	radius_lg: 15,

	//space
	padding: 15,
	margin: 15,

	//Font Sizes
	h1: 40,
	h2: 28,
	h3: 24,
	h4: 20,
	h5: 18,
	h6: 16,

	//App dimensions
	width,
	height,

	container: 800,
};

export const FONTS = {
	fontLg: { fontSize: SIZES.fontLg, color: COLORS.text, lineHeight: 20, fontFamily: 'PoppinsRegular'},
	font: { fontSize: SIZES.font, color: COLORS.text, lineHeight: 20, fontFamily: 'PoppinsRegular'},
	fontSm: { fontSize: SIZES.fontSm, color: COLORS.text, lineHeight: 18, fontFamily: 'PoppinsRegular'},
	fontXs: { fontSize: SIZES.fontXs, color: COLORS.text, lineHeight: 14, fontFamily: 'PoppinsRegular'},
	h1: { fontSize: SIZES.h1, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	h2: { fontSize: SIZES.h2, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	h3: { fontSize: SIZES.h3, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	h4: { fontSize: SIZES.h4, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	h5: { fontSize: SIZES.h5, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	h6: { fontSize: SIZES.h6, color: COLORS.title, fontFamily: 'PoppinsSemiBold'},
	fontRegular: { fontFamily: 'PoppinsRegular'},
	fontMedium: { fontFamily: 'PoppinsMedium'},
	fontTitle: { fontFamily: 'PoppinsMedium'},
	fontBold: { fontFamily: 'PoppinsBold'},
	fontSemiBold: { fontFamily: 'PoppinsSemiBold'},
	fontLight: { fontFamily: 'PoppinsLight'},
	fontExtraLight: { fontFamily: 'PoppinsExtraLight'},
	fontExtraBold: { fontFamily: 'PoppinsExtraBold'},
	fontBlack: { fontFamily: 'PoppinsBlack'},

}


const appTheme = {COLORS, SIZES, FONTS}

export default appTheme;