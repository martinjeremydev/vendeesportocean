import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

export default function Cgv() {
  return (
    <>
      <Head>
        <title>Conditions générales de vente</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h1 className="px-2 md:px-4 text-3xl my-10">CGV</h1>
        <h2 className="px-2 md:px-4 text-3xl my-10">
          CONDITIONS GENERALES DE VENTE :
        </h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Pour pouvoir effectuer un stage, il faut :<br></br> – Savoir nager 50
          m. <br></br>– Être âgé(e) d’au moins 12 ans et peser au minimum 42kg
          (ceci pour des raisons de sécurité et d’adaptation du matériel)
          <br></br> – Être en bonne forme physique, ne pas être enceinte.
          <br></br> – Les mineurs devront avoir fait remplir l’autorisation
          parentale (disponible sur le site internet).<br></br> – Une assurance
          RC pour la pratique du Kite en école est obligatoire (Possibilité de
          souscrire sur place lors du 1er jour de stage) .
        </p>
        <h2 className="px-2 md:px-4 text-3xl my-10">Inscription :</h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Les réservations se font obligatoirement par téléphone au 06 60 99 47
          33 ou par internet sur notre site, afin de vérifier les
          disponibilités.<br></br>
          <br></br> L’inscription n’est validée qu’après réception d’un acompte
          correspondant à 50 % de la valeur du stage.<br></br>
          <br></br> Un e-mail de confirmation vous sera adressé dès réception.
        </p>
        <h2 className="px-2 md:px-4 text-3xl my-10">
          ORGANISATION DES SÉANCES :
        </h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Les séances durent 3h avec un maximum de 4 élèves par moniteur.
          <br></br> Si une seule personne est inscrite, la séance est maintenue
          au même tarif mais sa durée peut être réduite à 2h30.<br></br> La
          veille de chaque séance, le moniteur vous recontactera entre 19h-19h30
          pour vous communiquer l’horaire du rendez-vous du lendemain.<br></br>{" "}
          En cas d’annulation pour faute de vent le cours pourra être reporté ou
          remboursé.<br></br> Il ne sera effectué aucun remboursement en cas de
          retard du stagiaire, ou de départ de celui-ci avant la fin du cours.
        </p>
        <h2 className="px-2 md:px-4 text-3xl my-10">
          MATERIEL A APPORTER LE JOUR DU STAGE :
        </h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          – Lunettes de soleil et crème solaire (même par temps couvert) et une
          serviette pour la douche. <br></br>– Une vieille paire de baskets, un
          coupe-vent.
        </p>
        <h2 className="px-2 md:px-4 text-3xl my-10">
          CONDITIONS D’ANNULATION :
        </h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Il est possible d’annuler un stage sans frais jusqu’à deux semaines
          avant le début du stage. Toute annulation dans les deux semaines
          précédant le stage, entraînera l’encaissement du chèque d’acompte par
          l’école VENDEE SPORTS OCEAN<br></br>
          <br></br>L’école se réserve le droit d’annuler une séance, si le
          moniteur estime que les conditions ne sont pas favorables à
          l’enseignement du Kitesurf (vent trop faible ou trop fort, orage, …).
          <br></br>
          <br></br> Dans ce cas, le cours sera soit reporté, soit remboursé.
          <br></br>
          <br></br>
          <b>MEDIATION DES LITIGES DE LA CONSOMMATION</b>
          <br></br>
          <br></br> Conformément aux articles L 611-1 à L 611-3 et R 612-1 à R
          616-2 du code de la consommation tout consommateur a le droit de
          recourir gratuitement à un médiateur de la consommation, en vue de la
          résolution amiable du litige qui l’oppose à un professionnel, dès lors
          que le litige lié à la consommation n’a pu être réglé amiablement et
          directement avec le professionnel.<br></br>
          <br></br> A cet effet, le professionnel garantit au consommateur le
          recours effectif à un dispositif de médiation de la consommation.
          L’entité de médiation de la consommation désignée par le professionnel
          est : l’Association AMBO qui peut être saisie :<br></br> ● soit par
          courrier postal à l’adresse suivante : AMBO 12, rue Colbert B 37 –
          56100 LORIENT<br></br> ● soit par voie électronique en remplissant le
          formulaire dédié sur le site de AMBO :
          https://www.ambo.bzh/mediation-consommation/
        </p>
        <h2 className="px-2 md:px-4 text-3xl my-10">
          DROIT DE RETRACTATION RELATIVE A LA VENTE A DISTANCE
        </h2>
        <p className="mb-8 pl-2 md:pl-4 text-xl lg:px-0">
          Vous disposez d’un droit de rétractation de 14 jours à partir du
          lendemain de la réception du bon cadeau.<br></br> La demande
          rétractation devra être faite par courrier recommandé (aucune
          justification nécessaire).<br></br>
          Le bon cadeau devra nous être renvoyé à vos frais.<br></br> Le
          remboursement sera effectué dans un délai de 15 jours soit par
          virement ou chèque bancaire. <br></br>VENDEE SPORTS OCEAN – 23 rue de
          la chaize – 85470 BREM SUR MER<br></br> Tel: 06 60 99 47 33 / Mail:
          contact@vendeesportsocean.fr / Web: http://www.vendeesportsocean.fr{" "}
          <br></br>Siret 47807250700039
        </p>
        <Footer></Footer>
      </div>
    </>
  );
}
