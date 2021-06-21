// import {SelectionModel} from '@angular/cdk/collections';
// import {Component} from '@angular/core';
// import {MatTableDataSource} from '@angular/material/table';

// export interface Contact {
//   position:Number;
//   firstName:String;
//   lastName:String;
//   email:string;
// }

// const ELEMENT_DATA: Contact[] = [
// {position: 1, firstName: 'Aco', lastName: 'Acovski', email: 'test1@test.com'},
// {position: 2, firstName: 'Boki', lastName: 'Bokevski', email: 'test2@test.com'},
// {position: 3, firstName: 'Viki', lastName: 'Vikovska', email: 'test3@test.com'},
// {position: 4, firstName: 'Goki', lastName: 'Gocevski', email: 'test4@test.com'},
// {position: 5, firstName: 'Dule', lastName: 'Dukevski', email: 'test5@test.com'},
// {position: 6, firstName: 'Eli', lastName: 'Elevska', email: 'test6@test.com'},
// {position: 7, firstName: 'Zare', lastName: 'Zarevski', email: 'test7@test.com'},
// {position: 8, firstName: 'Ile', lastName: 'Ilevski', email: 'test8@test.com'},
// {position: 9, firstName: 'Jane', lastName: 'Janevski', email: 'test9@test.com'},
// {position: 10, firstName: 'Koki', lastName: 'Kocevski', email: 'test10@test.com'},
// ];

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent {
//   displayedColumns: string[] = ['select','position', 'firstName', 'lastName', 'email'];
//   dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);
//   selection = new SelectionModel<Contact>(false, []);

//   /** Whether the number of selected elements matches the total number of rows. */
//   isAllSelected() {
//     const numSelected = this.selection.selected.length;
//     const numRows = this.dataSource.data.length;
//     return numSelected === numRows;
//   }

//   /** Selects all rows if they are not all selected; otherwise clear selection. */
//   masterToggle() {
//     this.isAllSelected() ?
//         this.selection.clear() :
//         this.dataSource.data.forEach(row => this.selection.select(row));
//   }

//   /** The label for the checkbox on the passed row */
//   checkboxLabel(row?: Contact): string {
//     if (!row) {
//       return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
//     }
//     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position}`;
//   }

  

// }
