import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

newsData = [];
q: string='';
country: string = 'in';
category: string = 'Entertainment';

selectedCountry = 'in';
selectedCategory = 'Entertainment';
querySearch: string = '';

url:string = '';

  constructor( private newsService: NewsService ) { 
    this.url = 'https://newsapi.org/v2/top-headlines?'+
               'q='+this.querySearch+'&'+
               'country='+this.selectedCountry+'&'+
               'category='+this.selectedCategory+'&'+
               'apiKey=06313be8c6cd4d8c92d4c096e21096eb';
  }

  myNews(){
    this.url = 'https://newsapi.org/v2/top-headlines?'+
               'q='+this.querySearch+'&'+
               'country='+this.selectedCountry+'&'+
               'category='+this.selectedCategory+'&'+
               'apiKey=06313be8c6cd4d8c92d4c096e21096eb';
    this.newsService.fetchNews(this.url)
      .subscribe(
        data =>{
          this.newsData = data.articles;
        });
        this.querySearch = '';
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(data =>{
        this.newsData = data.articles;
      });
  }

}
