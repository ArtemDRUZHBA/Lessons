class Product {
    imgLink;
    productName;
    productPrice;

    constructor(link, name, price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;

        const product = document.createElement("div");
        product.innerHTML =
        `
        <img src="${this.imgLink}">
        <h5>${this.productName}</h5>
        <h6>${this.productPrice}</h6>
        <button>Купить</button>
        `
        document.body.append(product);
        
    }
}
let a = new Product("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.gazeta.ru%2Ffiles3%2F34%2F14989034%2F59051691-10915089-image-m-34_165-pic_32ratio_1200x800-1200x800-85861.jpg&tbnid=Va6oo2-gLeK-TM&vet=12ahUKEwjGqKD6sd-CAxV2iv0HHZ88CZkQMygRegUIARCTAQ..i&imgrefurl=https%3A%2F%2Fm.gazeta.ru%2Fsocial%2Fnews%2F2022%2F06%2F14%2F17931794.shtml&docid=Cw6sHGYczqMOrM&w=1200&h=800&q=rjn&ved=2ahUKEwjGqKD6sd-CAxV2iv0HHZ88CZkQMygRegUIARCTAQ", "name", 20);