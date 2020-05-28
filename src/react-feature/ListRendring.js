import React from 'react';
import ChildList from './ChildList'

function ListRendring(){
   // this code gives warning in the console that is "Each child in a list should have a unique "key" prop."
//    so wee need to add "key props" so that react will creat virtual DOM easily and this should be unique

    // let nameArray = ['Chetan', "Nikhil", "Arpit", "Ankit"];
    //1.  return nameArray.map(name => <h1>{name}</h1>);
    
    // 2.
    // let nameList = nameArray.map(name => <h1>{name}</h1>);
    // return nameList;
    
    // 3. 
    let personArray = [
        {
            name:"chetan",
            age:"24",
            skill:"Angular"
        },
        {
            name:"Arpit",
            age:"25",
            skill:"AI"
        },
        {
            name:"Nikhil",
            age:"23",
            skill:"Bussiness"
        },
        {
            name:"Ankit",
            age:"27",
            skill:"Python"
        },
    ]
    
    let personList = personArray.map((person,index) => <ChildList key={index} person={person}/>);
    // use of "index" as key prop may dangrous in somesituation where list can be modified so this will be the last option for of key props, prefrence will be "id" of an item or npm-pacge whoch genrate unique has value                    
    return personList; 


}

export default ListRendring;
