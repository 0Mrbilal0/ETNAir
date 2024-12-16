import {RentalsDTO} from "../../@types/RentalsDTO.ts";

function RentalsList({rentals}: { rentals: RentalsDTO[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {rentals.map((rental) => (
                <div key={rental.id}
                     className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={`/annonces/${rental.id}`}>
                        <img className="rounded-t-lg max-h-52 w-full object-none" src="/Logo_Lightmode.png" alt=""/>
                    </a>
                    <div className="p-5">
                        <a href={`/annonces/${rental.id}`}>
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white truncate">{rental.title}</h5>
                        </a>
                        <hr className="mb-4 w-full"/>
                        <section className="flex justify-between mb-16">
                            <p className="text-sm text-gray-900 dark:text-white">{rental.caracteristic.nb_bedroom} chambres </p>
                            <p className="text-sm text-gray-900 dark:text-white">{rental.nb_person} pers.</p>
                            <p className="text-sm text-gray-900 dark:text-white">{rental.price}€/nuit</p>
                        </section>
                        <a href={`/annonces/${rental.id}`}
                           className="inline-flex items-center justify-center px-3 py-2 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Reserver
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RentalsList
