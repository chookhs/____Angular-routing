import { Component, OnInit } from '@angular/core';
import {Phrase} from "../../shared/phrase.class";
import {PHRASES} from "../../shared/mock-data";
import {PhraseService} from "../../shared/phrase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[] = [];
  selectedID: number = 0;



  constructor(
    private  svc: PhraseService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((anyParam: any) => {
    this.selectedID = +anyParam.id;
    });

    this.svc.getAll().then(result => this.phrases = result);
  }


  isSelected(phrase: Phrase): boolean {
  return phrase.id === this.selectedID;
  }

  onSelect(selected: Phrase): void {
  this.router.navigate(['phrase', selected.id])
  }

}
