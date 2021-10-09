interface IInstallments {
    Value: number;
    NumberOfInstallments: number;
}

interface ISellers {
    commertialOffer: {
        Price: number;
        ListPrice: number;
        Installments: IInstallments[];
    }
}

interface IItemsData {
    sellers: ISellers[];
}

export interface ISearchItemData {
    productId: string;
    productName: string;
    categories: string[];
    link: string;
    items: IItemsData[];
}

export default interface ISearchResponseDTO {
    data: ISearchItemData[];
}
