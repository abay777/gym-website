import pressedJuice from '../assets/pressed juice.png'
import proteinBar from '../assets/product Protein-Powder.png'



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
    }

]