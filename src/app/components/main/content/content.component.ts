import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './../../../data/item';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
    id: Observable<number>;
    items: Item[];
    displayedColumns = ['id', 'title'];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemsService: ItemsService
    ) {
        this.id = this.route.paramMap.pipe(map(p => +p.get('id')));
        this.id.subscribe((next) => {
            console.log(next)
            this.items = this.itemsService.getItemsBySupplier(next).slice(0, next)
        });
    }

    ngOnInit(): void {
    }

}
