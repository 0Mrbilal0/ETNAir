import {useCallback, useEffect, useState} from "react";
import {get} from "../../axios/Requests.ts";
import {RentalsDTO, Type} from "../../@types/RentalsDTO.ts";
import RentalsList from "./RentalsList.tsx";

function Home() {
    const [rentals, setRentals] = useState<RentalsDTO[]>();
    const [rentalsFiltered, setRentalsFiltered] = useState<RentalsDTO[]>();
    const [hiddenToggle, setHiddenToggle] = useState("hidden");
    const [search, setSearch] = useState<string>("");
    const [type, setType] = useState<string>();
    const [nb_bathroom, setNb_bathroom] = useState<number>();
    const [nb_bedroom, setNb_bedroom] = useState<number>();
    const types: string[] = ['HOUSE', 'APARTMENT', 'CASTLE', 'TINY_HOUSE']

    const fetchRentals = useCallback(() => {
        get<RentalsDTO[]>(import.meta.env.VITE_GET_RENTALS).then(response => {
            setRentals(response)
        }).catch(error => {
            console.error(error)
        })
    }, []);

    useEffect(() => {
        fetchRentals()
    }, []);

    useEffect(() => {
        console.log(search, type, nb_bathroom, nb_bedroom)
        if (rentals !== undefined) {
            console.log(rentals)
            let rentalFiltered = rentals.filter(rental => {
                return (search === "" || rental.title.toLowerCase().includes(search!.toLowerCase())) &&
                    (type === undefined || rental.type === type as unknown as Type) &&
                    (nb_bathroom === undefined || rental.caracteristic.nb_bathroom === nb_bathroom) &&
                    (nb_bedroom === undefined || rental.caracteristic.nb_bedroom === nb_bedroom)
            })
            setRentalsFiltered(rentalFiltered)
        } else if (search === "" && type === undefined && nb_bathroom === undefined && nb_bedroom === undefined) {
            setRentalsFiltered(undefined)
        }
    }, [search, type, nb_bathroom, nb_bedroom]);

    return (
        <div className="flex flex-col gap-5 py-5">
            <section className="mx-auto flex gap-5">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-96">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search Rental(s)"
                           onChange={e => setSearch(e.target.value)}
                           required
                    />
                </div>
                <a
                    onClick={() => setHiddenToggle(hiddenToggle === "" ? "hidden" : "")}
                    className="inline-flex cursor-pointer items-center px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Advanced Search
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={3}
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"/>
                    </svg>
                </a>
            </section>

            <section className={`flex gap-5 justify-center w-full ${hiddenToggle} max-w-auto mx-auto flex-wrap align-`}>
                <section className={"w-60"}>
                    <select id="rentals"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={e => setType(e.currentTarget.value === "undefined" ? undefined : e.currentTarget.value)}
                    >
                        <option value={"undefined"} selected>Choose a Type</option>
                        {
                            types.map((type: string) => <option key={type} value={type}>{type}</option>)
                        }
                    </select>
                </section>
                <section className="max-w-32">
                    <input type="number"
                           value={nb_bathroom}
                           onChange={(e) => setNb_bathroom(e.currentTarget.value === "" ? undefined : Number(e.currentTarget.value))}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder={"Nb Bathroom"}
                    />
                </section>
                <section className="max-w-32">
                    <input type="number"
                           value={nb_bedroom}
                           placeholder={"Nb Bedroom"}
                           onChange={(e) => setNb_bedroom(e.currentTarget.value === "" ? undefined : Number(e.currentTarget.value))}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </section>
                {/*<a*/}
                {/*    onClick={() => {*/}
                {/*        setNb_bathroom(undefined)*/}
                {/*        setNb_bedroom(undefined)*/}
                {/*        setType(undefined)*/}
                {/*    }}*/}
                {/*    className="inline-flex cursor-pointer items-center px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                {/*    Reset*/}
                {/*</a>*/}
            </section>
            {
                rentals !== undefined ?
                    <RentalsList rentals={rentalsFiltered !== undefined ? rentalsFiltered : rentals}/> :
                    <p>Loading...</p>
            }
        </div>
    )
}

export default Home
