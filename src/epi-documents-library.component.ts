import {Component} from 'angular2/core';

@Component({
    selector:'epi-documents-library',
    templateUrl: 'src/epi-documents-library.component.html'
})
export class EpiDocumentsLibraryComponent{
    title:string = 'Documents Library';
    documentTypes:any[] = [
        {
            numberOfDocuments:0,
            name:'Audit & Compliance',
            latestDocumentName:'',
            latestDocumentCreatedDate:''
        },
        {
            numberOfDocuments:1,
            name:'Other',
            latestDocumentName:'Terms of Business',
            latestDocumentCreatedDate:'03/20/2015'
        },
        {
            numberOfDocuments:0,
            name:'RFP',
            latestDocumentName:'',
            latestDocumentCreatedDate:''
        }
    ];
}