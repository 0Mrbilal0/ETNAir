interface RentalsDTO {
    id: number;
    title: string;
    nb_person: number;
    price: number;
    available_date: Date;
    type: Types;
    caracteristic: Characteristic
    adress: Adress;
}

interface Characteristic {
    id: number;
    nb_bedroom: number;
    nb_bathroom: number;
    description: string;
}

interface Adress {
    id: number;
    street: string;
    city: string;
    postal_code: string;
}

export enum Types {
    "HOUSE",
    "APARTMENT",
    "CASTLE",
    "TINY_HOUSE"
}

export type { RentalsDTO };
