  

   export const categories = [
  { id: 1, Name: "Dairy Product" },
  { id: 2, Name: "Electronics" },
  { id: 3, Name: "Furniture" },
  { id: 4, Name: "Accessories" },
  { id: 5, Name: "Grocery" },
  { id: 6, Name: "Cleaning Supplies" }
];


// const productList=[

    
   
//     { Name:'DairyMilk', Price:'85', Company:'Cadbury' },
//     { Name:'Amul Milk', price:'34', company:'Amul'},
//     { Name:'Laptop', price:'85', company:'Lenovo'},
//     { Name:'Mobile', price:'85', company:'Vivo'},
//     { Name:'Laptop table', price:'85', company:'marbels'},
//     { Name:'Bag', price:'85', company:'Sky bag'},
//     { Name:'Charger', price:'1005', company:'Cadbury'},
//     { Name:'Cold Drink', price:'85', company:'Cadbury'},
//     { Name:'Surf Excel', price:'85', company:'Cadbury'},
//     { Name:'Nimbuz', price:'85'},
    
// ]



const productList = [
  { Name: 'DairyMilk', Price: '85', Company: 'Cadbury', categoryId: 1 },
  { Name: 'Amul Milk', Price: '34', Company: 'Amul', categoryId: 1 },
  { Name: 'Laptop', Price: '85', Company: 'Lenovo', categoryId: 2 },
  { Name: 'Mobile', Price: '85', Company: 'Vivo', categoryId: 2 },
  { Name: 'Laptop table', Price: '85', Company: 'Marbels', categoryId: 3 },
  { Name: 'Bag', Price: '85', Company: 'Sky bag', categoryId: 4 },
  { Name: 'Charger', Price: '1005', Company: 'Cadbury', categoryId: 2 },
  { Name: 'Cold Drink', Price: '85', Company: 'Cadbury', categoryId: 5 },
  { Name: 'Surf Excel', Price: '85', Company: 'Cadbury', categoryId: 6 },
  { Name: 'Nimbuz', Price: '85', categoryId: 5 },
];

 export default productList;
