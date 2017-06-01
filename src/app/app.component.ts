import { Component,OnInit } from '@angular/core';
import { FindRating_Response,CalculateRace_Results } from './app';
import { FargoService } from './app.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [FargoService]
})
export class AppComponent {
    private title = 'Race-To Calculator';
    private instruction = 'Enter the players names to calculate the match length.';
    private p1RaceTo: number = 0;
    private p2RaceTo = 0;
    private p1_text: string = null;
    private p2_text: string = null;
    private calculateRace_Results: CalculateRace_Results = null;
    players: any = [];
    RatingResults: any = [];
    Ctrl1 = new FormControl();
    Ctrl2 = new FormControl();

    constructor(private service: FargoService) {
    }

    SearchName(Name, index) {
        if (Name.length > 0 || Name != null || Name != "") {
            this.service.GetFargoRating(Name).then((data) => {
                this.RatingResults[index] = data.value;
            });
        }

    }

    selectedItemChange(req,item) {
        alert(JSON.stringify(item));
    }

    displayFn(player: any): string {
        return player ? player.firstName + ' | ' + player.rating : player;
    }

    SelectPlayer(p,player) {
        this.players[player] = p;
    }


}
