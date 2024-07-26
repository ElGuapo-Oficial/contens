export interface IContainer {
    id:           string;
    price:        string;
    size:         ISize;
    condition:    string;
    image:        string;
    availability: string;
}

export interface ISize {
    height: number;
    width:  number;
    length: number;
}


const containerData: IContainer[] = [
    {
        id: 'CNRJ-01',
        price: '4001',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/blueContainer.webp',
        availability: 'Venta'
        
    },
    {
        id: 'CNRJ-02',
        price: '4002',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/grayContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-03',
        price: '4003',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/grayContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-04',
        price: '4004',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/grayContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-05',
        price: '4005',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/grayContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-06',
        price: '4006',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/blueContainer.webp',
        availability: 'Renta'
    },
    {
        id: 'CNRJ-07',
        price: '4007',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/redContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-08',
        price: '4008',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/grayContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-09',
        price: '4009',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/redContainer.webp',
        availability: 'Venta'
    },
    {
        id: 'CNRJ-10',
        price: '4010',
        size: {
            height: 45,
            width: 8,
            length: 9.6,
        },
        condition: 'Nuevo',
        image: '/blueContainer.webp',
        availability: 'Venta'
    }
    // {
    //     id: 'CNRJ-11',
    //     price: '4011',
    //     size: {
    //         height: 45,
    //         width: 8,
    //         length: 9.6,
    //     },
    //     condition: 'Nuevo',
    //     image: '/grayContainer.webp',
    //     availability: 'Venta'
    // },
    // {
    //     id: 'CNRJ-12',
    //     price: '4012',
    //     size: {
    //         height: 45,
    //         width: 8,
    //         length: 9.6,
    //     },
    //     condition: 'Nuevo',
    //     image: '/grayContainer.webp',
    //     availability: 'Venta'
    // },
]


export default containerData;