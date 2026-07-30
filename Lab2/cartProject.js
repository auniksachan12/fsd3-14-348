import {readFile,writeFile} from "fs/promises";
import readline from 'readline/promises';
import {stdin,stdout} from "process";

// database using file starts 

const FILE="product.json";

const getCart= async()=>{
    const data=await readFile(FILE,"utf-8");
    return JSON.parse(data); //
};
const saveCart = async(cart) =>{
        await writeFile(FILE,JSON.stringify(cart,null,2));
};
const addToCart = async(product)=>{
        const cart= await getCart();
        const isFoundInCart=cart.find((item)=>item.id===product.id);
        if(isFoundInCart){
            isFoundInCart.qty +=1;

        }
        else
            cart.push(product);
        await saveCart(cart);
        console.log(`${product.name} added/updated to 🛒`);
};
const displayCart=async()=>{
    const cart=await getCart();
    if(cart.length==0){
        console.log("🛒 is empty ");

    }
    consoletable(cart);
    const total = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
    console.log(`total payable amount rs. ${total}`);
};

const main = async ()=>{

        let choice;
        const cin=readline.createInterface({input:stdin,output:stdout});
        // this line ki aisa interface bnao jisme input lo std keyboard se and std output dega 
       // i.e monitor
    do{
    console.log("Welcome to avi special🛒");//cart laane ke liye command +i 

    console.log("1.....show cart");   // option+shift+ downarrowkey
    console.log("2.....add product");
    console.log("3.....sremove product");
    console.log("4.....update quantity");
    console.log("5.....checkout");

    choice =await cin.question('enter your choice')


        switch(Number(choice)){
            case 1 :
            //console.log("show cart");
            displayCart();
            break;
            case 2:
            //console.log("add product");
            const item = await cin.question("enter id,name,price,qty ");
            const[id,name,price,qty]=item.split(',').map((p) =>p.trim());
            await addToCart({
                id:Number(id),
                name,
                price:Number(price),
                qty:Number(qty),
            });
            break;
            case 3:
            console.log("remove pd");
            break;
            case 4:
            console.log("update quantity");
            break;
            
        }


    }while(choice!=5);
   cin.close();
};
main();