import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent{
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Whatever discription",
      file_url: "http://google.com",
      updated_at: "1/30/18",
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "Whatever discription",
      file_url: "http://google.com",
      updated_at: "1/30/18",
      image_url: "http://google.com"
    },
    {
      title: "My Last Doc",
      description: "Whatever discription",
      file_url: "http://google.com",
      updated_at: "1/30/18",
      image_url: "http://google.com"
    }
  ]
}