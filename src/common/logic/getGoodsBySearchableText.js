export const getGoodsBySearchableText = (goods, searchableText) => {
    return goods.filter((good) => {
        return (
            good.name.toLowerCase().indexOf(searchableText.toLowerCase()) >
                -1 ||
            good.description
                .toLowerCase()
                .indexOf(searchableText.toLowerCase()) > -1
        );
    });
};
