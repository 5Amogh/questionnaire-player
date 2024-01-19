import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../interfaces/questionnaire.type';

@Component({
  selector: 'lib-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit{
  remark = '';
  showRemarks;

  @Output() saveClicked = new EventEmitter();
  @Input() question: Question;
  title: String;
  remarksAddText: String;
  constructor() {}

  ngOnInit() {
    this.title = 'Remarks';
    this.remarksAddText = 'Add remarks';
    this.remark = this.question.remarks;
    this.remark ? (this.showRemarks = true) : false;
  }
  saveRemark() {
    this.question.remarks = this.remark;
    this.saveClicked.emit({ value: this.remark });
  }

  deleteRemark() {
    this.remark = '';
    this.saveRemark();
    this.showRemarks = false;
  }
}
