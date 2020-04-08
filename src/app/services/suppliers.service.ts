import { Supplier } from './../data/supplier';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  suppliers: Supplier[] = [];

  getSuppliers () {
    this.suppliers = [];
    this.suppliers.push(new Supplier({
      id: 1,
      name: "Wolf 1",
      feed: "http://url"
    }));
    this.suppliers.push(new Supplier({
      id: 2,
      name: "Wolf 2",
      feed: "http://url"
    }));
    this.suppliers.push(new Supplier({
      id: 3,
      name: "Wolf 3",
      feed: "http://url"
    }));
    this.suppliers.push(new Supplier({
      id: 4,
      name: "Wolf 4",
      feed: "http://url"
    }));
    this.suppliers.push(new Supplier({
      id: 1887,
      name: "Wolf 5",
      feed: "http://url"
    }));
    return this.suppliers;
  }

  getSuppliersStr() {
    this.getSuppliers();
    let strings :string[] = [];
    this.suppliers.forEach((supplier) => {
      strings.push(supplier.toString());
    });
    return strings;
  }

  fulltextFilter (value: string) {
    const filterValue = value.toLocaleLowerCase();
    return this.suppliers.filter(
      (supplier) => {
        if(supplier.id.toString().indexOf(filterValue) >= 0) return true;
        if(supplier.name.toLowerCase().indexOf(filterValue) >= 0) return true;
        return false;
      }
    );
  }
}
