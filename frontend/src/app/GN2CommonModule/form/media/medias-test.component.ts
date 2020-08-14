import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Media } from './media';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppConfig } from "@geonature_config/app.config";


@Component({
  selector: 'pnx-medias-test',
  templateUrl: './medias-test.component.html',
  styleUrls: ['./media.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MediasTestComponent implements OnInit {

  medias: Array<Media> = [];
  bValidForms: boolean = true;
  schemaDotTable:string = 'pr_occtax.t_occurrences_occtax';
  public appConfig = AppConfig;

  constructor(private _route: ActivatedRoute,) {}

  ngOnInit() {
    this.medias=[
      new Media({
        "bLoading": false,
        "uploadPercentDone": 0,
        "id_table_location": 5,
        "id_media": null,
        "title_fr": "zer",
        "description_fr": "zer",
        "uuid_attached_row": null,
        "media_path": null,
        "media_url":"https://www.monpetitcoinvert.com/blog/wp-content/uploads/2019/05/oiseau-mesange-bleue-730x420.jpg",
        "author": 'jacky jack'
      })
    ]
  }

  onValidFormsChange(event) {
    this.bValidForms = event;
  }

}