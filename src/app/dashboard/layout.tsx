import SidebarComponent from "@/components/DashBoardComponent.tsx/SildeBarDashBordComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="flex">
      <SidebarComponent />
      {children}
    </aside>
  );
}
