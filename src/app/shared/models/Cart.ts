import { Cartitem } from "./Cartitem";

export class Cart{
    items:Cartitem[]=[];
    get totalprice():number{
        let totalprice=0;
        this.items.forEach(item => {
            totalprice+=item.price;
            
        });

        return totalprice;
    }
}