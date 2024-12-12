interface RentalsDTO {
    id: number;
    title: string;
    nb_person: number;
    price: number;
    available_date: Date;
    type: Type;
    caracteristic: Caracteristic
    address: Address;
}

interface Caracteristic {
    id: number;
    nb_bedroom: number;
    nb_bathroom: number;
    description: string;
}

interface Address {
    id: number;
    street: string;
    city: string;
    zip_code: string;
    country: string;
}

export enum Type {
    "HOUSE",
    "APARTMENT",
    "CASTLE",
    "TINY_HOUSE"
}

export type {RentalsDTO};
