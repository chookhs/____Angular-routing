import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PhraseService} from "../../shared/phrase.service";


@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  anyParam:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private svc: PhraseService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) =>
    {
    this.svc.
    getPhrase(+param.id)
      .then(res => this.anyParam = res);
    });
  }

  goToPhrasesList ():void {
    const phraseID = this.anyParam ? this.anyParam.id : null;
  this.router.navigate(['/phrase', {id: phraseID}], )
  }

}
