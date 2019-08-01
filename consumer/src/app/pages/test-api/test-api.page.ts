import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.page.html',
  styleUrls: ['./test-api.page.scss'],
})
export class TestAPIPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  placeOrderTest() {
    let orderJson = {
      "sender": {
        "contact": {
          "name": "",
          "cellphone": "",
        },
        "address": {
          "formatted_address": "",
          "latitude": 0,
          "longitude": 0
        },
        "special_instructions": ""
      },
      "receivers": [
        {
          "receiver": {
            "contact": {
              "name": "",
              "cellphone": ""
            },
            "address": {
              "formatted_address": "",
              "latitude": 0,
              "longitude": 0
            },
            "special_instructions": ""
          },
          "parcels": [
            {
              "size": "",
              "reference": ""
            }
          ]
        }
      ],
      "vehicle_id": "",
      "is_for_contract_driver": false,
      "is_round_trip": false,
      "merchant_id": "",
      "customer_ref": "",
      "business_id": ""
    }
    this.http.post("https://otdcpt-knupqa.onthedot.co.za/picup-api/integration/create/one-to-many", orderJson)
    .subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.log(err);
    })
  }

}
