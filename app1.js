class restaurantManager{
    restaurantList=[{
    Name:"Rambhog restaurant",
    Address:"Rohini sector-21",
    City:"New Delhi"
    },
    {
    Name:"Rambhog restaurant",
    Address:"Golf course road Gurgaon",
    City:"Haryana"
    },
    {
    Name:"Krishna restaurant",
    Address:"Bhaglapur",
    City:"Bihar"
    }
    ]
    printAllRestaurantNames(){
    for(const allNames of this.restaurantList){
    console.log(allNames.Name);
    }
    }
    filterRestaurantByCity(city){
    for(const cityName of this.restaurantList){
    if(cityName.City==city){
    console.log(cityName.Name+","+cityName.Address)
    }
    }
    }
    }
    let restaurant= new restaurantManager()
    restaurant.printAllRestaurantNames()
    restaurant.filterRestaurantByCity("New Delhi")
    orderData={
    'Below 500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'Above 2000':76
    };
    const total=Object.values(orderData)
    let sum=0;
    for(let i=0;i<total.length;i++)
    {
    sum=sum+total[i]
    }
    console.log("The number of orders placed=" +sum)
    console.log("The number of orders proportion=" +total.length)
    const newArray=Object.keys(orderData)
    const newObject=newArray.map((value,index)=>{
    return{
    id:index+1,
    order:value,
    orderpercentage:(((orderData[value]/sum)*100).toFixed(2)),
    restaurant:"Punjabi Tadka"
    }
    })
    console.log(newObject)