import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sections!:any[]
  constructor(
    public fb: FormBuilder
  ) {}
  
  ngOnInit(){
    this.sections =[
      {
          "code": "D1",
          "questions": [
              {
                  "_id": "",
                  "question": "",
                  "isCompleted": "",
                  "showRemarks": "",
                  "options": "",
                  "sliderOptions": "",
                  "children": "",
                  "questionGroup": "",
                  "fileName": "",
                  "instanceQuestions": "",
                  "isAGeneralQuestion": "",
                  "autoCapture": "",
                  "allowAudioRecording": "",
                  "prefillFromEntityProfile": "",
                  "entityFieldName": "",
                  "isEditable": "",
                  "showQuestionInPreview": "",
                  "deleted": "",
                  "remarks": "",
                  "value": "",
                  "usedForScoring": "",
                  "questionType": "",
                  "canBeNotApplicable": "",
                  "visibleIf": "",
                  "validation": "",
                  "externalId": "",
                  "tip": "",
                  "hint": "",
                  "responseType": "pageQuestions",
                  "modeOfCollection": "",
                  "accessibility": "",
                  "rubricLevel": "",
                  "sectionHeader": "",
                  "page": "1.0",
                  "questionNumber": "",
                  "updatedAt": "",
                  "createdAt": "",
                  "__v": "",
                  "createdFromQuestionId": "",
                  "evidenceMethod": "",
                  "payload": "",
                  "startTime": "",
                  "endTime": "",
                  "gpsLocation": "",
                  "file": "",
                  "pageQuestions": [
                      {
                          "_id": "6128e42b6a37e7597db24c16",
                          "question": [
                              "Principal and teachers are familiar with the spirit and content of NCF and recommendations of NEP.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School leaders have read the NEP and NCF documents and engaged in discussions"
                              },
                              {
                                  "value": "R2",
                                  "label": "School leaders have identified the key recommendations of NEP and NCF"
                              },
                              {
                                  "value": "R3",
                                  "label": "The school organizes orientation programmes and discussions for teachers on NEP and NCF"
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers integrate recommendations of NCF and NEP in their lesson plans"
                              },
                              {
                                  "value": "R5",
                                  "label": "Lesson plans are reviewed regularly in relation to students’ achievements and aspirations"
                              },
                              {
                                  "value": "R6",
                                  "label": "Classrooms are observed regularly in relation to students’ achievements and aspirations"
                              },
                              {
                                  "value": "R7",
                                  "label": "The school has created a cross-curricular Policy for Curriculum Planning",
                                  "hint": "Curriculum: The word has been derived from the Latin verb currere 'meaning to run'. From this follows an extension of the meaning to a course to be run and as a metaphor “an educational course to be taught/learned”. In this sense, it is virtually synonymous with the term syllabus as is developed by expert committees or boards of studies of a university. In its broader sense the word 'curriculum' includes teaching strategies, learning activities and evaluation devices in relation to a particular syllabus. In the context of distance education, curriculum implies syllabi, multimedia course packages, self-learning processes of the student, and student support services."
                              },
                              {
                                  "value": "R8",
                                  "label": "The school has integrated the recommendations of NCF and NEP in the school curriculum"
                              },
                              {
                                  "value": "R9",
                                  "label": "School leaders engage in regular data analysis related to teaching practices to see alignment with NEP and NCF and to see its effectiveness on student learning and development"
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C111Q1_1630069778179-1630069803667",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.1 Curriculum Planning",
                          "page": "1.0",
                          "questionNumber": "1.1.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.817Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24abd",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d6f",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503764,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c17",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Minutes of departmental meetings reflecting the discussion on: NCF/Position Papers NCERT/NEP",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Orientation Programmes on NCF/NEP",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "School Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "List of text books and study material",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Staff Process Owner Duty List",
                                  "hint": "Persons responsible for the management of processes within the\norganization.",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Integrated Annual Curriculum and Pedagogical Plan",
                                  "hint": "Annual Curriculum Plan: The yearly plan for the aggregate courses of study given in a\nschool.",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Annual Assessment and Examination Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Parental Involvement Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Innovation Policy",
                                  "hint": "Innovation: Starting something for the first time; introducing something new, which has resulted from research and experimentation.",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Annual Professional Development Plan for Teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Health and Wellness Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Curriculum policy reflecting no hard separation of subjects",
                                  "hint": "Curriculum: The word has been derived from the Latin verb currere 'meaning to run'. From this follows an extension of the meaning to a course to be run and as a metaphor “an educational course to be taught/learned”. In this sense, it is virtually synonymous with the term syllabus as is developed by expert committees or boards of studies of a university. In its broader sense the word 'curriculum' includes teaching strategies, learning activities and evaluation devices in relation to a particular syllabus. In the context of distance education, curriculum implies syllabi, multimedia course packages, self-learning processes of the student, and student support services.",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Environmental Management Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Policy on Equity and Inclusion",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Health and Wellness Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R17",
                                  "label": "Teachers’ diary and Teacher Observation/Classroom Participation Record",
                                  "score": 0
                              },
                              {
                                  "value": "R18",
                                  "label": "Student Performance Enhancement records and IEP (Individual Education Plan for all students including Gifted Students and Children with Special Needs)",
                                  "score": 0
                              },
                              {
                                  "value": "R19",
                                  "label": "Monitoring and Reviewing Checklists -Self/Peer",
                                  "score": 0
                              },
                              {
                                  "value": "R20",
                                  "label": "School Improvement Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R21",
                                  "label": "HR Policies",
                                  "score": 0
                              },
                              {
                                  "value": "R22",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C111Q2_1630069778179-1630069803668",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.829Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24abe",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d6f",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503775,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c18",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C111Q3_1630069778179-1630069803669",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.838Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24abf",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d6f",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503794,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c19",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C111Q4_1630069778179-1630069803670",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.846Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac0",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d6f",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503798,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1a",
                          "question": [
                              "The Principal and teachers are familiar with the curriculum documents and support material brought out by CBSE.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "CBSE Curriculum documents are available in the school library."
                              },
                              {
                                  "value": "R2",
                                  "label": "All teachers have copies of respective syllabus documents and Teachers’ Manuals."
                              },
                              {
                                  "value": "R3",
                                  "label": "All teachers have identified key aspects of the CBSE curriculum."
                              },
                              {
                                  "value": "R4",
                                  "label": "The school has referred to the CBSE curriculum documents to create an annual curriculum and pedagogical plan."
                              },
                              {
                                  "value": "R5",
                                  "label": "The school has integrated key aspects of curriculum prescribed by CBSE in the school’s integrated annual curriculum and pedagogical plan."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers and leaders have worked together and created an integrated Annual Curriculum and Pedagogical Plan."
                              },
                              {
                                  "value": "R7",
                                  "label": "A Policy has been created with practices to help teachers become aware of the key aspects of the curriculum.",
                                  "hint": "Policy: A definite course of action adopted for the sake of expediency, facility etc."
                              },
                              {
                                  "value": "R8",
                                  "label": "The school regularly organizes staff interactions and trainings to familiarize the staff on CBSE curriculum documents and support material."
                              },
                              {
                                  "value": "R9",
                                  "label": "Teachers are engaged in mentoring discussions regularly."
                              },
                              {
                                  "value": "R10",
                                  "label": "Data related to integration of key aspects of curriculum prescribed by CBSE in the school’s curriculum and teaching practice is collected and analysed regularly."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C112Q1_1630069778179-1630069803670",
                          "tip": "Curriculum: The word has been derived from the Latin verb currere 'meaning to run'. From this follows an extension of the meaning to a course to be run and as a metaphor “an educational course to be taught/learned”. In this sense, it is virtually synonymous with the term syllabus as is developed by expert committees or boards of studies of a university. In its broader sense the word 'curriculum' includes teaching strategies, learning activities and evaluation devices in relation to a particular syllabus. In the context of distance education, curriculum implies syllabi, multimedia course packages, self-learning processes of the student, and student support services.",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.2",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.856Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac1",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d70",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503823,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Mentoring and Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "School Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Annual Curriculum and Pedagogical Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Minutes of Departmental Meetings",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Teachers' Diary with Lesson Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Consolidated Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "School Vision & Mission statements reflecting ethos of NCF/NEP",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C112Q2_1630069778179-1630069803671",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.2a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.864Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac2",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d70",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503839,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C112Q3_1630069778179-1630069803671",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.2b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.875Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac3",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d70",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503854,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C112Q4_1630069778179-1630069803672",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.2c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.884Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac4",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d70",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503859,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1e",
                          "question": [
                              "There is an Integrated Annual Curriculum and Pedagogical Plan.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "A documented draft of integrated Annual Curriculum and Pedagogical Plan is available with the Principal and in the Library."
                              },
                              {
                                  "value": "R2",
                                  "label": "Discussions are conducted with teachers on the integrated Annual Curriculum and Pedagogical Plan."
                              },
                              {
                                  "value": "R3",
                                  "label": "Meetings are conducted to share the integrated Annual Curriculum and Pedagogical Plan with students and parents."
                              },
                              {
                                  "value": "R4",
                                  "label": "The integrated Annual Curriculum and Pedagogical Plan is designed along with teachers."
                              },
                              {
                                  "value": "R5",
                                  "label": "The plan is designed on the basis of previous learning experiences of students, with a focus on inter disciplinary approach.",
                                  "hint": "Inter-disciplinary: Of the inherent connections between academic subjects."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers and leaders take actions towards achieving the target set for all students in the plan."
                              },
                              {
                                  "value": "R7",
                                  "label": "There is a School Policy to ensure that the development of an integrated Annual Curriculum and Pedagogical Plan with a focus on Foundational Literacy and Numeracy."
                              },
                              {
                                  "value": "R8",
                                  "label": "The curriculum plan draws connections among different subjects and disciplines in order to promote interdisciplinary learning."
                              },
                              {
                                  "value": "R9",
                                  "label": "The curriculum plan details strategies on promoting multilingualism."
                              },
                              {
                                  "value": "R10",
                                  "label": "Integrated Annual Curriculum and Pedagogical Plan reflects Vision and Mission of the school."
                              },
                              {
                                  "value": "R11",
                                  "label": "The school Annual Curriculum and Pedagogical Plan reflects enhancement in life skills, values and ethics, literary skills, scientific skills, ICT skills, digital literacy, Health and Physical Education, Visual and Performing Arts, Work Education, Leadership Skills, Aesthetic Skills, Vocational Skills etc. and is integrated with different aspects of learning."
                              },
                              {
                                  "value": "R12",
                                  "label": "The curriculum and pedagogical plan focuses on knowledge of India and its rich diversity."
                              },
                              {
                                  "value": "R13",
                                  "label": "The plan incorporates innovative pedagogy, such as, activity-based learning, toy-based pedagogy, experiential learning, art-integrated/sport-integrated pedagogy, story-telling pedagogy, etc. in all grades, for all topics and all subjects."
                              },
                              {
                                  "value": "R14",
                                  "label": "The approved Annual Curriculum and Pedagogical Plan is effectively implemented."
                              },
                              {
                                  "value": "R15",
                                  "label": "The school team meets at regular intervals to review progress on implementation of the Annual Curriculum and Pedagogical Plan."
                              },
                              {
                                  "value": "R16",
                                  "label": "Improvement plans are designed to meet the desired student learning outcomes."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C113Q1_1630069778179-1630069803673",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.3",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.892Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac5",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d71",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503879,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c1f",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Vision and Mission of School",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "List of CBPs for teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Integrated Annual Curriculum and Pedagogical Plan/School Calendar based on New pedagogical and curricular structure of school education (5+3+3+4): 3 years in pre-primary and 12 years in school",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Details of Clubs/Activities/Courses/ Internship/ Vocational Education/Contemporary Courses",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Lesson plans reflecting enhancement of life skills, values, art education, health and fitness",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Guidelines to prepare Annual Curriculum Plan and Annual Pedagogical Plan",
                                  "hint": "Annual Curriculum Plan: The yearly plan for the aggregate courses of study given in a\nschool.",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Minutes of Departmental Meetings and Staff Meetings",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Lesson plans reflecting enhancement in critical and creative thinking",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Lesson plans reflecting multiple approaches to learning - experiential learning, cooperative learning, inquiry based, research based , blended learning, design thinking , usage of ICT tools etc",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Evidence of activities for all classes on appreciating India’s rich cultural heritage",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Anectodal records",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Staff process owner list",
                                  "hint": "Persons responsible for the management of processes within the\norganization.",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Lesson Plans reflecting integrated approach to learning",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Strategies to incorporate multilingualism",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Consolidated Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R17",
                                  "label": "Innovative Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R18",
                                  "label": "Lesson plans reflecting enhancement in skills and competencies of 21st centur",
                                  "score": 0
                              },
                              {
                                  "value": "R19",
                                  "label": "Mentoring and Monitoring Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R20",
                                  "label": "Improvement Plan",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C113Q2_1630069778179-1630069803673",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.3a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.900Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac6",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d71",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503900,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c20",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C113Q3_1630069778179-1630069803674",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.3b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.908Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac7",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d71",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503920,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c21",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C113Q4_1630069778179-1630069803675",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.3c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.916Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac8",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d71",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503927,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c22",
                          "question": [
                              "Curriculum develops skills and abilities which prepares students for lifelong learning; fosters global citizenship leading to attainment of Sustainable Development Goals (SDGs).",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school has integrated in its curriculum recommendations by the Board and National or State Educational Bodies (NCERT/SCERT)."
                              },
                              {
                                  "value": "R2",
                                  "label": "The school leaders have oriented teachers on the content driven curriculum that meets the desired learning outcomes."
                              },
                              {
                                  "value": "R3",
                                  "label": "The school has developed a curriculum implementation plan."
                              },
                              {
                                  "value": "R4",
                                  "label": "Guidelines have been created to develop students’ skills and abilities which prepare students for lifelong learning, foster global citizenship and attainment of Sustainable Development Goals (SDGs)."
                              },
                              {
                                  "value": "R5",
                                  "label": "The school provides opportunities and resources to students to develop and enhance their knowledge, skills and application of abilities in the domain of cognitive, affective and psychomotor needs.",
                                  "hint": "Affective domain: The part of the human mind that makes people react emotionally and their ability to feel another person's pain or joy.\n\nCognitive domain: The part of an individual's mind that defines how individuals think, their intellectual capabilities, level of development and preferred thinking styles, which range from knowledge through comprehension, application, analysis and evaluation to creation."
                              },
                              {
                                  "value": "R6",
                                  "label": "The school has created a Curriculum Policy to ensure that the curriculum enhances knowledge, skills and application of competencies that prepare students for lifelong learning and global citizenship."
                              },
                              {
                                  "value": "R7",
                                  "label": "The school creates opportunities for staff and students to interact with other schools or educational institutions at Regional Level, National Level and International Level to incorporate best practices."
                              },
                              {
                                  "value": "R8",
                                  "label": "Student learning outcomes data is analysed regularly by teachers and school leaders"
                              },
                              {
                                  "value": "R9",
                                  "label": "Opportunities to develop students skills and knowledge towards the attainment of SDGs are integrated in the curriculum."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C114Q1_1630069778179-1630069803675",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.4",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.924Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ac9",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d72",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503944,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c23",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Annual Curriculum and Pedagogical Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Teacher’s Diary",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Performance Profiles of Students",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Beyond text book content evidences of awareness on universal issues",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Teacher Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Consolidated Students' Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Strategies to strengthen Play way approach in Pre- Primary classes",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Strategies to strengthen Foundational Literacy and Numeracy",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "List of courses and Vocational Education and internship for classes 6-8 and 9-12",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Anecdotal Records of Students",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual.",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Portfolio of students-samples from each wing",
                                  "hint": "Portfolio: A collection of evidences of students work over a period of time.",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Student Activity Tracker-samples from each wing",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "List of themes/subjects offered at every level (5+3+3+4)",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Activities to strengthen Mathematical and Computational Thinking at all levels of learning",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "List of local artisans and craftsmen involved in internship program",
                                  "score": 0
                              },
                              {
                                  "value": "R17",
                                  "label": "List of yearlong course on local crafts",
                                  "score": 0
                              },
                              {
                                  "value": "R18",
                                  "label": "List of contemporary courses offered (AI, Organic Living, Holistic Living, Data Science, Design Thinking, machine Learning, etc.)",
                                  "score": 0
                              },
                              {
                                  "value": "R19",
                                  "label": "Monitoring and Reviewing Practices and checklists",
                                  "score": 0
                              },
                              {
                                  "value": "R20",
                                  "label": "Improvement Plan",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C114Q2_1630069778179-1630069803676",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.4a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.931Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24aca",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d72",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503956,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c24",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C114Q3_1630069778179-1630069803676",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.4b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.938Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24acb",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d72",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503973,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c25",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C114Q4_1630069778179-1630069803677",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.1.4c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.945Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24acc",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d72",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637503977,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c26",
                          "question": [
                              "School follows an optimum number teaching days and teaching hours",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school follows the working days and working hours norms."
                              },
                              {
                                  "value": "R2",
                                  "label": "Teaching learning equipment is available in each class as required."
                              },
                              {
                                  "value": "R3",
                                  "label": "School takes approval of holidays from its management."
                              },
                              {
                                  "value": "R4",
                                  "label": "Time table prepared provides sufficient time for the completion of syllabus."
                              },
                              {
                                  "value": "R5",
                                  "label": "Infrastructural facilities such as extra staff rooms, furniture, resources are provided to teachers for preparation of teaching learning material."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers are involved in development of teaching learning material only during the preparation time."
                              },
                              {
                                  "value": "R7",
                                  "label": "Published Time Table allows sufficient time to cover and revise all components of the curriculum."
                              },
                              {
                                  "value": "R8",
                                  "label": "The school policy with regard to the working days is as per RTE Act."
                              },
                              {
                                  "value": "R9",
                                  "label": "Monitored implementation of time table allows for all students including those with special needs and belonging to diverse socio-economic backgrounds to complete, comprehend and revise the syllabus."
                              },
                              {
                                  "value": "R10",
                                  "label": "Processes are in place to ensure students get the required amount of learning time."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C121Q1_1630069778179-1630069803677",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.2 Teaching and Learning Processes",
                          "page": "1.0",
                          "questionNumber": "1.2.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.953Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24acd",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d73",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504006,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c27",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Improvement plans",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Evidence of student work",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Consolidated timetable",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Teacher timetable",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Class wise time table",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Monitoring and review practices",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Attendance Registers of: Teachers, Students, Other staff members(if available biometric attendance record of staff)",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Study material prepared by teachers (videos, assignments, lesson plans, presentations, remedial worksheets, etc.)",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C121Q2_1630069778179-1630069803678",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.960Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ace",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d73",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504035,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c28",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C121Q3_1630069778179-1630069803679",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.970Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24acf",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d73",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504067,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c29",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C121Q4_1630069778179-1630069803679",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.977Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ad0",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d73",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504072,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2a",
                          "question": [
                              "Teacher Student Ratio",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school follows teacher – student ratio of 1 teacher for 40 students and above."
                              },
                              {
                                  "value": "R2",
                                  "label": "The school follows the teacher-student ratio of 1 teacher for 36-39 students."
                              },
                              {
                                  "value": "R3",
                                  "label": "The school follows the teacher-student ratio of 1 teacher for 31-35 students to ensure that students are provided with maximum opportunities to learn."
                              },
                              {
                                  "value": "R4",
                                  "label": "The school policy with regard to the number of students in each class is in place."
                              },
                              {
                                  "value": "R5",
                                  "label": "For secondary/higher secondary level, the school follows what is prescribed by the board."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers ensure individual attention is given to every student"
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C122Q1_1630069778179-1630069803680",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.2",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.985Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ad1",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d74",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504084,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Admissions and Withdrawal Records/Register",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Attendance register of each class",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers on Roll",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Consolidated Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "List of teachers and number of sections in the school",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C122Q2_1630069778179-1630069803680",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.2a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.991Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ad2",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d74",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504095,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C122Q3_1630069778179-1630069803681",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.2b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:47.998Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41b6a37e7597db24ad3",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d74",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504119,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C122Q4_1630069778179-1630069803682",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.2c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.004Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad4",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d74",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504125,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2e",
                          "question": [
                              "Teachers adopt varied teaching learning approaches reflecting their understanding of the needs of the diverse students.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Teachers make use of textbooks while teaching."
                              },
                              {
                                  "value": "R2",
                                  "label": "Students follow instructions of teachers."
                              },
                              {
                                  "value": "R3",
                                  "label": "Lessons are planned and implemented with clear learning objectives."
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers use teaching methods according to the nature of the subject matter."
                              },
                              {
                                  "value": "R5",
                                  "label": "Lessons regularly draw connections among subjects."
                              },
                              {
                                  "value": "R6",
                                  "label": "Guidelines for preparing integrated lesson plans and varied teaching learning approaches and tools are available."
                              },
                              {
                                  "value": "R7",
                                  "label": "Teachers prepare integrated lesson plans."
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers make use of experiential learning methods in their classrooms."
                              },
                              {
                                  "value": "R9",
                                  "label": "Teachers facilitate application of knowledge to real life situation and develop critical and creative thinking skills in students."
                              },
                              {
                                  "value": "R10",
                                  "label": "Teachers adopt pedagogical strategies that meet the requirements of divyang, students coming from diverse socio-economic groups."
                              },
                              {
                                  "value": "R11",
                                  "label": "Informal assessments are integrated in the lesson plan."
                              },
                              {
                                  "value": "R12",
                                  "label": "There are regular classroom observations and reflections on teaching practices."
                              },
                              {
                                  "value": "R13",
                                  "label": "School Policy on Pedagogy with regard to the use of teaching methodology is in place."
                              },
                              {
                                  "value": "R14",
                                  "label": "Lesson plans are created keeping in view skills that students would need in the future."
                              },
                              {
                                  "value": "R15",
                                  "label": "Teachers use multiple modes of teaching learning strategies and digital and online teaching platforms."
                              },
                              {
                                  "value": "R16",
                                  "label": "Teachers recognize diverse learners with different learning styles."
                              },
                              {
                                  "value": "R17",
                                  "label": "Teachers support gifted students by preparing individual education plans, interventions in regional languages, if necessary, encourage their participation in olympiads and other competitions and make extensive use of technology to go beyond the planned school curriculum individual and co-operative opportunities to students to reflect upon their learning experiences."
                              },
                              {
                                  "value": "R18",
                                  "label": "Formative assessments are integrated in classroom teaching and used towards remediation and understanding the needs of students.",
                                  "hint": "Formative Assessment: A form of assessment that is done during the course of instruction; its outcome provides information that teachers can use to revise their teaching and students can use to improve their learning."
                              },
                              {
                                  "value": "R19",
                                  "label": "Each teacher receives mentorship on planning and implementing lessons."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C123Q1_1630069778179-1630069803685",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.3",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.011Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad5",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d75",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504134,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c2f",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "List and Certificates of CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "In house training programmes",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "List of workshops conducted by teachers (In-house and external)",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Lesson plans reflecting enhancement of life skills, values, art education, health and fitness",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Practices adopted by school to enable teachers to become instructional leaders",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Teacher’s Diary with Lesson Plans reflecting: Objectives, Learning Outcomes, material used, methodology, assessments (for /of /in/as learning), accommodations",
                                  "hint": "Accommodations are adaptations that provide access to the general curriculum but do not fundamentally alter the learning goal or grade level standard. Accommodations provide access to curriculum for students with varying abilities",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "List of Reference Books used by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Interventions for Gifted Students",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Evidences of planning for diverse learners visible in lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "New pedagogical and curricular structure of school education (5+3+3+4): 3 years in pre-primary and 12 years in school",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Lesson plans reflecting multiple approaches to learning - experiential learning, cooperative learning, inquiry based, research based , blended learning, design thinking , usage of ICT tools etc.",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Secondary Stage (4) Greater critical thinking, multidisciplinary study, flexibility and student choice of subjects",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Middle Stage (3) experiential learning in the sciences, mathematics, arts, social sciences, and humanities",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Lesson plans reflecting enhancement in critical and creative thinking",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Preparatory Stage (3) play, discovery, and activity-based and interactive classroom learning",
                                  "score": 0
                              },
                              {
                                  "value": "R17",
                                  "label": "Foundational stage (5) multilevel, play/activity-based learning",
                                  "score": 0
                              },
                              {
                                  "value": "R18",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R19",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R20",
                                  "label": "Lesson plans reflecting enhancement in skills and competencies of 21st century",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C123Q2_1630069778179-1630069803685",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.3a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.018Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad6",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d75",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504157,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c30",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C123Q3_1630069778179-1630069803686",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.3b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.025Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad7",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d75",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504181,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c31",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C123Q4_1630069778179-1630069803686",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.2.3c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.033Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad8",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d75",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504186,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c32",
                          "question": [
                              "The school provides ample opportunities for Art Education.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school provides for an art, music and dance period in the time table"
                              },
                              {
                                  "value": "R2",
                                  "label": "The school provides opportunities for participation in different art forms."
                              },
                              {
                                  "value": "R3",
                                  "label": "The school maintains records of student participation."
                              },
                              {
                                  "value": "R4",
                                  "label": "All the four streams of arts i.e. music, dance, visual arts and theatre are a part of arts curriculum offered by the school."
                              },
                              {
                                  "value": "R5",
                                  "label": "Art education is integrated in the whole school curriculum."
                              },
                              {
                                  "value": "R6",
                                  "label": "Culinary Art is a part of the curriculum in grades 6-8."
                              },
                              {
                                  "value": "R7",
                                  "label": "Through the implementation of arts curriculum, students are introduced to the rich and varied artistic & aesthetic traditions of the country.\nStudents participate at the Zonal/State Level."
                              },
                              {
                                  "value": "R8",
                                  "label": "The School Policy with regard to mandatory Art Education is in place."
                              },
                              {
                                  "value": "R9",
                                  "label": "Art activities are embedded in the Annual Curriculum and Pedagogical Plan of various subjects."
                              },
                              {
                                  "value": "R10",
                                  "label": "School encourages promotion of local art and craft."
                              },
                              {
                                  "value": "R11",
                                  "label": "Resources are provided to nurture artistic capabilities of the students."
                              },
                              {
                                  "value": "R12",
                                  "label": "Orientation programmes are organised to create awareness among the parents/guardians, school management about the importance of studying Art Education."
                              },
                              {
                                  "value": "R13",
                                  "label": "The school culture and environment reflects appreciation of art forms."
                              },
                              {
                                  "value": "R14",
                                  "label": "Students participate in Art forms/activities at National and International Levels."
                              },
                              {
                                  "value": "R15",
                                  "label": "There is a mechanism to mentor, monitor and review processes to ensure the efficacy of the program."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C131Q1_1630069778179-1630069803687",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.3 Student Enrichment Progammes embedded in the Annual Curriculam and Pedagogical Plan",
                          "page": "1.0",
                          "questionNumber": "1.3.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.043Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ad9",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d76",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504201,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c33",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Integrated Annual Curriculum and Pedagogical Pla",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "School Calendar reflecting the inclusion of activities for visual and performing arts for all students in the school",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Portfolio",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Consolidated Time Table of all classes in school reflecting the periods allocated for Visual and Performing Arts and Culinary Art",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Evidence of 100% students’ participation from grades 1-10 in undertaking one art-integrated project in any subject as per CBSE policy",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Lesson plans of subject teachers reflecting integration of arts",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Observation Record of Teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Records/Documents (Certificates or school magazine and website) reflecting participation of students in activities related to Visual and Performing Arts and Culinary Art at the Zonal / State/ National/ International Level",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Art Activities conducted under Ek Bharat Shrestha Bharat",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Assessment records of students for participation in these activities",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "List of local artistes and craftsmen involved in ensuring student learning outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Any Other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C131Q2_1630069778179-1630069803687",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.050Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ada",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d76",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504232,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c34",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C131Q3_1630069778179-1630069803688",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.057Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24adb",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d76",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504252,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c35",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C131Q4_1630069778179-1630069803689",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.064Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24adc",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d76",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504259,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c36",
                          "question": [
                              "The School Vocational Education Programme develops employability and entrepreneurial skills in the students.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School offers vocational courses in classes 9-12 in addition to traditional academic courses."
                              },
                              {
                                  "value": "R2",
                                  "label": "Career Fairs are organized for students of classes 9-12."
                              },
                              {
                                  "value": "R3",
                                  "label": "Vocational courses on new and emerging skill demands of the industry such as AI, Data Science are offered to the students."
                              },
                              {
                                  "value": "R4",
                                  "label": "School collaborates with the local industry to provide hands on experiences to the students in the courses taken by the students."
                              },
                              {
                                  "value": "R5",
                                  "label": "Awareness on the importance of Vocational Education is generated among students and parents."
                              },
                              {
                                  "value": "R6",
                                  "label": "School offers pre-vocational exposure/education to students of classes 6-8."
                              },
                              {
                                  "value": "R7",
                                  "label": "Apart from new and emerging skill courses, school provides hands on experience of important vocational crafts, such as carpentry, electric work, metal work, gardening, pottery making, etc. through yearlong fun based activities."
                              },
                              {
                                  "value": "R8",
                                  "label": "Career Counselling Sessions are organized for students of classes 9-12."
                              },
                              {
                                  "value": "R9",
                                  "label": "Teachers integrate the aspect of career guidance with the teaching of academic subjects as well."
                              },
                              {
                                  "value": "R10",
                                  "label": "The School has Policy on Vocational Education which is implemented."
                              },
                              {
                                  "value": "R11",
                                  "label": "Pre-vocational exposure is undertaken from grades 6-8 by tying up with local trades and crafts persons and parental class participation to sensitise about their own vocations."
                              },
                              {
                                  "value": "R12",
                                  "label": "Skill Based Aptitude Testing for students from class 8 onwards to provide guidance to students for making informed career choices."
                              },
                              {
                                  "value": "R13",
                                  "label": "Every child who passes out of grade 12 has learnt atleast one vocation."
                              },
                              {
                                  "value": "R14",
                                  "label": "Students are allowed to mix and match academic subjects with skills education."
                              },
                              {
                                  "value": "R15",
                                  "label": "The School Vocational Education Programme focuses on developing employability and entrepreneurial skills."
                              },
                              {
                                  "value": "R16",
                                  "label": "The Programme is monitored regularly for achieving the desired student learning outcomes."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C132Q1_1630069778179-1630069803689",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.2",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.071Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24add",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d77",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504271,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c37",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Consolidated time table of classes",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Records of Aptitude Testing",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Attendance record of students",
                                  "hint": "Attendance records: Relating to gathering daily students’ attendance, storing and using\ndata, thus collected, for consolidating information regarding regularity.",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Records of involvement of local industry and artists in the School Vocational Education Programme",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "List of subjects offered to the students",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers Diary with lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Interaction Programme with experts from industry",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Reports of field visit",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Evidences of Clubs/Activities/ Courses/Internship/ Vocational Education/ Contemporary courses",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Records of Awareness Programmes",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Career Counselling Sessions",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C132Q2_1630069778179-1630069803690",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.2a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.078Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ade",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d77",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504291,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c38",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C132Q3_1630069778179-1630069803691",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.2b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.086Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24adf",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d77",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504312,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c39",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C132Q4_1630069778179-1630069803691",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.2c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.094Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae0",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d77",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504318,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3a",
                          "question": [
                              "The school provides facilities to the students to participate in activities related to Literary and Creative Skills, Scientific Skills, Information and Communication Technology Skills, Communication Skills, Digital literacy, Organizational Leadership Skills, and Aesthetic Skills.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Students are selected for common school events like Annual Day, Sports Day."
                              },
                              {
                                  "value": "R2",
                                  "label": "The school provides for activity clubs to the students."
                              },
                              {
                                  "value": "R3",
                                  "label": "The school maintains records of activity clubs in the school."
                              },
                              {
                                  "value": "R4",
                                  "label": "Each student is encouraged to participate in class/school/ interschool level activity to ensure that ‘No Child is Left Behind’."
                              },
                              {
                                  "value": "R5",
                                  "label": "Records of their participation and achievements are maintained"
                              },
                              {
                                  "value": "R6",
                                  "label": "Students are encouraged to participate in Intra School/Inter school events."
                              },
                              {
                                  "value": "R7",
                                  "label": "There is School Policy for Student Participation in a wide range of activities that enhance their skills for the future."
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers integrate the activities for the holistic skill development in their lesson plans."
                              },
                              {
                                  "value": "R9",
                                  "label": "Each child is encouraged to participate in activities that build on their cognitive, affective and psychomotor domains.",
                                  "hint": "Affective domain: The part of the human mind that makes people react emotionally and their ability to feel another person's pain or joy.\n\nCognitive domain: The part of an individual's mind that defines how individuals think, their\nintellectual capabilities, level of development and preferred thinking styles, which range\nfrom knowledge through comprehension, application, analysis and evaluation to creation."
                              },
                              {
                                  "value": "R10",
                                  "label": "Regular feedback is provided to students and parents.",
                                  "hint": "Feedback: A reaction or response to a particular process or activity."
                              },
                              {
                                  "value": "R11",
                                  "label": "Students are encouraged to /participate at National and International Levels."
                              },
                              {
                                  "value": "R12",
                                  "label": "The Policy is effectively implemented, monitored and reviewed at regular intervals to assess its impact on students."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C133Q1_1630069778179-1630069803692",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.3",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.105Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae1",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d78",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504341,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Annual Curriculum and Pedagogical Plan reflecting provision of activities enhancing Literary and Creative Skills, Scientific Skills, Information and Communication Technology Skills, Communication Skills, Digital literacy, Organizational Leadership Skills, and Aesthetic Skills",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Class wise tracker",
                                  "hint": "Class wise Tracker: It is a class wise worksheet/spreadsheet for recording the details of\nstudents (roll no., participation in different activities, etc.). It helps in tracking the\nperformance of each child in the class. Teachers may use notebooks, an excel sheet, mobile\napp, etc.",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Consolidated Time Table of all classes in school reflecting the periods allocated for these activities",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Improvement Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Lesson plans of different subjects depicting integration of such activities",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Documents (Certificates or school magazine and website) reflecting participation of students in these activities at the Zonal / State/ National/ International Level",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Students’ participation in Govt. flagship programmes",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "List of courses and Internship offered (AI, machine Learning, Data Science, Organic Living, Healthy Living etc.)",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C133Q2_1630069778179-1630069803692",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.3a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.112Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae2",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d78",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504364,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C133Q3_1630069778179-1630069803693",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.3b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.119Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae3",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d78",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504382,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C133Q4_1630069778179-1630069803693",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.3c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.127Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae4",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d78",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504392,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3e",
                          "question": [
                              "The school has a Life Skills development program focussing on thinking, social and emotional skills.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school has CBSE Life Skills Manuals in its library."
                              },
                              {
                                  "value": "R2",
                                  "label": "The Life Skills Programme is planned and implemented for secondary classes only."
                              },
                              {
                                  "value": "R3",
                                  "label": "School Counselor and class teachers are responsible for imparting Life Skills Education."
                              },
                              {
                                  "value": "R4",
                                  "label": "Life Skills activities are conducted using the CBSE Life Skills Manuals."
                              },
                              {
                                  "value": "R5",
                                  "label": "Policy for implementing Life Skills Education Programme is in place."
                              },
                              {
                                  "value": "R6",
                                  "label": "Capacity building programmes on Life Skills development are organized for teachers and students."
                              },
                              {
                                  "value": "R7",
                                  "label": "Life Skills curriculum is planned, integrated and imparted for all the classes through regular class room teaching and other enrichment activities."
                              },
                              {
                                  "value": "R8",
                                  "label": "Student learning outcomes are visible in the narrative anecdotal records, student portfolios and day to day observation and interaction by teachers.",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual."
                              },
                              {
                                  "value": "R9",
                                  "label": "There is well defined Policy for implementing Life Skills Education."
                              },
                              {
                                  "value": "R10",
                                  "label": "Teachers, students and parents contribute in creating resources for enhancing Life Skills curriculum."
                              },
                              {
                                  "value": "R11",
                                  "label": "The Programme is well integrated with cross-curricular links."
                              },
                              {
                                  "value": "R12",
                                  "label": "The Programme is effectively implemented, monitored and reviewed at regular intervals to measure its impact on students’ thinking, social and emotional skills"
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C134Q1_1630069778179-1630069803694",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.4",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.138Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae5",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d79",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504407,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c3f",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs for Teachers and students",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Availability of Life Skills Manuals",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Holistic Progress Card",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Integrated Annual Curriculum and Pedagogical Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers Diary along with Lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Consolidated School Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Records of interventions for students",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Student Learning Outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Anecdotal Records",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual.",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Portfolio",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Counsellor and career counselling records",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C134Q2_1630069778179-1630069803695",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.4a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.145Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae6",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d79",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504429,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c40",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C134Q3_1630069778179-1630069803696",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.4b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.152Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae7",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d79",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504459,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c41",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C134Q4_1630069778179-1630069803697",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.3.4c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.159Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae8",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d79",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504468,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c42",
                          "question": [
                              "School has a Policy and a strong leadership for promoting Health and Physical Education in Students",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School has a sports/PE class in their schedule for elementary classes."
                              },
                              {
                                  "value": "R2",
                                  "label": "The school has a regular PE Teacher."
                              },
                              {
                                  "value": "R3",
                                  "label": "School has a sports/PE class in their schedule for middle and high school as well."
                              },
                              {
                                  "value": "R4",
                                  "label": "PE and Sports plan is shared with the students and parents."
                              },
                              {
                                  "value": "R5",
                                  "label": "All students participate in PE, Yoga and sports."
                              },
                              {
                                  "value": "R6",
                                  "label": "School conducts Health check-ups - height, weight, etc. of the students at least twice a year."
                              },
                              {
                                  "value": "R7",
                                  "label": "School participates in Fit India programmes."
                              },
                              {
                                  "value": "R8",
                                  "label": "A clearly documented School Policy for promoting Health and Physical Education in students is in place."
                              },
                              {
                                  "value": "R9",
                                  "label": "The policy provides for periodical assessment of fitness of students and staff."
                              },
                              {
                                  "value": "R10",
                                  "label": "The school leader has studied/read the CBSE Manual on PE and sports integration."
                              },
                              {
                                  "value": "R11",
                                  "label": "PE and sports are integrated in the school development plan."
                              },
                              {
                                  "value": "R12",
                                  "label": "School participates in Fit India programme and all other Health and Fitness programmes initiated by the Government."
                              },
                              {
                                  "value": "R13",
                                  "label": "Yoga is taught scientifically and in an engaging manner in the school."
                              },
                              {
                                  "value": "R14",
                                  "label": "The Policy is monitored and reviewed regularly at periodic intervals and changes made accordingly in accordance with the Health Standards."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C141Q1_1630069778179-1630069803697",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.4 Mainstreaming Physical Education and Sports",
                          "page": "1.0",
                          "questionNumber": "1.4.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.165Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24ae9",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7a",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504478,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c43",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy for mandatory PE and Sports",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Annual PE and Sports Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Annual/periodic health check-up documentation",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Minutes of the Meeting with Stakeholders",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Complaint/Suggestion Management",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Evidence of conduct of Yoga",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "PE Development Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Class timetables",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "List of sports equipment",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Availability of teachers/part-time experts for PE,",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Evidences of participation in Fit India programmes and other similar programmes of Govt. of India",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C141Q2_1630069778179-1630069803698",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.172Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aea",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7a",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504501,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c44",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C141Q3_1630069778179-1630069803698",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.180Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aeb",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7a",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504520,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c45",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C141Q4_1630069778179-1630069803699",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.187Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aec",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7a",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504535,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c46",
                          "question": [
                              "Teaching and learning of PE is rich and engaging.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Students play on their own in the designated period."
                              },
                              {
                                  "value": "R2",
                                  "label": "Students participate regularly in sports and PE in their regular periods."
                              },
                              {
                                  "value": "R3",
                                  "label": "Staff uses innovative strategies to generate interest in students in leading a healthy life style."
                              },
                              {
                                  "value": "R4",
                                  "label": "Students are provided with opportunities to explore their talent and build skills."
                              },
                              {
                                  "value": "R5",
                                  "label": "Students participate in activities around MPE for atleast one hour every day of the week (four to six hours in a week)."
                              },
                              {
                                  "value": "R6",
                                  "label": "School Policy on mainstreaming PE is in place."
                              },
                              {
                                  "value": "R7",
                                  "label": "All staff are competent to deliver PE lessons."
                              },
                              {
                                  "value": "R8",
                                  "label": "PE activities are carried out with a cross curricular approach."
                              },
                              {
                                  "value": "R9",
                                  "label": "Students experiment with diverse PE activities."
                              },
                              {
                                  "value": "R10",
                                  "label": "Students are exposed to talented professional and passionate sports persons in order to encourage them to pursue a healthy life style."
                              },
                              {
                                  "value": "R11",
                                  "label": "Participation in Khelo India."
                              },
                              {
                                  "value": "R12",
                                  "label": "The activities are stringently monitored, and reviewed for their impact on student learning outcomes."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C142Q1_1630069778179-1630069803699",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.2",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.194Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aed",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7b",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504546,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c47",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy for mandatory PE and sports",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Record of PE Personnel Training",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "List of Activities",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "List of Guests/talented Professionals",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Student Participation Records",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Teacher Pupil Ratio",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Consolidated Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "CBPs attended by Teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Evidences of students’ participation in Khelo India",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C142Q2_1630069778179-1630069803700",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.2a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.199Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aee",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7b",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504575,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c48",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C142Q3_1630069778179-1630069803700",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.2b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.205Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aef",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7b",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504602,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c49",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C142Q4_1630069778179-1630069803701",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.2c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.211Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af0",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7b",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504612,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4a",
                          "question": [
                              "PE helps in promoting preventive health care and making healthy life style choices.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The teachers encourage students to participate in the Sports Period."
                              },
                              {
                                  "value": "R2",
                                  "label": "The teachers encourage students to lead a healthy life style."
                              },
                              {
                                  "value": "R3",
                                  "label": "Regular Programmes are organized by the school on promoting preventive health care and making Healthy Life Style Choices."
                              },
                              {
                                  "value": "R4",
                                  "label": "Stakeholders like parents, students and community actively participate in the programmes."
                              },
                              {
                                  "value": "R5",
                                  "label": "The School Policy on MPE and Sports is in place."
                              },
                              {
                                  "value": "R6",
                                  "label": "The School Calendar reflects ongoing activities and programs for all stakeholders."
                              },
                              {
                                  "value": "R7",
                                  "label": "Subject teachers integrate PE in their curriculum."
                              },
                              {
                                  "value": "R8",
                                  "label": "The program is effectively implemented, monitored and reviewed at regular intervals."
                              },
                              {
                                  "value": "R9",
                                  "label": "Records and data are maintained to identify measurable indicators.",
                                  "hint": "Indicator: Data or statistic that indicates or signals something."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C143Q1_1630069778179-1630069803701",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.3",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.218Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af1",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7c",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504624,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs for Teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Evidences of school promoting healthy eating habits ad discouraging junk food",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Records of Health awareness programmes for students, teachers and other community members",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "School Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Health Records",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Counselor Records",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Any Other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C143Q2_1630069778179-1630069803702",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.3a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.224Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af2",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7c",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504646,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C143Q3_1630069778179-1630069803702",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.3b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.230Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af3",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7c",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504671,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C143Q4_1630069778179-1630069803703",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.3c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.236Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af4",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7c",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504685,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4e",
                          "question": [
                              "Inclusive PE and Sport is an important aspect of school.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Opportunities for students are available in the designated period"
                              },
                              {
                                  "value": "R2",
                                  "label": "Students actively participate in activities as recommended under the four strands of MPE.",
                                  "hint": "Four Strands: The new format of Health and Physical Education by CBSE envisions that each student will undertake activities categorized under the following four strands:\n• Strand 1 - Games/Sports\n• Strand 2 – Health and Fitness\n• Strand 3 – Social Empowerment through Work Education and Action (SEWA)\n• Strand 4- Health and Activity Card (For record)"
                              },
                              {
                                  "value": "R3",
                                  "label": "Sports opportunities are provided to divyang."
                              },
                              {
                                  "value": "R4",
                                  "label": "Regular competitions are held both within and between schools."
                              },
                              {
                                  "value": "R5",
                                  "label": "Students participate in the activities organised under all the strands in age appropriate ways."
                              },
                              {
                                  "value": "R6",
                                  "label": "The school focuses on providing equal opportunities for all children in the school, without any bias."
                              },
                              {
                                  "value": "R7",
                                  "label": "Planned Programme for ensuring physical and mental well-being of staff is evidenced."
                              },
                              {
                                  "value": "R8",
                                  "label": "School Policy on Inclusivity in MPE and Sports is in place."
                              },
                              {
                                  "value": "R9",
                                  "label": "Extensive range of activities under MPE are available and opportunities for students with learning difficulties and different abilities are created."
                              },
                              {
                                  "value": "R10",
                                  "label": "Links with Public Sports Complex(es) are established."
                              },
                              {
                                  "value": "R11",
                                  "label": "SEWA, Games and Sports, Adventure and Health and Fitness-all strands are interwoven in the curriculum and opportunities provided to each student to participate in each activity."
                              },
                              {
                                  "value": "R12",
                                  "label": "A planned program of coordinating the diet, the mental health and physical well - being is evidenced."
                              },
                              {
                                  "value": "R13",
                                  "label": "Mentoring, Monitoring and Reviewing practices are in place."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C144Q1_1630069778179-1630069803703",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.4",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.244Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af5",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7d",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504698,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c4f",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs for staff",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "SEWA Projects",
                                  "hint": "Projects :A task given over a period of time and generally involves collection an analysis of\ndata. It is useful in theme based learning.",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Record of PE activities for inclusion of divayang",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Record of student participation in SEWA, Games and Sports, Adventure and Health and Fitness",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Data Analysis of Physical and Mental Health of students",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Counselor Records",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Record of identification of student needs",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Lesson plans reflecting cross curricular linkages",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Evidence of links with Public Sports Complex",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C144Q2_1630069778179-1630069803704",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.4a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.250Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af6",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7d",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504726,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c50",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C144Q3_1630069778179-1630069803704",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.4b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.255Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af7",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7d",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504754,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c51",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C144Q4_1630069778179-1630069803705",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.4.4c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.261Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af8",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7d",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504764,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c52",
                          "question": [
                              "The school fosters values through a climate of care, compassion, and respect; welcomes diversity and creates a culture of pride for the school amongst the stakeholders",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Values are taught through a regular time table."
                              },
                              {
                                  "value": "R2",
                                  "label": "CBSE Value Education Framework is available and used by teachers."
                              },
                              {
                                  "value": "R3",
                                  "label": "The school focuses on strengthening Constitutional Values."
                              },
                              {
                                  "value": "R4",
                                  "label": "Guidelines for acceptable behaviour and relationships within the school are available."
                              },
                              {
                                  "value": "R5",
                                  "label": "Values are taught and school addresses discrimination, inequity, bullying and disrespect"
                              },
                              {
                                  "value": "R6",
                                  "label": "The school celebrates special events."
                              },
                              {
                                  "value": "R7",
                                  "label": "Decisions are just and reasonable."
                              },
                              {
                                  "value": "R8",
                                  "label": "School has an integrated programme for inculcating values among students."
                              },
                              {
                                  "value": "R9",
                                  "label": "The curriculum enables students to develop a global perspective."
                              },
                              {
                                  "value": "R10",
                                  "label": "The school celebrates progress and achievements together. A culture of optimism is shared by students and staff."
                              },
                              {
                                  "value": "R11",
                                  "label": "Decisions are fair and made in the interests of students."
                              },
                              {
                                  "value": "R12",
                                  "label": "The school welcomes students and teachers of different backgrounds and perspectives."
                              },
                              {
                                  "value": "R13",
                                  "label": "Students willingly engage with, and learn from, others who are different from them."
                              },
                              {
                                  "value": "R14",
                                  "label": "Policies, curriculum, behaviours and relationships within the school are consistently inclusive, respectful, ethical and compassionate and are effectively implemented, monitored and reviewed regularly."
                              },
                              {
                                  "value": "R15",
                                  "label": "Values are consistently taught through integrated curriculum plan, understood and demonstrated."
                              },
                              {
                                  "value": "R16",
                                  "label": "Informed decisions by all stakeholders, well supported by data and collaborative practices, reflect a moral and ethical code of equity and dignity, and are in the best interest of students."
                              },
                              {
                                  "value": "R17",
                                  "label": "All students are welcomed and have access to learning and success. Students develop open-mindedness, curiosity, and global understanding."
                              },
                              {
                                  "value": "R18",
                                  "label": "The students, staff, school leaders, parents, and the community contribute to the quality and improvement of their school and feel a sense of ownership and pride."
                              },
                              {
                                  "value": "R19",
                                  "label": "Students learning outcomes are visible in the narrative anecdotal records, student portfolios and day to day observation and interactions.",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C151Q1_1630069778179-1630069803705",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.5 Values and Ethos",
                          "page": "1.0",
                          "questionNumber": "1.5.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.268Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24af9",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7e",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504776,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c53",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs for Teachers and students",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "CBSE Value Education Kit",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "List of activitie",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "School Décor",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Integrated Annual Curriculum and Pedagogical Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Teachers Diary along with Lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Consolidated School Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "School Annual Repor",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Records and Reports of Child Protection Committee",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Student Learning Outcomes",
                                  "hint": "Statements that describe significant and essential learning that\nlearners have achieved, and can reliably demonstrate at the end of a lesson or a unit or a\ncourse or program. In other words, learning outcomes identify what the learner will know\nand be able to do by the end of a lesson or a unit or a course or program.",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Anecdotal Records",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual.",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Portfolio",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "List and number of School Ambassadors",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Policy for Teacher Welfare",
                                  "score": 0
                              },
                              {
                                  "value": "R16",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R17",
                                  "label": "Collaborative Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R18",
                                  "label": "Counsellor records",
                                  "score": 0
                              },
                              {
                                  "value": "R19",
                                  "label": "School Code of Conduct",
                                  "hint": "Code of conduct: A set of conventional principles and expectations that are considered\nbinding on any person who is a member of a particular group. A statement and description\nof required behaviors, responsibilities, and actions expected of members of a professional\nbody. A code of conduct usually focuses on ethical and socially responsible issues and\napplies to individuals, providing guidance on how to act in cases of doubt or confusion.",
                                  "score": 0
                              },
                              {
                                  "value": "R20",
                                  "label": "Evidences of Community participation",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C151Q2_1630069778179-1630069803706",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.5.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.273Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24afa",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7e",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504812,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c54",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C151Q3_1630069778179-1630069803706",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.5.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.280Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24afb",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7e",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504850,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c55",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C151Q4_1630069778179-1630069803707",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.5.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.288Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24afc",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7e",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504860,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c56",
                          "question": [
                              "The school ensures 75% attendance of its students and reduces drop outs.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school maintains attendance records of the students."
                              },
                              {
                                  "value": "R2",
                                  "label": "The Principal and teachers have identified students who are regularly absent."
                              },
                              {
                                  "value": "R3",
                                  "label": "Parents are informed about children who are regularly absent."
                              },
                              {
                                  "value": "R4",
                                  "label": "The Principal, teachers and other stakeholders have informed interactions of the child’s regular absenteeism."
                              },
                              {
                                  "value": "R5",
                                  "label": "School identifies the reason for student drop out."
                              },
                              {
                                  "value": "R6",
                                  "label": "Strategies are in place to bring back the drop outs back in school."
                              },
                              {
                                  "value": "R7",
                                  "label": "All Student drop outs are tracked and brought back to the classroom."
                              },
                              {
                                  "value": "R8",
                                  "label": "The School Policy for Student Attendance and Reduction in drop outs is in place."
                              },
                              {
                                  "value": "R9",
                                  "label": "The Principal, teachers and other stakeholders create joint plans to improve student attendance."
                              },
                              {
                                  "value": "R10",
                                  "label": "Students at risk (girl child, students belonging to diverse socio economic disadvantaged groups and divyang) are supported and encouraged to complete their schooling."
                              },
                              {
                                  "value": "R11",
                                  "label": "Regular communication, counselling and follow ups are done to encourage attendance and reduce drop outs.",
                                  "hint": "Counseling: It constitutes three components, viz, informing, advising and counseling, where informing means giving appropriate and correct information; advising covers suggesting appropriate courses of action; and counseling means helping the learners to clarify their needs, feelings, etc. so that they can make appropriate decision for themselves."
                              },
                              {
                                  "value": "R12",
                                  "label": "The school allocates funds for student welfare."
                              },
                              {
                                  "value": "R13",
                                  "label": "Monitoring and Reviewing Practices are in place."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C161Q1_1630069778179-1630069803707",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "1.6 Student Performance, Assessment of Learning Outcomes and Feedback",
                          "page": "1.0",
                          "questionNumber": "1.6.1",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.296Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24afd",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7f",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504873,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c57",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Registration records",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "List of reasons for student drop out",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Strategies to reduce drop outs",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Evidences of involvement of counselors / experts to ensure regular attendance",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Evidences of support provided to students at risk (girl child, students belonging to diverse socio economic disadvantaged groups and divyang)",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Attendance records",
                                  "hint": "Attendance records: Relating to gathering daily students’ attendance, storing and using\ndata, thus collected, for consolidating information regarding regularity.",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Written records of action taken other than communication to parents by the teachers and principal",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Budget allocation for student welfare",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Records of communication with parents",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Record of drop outs brought back in the classroom",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C161Q2_1630069778179-1630069803707",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.1a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.303Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24afe",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7f",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504896,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c58",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C161Q3_1630069778179-1630069803708",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.1b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.309Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24aff",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7f",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504929,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c59",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C161Q4_1630069778179-1630069803708",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.1c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.315Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b00",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d7f",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504939,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5a",
                          "question": [
                              "Teachers use multiple modes of assessment to assess the performance of the students - Assessment of Learning.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Teachers prepare question papers and one or two outcome driven tasks to assess students’ performance."
                              },
                              {
                                  "value": "R2",
                                  "label": "School assesses the achievement of learning outcomes at classes 3, 5 and 8."
                              },
                              {
                                  "value": "R3",
                                  "label": "Teachers prepare the question papers and more than two outcome driven tasks to assess students’ performance."
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers attend capacity building programmes are conducted on designing outcome driven tasks."
                              },
                              {
                                  "value": "R5",
                                  "label": "Teachers integrate assessment of learning in their lesson plans."
                              },
                              {
                                  "value": "R6",
                                  "label": "Modes of assessment include research work, writing journals, making of portfolio, presentations and other project work involving experiential learning."
                              },
                              {
                                  "value": "R7",
                                  "label": "School teachers are aware of their roles and responsibilities."
                              },
                              {
                                  "value": "R8",
                                  "label": "ICT is integrated in the assessment practices."
                              },
                              {
                                  "value": "R9",
                                  "label": "Both individual and group work is part of multiple modes of assessment."
                              },
                              {
                                  "value": "R10",
                                  "label": "The School Policy with regard to Assessment Practices and Evaluation is in place.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R11",
                                  "label": "There is an Annual Calendar for conducting ongoing assessment."
                              },
                              {
                                  "value": "R12",
                                  "label": "There is a well-defined blue print for framing different kinds of questions using multiple modes."
                              },
                              {
                                  "value": "R13",
                                  "label": "Defined rubric with criteria, levels and descriptors is used by staff."
                              },
                              {
                                  "value": "R14",
                                  "label": "Teachers are mentored and enabled to design varied assessment tasks."
                              },
                              {
                                  "value": "R15",
                                  "label": "Peer evaluation is done to determine validity, reliability and authenticity of the designed assessment tasks."
                              },
                              {
                                  "value": "R16",
                                  "label": "Student inputs are taken to design outcome driven tasks."
                              },
                              {
                                  "value": "R17",
                                  "label": "Assessment practices are in alignment with NEP recommendations and CBSE bylaws."
                              },
                              {
                                  "value": "R18",
                                  "label": "Teachers hold spaces for self-reflection after assessment of learning and designing improvement plans."
                              },
                              {
                                  "value": "R19",
                                  "label": "The assessment process is regularly reviewed."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C162Q1_1630069778179-1630069803711",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.2",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.322Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b01",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d80",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504952,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Annual Assessment Calendar",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Assessment blue print and rubrics for varied modes of assessment",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Key stage Assessment results (Classes 3, 5 and 8)",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Evidences reflecting use of varied modes of assessment by teachers such as research, presentation, individual & group work, portfolio, competency-based task, MCQs, Journal writing, essay, book review, newspaper article, case study or analysis, oral assessment, role play, etc.",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "List of CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Evidences of student inputs in designing outcome driven tasks",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Evidences of peer evaluation",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Evidences reflecting use of digital tools by teachers and students",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Reflection sheets – Teachers and Students",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Holistic Progress Card",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Teachers Diary with Lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Evidences of training of teachers in modern assessment practices and designing of varied outcome driven tasks",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Improvement Plans",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C162Q2_1630069778179-1630069803713",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.2a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.327Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b02",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d80",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637504978,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C162Q3_1630069778179-1630069803713",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.2b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.333Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b03",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d80",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505014,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C162Q4_1630069778179-1630069803714",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.2c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.339Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b04",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d80",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505024,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5e",
                          "question": [
                              "The school has defined procedures and criteria to regularly assess the students' performance; adopts varied assessment tools and techniques to assess the performance of the students – Assessment for Learning and As Learning",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Assessments include  pen paper tests to assess the performance of students."
                              },
                              {
                                  "value": "R2",
                                  "label": "Assignments, worksheets and projects are used to assess the performance of students."
                              },
                              {
                                  "value": "R3",
                                  "label": "Guidelines for assessments and evaluation are available with Heads of Departments.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R4",
                                  "label": "Guidelines for assessment and evaluation are in place.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R5",
                                  "label": "Teachers conduct and employ different types of assessment tools.",
                                  "hint": "Assessment tool: The specific media used for types of assessment, e.g. written tests, viva\nvoce, projects, etc."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers consult students in defining assessment criteria."
                              },
                              {
                                  "value": "R7",
                                  "label": "Teachers assess students on the basis of pre-defined criteria."
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers use date for the purpose of remediation and performance enhancement."
                              },
                              {
                                  "value": "R9",
                                  "label": "Teachers hold discussions with parents to communicate assessment criteria."
                              },
                              {
                                  "value": "R10",
                                  "label": "Students reflect on and monitor their progress to achieve their future learning goals."
                              },
                              {
                                  "value": "R11",
                                  "label": "The School Policy with regard to Assessment Practices and Evaluation is in place.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R12",
                                  "label": "Different assessment techniques are integrated with the classroom teaching."
                              },
                              {
                                  "value": "R13",
                                  "label": "Teachers periodically design and use different formative assessment tools and techniques as per the needs of the students",
                                  "hint": "Formative Assessment: A form of assessment that is done during the course of instruction; its outcome provides information that teachers can use to revise their teaching and students can use to improve their learning.\n\nAssessment tool: The specific media used for types of assessment, e.g. written tests, viva\nvoce, projects, etc."
                              },
                              {
                                  "value": "R14",
                                  "label": "Teachers use assessment data to improve their own learning teaching practices."
                              },
                              {
                                  "value": "R15",
                                  "label": "There is a process for effective data collection and analysis of student data."
                              },
                              {
                                  "value": "R16",
                                  "label": "The school leader regularly reviews the data collection and analysis process."
                              },
                              {
                                  "value": "R17",
                                  "label": "There are evidences of how student performance has improved based on teachers’ analysis of data and planning strategies according to the analysis."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C163Q1_1630069778179-1630069803715",
                          "tip": "Assessment tool: The specific media used for types of assessment, e.g. written tests, viva\nvoce, projects, etc.",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.3",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.347Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b05",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d81",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505042,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c5f",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Evidences of diagnostic and remedial measures used by teachers to enhance student performance",
                                  "hint": "Diagnostic: Serving to identify a characteristic or being a precise indication.",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "CBPs attended by Teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers' Diary with lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Sample of: Quiz questions, types of questions, project work, portfolios, mind maps, games, debate, interview, presentation, game, and other experiential learning tasks, etc.",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Evidences of students’ reflections to monitor their own progress",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Criteria and rubrics created by the teachers with the help of the students for different activities",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Records of remedial classes to reflect students’ performances",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Holistic Progress Card",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Key Stage Assessment Results (Classes 3, 5 and 8)",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C163Q2_1630069778179-1630069803715",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.3a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.353Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b06",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d81",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505078,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c60",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C163Q3_1630069778179-1630069803716",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.3b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.359Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b07",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d81",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505107,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c61",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C163Q4_1630069778179-1630069803717",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.3c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.366Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b08",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d81",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505118,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c62",
                          "question": [
                              "Learning Outcomes are used as check points to assess students’ learning.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "The school has documents on learning outcomes for different classes as defined by NCERT."
                              },
                              {
                                  "value": "R2",
                                  "label": "Student assessments draw on questions covered in the textbook."
                              },
                              {
                                  "value": "R3",
                                  "label": "Teachers plan their lessons in accordance with the syllabus."
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers plan remediation according to data on student learning outcomes."
                              },
                              {
                                  "value": "R5",
                                  "label": "Teachers collect and implement feedback from students.",
                                  "hint": "Feedback: A reaction or response to a particular process or activity."
                              },
                              {
                                  "value": "R6",
                                  "label": "Teachers have mapped assessment task with the learning outcomes."
                              },
                              {
                                  "value": "R7",
                                  "label": "Teachers assess the students as per the learning outcomes defined for each chapter using their own assessment tasks."
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers, parents and students have been oriented on learning outcomes."
                              },
                              {
                                  "value": "R9",
                                  "label": "The school policy with regard to Structure of Assessment and Evaluation is in place.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R10",
                                  "label": "Learning outcomes are prepared in line with the Learning Outcomes laid down by NCERT or as defined in the curriculum document of CBSE."
                              },
                              {
                                  "value": "R11",
                                  "label": "The Learning Outcomes are shared with the students and parents and explained to them."
                              },
                              {
                                  "value": "R12",
                                  "label": "The student assessment and evaluation policy is learning outcome centric and has been prepared in collaboration with the staff.",
                                  "hint": "Evaluation: A process wherein the parts, processes, or outcomes of a programme are examined to see whether they are satisfactory, particularly with reference to its stated objectives. The assessment of a programme's outcomes or results is facilitated by measurement. Such measurement is affected by means of tools such as test, questionnaires, opinionnaires, inventories, interview schedules, scales, etc."
                              },
                              {
                                  "value": "R13",
                                  "label": "The school has a policy with regard to the structure of student assessment and evaluation."
                              },
                              {
                                  "value": "R14",
                                  "label": "Feedback is provided at regular intervals to enhance student performance.",
                                  "hint": "Feedback: A reaction or response to a particular process or activity."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C164Q1_1630069778179-1630069803717",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.4",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.376Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b09",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d82",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505131,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c63",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "List of CBPs",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Minutes of Staff Meetings and Departmental Meetings reflecting achievement of learning outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Assessment records of students",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Assessment Worksheets prepared by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Teacher's Diaries with lesson plans",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Evidences of oral or written communication about the learning outcomes to the students and their parents",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Evidences of customized assessments",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Evaluation records at grades 3, 5 and 8 to assess learning outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Mentoring and Monitoring practices",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Improvement Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C164Q2_1630069778179-1630069803718",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.4a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.382Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0a",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d82",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505166,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c64",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C164Q3_1630069778179-1630069803718",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.4b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.389Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0b",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d82",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505198,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c65",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C164Q4_1630069778179-1630069803719",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.4c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.397Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0c",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d82",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505209,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c66",
                          "question": [
                              "Assessment of skills and competencies are done based on Learning Outcomes and the criteria given in the Holistic Progress Card.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Assessment takes place once in a year."
                              },
                              {
                                  "value": "R2",
                                  "label": "Assessment is done by class teacher."
                              },
                              {
                                  "value": "R3",
                                  "label": "Records are maintained and updated regularly."
                              },
                              {
                                  "value": "R4",
                                  "label": "Assessment is done by more than two teachers."
                              },
                              {
                                  "value": "R5",
                                  "label": "Most staff are competent in the use of assessment standards."
                              },
                              {
                                  "value": "R6",
                                  "label": "Assessment is done in collaboration with teachers from different streams"
                              },
                              {
                                  "value": "R7",
                                  "label": "Self-Assessment and Peer Assessment practices are evident."
                              },
                              {
                                  "value": "R8",
                                  "label": "Digital Records are maintained."
                              },
                              {
                                  "value": "R9",
                                  "label": "The School Policy on assessment of Skills and Competencies - visual and performing arts, life skills, values and ethos, vocational skills, health and physical education is in place."
                              },
                              {
                                  "value": "R10",
                                  "label": "All Staff is competent in assessing learning outcomes using prescribed assessment standards"
                              },
                              {
                                  "value": "R11",
                                  "label": "Assessment is ongoing and comprehensive."
                              },
                              {
                                  "value": "R12",
                                  "label": "There is a mechanism for mentoring, monitoring and reviewing the assessment process to ensure learners achieve their individual and group developmental goals."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C165Q1_1630069778179-1630069803719",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.5",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.404Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0d",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d83",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505221,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c67",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "Time Table",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Records of Remedial Programmes",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Portfolios",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Sample Lesson Plan",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Assessment rubrics for Life Skills, art education, HPE, vocational skills, values",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "CBPs",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Anecdotal Records",
                                  "hint": "An anecdotal record is a report of descriptive accounts of episodes or occurrences in specific duration of life of an individual.",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Mentoring, Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Holistic Progress Card",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Individual development plans",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Improvement Plans",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "Counsellor’s Records",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Health records",
                                  "score": 0
                              },
                              {
                                  "value": "R15",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C165Q2_1630069778179-1630069803720",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.5a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.411Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0e",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d83",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505246,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c68",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C165Q3_1630069778179-1630069803720",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.5b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.417Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b0f",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d83",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505290,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c69",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C165Q4_1630069778179-1630069803720",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.5c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.423Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b10",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d83",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505300,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6a",
                          "question": [
                              "The school ensures all students achieve and progress on their developmental continuum.",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Assessments include pen paper tests to assess the performance of students."
                              },
                              {
                                  "value": "R2",
                                  "label": "Teachers have conducted assessments to identify the learning levels of the students."
                              },
                              {
                                  "value": "R3",
                                  "label": "Teachers make use of different methods of assessment to assess the learning outcomes of students."
                              },
                              {
                                  "value": "R4",
                                  "label": "Teachers create lesson plans keeping in mind learning needs and learning outcomes of all students."
                              },
                              {
                                  "value": "R5",
                                  "label": "Teachers tailor the teaching learning practices as per each student’s needs."
                              },
                              {
                                  "value": "R6",
                                  "label": "The average result of Class X/XII is 100% (with reference to Board average)."
                              },
                              {
                                  "value": "R7",
                                  "label": "The School Policy on Students Achievement in different domains is in place."
                              },
                              {
                                  "value": "R8",
                                  "label": "Teachers have been trained on understanding the process of growth and development of students in cognitive, affective and psychomotor domains.",
                                  "hint": "Affective domain: The part of the human mind that makes people react emotionally and\ntheir ability to feel another person's pain or joy.\n\nCognitive domain: The part of an individual's mind that defines how individuals think, their\nintellectual capabilities, level of development and preferred thinking styles, which range\nfrom knowledge through comprehension, application, analysis and evaluation to creation."
                              },
                              {
                                  "value": "R9",
                                  "label": "Teachers create lesson plans that encourage holistic development of the students"
                              },
                              {
                                  "value": "R10",
                                  "label": "Teachers use self-assessment techniques by students to enable them to monitor their own growth and achievement."
                              },
                              {
                                  "value": "R11",
                                  "label": "Teachers develop lesson plans based on students’ achievement levels."
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C166Q1_1630069778179-1630069803721",
                          "tip": "Developmental Continuum: It outlines the sequence of skills that children can be expected to acquire as they develop. It covers a broad range of developmental domains (physical, social, emotional, communication/language and cognitive). It is a base for observation and discussion of children's growth and learning.",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.6",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.429Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b11",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d84",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505314,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6b",
                          "question": [
                              "Please mark all the evidences you have for this sub-sub-domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": true,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "School Policy",
                                  "score": 0
                              },
                              {
                                  "value": "R2",
                                  "label": "CBPs attended by teachers",
                                  "score": 0
                              },
                              {
                                  "value": "R3",
                                  "label": "Records of last 3 years of Grade X and XII results along with analysis showing percentage of students in different percentile ranges",
                                  "score": 0
                              },
                              {
                                  "value": "R4",
                                  "label": "Foundational Literacy and Numeracy Learning outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R5",
                                  "label": "Assessment Records of all students for the last three years",
                                  "score": 0
                              },
                              {
                                  "value": "R6",
                                  "label": "Analysis of student performance from class IX – XII",
                                  "score": 0
                              },
                              {
                                  "value": "R7",
                                  "label": "Report Cards of Class X/XII Board Examination",
                                  "score": 0
                              },
                              {
                                  "value": "R8",
                                  "label": "Students’ Profiles and IEP (Individual Education Plan) for each student of all classes",
                                  "score": 0
                              },
                              {
                                  "value": "R9",
                                  "label": "Record of interactions with Counselors/ experts/parents and subsequent action plan",
                                  "score": 0
                              },
                              {
                                  "value": "R10",
                                  "label": "Diagnostic and Remedial Records",
                                  "hint": "Diagnostic: Serving to identify a characteristic or being a precise indication.",
                                  "score": 0
                              },
                              {
                                  "value": "R11",
                                  "label": "Self-Assessment reports of students",
                                  "score": 0
                              },
                              {
                                  "value": "R12",
                                  "label": "Monitoring and Reviewing Practices",
                                  "score": 0
                              },
                              {
                                  "value": "R13",
                                  "label": "ECCE Learning Outcomes",
                                  "score": 0
                              },
                              {
                                  "value": "R14",
                                  "label": "Any other",
                                  "score": 0
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C166Q2_1630069778179-1630069803721",
                          "tip": "",
                          "hint": "",
                          "responseType": "multiselect",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.6a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.434Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b12",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d84",
                              "responseType": "multiselect",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505338,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6c",
                          "question": [
                              "Comments and Reflection:",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1C166Q3_1630069778179-1630069803722",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.6b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.440Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b13",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d84",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505364,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6d",
                          "question": [
                              "Based on your answers, please mark a level that your school stands at. ( 4 being the highest)",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "1",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true,
                              "max": "4",
                              "min": "1"
                          },
                          "externalId": "D1C166Q4_1630069778179-1630069803722",
                          "tip": "",
                          "hint": "",
                          "responseType": "slider",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.6.6c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.446Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b14",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d84",
                              "responseType": "slider",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505374,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6e",
                          "question": [
                              "Please upload all the evidences available for this domain",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "file": {
                              "required": true,
                              "type": [
                                  "image/jpeg",
                                  "docx",
                                  "pdf",
                                  "ppt"
                              ],
                              "minCount": 0,
                              "maxCount": 10,
                              "caption": "FALSE"
                          },
                          "externalId": "D1CQ1_1630069778179-1630069803723",
                          "tip": "",
                          "hint": "",
                          "responseType": "number",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "Overall: Domain 1 -Curriculam,Pedagogy and Assessment",
                          "page": "1.0",
                          "questionNumber": "1.a",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.454Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b15",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d85",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505397,
                          "endTime": "",
                          "gpsLocation": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c6f",
                          "question": [
                              "Has the school created improvement plans for this domain?",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [
                              {
                                  "value": "R1",
                                  "label": "Yes",
                                  "score": 0,
                                  "hint":"This is an hint for the option yes"
                              },
                              {
                                  "value": "R2",
                                  "label": "Not Yet",
                                  "score": 0,
                                  "hint":"This is an hint for the option no"
                              }
                          ],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "file": {
                              "required": true,
                              "type": [
                                  "image/jpeg",
                                  "docx",
                                  "pdf",
                                  "ppt"
                              ],
                              "minCount": 0,
                              "maxCount": 10,
                              "caption": "FALSE"
                          },
                          "externalId": "D1CQ2_1630069778179-1630069803723",
                          "tip": "",
                          "hint": "",
                          "responseType": "radio",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.b",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.459Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b16",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d85",
                              "responseType": "radio",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505409,
                          "endTime": "",
                          "gpsLocation": ""
                      },
                      {
                          "_id": "6128e42b6a37e7597db24c70",
                          "question": [
                              "Please mention what support from CBSE would help you achieve your plans",
                              ""
                          ],
                          "isCompleted": false,
                          "showRemarks": false,
                          "options": [],
                          "sliderOptions": [],
                          "children": [],
                          "questionGroup": [
                              "A1"
                          ],
                          "fileName": [],
                          "instanceQuestions": [],
                          "isAGeneralQuestion": false,
                          "autoCapture": false,
                          "allowAudioRecording": false,
                          "weightage": 0,
                          "prefillFromEntityProfile": false,
                          "entityFieldName": "",
                          "isEditable": true,
                          "showQuestionInPreview": false,
                          "deleted": false,
                          "remarks": "",
                          "value": "",
                          "usedForScoring": "",
                          "questionType": "auto",
                          "canBeNotApplicable": "false",
                          "visibleIf": "",
                          "validation": {
                              "required": true
                          },
                          "externalId": "D1CQ3_1630069778179-1630069803724",
                          "tip": "",
                          "hint": "",
                          "responseType": "text",
                          "modeOfCollection": "onfield",
                          "accessibility": "No",
                          "rubricLevel": "",
                          "sectionHeader": "",
                          "page": "1.0",
                          "questionNumber": "1.c",
                          "updatedAt": "2021-08-27T13:10:03.920Z",
                          "createdAt": "2021-08-27T13:09:48.465Z",
                          "__v": 0,
                          "createdFromQuestionId": "6128e41c6a37e7597db24b17",
                          "evidenceMethod": "D1_1630069778179",
                          "payload": {
                              "criteriaId": "6128e42c6a37e7597db24d85",
                              "responseType": "text",
                              "evidenceMethod": "D1_1630069778179",
                              "rubricLevel": ""
                          },
                          "startTime": 1695637505420,
                          "endTime": "",
                          "gpsLocation": "",
                          "file": ""
                      }
                  ]
              }
          ],
          "name": "CURRICULUM, PEDAGOGY AND ASSESSMENT"
      }
  ]
    // this.sections = [
    //     {
    //         "code": "SEC1",
    //         "questions": [
    //             {
    //                 "_id": "",
    //                 "question": "",
    //                 "isCompleted": "",
    //                 "showRemarks": "",
    //                 "options": "",
    //                 "sliderOptions": "",
    //                 "children": "",
    //                 "questionGroup": "",
    //                 "fileName": "",
    //                 "instanceQuestions": "",
    //                 "isAGeneralQuestion": "",
    //                 "autoCapture": "",
    //                 "allowAudioRecording": "",
    //                 "prefillFromEntityProfile": "",
    //                 "entityFieldName": "",
    //                 "isEditable": "",
    //                 "showQuestionInPreview": "",
    //                 "deleted": "",
    //                 "remarks": "",
    //                 "value": "",
    //                 "usedForScoring": "",
    //                 "questionType": "",
    //                 "canBeNotApplicable": "",
    //                 "visibleIf": "",
    //                 "validation": "",
    //                 "file": "",
    //                 "externalId": "",
    //                 "tip": "",
    //                 "hint": "",
    //                 "responseType": "pageQuestions",
    //                 "modeOfCollection": "",
    //                 "accessibility": "",
    //                 "rubricLevel": "",
    //                 "sectionHeader": "",
    //                 "page": "p1",
    //                 "questionNumber": "",
    //                 "updatedAt": "",
    //                 "createdAt": "",
    //                 "__v": "",
    //                 "createdFromQuestionId": "",
    //                 "evidenceMethod": "",
    //                 "payload": "",
    //                 "startTime": "",
    //                 "endTime": "",
    //                 "gpsLocation": "",
    //                 "pageQuestions": [
    //                     {
    //                         "_id": "63848c97a1d0c60008cef44d",
    //                         "question": [
    //                             "drag the slider to give rating",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [],
    //                         "sliderOptions": [],
    //                         "children": [],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": false,
    //                         "allowAudioRecording": false,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "1",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true,
    //                             "max": "10",
    //                             "min": "1"
    //                         },
    //                         "file": {
    //                             "required": true,
    //                             "type": [
    //                                 "image/jpeg",
    //                                 "docx",
    //                                 "pdf",
    //                                 "ppt"
    //                             ],
    //                             "minCount": 0,
    //                             "maxCount": 10,
    //                             "caption": "FALSE"
    //                         },
    //                         "externalId": "Q1_1669631123159-1669631127657",
    //                         "tip": "",
    //                         "hint": "",
    //                         "responseType": "slider",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p1",
    //                         "questionNumber": "1",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.634Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3cf",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "slider",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792507945,
    //                         "endTime": "",
    //                         "gpsLocation": ""
    //                     },
    //                     {
    //                         "_id": "63848c97a1d0c60008cef44e",
    //                         "question": [
    //                             "enter the current date",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [],
    //                         "sliderOptions": [],
    //                         "children": [],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": true,
    //                         "allowAudioRecording": false,
    //                         "weightage": 0,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true,
    //                             "max": "",
    //                             "min": ""
    //                         },
    //                         "dateFormat": "DD-MM-YYYY",
    //                         "externalId": "Q2_1669631123159-1669631127660",
    //                         "tip": "Here is the tip",
    //                         "hint": "",
    //                         "responseType": "date",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p1",
    //                         "questionNumber": "2",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.645Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3d5",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "date",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792507972,
    //                         "endTime": "",
    //                         "gpsLocation": "",
    //                         "file": ""
    //                     },
    //                     {
    //                         "_id": "63848c97a1d0c60008cef44f",
    //                         "question": [
    //                             "enter any number you want",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [],
    //                         "sliderOptions": [],
    //                         "children": [],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": false,
    //                         "allowAudioRecording": false,
    //                         "weightage": 0,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true,
    //                             "IsNumber": "true"
    //                         },
    //                         "externalId": "Q3_1669631123159-1669631127661",
    //                         "tip": "",
    //                         "hint": "",
    //                         "responseType": "number",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p1",
    //                         "questionNumber": "3",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.655Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3db",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "number",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792507984,
    //                         "endTime": "",
    //                         "gpsLocation": "",
    //                         "file": ""
    //                     },
    //                     {
    //                         "_id": "63848c97a1d0c60008cef450",
    //                         "question": [
    //                             "MPG extension refers usually to what kind of file?",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [
    //                             {
    //                                 "value": "R1",
    //                                 "label": "L: Does not state the lesson objective(s), nor can one be inferred from the lesson activities"
    //                             },
    //                             {
    //                                 "value": "R2",
    //                                 "label": "Achieve the required enrolment with equal focus towards all sections by involving parents and influential community members in reviewing progress and addressing gaps."
    //                             },
    //                             {
    //                                 "value": "R3",
    //                                 "label": "Regularly conduct reviews of the efforts made by schools towards increasing enrolment with equal focus"
    //                             },
    //                             {
    //                                 "value": "R4",
    //                                 "label": "Sometimes take feedback from school principals on the progress in increasing the overall school enrolment"
    //                             },
    //                             {
    //                                 "value": "R5",
    //                                 "label": "Focus on identified key gaps in community and review the progress towards filling it."
    //                             }
    //                         ],
    //                         "sliderOptions": [],
    //                         "children": [],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": false,
    //                         "allowAudioRecording": false,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true
    //                         },
    //                         "externalId": "Q4_1669631123159-1669631127661",
    //                         "tip": "Here is the tip",
    //                         "hint": "",
    //                         "responseType": "radio",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p1",
    //                         "questionNumber": "4",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.665Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3e1",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "radio",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792507989,
    //                         "endTime": "",
    //                         "gpsLocation": "",
    //                         "file": ""
    //                     }
    //                 ]
    //             },
    //             {
    //                 "_id": "",
    //                 "question": "",
    //                 "isCompleted": "",
    //                 "showRemarks": "",
    //                 "options": "",
    //                 "sliderOptions": "",
    //                 "children": "",
    //                 "questionGroup": "",
    //                 "fileName": "",
    //                 "instanceQuestions": "",
    //                 "isAGeneralQuestion": "",
    //                 "autoCapture": "",
    //                 "allowAudioRecording": "",
    //                 "prefillFromEntityProfile": "",
    //                 "entityFieldName": "",
    //                 "isEditable": "",
    //                 "showQuestionInPreview": "",
    //                 "deleted": "",
    //                 "remarks": "",
    //                 "value": "",
    //                 "usedForScoring": "",
    //                 "questionType": "",
    //                 "canBeNotApplicable": "",
    //                 "visibleIf": "",
    //                 "validation": "",
    //                 "file": "",
    //                 "externalId": "",
    //                 "tip": "",
    //                 "hint": "",
    //                 "responseType": "pageQuestions",
    //                 "modeOfCollection": "",
    //                 "accessibility": "",
    //                 "rubricLevel": "",
    //                 "sectionHeader": "",
    //                 "page": "p2",
    //                 "questionNumber": "",
    //                 "updatedAt": "",
    //                 "createdAt": "",
    //                 "__v": "",
    //                 "createdFromQuestionId": "",
    //                 "evidenceMethod": "",
    //                 "payload": "",
    //                 "startTime": "",
    //                 "endTime": "",
    //                 "gpsLocation": "",
    //                 "pageQuestions": [
    //                     {
    //                         "_id": "63848c97a1d0c60008cef451",
    //                         "question": [
    //                             "enter date of birth",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [],
    //                         "sliderOptions": [],
    //                         "children": [],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": true,
    //                         "allowAudioRecording": false,
    //                         "weightage": 0,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true,
    //                             "max": "",
    //                             "min": ""
    //                         },
    //                         "dateFormat": "DD-MM-YYYY",
    //                         "file": {
    //                             "required": true,
    //                             "type": [
    //                                 "image/jpeg",
    //                                 "docx",
    //                                 "pdf",
    //                                 "ppt"
    //                             ],
    //                             "minCount": 0,
    //                             "maxCount": 10,
    //                             "caption": "FALSE"
    //                         },
    //                         "externalId": "Q5_1669631123159-1669631127662",
    //                         "tip": "",
    //                         "hint": "",
    //                         "responseType": "date",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p2",
    //                         "questionNumber": "5",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.696Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3e7",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "date",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792507997,
    //                         "endTime": "",
    //                         "gpsLocation": ""
    //                     },
    //                     {
    //                         "_id": "63848c97a1d0c60008cef452",
    //                         "question": [
    //                             "Who developed Yahoo?",
    //                             ""
    //                         ],
    //                         "isCompleted": false,
    //                         "showRemarks": false,
    //                         "options": [
    //                             {
    //                                 "value": "R1",
    //                                 "label": "Grade 1"
    //                             },
    //                             {
    //                                 "value": "R2",
    //                                 "label": "Call for a meeting with all principals and some teachers and attentively listen to their concerns. Share the maximum information in verbal and written format at the earliest."
    //                             },
    //                             {
    //                                 "value": "R3",
    //                                 "label": "Share all information that he has through meetings"
    //                             },
    //                             {
    //                                 "value": "R4",
    //                                 "label": "Listen attentively to all principals and seek various perspectives on how the change could be implemented smoothly."
    //                             },
    //                             {
    //                                 "value": "R5",
    //                                 "label": "Listen to the concerns of a selected group of principals through meetings."
    //                             }
    //                         ],
    //                         "sliderOptions": [],
    //                         "children": [
    //                             "63848c97a1d0c60008cef455"
    //                         ],
    //                         "questionGroup": [
    //                             "A1"
    //                         ],
    //                         "fileName": [],
    //                         "instanceQuestions": [],
    //                         "isAGeneralQuestion": false,
    //                         "autoCapture": false,
    //                         "allowAudioRecording": false,
    //                         "prefillFromEntityProfile": false,
    //                         "entityFieldName": "",
    //                         "isEditable": true,
    //                         "showQuestionInPreview": false,
    //                         "deleted": false,
    //                         "remarks": "",
    //                         "value": "",
    //                         "usedForScoring": "",
    //                         "questionType": "auto",
    //                         "canBeNotApplicable": "false",
    //                         "visibleIf": "",
    //                         "validation": {
    //                             "required": true
    //                         },
    //                         "file": {
    //                             "required": true,
    //                             "type": [
    //                                 "image/jpeg",
    //                                 "docx",
    //                                 "pdf",
    //                                 "ppt"
    //                             ],
    //                             "minCount": 0,
    //                             "maxCount": 10,
    //                             "caption": "FALSE"
    //                         },
    //                         "externalId": "Q6_1669631123159-1669631127663",
    //                         "tip": "",
    //                         "hint": "",
    //                         "responseType": "radio",
    //                         "modeOfCollection": "onfield",
    //                         "accessibility": "No",
    //                         "rubricLevel": "",
    //                         "sectionHeader": "CPU",
    //                         "page": "p2",
    //                         "questionNumber": "6",
    //                         "updatedAt": "2022-11-28T10:25:27.686Z",
    //                         "createdAt": "2022-11-28T10:25:26.709Z",
    //                         "__v": 0,
    //                         "createdFromQuestionId": "63848c96a1d0c60008cef3ed",
    //                         "evidenceMethod": "D1_1669631123159",
    //                         "payload": {
    //                             "criteriaId": "63848c97a1d0c60008cef474",
    //                             "responseType": "radio",
    //                             "evidenceMethod": "D1_1669631123159",
    //                             "rubricLevel": ""
    //                         },
    //                         "startTime": 1695792508005,
    //                         "endTime": "",
    //                         "gpsLocation": ""
    //                     }
    //                 ]
    //             }
    //         ],
    //         "name": "observation questions"
    //     }
    // ]

//     this.sections =[ {
//     "code": "S1",
//     "questions": [
//         {
//             "_id": "64ae98f3c60fd10008694bf5",
//             "question": [
//                 "Are you currently living in the vicinity of the school?",
//                 ""
//             ],
//             "isCompleted": false,
//             "showRemarks": false,
//             "options": [
//                 {
//                     "value": "R1",
//                     "label": "Yes"
//                 },
//                 {
//                     "value": "R2",
//                     "label": "No"
//                 },
//                 {
//                     "value": "R3",
//                     "label": "a"
//                 },
//                 {
//                     "value": "R4",
//                     "label": "b"
//                 },
//                 {
//                     "value": "R5",
//                     "label": "c"
//                 }
//             ],
//             "sliderOptions": [],
//             "children": [
//                 "64ae98f3c60fd10008694bf6"
//             ],
//             "questionGroup": [
//                 "A1"
//             ],
//             "fileName": [],
//             "instanceQuestions": [],
//             "isAGeneralQuestion": false,
//             "autoCapture": false,
//             "allowAudioRecording": false,
//             "prefillFromEntityProfile": false,
//             "entityFieldName": "",
//             "isEditable": true,
//             "showQuestionInPreview": false,
//             "deleted": false,
//             "remarks": "",
//             "value": "",
//             "usedForScoring": "",
//             "questionType": "auto",
//             "canBeNotApplicable": "false",
//             "visibleIf": "",
//             "validation": {
//                 "required": true
//             },
//             "externalId": "Q3_1689164013804-1689164019991",
//             "tip": "Use the name of the locality where the school is",
//             "hint": "",
//             "responseType": "radio",
//             "modeOfCollection": "onfield",
//             "accessibility": "No",
//             "rubricLevel": "",
//             "sectionHeader": "",
//             "page": "",
//             "questionNumber": "3",
//             "updatedAt": "2023-07-12T12:13:40.007Z",
//             "createdAt": "2023-07-12T12:13:39.048Z",
//             "__v": 0,
//             "createdFromQuestionId": "64ae98f3c60fd10008694b9e",
//             "evidenceMethod": "OB",
//             "payload": {
//                 "criteriaId": "64ae98f4c60fd10008694c14",
//                 "responseType": "radio",
//                 "evidenceMethod": "OB",
//                 "rubricLevel": ""
//             },
//             "startTime": "",
//             "endTime": "",
//             "gpsLocation": "",
//             "file": ""
//         },
//         {
//             "_id": "",
//             "question": "",
//             "isCompleted": "",
//             "showRemarks": "",
//             "options": "",
//             "sliderOptions": "",
//             "children": "",
//             "questionGroup": "",
//             "fileName": "",
//             "instanceQuestions": "",
//             "isAGeneralQuestion": "",
//             "autoCapture": "",
//             "allowAudioRecording": "",
//             "prefillFromEntityProfile": "",
//             "entityFieldName": "",
//             "isEditable": "",
//             "showQuestionInPreview": "",
//             "deleted": "",
//             "remarks": "",
//             "value": "",
//             "usedForScoring": "",
//             "questionType": "",
//             "canBeNotApplicable": "",
//             "visibleIf": "",
//             "validation": "",
//             "dateFormat": "",
//             "externalId": "",
//             "tip": "",
//             "hint": "",
//             "responseType": "pageQuestions",
//             "modeOfCollection": "",
//             "accessibility": "",
//             "rubricLevel": "",
//             "sectionHeader": "",
//             "page": "p1",
//             "questionNumber": "",
//             "updatedAt": "",
//             "createdAt": "",
//             "__v": "",
//             "createdFromQuestionId": "",
//             "evidenceMethod": "",
//             "payload": "",
//             "startTime": "",
//             "endTime": "",
//             "gpsLocation": "",
//             "file": "",
//             "pageQuestions": [
//                 {
//                     "_id": "64ae98f3c60fd10008694bf3",
//                     "question": [
//                         "Enter the date of observation",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": false,
//                     "options": [],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true,
//                         "max": "",
//                         "min": ""
//                     },
//                     "dateFormat": "DD-MM-YYYY",
//                     "externalId": "Q1_1689164013804-1689164019989",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "date",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "1",
//                     "updatedAt": "2023-07-12T12:13:40.007Z",
//                     "createdAt": "2023-07-12T12:13:39.022Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694b92",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "date",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bf4",
//                     "question": [
//                         "",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": false,
//                     "options": [],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true,
//                         "IsNumber": "true"
//                     },
//                     "externalId": "Q2_1689164013804-1689164019990",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "number",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "2",
//                     "updatedAt": "2023-07-12T12:13:40.007Z",
//                     "createdAt": "2023-07-12T12:13:39.037Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694b98",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "number",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bf6",
//                     "question": [
//                         "Are you planning to come back?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": false,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Yes"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "No"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": [
//                         {
//                             "operator": "===",
//                             "value": [
//                                 "R2"
//                             ],
//                             "_id": "64ae98f3c60fd10008694bf5"
//                         }
//                     ],
//                     "validation": {
//                         "required": false
//                     },
//                     "externalId": "Q4_1689164013804-1689164019992",
//                     "tip": "",
//                     "hint": "This becomes a risk if the answer is no",
//                     "responseType": "radio",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "4",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.059Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694ba4",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "radio",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bf7",
//                     "question": [
//                         "What type of device is available at home?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": true,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Simple mobile phone without internet/data pack"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "Smart phone with internet/data pack"
//                         },
//                         {
//                             "value": "R3",
//                             "label": "Smart phone without internet/data pack"
//                         },
//                         {
//                             "value": "R4",
//                             "label": "TV"
//                         },
//                         {
//                             "value": "R5",
//                             "label": "Radio"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true
//                     },
//                     "file": {
//                         "required": true,
//                         "type": [
//                             "image/jpeg",
//                             "docx",
//                             "pdf",
//                             "ppt"
//                         ],
//                         "minCount": 0,
//                         "maxCount": 10,
//                         "caption": "FALSE"
//                     },
//                     "externalId": "Q5_1689164013804-1689164019993",
//                     "tip": "",
//                     "hint": "The devices that are available or can be easily arranged in the household.",
//                     "responseType": "multiselect",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "5",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.073Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bab",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "multiselect",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bf8",
//                     "question": [
//                         "Does the child have a quiet place to study?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": true,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Yes"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "No"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true
//                     },
//                     "externalId": "Q6_1689164013804-1689164019993",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "radio",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "6",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.084Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bb1",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "radio",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bf9",
//                     "question": [
//                         "Were you able to enrol your child in courses on DIKSHA?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": false,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Yes"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "No"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [
//                         "64ae98f3c60fd10008694bfa"
//                     ],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true
//                     },
//                     "externalId": "Q7_1689164013804-1689164019994",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "radio",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "7",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.096Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bb7",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "radio",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bfa",
//                     "question": [
//                         "What are the challenges that you are facing in enrolment?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": true,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Not able to use the app"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "Not aware of classrooms on DIKSHA"
//                         },
//                         {
//                             "value": "R3",
//                             "label": "Not aware of the enrolment process in the classroom"
//                         },
//                         {
//                             "value": "R4",
//                             "label": "Not aware of enrolment process in the courses"
//                         },
//                         {
//                             "value": "R5",
//                             "label": "Don’t find the courses useful"
//                         },
//                         {
//                             "value": "R6",
//                             "label": "Others"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": [
//                         {
//                             "operator": "===",
//                             "value": [
//                                 "R2"
//                             ],
//                             "_id": "64ae98f3c60fd10008694bf9"
//                         }
//                     ],
//                     "validation": {
//                         "required": true
//                     },
//                     "externalId": "Q8_1689164013804-1689164019994",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "multiselect",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "8",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.108Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bbd",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "multiselect",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 },
//                 {
//                     "_id": "64ae98f3c60fd10008694bfb",
//                     "question": [
//                         "On basis of the responses received above,  do you think this student is a potential drop out?",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": true,
//                     "options": [
//                         {
//                             "value": "R1",
//                             "label": "Yes"
//                         },
//                         {
//                             "value": "R2",
//                             "label": "No"
//                         }
//                     ],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true
//                     },
//                     "externalId": "Q9_1689164013804-1689164019995",
//                     "tip": "Fill this based on the  parents' answers",
//                     "hint": "",
//                     "responseType": "radio",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p1",
//                     "questionNumber": "9",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.123Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bc4",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c14",
//                         "responseType": "radio",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 }
//             ]
//         },
//         {
//             "_id": "",
//             "question": "",
//             "isCompleted": "",
//             "showRemarks": "",
//             "options": "",
//             "sliderOptions": "",
//             "children": "",
//             "questionGroup": "",
//             "fileName": "",
//             "instanceQuestions": "",
//             "isAGeneralQuestion": "",
//             "autoCapture": "",
//             "allowAudioRecording": "",
//             "prefillFromEntityProfile": "",
//             "entityFieldName": "",
//             "isEditable": "",
//             "showQuestionInPreview": "",
//             "deleted": "",
//             "remarks": "",
//             "value": "",
//             "usedForScoring": "",
//             "questionType": "",
//             "canBeNotApplicable": "",
//             "visibleIf": "",
//             "validation": "",
//             "dateFormat": "",
//             "externalId": "",
//             "tip": "",
//             "hint": "",
//             "responseType": "pageQuestions",
//             "modeOfCollection": "",
//             "accessibility": "",
//             "rubricLevel": "",
//             "sectionHeader": "",
//             "page": "p2",
//             "questionNumber": "",
//             "updatedAt": "",
//             "createdAt": "",
//             "__v": "",
//             "createdFromQuestionId": "",
//             "evidenceMethod": "",
//             "payload": "",
//             "startTime": "",
//             "endTime": "",
//             "gpsLocation": "",
//             "file": "",
//             "pageQuestions": [
//                 {
//                     "_id": "64ae98f3c60fd10008694bfc",
//                     "question": [
//                         "Add the student interview responses",
//                         ""
//                     ],
//                     "isCompleted": false,
//                     "showRemarks": false,
//                     "options": [],
//                     "sliderOptions": [],
//                     "children": [],
//                     "questionGroup": [
//                         "A1"
//                     ],
//                     "fileName": [],
//                     "instanceQuestions": [
//                         {
//                             "_id": "64ae98f3c60fd10008694bfd",
//                             "question": [
//                                 "When did you last take a course on Diksha?",
//                                 ""
//                             ],
//                             "isCompleted": false,
//                             "showRemarks": false,
//                             "options": [],
//                             "sliderOptions": [],
//                             "children": [],
//                             "questionGroup": [
//                                 "A1"
//                             ],
//                             "fileName": [],
//                             "instanceQuestions": [],
//                             "isAGeneralQuestion": false,
//                             "autoCapture": true,
//                             "allowAudioRecording": false,
//                             "prefillFromEntityProfile": false,
//                             "entityFieldName": "",
//                             "isEditable": true,
//                             "showQuestionInPreview": false,
//                             "deleted": false,
//                             "remarks": "",
//                             "value": "",
//                             "usedForScoring": "",
//                             "questionType": "auto",
//                             "canBeNotApplicable": "false",
//                             "visibleIf": "",
//                             "validation": {
//                                 "required": true,
//                                 "max": "",
//                                 "min": ""
//                             },
//                             "dateFormat": "DD-MM-YYYY",
//                             "externalId": "Q11_1689164013804-1689164019996",
//                             "tip": "",
//                             "hint": "",
//                             "responseType": "date",
//                             "modeOfCollection": "onfield",
//                             "accessibility": "No",
//                             "rubricLevel": "",
//                             "sectionHeader": "",
//                             "page": "p2",
//                             "questionNumber": "10a",
//                             "updatedAt": "2023-07-12T12:13:40.008Z",
//                             "createdAt": "2023-07-12T12:13:39.146Z",
//                             "__v": 0,
//                             "createdFromQuestionId": "64ae98f3c60fd10008694bd0",
//                             "evidenceMethod": "OB",
//                             "payload": {
//                                 "criteriaId": "64ae98f4c60fd10008694c15",
//                                 "responseType": "date",
//                                 "evidenceMethod": "OB",
//                                 "rubricLevel": ""
//                             },
//                             "startTime": "",
//                             "endTime": "",
//                             "gpsLocation": "",
//                             "file": ""
//                         },
//                         {
//                             "_id": "64ae98f3c60fd10008694bfe",
//                             "question": [
//                                 "How would you rate the course taken?",
//                                 ""
//                             ],
//                             "isCompleted": false,
//                             "showRemarks": false,
//                             "options": [],
//                             "sliderOptions": [],
//                             "children": [],
//                             "questionGroup": [
//                                 "A1"
//                             ],
//                             "fileName": [],
//                             "instanceQuestions": [],
//                             "isAGeneralQuestion": false,
//                             "autoCapture": false,
//                             "allowAudioRecording": false,
//                             "prefillFromEntityProfile": false,
//                             "entityFieldName": "",
//                             "isEditable": true,
//                             "showQuestionInPreview": false,
//                             "deleted": false,
//                             "remarks": "",
//                             "value": "",
//                             "usedForScoring": "",
//                             "questionType": "auto",
//                             "canBeNotApplicable": "false",
//                             "visibleIf": "",
//                             "validation": {
//                                 "required": true,
//                                 "max": "5",
//                                 "min": "1"
//                             },
//                             "externalId": "Q12_1689164013804-1689164019997",
//                             "tip": "",
//                             "hint": "",
//                             "responseType": "slider",
//                             "modeOfCollection": "onfield",
//                             "accessibility": "No",
//                             "rubricLevel": "",
//                             "sectionHeader": "",
//                             "page": "p2",
//                             "questionNumber": "10b",
//                             "updatedAt": "2023-07-12T12:13:40.008Z",
//                             "createdAt": "2023-07-12T12:13:39.158Z",
//                             "__v": 0,
//                             "createdFromQuestionId": "64ae98f3c60fd10008694bd7",
//                             "evidenceMethod": "OB",
//                             "payload": {
//                                 "criteriaId": "64ae98f4c60fd10008694c15",
//                                 "responseType": "slider",
//                                 "evidenceMethod": "OB",
//                                 "rubricLevel": ""
//                             },
//                             "startTime": "",
//                             "endTime": "",
//                             "gpsLocation": "",
//                             "file": ""
//                         },
//                         {
//                             "_id": "64ae98f4c60fd10008694bff",
//                             "question": [
//                                 "How many courses have you taken?",
//                                 ""
//                             ],
//                             "isCompleted": false,
//                             "showRemarks": false,
//                             "options": [],
//                             "sliderOptions": [],
//                             "children": [],
//                             "questionGroup": [
//                                 "A1"
//                             ],
//                             "fileName": [],
//                             "instanceQuestions": [],
//                             "isAGeneralQuestion": false,
//                             "autoCapture": false,
//                             "allowAudioRecording": false,
//                             "prefillFromEntityProfile": false,
//                             "entityFieldName": "",
//                             "isEditable": true,
//                             "showQuestionInPreview": false,
//                             "deleted": false,
//                             "remarks": "",
//                             "value": "",
//                             "usedForScoring": "",
//                             "questionType": "auto",
//                             "canBeNotApplicable": "false",
//                             "visibleIf": "",
//                             "validation": {
//                                 "required": true,
//                                 "IsNumber": "true"
//                             },
//                             "externalId": "Q13_1689164013804-1689164020000",
//                             "tip": "",
//                             "hint": "",
//                             "responseType": "number",
//                             "modeOfCollection": "onfield",
//                             "accessibility": "No",
//                             "rubricLevel": "",
//                             "sectionHeader": "",
//                             "page": "p2",
//                             "questionNumber": "10c",
//                             "updatedAt": "2023-07-12T12:13:40.008Z",
//                             "createdAt": "2023-07-12T12:13:39.172Z",
//                             "__v": 0,
//                             "createdFromQuestionId": "64ae98f3c60fd10008694bde",
//                             "evidenceMethod": "OB",
//                             "payload": {
//                                 "criteriaId": "64ae98f4c60fd10008694c15",
//                                 "responseType": "number",
//                                 "evidenceMethod": "OB",
//                                 "rubricLevel": ""
//                             },
//                             "startTime": "",
//                             "endTime": "",
//                             "gpsLocation": "",
//                             "file": ""
//                         },
//                         {
//                             "_id": "64ae98f4c60fd10008694c00",
//                             "question": [
//                                 "Which courses did you go through?",
//                                 ""
//                             ],
//                             "isCompleted": false,
//                             "showRemarks": false,
//                             "options": [],
//                             "sliderOptions": [],
//                             "children": [],
//                             "questionGroup": [
//                                 "A1"
//                             ],
//                             "fileName": [],
//                             "instanceQuestions": [],
//                             "isAGeneralQuestion": false,
//                             "autoCapture": false,
//                             "allowAudioRecording": false,
//                             "prefillFromEntityProfile": false,
//                             "entityFieldName": "",
//                             "isEditable": true,
//                             "showQuestionInPreview": false,
//                             "deleted": false,
//                             "remarks": "",
//                             "value": "",
//                             "usedForScoring": "",
//                             "questionType": "auto",
//                             "canBeNotApplicable": "false",
//                             "visibleIf": "",
//                             "validation": {
//                                 "required": false
//                             },
//                             "file": {
//                                 "required": true,
//                                 "type": [
//                                     "image/jpeg",
//                                     "docx",
//                                     "pdf",
//                                     "ppt"
//                                 ],
//                                 "minCount": 0,
//                                 "maxCount": 10,
//                                 "caption": "FALSE"
//                             },
//                             "externalId": "Q14_1689164013804-1689164020001",
//                             "tip": "",
//                             "hint": "",
//                             "responseType": "text",
//                             "modeOfCollection": "onfield",
//                             "accessibility": "No",
//                             "rubricLevel": "",
//                             "sectionHeader": "",
//                             "page": "p2",
//                             "questionNumber": "10d",
//                             "updatedAt": "2023-07-12T12:13:40.008Z",
//                             "createdAt": "2023-07-12T12:13:39.185Z",
//                             "__v": 0,
//                             "createdFromQuestionId": "64ae98f3c60fd10008694be5",
//                             "evidenceMethod": "OB",
//                             "payload": {
//                                 "criteriaId": "64ae98f4c60fd10008694c15",
//                                 "responseType": "text",
//                                 "evidenceMethod": "OB",
//                                 "rubricLevel": ""
//                             },
//                             "startTime": "",
//                             "endTime": "",
//                             "gpsLocation": ""
//                         }
//                     ],
//                     "isAGeneralQuestion": false,
//                     "autoCapture": false,
//                     "allowAudioRecording": false,
//                     "prefillFromEntityProfile": false,
//                     "entityFieldName": "",
//                     "isEditable": true,
//                     "showQuestionInPreview": false,
//                     "deleted": false,
//                     "remarks": "",
//                     "value": "",
//                     "usedForScoring": "",
//                     "questionType": "auto",
//                     "canBeNotApplicable": "false",
//                     "visibleIf": "",
//                     "validation": {
//                         "required": true
//                     },
//                     "instanceIdentifier": "Student",
//                     "externalId": "Q10_1689164013804-1689164019996",
//                     "tip": "",
//                     "hint": "",
//                     "responseType": "matrix",
//                     "modeOfCollection": "onfield",
//                     "accessibility": "No",
//                     "rubricLevel": "",
//                     "sectionHeader": "",
//                     "page": "p2",
//                     "questionNumber": "10",
//                     "updatedAt": "2023-07-12T12:13:40.008Z",
//                     "createdAt": "2023-07-12T12:13:39.136Z",
//                     "__v": 0,
//                     "createdFromQuestionId": "64ae98f3c60fd10008694bca",
//                     "evidenceMethod": "OB",
//                     "payload": {
//                         "criteriaId": "64ae98f4c60fd10008694c15",
//                         "responseType": "matrix",
//                         "evidenceMethod": "OB",
//                         "rubricLevel": ""
//                     },
//                     "startTime": "",
//                     "endTime": "",
//                     "gpsLocation": "",
//                     "file": ""
//                 }
//             ]
//         }
//     ],
//     "name": "Observation Question"
// }]
  }

//   ngAfterViewInit() {
//     const container = document.getElementById('web-component-container');
//     const myWebComponent = new MyWebComponent();
//     container.appendChild(myWebComponent);
//   }
}
