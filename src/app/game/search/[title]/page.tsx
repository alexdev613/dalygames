import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";
import { GameCard } from '@/components/GameCard';

async function getData(title: string) {
  // console.log("PARÂMETRO: " + title);

  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`);
    return res.json();

  } catch (error) {
    return null;
  }
}

export default async function Search({
  params: { title }
}: {
  params: { title: string }
}) {

  const games: GameProps[] = await getData(title);

  return (
    <main>
      <Container>
        <Input />
          <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base:</h1>

          {!games && (
            <p>Esse jogo não foi encontrado!...</p>
          )}

          <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games && games.map( (item) => (
              <GameCard key={item.id} data={item} />
            ))}
          </section>
      </Container>
    </main>
  )
}