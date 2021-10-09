import { ISearchItemData } from '../dtos/ISearchResponseDTO';

// Selecionando os dados do produto
const getProductData = ({
    productId,
    productName,
    categories,
    items,
    link,
}: ISearchItemData) => {
    // Recuperando os dados do produto
    const priceWithoutFormat = items[0].sellers[0].commertialOffer.Price;
    const listPriceWithoutFormat = items[0].sellers[0].commertialOffer.ListPrice;
    const haveDiscount = listPriceWithoutFormat > priceWithoutFormat;

    // Buscando o máximo de parcelas
    let largestNumberOfInstallments = 1;
    items.forEach(item => {
        item.sellers.forEach(seller => {
            seller.commertialOffer.Installments.forEach(installment => {
                if(installment.NumberOfInstallments > largestNumberOfInstallments) {
                    largestNumberOfInstallments = installment.NumberOfInstallments;
                }
            });
        });
    });

    // Calculando o valor de cada parcela
    const installmentsValueWithoutFormat = (priceWithoutFormat / largestNumberOfInstallments);
    const haveInstallments = largestNumberOfInstallments > 1;

    // Retornando o objeto com os dados do produto
    return {
        productId,
        productName,
        categories,
        price: priceWithoutFormat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        listPrice: listPriceWithoutFormat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        haveDiscount,
        numberOfInstallments: largestNumberOfInstallments,
        installmentsValue: installmentsValueWithoutFormat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        haveInstallments,
        link,
    }
}

export default getProductData;
