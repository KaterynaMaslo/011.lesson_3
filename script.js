const imgFolder = "images/images/";

function renderProduct(productElem, category){
    productElem.map((product) => {
        let srcImg = imgFolder + category+"/"+product.type + ".svg";
        const newProduct = new Product(srcImg, product.type, product.price);
        return newProduct;
    }).forEach((product) => product.render());
}

class Product{
    constructor(category, type, price){
        this.category = category;
        this.type = type;
        this.price = price;
    }
    render(){
        const tr = document.createElement('tr');
        Object.keys(this).forEach((key) => {
            let td = document.createElement('td');
            td.innerText = this[key];
            if(this[key] === this.category){
                const img = new Image(70, 70);
                img.src = this.category;
                td.innerText = null;
                td.append(img);
            }
            

            tr.append(td);
        })

        document.body.append(tr);
    }
}

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];


renderProduct(kitchenProducts, "kitchen");
renderProduct(devicesProducts, "devices");
renderProduct(cosmeticsProducts, "cosmetics");