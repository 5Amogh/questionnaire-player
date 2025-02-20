import { booleanAttribute, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { catchError, finalize } from 'rxjs';
import { ApiConfiguration } from '../../interfaces/questionnaire.type';
import {
  Chart,
  PieController,
  BarController,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { BackNavigationHandlerComponent } from '../../shared/components/pie-chart/back-navigation-handler/back-navigation-handler.component';
import { QueryParamsService } from '../../services/queryParams.service';
import { Location } from '@angular/common';

Chart.register(PieController, BarController, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'lib-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css','../listing/listing.component.scss']
})
export class ReportComponent extends BackNavigationHandlerComponent implements OnInit {

  reportDetails: any[] = [];
  objectURL: any;
  objectType!: string;
  isModalOpen: boolean = false;
  isFilterModalOpen: boolean = false;
  filteredQuestions: any[] = [];
  allQuestions: any[] = [];
  observationDetails: any;
  objectKeys = Object.keys;
  submissionId: any;
  entityType: any;
  @Input() apiConfig: ApiConfiguration;
  @Input({ transform: booleanAttribute }) angular = false;
  resultData:any;
  totalSubmissions: any;
  observationId: any;
  observationType: any = 'questions';
  entityId:any;
  loaded = false;
  filterData:any;
  isMultiple:any;
  scores:any;
  domainView:any;
  initialLoad:boolean = true;

  constructor(
    router: Router,
    public apiService: ApiService,
    public toaster: ToastService,
    private cdr: ChangeDetectorRef,
    private queryParamsService: QueryParamsService,
    location: Location
  ) {
    super(router, location);
   }

  ngOnInit() {
    this.queryParamsService.parseQueryParams();
    this.observationId = this.queryParamsService?.observationId;
    this.submissionId = this.queryParamsService?.submissionId;
    this.entityType = this.queryParamsService?.entityType;
    this.entityId = this.queryParamsService?.entityId;
    this.isMultiple = this.queryParamsService?.isMultiple;
    const scoresValue = this.queryParamsService?.scores;
    this.scores = scoresValue === 'true';

    this.loadObservationReport(this.submissionId, false, false);
  }

  loadObservationReport(submissionId: string, criteria: boolean, pdf: boolean) {
    this.resultData = [];
    this.observationDetails = '';
    this.totalSubmissions = [];
    this.allQuestions = [];
    this.reportDetails = [];
    this.loaded = false;

    let payload = this.createPayload(submissionId, criteria, pdf);

    this.apiService.post(urlConfig.survey.reportUrl, payload)
      .pipe(
        finalize(() =>this.loaded = true),
        catchError((err) => {
          this.toaster.showToast(err?.error?.message, 'danger', 5000)
          throw new Error('Could not fetch the details');
        })
      )
      .subscribe((res: any) => {
        this.resultData = res?.result?.result;
        this.observationDetails = res?.result;
        this.filterData = submissionId ? this.filterData : this.observationDetails?.filters[0]?.filter?.data;
        this.totalSubmissions = res?.result?.totalSubmissions;
        this.observationId = res?.result?.observationId;
        let reportSections:any = this.scores ? [res?.result?.reportSections[0]] : res?.result?.reportSections;
        this.domainView = this.scores ? res?.result?.reportSections[1]?.chart: "";
        this.allQuestions = reportSections?.map((question:any) => {
          return { ...question, selected: true };
        });
        this.reportDetails = this.processSurveyData(this.allQuestions);
        this.cdr?.detectChanges();
        this.objectType == 'questions' ? this.renderCharts(this.reportDetails, false) : this.renderCharts(this.reportDetails, true);
        if(this.initialLoad){
          this.initialLoad = false;
          let filter = this.filterData = this.observationDetails?.filters[0]?.filter?.data;
          if(filter?.length > 1){
            this.isMultiple = 'true';
          }
        }
      });
  }

  createPayload(submissionId: string, criteria: boolean, pdf: boolean): any {
    let filter;
     if(pdf){
      filter = {
        questionId: this.filteredQuestions.map(item => item?.order)
      };
     }
    return {
      submissionId,
      observation: true,
      entityType: this.entityType,
      pdf,
      filter,
      criteriaWise: criteria,
      entityId:this.entityId,
      observationId:this.observationId,
      scores:this.scores
    };
  }

