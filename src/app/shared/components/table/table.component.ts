import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { Table } from 'shared/interfaces';
import { TableRowTypes } from 'shared/enums';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTableModule, MatTooltipModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = [];
  columns$: Table[] = [];
  actionColumn!: Table;

  @Input({ required: true }) columns: Table[] = [];
  @Input({ required: true }) rows: any[] = [];
  @Input() actionTemplateRef!: TemplateRef<any>;

  get isColumnsHaveActions() {
    return this.columns.find(column => column.type === TableRowTypes.action);
  }

  ngAfterViewChecked() {
    this.actionColumn = this.columns.find(column => column.type === TableRowTypes.action) as Table;
    this.columns$ = this.columns.filter(column => column.type !== TableRowTypes.action);
    this.displayedColumns = this.columns.map(column => column.rowPropertyName);
  }
}
