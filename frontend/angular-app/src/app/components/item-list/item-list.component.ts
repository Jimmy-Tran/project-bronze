import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAll().subscribe(data => this.items = data);
  }

  editItem(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteItem(id: number): void {
    this.itemService.delete(id).subscribe(() => this.loadItems());
  }

  addItem(): void {
    this.router.navigate(['/add']);
  }


}
