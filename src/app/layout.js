import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Consumable AI: Supercharge Your Organic Growth",
	description:
		"Elevate your digital marketing with our AI platform, revolutionizing SEO, advertising, and content creation. Drive growth and innovation like never before!",
	keywords:
		"Online Digital Marketing Agency, Digital Marketing Agency , SEO Marketing ,ai digital marketing agencyAgencies, SEO Company, Marketing Agency, Online Marketing Agency, Online Digital Marketing Agency , Internet Marketing Agency, Digital Marketing Services , Marketing Agency , Best Digital Marketing Agency, Full Service Digital Marketing Agency, Top Digital Marketing Agencies, Web Marketing Agency,organic marketing agency ,organic marketing",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="sitemap"
					type="application/xml"
					title="Sitemap"
					href="/sitemap.xml"
				/>

				<meta name="robots" content="index,follow" />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-5QN3MTC5V0"
				></Script>
				<Script id="google-analytics">
					{`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-5QN3MTC5V0');
          `}
				</Script>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
