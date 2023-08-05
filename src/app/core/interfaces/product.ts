export interface Product {
    id:          number;
    title:       string;
    price:       string;
    category:    string;
    description: string;
    image:       string;
    rating:      Rating;
}

interface Rating {
    count:      number;
    rate:       number
}
