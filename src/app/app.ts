export class FindRating_Response {
    value: Player[] = [];
}

export class CalculateRace_Results {
    player1: string;
    player2: string;
}

export class Player {
    id: string;
    readableId: number;
    firstName: string;
    lastName: string;
    location: string;
    rating: number;
    robustness: number;
    provisionalRating: number;
    membershipNumber: number;

}