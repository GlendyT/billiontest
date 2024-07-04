import Sidebar from "@/components/order/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="md:flex">
          
            <Sidebar/>
            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-2">
                {children}
            </main>
        </div>
    )
  }