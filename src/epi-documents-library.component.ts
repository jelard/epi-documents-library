import {Component} from 'angular2/core';

@Component({
    selector:'epi-documents-library',
    template:`
    <div class="widget-header">
    <h3>{{title}}</h3>
    </div>
    <div class="widget-body">
        <table class="table">
            <thead>
                <tr>
                    <th class="icon">No.</th>
                    <th style="width: 300px;">Type</th>
                    <th>Current document</th>
                    <th style="width: 100px;">Created on</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#documentType of documentTypes" >
                    <td>{{documentType.numberOfDocuments}}</td>
                    <td>{{documentType.name}} </td>
                    <td>{{documentType.latestDocumentName}}</td>
                    <td>{{documentType.latestDocumentCreatedDate|date}}</td>               
                </tr>
            </tbody>
        </table>
    </div>    
    ` 
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