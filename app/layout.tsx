import { inter, lusitana } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${lusitana.variable} antialiased`}>
			<body>{children}</body>
		</html>
	);
}
