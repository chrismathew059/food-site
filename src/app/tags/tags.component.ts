import { Component,OnInit } from '@angular/core';
import{ Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import{Input} from '@angular/core'
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifycontent:string='left';
  
  tags?:Tag[];
  constructor(private foodservice:FoodService){}
  ngOnInit(): void{
    if(!this.foodPageTags)
    this.tags=this.foodservice.getAllTags();
  }

}
