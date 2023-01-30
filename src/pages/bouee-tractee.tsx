import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function BoueeTractee() {
  return (
    <>
      <Head>
        <title>Bouée tractée</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto animate__animated animate__fadeIn animate__delay-1s">
        <Header></Header>
        <h1 className="text-3xl text-center my-10">Bouée tractée</h1>
        <p className="mb-8 text-l px-4 md:px-8 lg:px-10">
          Amateurs de sensations, cette activité est pour vous !<br></br>Pour
          vous éclater entre amis, en couple ou en groupe, la bouée tractée
          restera à coup sûr un moment de convivialité inoubliable.<br></br>
          <br></br> J’adapterai la vitesse du bateau à vos envies.<br></br>
          <br></br> Nous disposons de différentes bouées multiplaces pour que
          vous partagiez ce moment fort ensemble.
        </p>
        <div className="px-4 md:px-8 lg:px-48 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/bouee1.jpeg"
              width="400"
              height="400"
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/bouee2.jpeg"
              width="400"
              height="400"
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/bouee3.jpeg"
              width="400"
              height="400"
              className="rounded-md"
            ></Image>
          </div>
        </div>
        <p className="mb-6 text-l px-4 md:px-8 lg:px-10">
          Cette activité est proposée en Juillet et Aout au départ de la Plage
          de la Normandelière à Brétignolles-sur-mer. Tarif unique de 20 euros
          par personne. <br></br> <br></br> Le tour de bouée dure 15min, les
          inscriptions se font par téléphone. Réglement en chèque ou espèce sur
          le bateau. <br></br> <br></br> Idéal pour vos EVJF et EVJG. <br></br>{" "}
          <br></br> Activité pour tous à partir de 10 ans. Il faut savoir nager
          et être à l’aise dans l’eau. Le gilet de sauvetage est fourni, prévoir
          son maillot de bain, une serviette et un tee shirt ou lycra sur le
          bateau. <br></br> <br></br> A très bientôt sur l’eau ou dans les airs
          !
        </p>
        <div className="px-4 md:px-8 lg:px-48 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/bouee4.jpeg"
              width="400"
              height="400"
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/bouee5.jpeg"
              width="400"
              height="400"
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/bouee6.jpeg"
              width="400"
              height="400"
              className="rounded-md"
            ></Image>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