  processSurveyData(data: any): any[] {
    const mapAnswersToLabels = (answers: any[], options: any[]) => {
      return answers.map((answer: any) => {
        if (typeof answer === 'string') {
          const trimmedAnswer = answer.trim();
          if (trimmedAnswer === '') {
            return 'No response is available';
          }

          const option = options?.find((opt: { value: any }) => opt?.value === trimmedAnswer);
          return option ? option?.label : trimmedAnswer;
        }
        return answer;
      });
    };

    const processQuestion = (question: any) => {
      if (question?.responseType === 'matrix' && question?.answers) {
        const processedInstanceQuestions = question?.answers.map(processInstanceQuestions);
        return { ...question, answers: processedInstanceQuestions };
      } else {
        const processedQuestion = { ...question };
        processedQuestion.answers = this.scores ? "" :mapAnswersToLabels(question?.answers, question?.options);
        delete processedQuestion?.options;
        processedQuestion.chartData = this.isChartNotEmpty(processedQuestion?.chart)
        return processedQuestion;
      }
    };

    const processInstanceQuestions = (instance: any) => {
      const processedInstance = { ...instance };
      for (const key in processedInstance) {
        if (key !== 'instanceIdentifier') {
          processedInstance[key].answers = mapAnswersToLabels(
            processedInstance[key].answers,
            processedInstance[key].options
          );
          delete processedInstance[key].options;
        }
      }
      return processedInstance;
    };

    if (this.observationType === 'questions') {
      return data.map(processQuestion);
    } else {
      return data.map((criterias) => {
          return criterias?.questionArray.map(processQuestion);
      });
    }
  }


  renderCharts(reportDetails: any[], isCriteria: boolean = false) {
    const flattenedReportDetails = isCriteria ? reportDetails.flat() : reportDetails;
    const canvases = document.querySelectorAll('.chart-canvas');

    canvases.forEach((canvas, index) => {
      if (canvas instanceof HTMLCanvasElement) {
        const question = flattenedReportDetails[index];
        if (question?.chart) {
          const chartType = question?.chart?.type === 'horizontalBar' ? 'bar' : question?.chart?.type;
          const chartOptions = this.getChartOptions(chartType, question?.chart?.type === 'horizontalBar');
          chartOptions.datasets = [{
            barThickness: 15,
            maxBarThickness: 20,
          }];

          new Chart(canvas, {
            type: chartType,
            data: question?.chart?.data,
            options: chartOptions
          });
        }
      } else {
        console.warn(`Element at index ${index} is not a canvas!`);
      }
    });
  }

  private getChartOptions(chartType: string, isHorizontalBar: boolean): any {
    const options: any = {
      maintainAspectRatio: true,
      plugins: {
        datalabels: {
          display: true,
        },
        legend: {
          display: true,
        },
        tooltip: {
          enabled: true
        },
      }
    };

    if (chartType === 'bar') {
      options.scales = {
        x: {
          beginAtZero: true,
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            autoSkip: false
          }
        }
      };

      if (isHorizontalBar) {
        options.indexAxis = 'y';
      }
    }

    return options;
  }

  openDialog(url: string, type: string) {
    this.objectURL = url;
    this.objectType = type;
    this.isModalOpen = true;
  }

  closeDialog() {
    this.isModalOpen = false;
  }

  openFilter() {
    this.isFilterModalOpen = true;
  }

  closeFilter() {
    this.isFilterModalOpen = false;
  }

  updateFilteredQuestions() {
    this.filteredQuestions = this.allQuestions.filter(question => question.selected);
  }

  checkAnswerValue(answer: any): string | number {
    if (typeof answer === 'string') {
      return answer.trim() === '' ? 'NA' : answer;
    }
    return answer;
  }

  applyFilter(reset: boolean = false) {
    this.updateFilteredQuestions();

    const questionsToProcess = this.filteredQuestions.length > 0 ? this.filteredQuestions : this.allQuestions;
    this.reportDetails = this.processSurveyData(questionsToProcess);
    this.cdr.detectChanges();
    this.objectType == 'questions' ? this.renderCharts(this.reportDetails, false) : this.renderCharts(this.reportDetails, true);
    if (!reset && this.filteredQuestions.length === 0) {
      this.toaster.showToast('Select at least one question', 'danger');
    }

    if (reset || this.filteredQuestions.length > 0) {
      this.closeFilter();
    }
  }

  resetFilter() {
    this.allQuestions.forEach(question => question.selected = false);
    this.filteredQuestions = [];
    this.applyFilter(true);
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  isChartNotEmpty(chart: any, i?:any) {
    return Object.keys(chart).length > 0 ? true : false;
  }

  toggleObservationType(type: any) {
    this.observationType = type;
    type == 'questions' ? this.loadObservationReport(this.submissionId, false, false) : this.loadObservationReport(this.submissionId, true, false);
  }

  downloadPDF(submissionId: string, criteria: boolean, pdf: boolean) {
    this.loaded = false;
    let payload = this.createPayload(submissionId, criteria, pdf);

    this.apiService.post(urlConfig.survey.reportUrl, payload)
      .pipe(
        finalize(() =>this.loaded = true),
        catchError((err) => {
          throw new Error('Could not fetch the details');
        })
      )
      .subscribe((res: any) => {
        this.openUrl(res?.result?.pdfUrl);
      });
  }

  onSelectionChange(submissionId: string): void {
    this.submissionId = submissionId;
    this.observationType == 'questions' ? this.loadObservationReport(submissionId, false, false) : this.loadObservationReport(submissionId, true, false);
  }
}