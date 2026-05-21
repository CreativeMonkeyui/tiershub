interface PageProps {
  params: Promise<{
    player: string;
  }>;
}

export default async function PlayerProfile({
  params,
}: PageProps) {

  const { player } = await params;

  const username = player;

  return (
    <main className="min-h-screen bg-[#05070d] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-6xl font-black">
          {username}
        </h1>

      </div>

    </main>
  );
}