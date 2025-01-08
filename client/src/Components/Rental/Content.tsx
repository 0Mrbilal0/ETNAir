import { SetStateAction, useCallback, useEffect, useState } from "react";
import { get } from "../../axios/Requests.ts";
import { RentalsDTO } from "../../@types/RentalsDTO.ts";
import { useParams } from "react-router";
import Separator from "./Separator.tsx";

function Home() {
  const [rental, setRental] = useState<RentalsDTO>();
  const [nbNight, setNbNight] = useState(1);
  const { id } = useParams();

  const fetchRentals = useCallback(() => {
    const url = import.meta.env.VITE_GET_RENTAL.replace("id", id);
    get<RentalsDTO>(url)
      .then((response) => {
        setRental(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchRentals();
  }, []);

  if (rental === undefined) {
    return (
      <div className="flex flex-col gap-5 py-5">
        <section className="mx-auto flex gap-5">
          <p>Annonce non disponible</p>
        </section>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 py-5">
        <div className="mx-8 col-span-2 flex row-span-2 gap-5 flex-col">
          <img
            className="rounded-t-lg max-h-52 w-full object-none"
            src="/Logo_Lightmode.png"
            alt=""
          />
          <h1 className="font-bold text-5xl text-center">{rental.title}</h1>
          <Separator />
          <p>{rental.caracteristic.description}</p>
          <div className="bg-gray-400 p-5 rounded grid gap-y-3">
            <h1 className="font-bold text-3xl text-center">Informations</h1>
            <Separator />
            <div className="flex flex-wrap flex-row justify-around gap-2">
              <p>
                Nombre de salles de bains: {rental.caracteristic.nb_bathroom}
              </p>
              <p>Nombre de chambres: {rental.caracteristic.nb_bedroom}</p>
              <p>Type: {rental.type}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1 grid gap-y-3 gap-5 mx-8 p-5 rounded bg-gray-400">
          <h1 className="font-bold text-3xl text-center">Reservation</h1>
          <Separator />
          <div className="flex flex-wrap flex-col gap-2">
            <div className="flex flex-wrap justify-between align-center">
              <label>Nombre de personnes (1-{rental.nb_person}):</label>
              <input
                className="rounded px-1 py-0"
                type="number"
                id="nbPerson"
                min="1"
                max={rental.nb_person}
              />
            </div>
            <div className="flex flex-wrap justify-between align-center">
              <label>Nombre de nuit:</label>
              <input
                className="rounded px-1 py-0"
                type="number"
                value={nbNight}
                id="nbNight"
                min="1"
                max="100"
                onChange={(e) => setNbNight(Number(e.currentTarget.value))}
              />
            </div>
            <div className="flex flex-wrap justify-between align-center">
              <label>Coût par nuit:</label>
              <p>{rental.price}€</p>
            </div>
            <Separator />
            <div className="flex flex-wrap justify-between align-center">
              <label>Prix total:</label>
              <p>{nbNight * rental.price}€</p>
            </div>
            <a
              href={`/annonces/${rental.id}`}
              className="inline-flex items-center justify-center px-3 py-2 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
