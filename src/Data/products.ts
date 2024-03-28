import pressedJuice from '../assets/pressed juice.png'
import proteinBar from '../assets/product protien bar.png'
import Enduranceshirt from '../assets/product tshirt.png'
import protienpowder from '../assets/product Protein-Powder.png'
import giftCard from '../assets/product gift-card.png'
import whitetsirt from '../assets/product white tshirt.png'

export interface  product {
        productName :string;
        price:string;
        cost:number;
        pack:string[]| number[],
        features:string[],
        productImg:string,
        id:number
        calc:boolean
}



export const products:product[] = [
    {
        productName :'Fresh Pressed Juices',
        price:'$25.00 every month',
        cost:25,
        pack:['Celery, Spinach, Ginger','Carrot, Apple, Mango','Watermelon, Coconut'],
        features:['• Vegan','• Gluten-free','• No GMO’s','• No sugar added'],
        productImg:pressedJuice,
        id:Math.ceil(Math.random()*1020),
        calc:false,
    },
    {
        productName :'Protein Bars',
        price:'$36.00 every month',
        cost:36,
        pack:[6 , 12 , 24],
        features:[
            '• 25g of protein per serving' ,'• Grass fed, non-GMO' ,'• No GMO’s' ,
            '• Soy Free and Gluten Free' ,'• No rBGH or rBST' ,'• No artificial colors, sweeteners or flavors'
            ,'• Zero added sugar'
        ],
        productImg:proteinBar,
        id:Math.ceil(Math.random()*1022),
        calc:true,
    },
    {
        productName :'Endurance T-Shirt',
        price:'$30.00',
        cost:30,
        pack:[2,4,6,10],
        features:[
            '• 100% organic cotton',
            '• Pre-washed'
        ],
        productImg:Enduranceshirt,
        id:Math.ceil(Math.random()*10245),
        calc:true,
    },
    {
        productName :'Protein Powder',
        price:'$30.00 every month',
        cost:30,
        pack:[1],
        features:[
            '• 25g of protein per serving','• Grass fed, non-GMO','• Soy Free and Gluten Free',
            '• No rBGH or rBST','• Cold processed','• No artificial colors, sweeteners or flavors',
            '• Zero added sugar'
        ],
        productImg:protienpowder,
        id:Math.ceil(Math.random()*1021),
        calc:false,
    },
    {
        productName :'Klipsan T-Shirt',
        price:'$25.00',
        cost:30,
        pack:[1,3,6,10],
        features:['• 100% organic cotton' , '• Pre-washed'],
        productImg:whitetsirt,
        id:Math.ceil(Math.random()*10220),
        calc:true,
    },
    {
        productName :'Gift Card',
        price:'from $25.00',
        cost:25,
        pack:[25 , 50, 75 , 100],
        features:['This gift card never expires'],
        productImg:giftCard,
        id:Math.ceil(Math.random()*10202),
        calc:true,
    }
    
    

]

localStorage.setItem('productList',JSON.stringify(products))
export const productz = JSON.parse(localStorage.getItem('productList')||'{}') || products