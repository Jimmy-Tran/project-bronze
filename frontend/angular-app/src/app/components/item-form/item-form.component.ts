import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {
  item: Item = {name: '', description: ''}
  isEdit = false;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id){
      this.isEdit = true;
      this.itemService.getById(id).subscribe(data => this.item = data);
    }
  }

  save(): void {
    if (this.isEdit) {
      this.itemService.update(this.item.id!, this.item).subscribe(() => this.goBack());
    } else {
      this.itemService.create(this.item).subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
