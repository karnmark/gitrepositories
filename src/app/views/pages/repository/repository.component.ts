import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepositoryComponent implements OnInit {
  content:any;
  repository:any = [];
  contributors:any = [];
  constructor(private _valueService: ValueService) { }

  ngOnInit() {
    this.repository = JSON.parse(localStorage.getItem('repoInfo'));
    console.log(this.repository);
    console.log('https://api.github.com/repos/' + this.repository[0].owner + '/' + this.repository[0].name + '/readme');

    this.fetchRepositoryDetails();

  }

  fetchRepositoryDetails(){
    // this._valueService.getRepoInfo().then(data=>{
    //   console.log(data);

    // });
    this._valueService.getContributors(this.repository).subscribe(contributors=>{
      console.log(contributors);
      this.contributors = contributors;

    });

    this._valueService.getRepositoryInfo('https://api.github.com/repos/' + this.repository[0].owner+'/'+this.repository[0].name+'/readme').subscribe(repoInfo =>{
      console.log(repoInfo);
      this.content = atob(repoInfo.content);
      console.log(this.content);

    });
  }

  /**
	 * @description Sets the height based on the window screen
	 *
	 *  */
  getDivHeight(): string {
    let mapHeight = window.innerHeight * 0.435;
    if (window.innerWidth < 768) {
      return 'auto';
    } else {
      return mapHeight + 'px';
    }
  }

}
