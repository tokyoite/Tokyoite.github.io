import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FindRating_Response } from './app'
@Injectable()
export class FargoService {

    constructor(private http: Http) {

    }

    GetFargoRating(q: string): Promise<any> {
        return this.http
            .get("https://dashboard-fr.azurewebsites.net/api/indexsearch?q=" + q)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    rhte(raceTo: number, placeToRound: number) {
        let fixed = placeToRound.toString().split('.').length < 2 ? 0 : placeToRound.toString().split('.')[1].length,
            numParts = {
                mvDec: (raceTo / placeToRound).toFixed(this.toString().length).toString().split('.'),
                wholeNum: function () { return parseInt(this.mvDec[0], 10); },
                dec: function () { return this.mvDec.length > 1 ? parseFloat('0.' + this.mvDec[1]) : 0; },
                oddEven: function () { return (this.wholeNum() % 2 === 1) ? 1 : 0; }
            };

        if (numParts.dec() !== 0.5) {
            return (numParts.dec() > 0.5) ? parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed)) : parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
        }
        else {
            if (numParts.oddEven() === 1) {
                return parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed));
            }
            else {
                return parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
            }
        }
    };

    public calculateRace(dampFactor, ratingOne, ratingTwo) {
        let p1Rating = parseInt(ratingOne);
        let p2Rating = parseInt(ratingTwo);
        let gp = (0.018 * ((p1Rating + p2Rating) / 2)) - 1.4;
        let delta = p1Rating - p2Rating;
        let p1WinPercent = 1 - (1 / (1 + Math.pow(2, delta / 100)));
        let p2WinPercent = 1 - p1WinPercent;
        let p1AvgPts = p1WinPercent * 14.0 + (p2WinPercent * (7.4 - 0.0062 * p2Rating));
        let p2AvgPts = p2WinPercent * 14.0 + (p1WinPercent * (7.4 - 0.0062 * p1Rating));
        let p1RaceTo = p1AvgPts * gp * dampFactor;
        let p2RaceTo = p2AvgPts * gp * dampFactor;
        let normalizedRace = this.normalizeRace(p1RaceTo, p2RaceTo, dampFactor === 0.75);
        p1RaceTo = normalizedRace.p1RaceTo;
        p2RaceTo = normalizedRace.p2RaceTo;
        return {
            raceToOne: this.rhte(p1RaceTo, 1),
            raceToTwo: this.rhte(p2RaceTo, 1)
        };
    };

    private normalizeRace(p1RaceTo, p2RaceTo, isShort) {
        let highClamp = 99.0,
            lowClamp = isShort ? 24.0 : 28.0;

        let p1RaceIsHigh = p1RaceTo >= p2RaceTo,
            highRace = Math.max(p1RaceTo, p2RaceTo),
            lowRace = Math.min(p1RaceTo, p2RaceTo);

        let highRaceClamped = highRace > highClamp ? highClamp : highRace;
        let lowRaceClamped = highRace > highClamp
            ? lowRace - (lowRace * ((highRace - highClamp) / highRace))
            : lowRace;

        highRaceClamped = Math.min(lowRace < lowClamp
            ? highRaceClamped + (highRaceClamped * ((lowClamp - lowRace) / lowRaceClamped))
            : highRaceClamped,
            highClamp);

        lowRaceClamped = Math.max(lowRaceClamped < lowClamp ? lowClamp : lowRaceClamped, lowClamp);

        return {
            p1RaceTo: p1RaceIsHigh ? highRaceClamped : lowRaceClamped,
            p2RaceTo: p1RaceIsHigh ? lowRaceClamped : highRaceClamped
        };
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
