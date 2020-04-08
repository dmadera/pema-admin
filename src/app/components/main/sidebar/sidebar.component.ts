import { Supplier } from '../../../data/supplier';
import { SuppliersService } from '../../../services/suppliers.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  myControl = new FormControl();
  suppliers: Supplier[];

  constructor(
    private router: Router,
    private supplierService: SuppliersService
    ) {
      this.suppliers = this.supplierService.getSuppliers();
  }

  ngOnInit() {    
  }

  onKey(event: KeyboardEvent) {
    this.suppliers = this.supplierService.fulltextFilter(this.myControl.value);
  }

  onClick(event: KeyboardEvent) {
    const selectedSupplier: Supplier = this.myControl.value;
    if(selectedSupplier)
      this.router.navigate(['/items/supplier/' + selectedSupplier.id]);
  }
}
