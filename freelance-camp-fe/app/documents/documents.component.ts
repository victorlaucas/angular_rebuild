import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  // styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'http://www.labourbeat.org/wp-content/uploads/2016/09/Freelancer-Fair-couple.jpg'
    },
    {
      title: "My Second Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'https://blog.getmagic.com/wp-content/uploads/2017/05/freelancer-hire-1.jpg'
    },    
    {
      title: "My Last Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png'
    }
  ]
}