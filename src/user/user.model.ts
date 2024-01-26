export interface User {
    id: number;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    firstname?: string;
    lastname?: string;
    birthdate?: Date;
    phone?: string;
    phone2?: string;
    zip?: string;
    number?: number;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    auth?: Auth[];
}

export interface Auth {
    // Define your Auth interface properties here
}
