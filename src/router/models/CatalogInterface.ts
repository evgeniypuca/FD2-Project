export interface Catalog {
    name: string;
    description: string;
    price: string;
    category: string;
    sizes: {
        s: {
            size: string;
            addprice: string;
        },
        m: {
            size: string;
            addprice: string;
        },
        l: {
            size: string;
            addprice: string;
        }
    },
    additives: [
        {
            size: string;
            addprice: string;
        },
        {
            size: string;
            addprice: string;
        },
        {
            size: string;
            addprice: string;
        }
    ]
}