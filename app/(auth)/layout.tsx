import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter justify-between">
        {children}
        <div className="auth-asset">
          <div>
            <Image 
              src="/icons/auth-img.png"
              width={900}
              height={900}
              alt="auth image"
            />
          </div>
        </div>
    </main>
  );
}
