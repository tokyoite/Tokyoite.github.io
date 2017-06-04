import { Component, OnInit } from '@angular/core';
//import { Location } from '@angular/common';

import { FindRating_Response, CalculateRace_Results } from './calculator';
import { FargoService } from './calculator.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
var component = null;
@Component({
    selector: 'race-calc',
    templateUrl: './calculator.component.html',
    styles: [],
    providers: [FargoService]
})
export class RaceCalculatorComponent {
    private title = 'Race-To Calculator';
    private instruction = 'Enter the players names to calculate the match length.';
    private p1RaceTo: number = 0;
    private p2RaceTo = 0;
    private p1_text: string = null;
    private p2_text: string = null;
    private calculateRace_Results: CalculateRace_Results = null;
    players: any = [];
    RatingResults: any = [];

    constructor(private service: FargoService) {
        component = this;
    }

    SearchName(Name, index) {
        if (Name.length > 0 || Name != null || Name != "") {
            if (typeof Name == "string") {
                this.service.GetFargoRating(Name).then((data) => {
                    this.RatingResults[index] = data.value;
                });
            }
        }
    }

    displayFn(player: any): string {
        if (typeof player != 'undefined') {
            component.SelectPlayer(player, 0);
        }
        return player ? player.firstName + ' | ' + Math.round(player.rating) : player;
    }

    displayFn2(player: any): string {
        if (typeof player != 'undefined') {
            component.SelectPlayer(player, 1);
        }
        return player ? player.firstName + ' | ' + Math.round(player.rating) : player;
    }

    SelectPlayer(p, player) {
        this.players[player] = p;
        this.SetRace();
    }

    SetRace() {
        if (this.players[0] && this.players[1]) {
            //this.location.go("/?player1=" + this.players[0].id + "&player2=" + this.players[1].id);
            let rating1 = Math.round(this.players[0].rating),
                rating2 = Math.round(this.players[1].rating),
                long = this.service.calculateRace(1.0, rating1, rating2),
                short = this.service.calculateRace(0.75, rating1, rating2),
                long_odds = null,
                short_odds = null;

            //player1
            this.players[0].long = long.raceToOne;
            this.players[0].short = short.raceToOne;

            //player2
            this.players[1].long = long.raceToTwo;
            this.players[1].short = short.raceToTwo;

            //Get Odds
            this.service.GetRaceOdds(rating1, rating2, long.raceToOne, long.raceToTwo).then((data) => {
                this.players[0].long_chance = Math.round(data.oneOdds * 100);
                this.players[1].long_chance = Math.round(data.twoOdds * 100);
            });
            this.service.GetRaceOdds(rating1, rating2, short.raceToOne, short.raceToTwo).then((data) => {
                this.players[0].short_chance = Math.round(data.oneOdds * 100);
                this.players[1].short_chance = Math.round(data.twoOdds * 100);
            });




        }
    }


}
