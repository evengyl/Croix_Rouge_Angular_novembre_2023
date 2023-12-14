import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-demo-material',
  templateUrl: './demo-material.component.html',
  styleUrls: ['./demo-material.component.scss']
})
export class DemoMaterialComponent {

  length = 500;
  pageSize = 3;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', "option"];
  dataSource = ELEMENT_DATA.splice(this.pageSize,this.pageSize)


  delete(index : any){
    console.log(index)
    let indexFinded = this.dataSource.findIndex((elem) => index.position == elem.position)
    console.log(indexFinded)
    this.dataSource.splice(indexFinded,1)

    console.log(this.dataSource)
  }
 

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.dataSource = ELEMENT_DATA.splice(this.pageSize,this.pageSize)
  }

}
