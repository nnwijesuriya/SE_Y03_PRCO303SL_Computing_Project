import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { policies, policiesService } from './policies.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {

  constructor(private policies: policiesService, private route: Router) { }

  ngOnInit() {

    let active = "Active";
    this.searchpolicyactive(active);

    let dec="Deactive"
    this.searchpolicydeactive(dec);
  }

  public policiesA : Observable<policies[]>;

  public policiesD : Observable<policies[]>;

  addpolices()
  {
  this.route.navigateByUrl('managers/policies/form');
  }

  searchpolicyactive(status)
  {
    this.policiesA = this.policies.getCollectionWithIDs(status);
  }

  searchpolicydeactive(status)
  {
    this.policiesD = this.policies.getCollectionWithIDs(status);
  }

  getdocument(id)
  {
    this.route.navigate(['/managers/policies/form',id]);
  }
}
