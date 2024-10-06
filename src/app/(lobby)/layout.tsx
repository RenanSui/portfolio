export default async function LobbyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-10 md:py-20">
      <main className="flex-1">{children}</main>
    </div>
  )
}
