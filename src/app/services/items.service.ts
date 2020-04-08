import { Item } from './../data/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  getItemsBySupplier(id: number) {
    let suppliers : Item[] = [];
    suppliers.push(new Item({
      id: 1,
      title: "Arial sad asd asd a", 
      ean: ""
    }));
    suppliers.push(new Item({
      id: 2,
      title: "Arial1 asd sad sad ss", 
      ean: ""
    }));
    suppliers.push(new Item({
      id: 3,
      title: "Arial2 sdaasd", 
      ean: ""
    }));
    suppliers.push(new Item({
      id: 3022,
      title: "Arial3 sadasd", 
      ean: ""
    }));
    suppliers.push(new Item({
      id: 1817,
      title: "Arial4 asdasd", 
      ean: ""
    }));
    return suppliers;
  }

}
