import { afacad } from "@/app/fonts/fonts";
import Image from "next/image";
import pattern from "@/app/public/pattern.jpg";
import intro from "@/app/public/intro.png";
import eastChina from "@/app/public/east-china.jpeg";
import dojo from "@/app/public/dojo.jpeg";
import packup from "@/app/public/packup.jpg";

export default function Home() {
  return (
    <div>
      <div className="fixed h-screen w-screen overflow-hidden -z-[1]">
        <Image
          src={pattern}
          alt="dice pattern"
          quality={100}
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-between max-w-screen-xl m-auto bg-black min-h-screen">
        <main className="flex  flex-col items-center">
          <h1 className="text-5xl py-10 underline">Cody Thatcher</h1>
          {/* Section 1: Black background, image left, paragraph right */}
          <section className="flex flex-col items-center md:flex-row bg-black text-white md:py-16 py-8">
            <div className="md:w-1/2">
              <Image
                src={intro}
                width={600}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div className="md:w-1/2 flex items-center p-8">
              <p className="text-md">
                Cody sat at his cluttered desk, the scent of stale coffee
                lingering in the air, when a letter arrived bearing the familiar
                scrawl of Rupert Marrieweather. As a private investigator
                navigating the gritty streets of 1920s America, he had seen his
                fair share of strange cases and unsettling secrets. But this
                urgent summons felt different. The tone of Rupert’s letter was
                fraught with an unusual urgency, hinting at matters of great
                importance. The once vibrant and adventurous man he knew now
                appeared frail and unwell, his words dripping with the weight of
                impending finality. Curiosity and concern mingled within him as
                he read the letter, compelling him to rush to St. Mary&#39;s
                Teaching Hospital in Arkham at one o&#39;clock on Thursday,
                eager to uncover what Rupert had to share before it was too
                late.
              </p>
            </div>
          </section>

          {/* Section 2: Image top, paragraph left */}
          <section className="bg-gradient-to-b from-black to-ocean flex w-full lg:h-10 h-5 "></section>
          <section className="flex flex-col lg:flex-row-reverse relative bg-ocean md:py-16 py-8">
            <div className="md:w-full">
              <Image
                src={eastChina}
                width={1280}
                height={720}
                alt="Ocean canvas"
              />
            </div>
            <div className="lg:w-1/2 flex items-center p-8 lg:absolute inset-y-0 left-10 ">
              <p className="text-md lg:backdrop-brightness-50 lg:rounded-md lg:px-4 lg:py-3">
                His mind drifted back to a fateful day years ago when the winds
                howled and the sea roared like a wild beast. He had been aboard
                a merchant ship navigating the treacherous waters of the South
                China Sea, a far cry from his current life as a private
                investigator. Caught in a fierce storm, the ship was tossed like
                a toy, and he was knocked unconscious by a sudden blow to the
                head, causing him to tumble overboard and be swallowed by the
                churning waves. When he finally regained consciousness, a
                lifeboat appeared on the horizon, manned by none other than
                Rupert Marrieweather, who had been on an expedition in the
                region. With unwavering resolve, Rupert and his crew rescued him
                from the clutches of the storm, pulling him back to safety. This
                act of bravery forged a bond between them, rooted in gratitude
                and shared adventures, which had blossomed into a lasting
                friendship over the years. Little did he know that this
                life-saving encounter would lead him back to Rupert once more,
                under the shadow of mortality.
              </p>
            </div>
          </section>

          {/* Section 3: Image right, paragraph left */}
          <section className="bg-gradient-to-b from-ocean to-walnut flex w-full h-20 "></section>

          <section className="flex flex-col items-center lg:flex-row-reverse md:py-16 py-8 bg-walnut">
            <div className="lg:w-1/2">
              <Image src={dojo} width={1792} height={1008} alt="Dojo canvas" />
            </div>
            <div className="lg:w-1/2 flex items-center p-8">
              <p className="text-md">
                As he spent more time aboard Rupert’s ship, he quickly
                discovered that his friend was not just a seasoned adventurer
                but also a man of many secrets. The vessel was filled with an
                array of exploring materials—maps of uncharted territories,
                strange artifacts, and journals filled with cryptic notes. But
                the most intriguing discovery was the dojo room, a hidden
                sanctuary where Rupert practiced martial arts and meditation. It
                was there that Rupert introduced him to the discipline of
                self-defense and the art of focus, allowing him to channel his
                energy and regain some of the memories that had been lost to him
                after the storm. Under Rupert’s guidance, he not only honed his
                physical skills but also began to piece together fragments of
                his past, unraveling mysteries that had long haunted him. Each
                session in the dojo deepened their bond and left him with a
                lingering sense that Rupert held knowledge far beyond what he
                had shared, knowledge that now felt crucial as he prepared to
                meet the aging man once more.
              </p>
            </div>
          </section>

          {/* Section 4: Image top, paragraph right */}
          <section className="bg-gradient-to-b from-walnut to-clay flex w-full lg:h-10 h-5 "></section>

          <section className="flex flex-col items-center md:flex-row md:py-16 py-8 bg-clay">
            <div className="md:w-1/2">
              <Image
                src={packup}
                width={600}
                height={600}
                alt="Packing things up"
              />
            </div>
            <div className="md:w-1/2 flex items-center p-8">
              <p className="text-md text-right">
                As the clock ticked toward the appointed hour, urgency swelled
                within him. He quickly gathered his gear, tossing aside the case
                files that had cluttered his desk and the half-finished
                assignments that now felt insignificant in light of Rupert&#39;s
                summons. With each item he stowed away—his trusty notepad, a
                small revolver for protection, and a weathered coat—the weight
                of his current life began to lift. The call of the past, the
                adventure, and the mystery beckoned him forward. There was a
                sense of purpose now, a drive to uncover whatever secrets Rupert
                held, as if the threads of fate were drawing him back to the man
                who had saved him from the depths of despair. With one last
                glance at his chaotic workspace, he stepped out into the brisk
                air, determined to uncover the truth behind Rupert&#39;s urgent
                plea before time ran out.
              </p>
            </div>
          </section>
        </main>
        <footer className="flex items-center justify-center">
          <a
            className={`${afacad.className} antialiased flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs py-3`}
            href="https://stijn-peeters.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Stijn Peeters
          </a>
        </footer>
      </div>
    </div>
  );
}
