import pressedJuice from '../assets/pressed juice.png'
import proteinBar from '../assets/product protien bar.png'
import Enduranceshirt from '../assets/product tshirt.png'
import protienpowder from '../assets/product Protein-Powder.png'
import giftCard from '../assets/product gift-card.png'
import whitetsirt from '../assets/product white tshirt.png'

interface product {
    productName :string;
        price:string;
        cost:number;
        pack:string[],
        features:string[],
        productImg:string
}



export const products:product[] = [
    {
        productName :'Fresh Pressed Juices',
        price:'$25.00 every month',
        cost:25,
        pack:['Celery, Spinach, Ginger','Carrot, Apple, Mango','Watermelon, Coconut'],
        features:['• Vegan','• Gluten-free','• No GMO’s','• No sugar added'],
        productImg:pressedJuice
    },
    {
        productName :'Protein Bars',
        price:'$36.00 every month',
        cost:36,
        pack:['6' , '12' , '24'],
        features:[
            '• 25g of protein per serving' ,'• Grass fed, non-GMO' ,'• No GMO’s' ,
            '• Soy Free and Gluten Free' ,'• No rBGH or rBST' ,'• No artificial colors, sweeteners or flavors'
            ,'• Zero added sugar'
        ],
        productImg:proteinBar
    },
    {
        productName :'Endurance T-Shirt',
        price:'$30.00',
        cost:30,
        pack:['0'],
        features:[
            '• 100% organic cotton',
            '• Pre-washed'
        ],
        productImg:Enduranceshirt
    },
    {
        productName :'Protein Powder',
        price:'$30.00 every month',
        cost:30,
        pack:['0'],
        features:[
            '• 25g of protein per serving','• Grass fed, non-GMO','• Soy Free and Gluten Free',
            '• No rBGH or rBST','• Cold processed','• No artificial colors, sweeteners or flavors',
            '• Zero added sugar'
        ],
        productImg:protienpowder
    },
    {
        productName :'Klipsan T-Shirt',
        price:'$25.00',
        cost:30,
        pack:['$25.00','$50.00','$75.00','$100.00'],
        features:['• 100% organic cotton' , '• Pre-washed'],
        productImg:whitetsirt
    }
    

]