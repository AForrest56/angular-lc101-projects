import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ['https://disneyworld.disney.go.com/50th-anniversary/?ef_id=Cj0KCQjw852XBhC6ARIsAJsFPN0hMYwMK8r3fUtr-d71ePyilAqB_4_PiL4EHrhDoNFiBeu_sVhPeYoaAmQLEALw_wcB:G:s&s_kwcid=AL!5060!3!549372365422!e!!g!!disney%20world%2050th&CMP=KNC-FY22_WDW_TRA_DOM_W365_SCP_WDWF_WDW50th_Exact%7CG%7C5221013.RR.AM.01.01%7CMK8WDCS%7CBR%7C549372365422&keyword_id=kwd-533980493913%7Cdc%7Cdisney%20world%2050th%7C549372365422%7Ce%7C5060:3%7C&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0hMYwMK8r3fUtr-d71ePyilAqB_4_PiL4EHrhDoNFiBeu_sVhPeYoaAmQLEALw_wcB', 'https://www.girlscouts.org/'];

  constructor() { }

  ngOnInit() {
  }

}
