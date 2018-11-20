export enum SquareType {
    Square = 'square', SquareWithBorder = 'square-with-border'
}
export enum SquareColor {
    Red = 'red', Green = 'green', Yellow = 'yellow', Blue = 'blue', White = 'white', Final = 'final'
}
export enum IconColor {
    Red = 'red-icon', Green = 'green-icon', Yellow = 'yellow-icon', Blue = 'blue-icon'
}
export enum PointerState {
    AtHome, OnTheWay, Reached
}
export enum PlayState {
    ReadyToDice = 1, ReadyToMove = 2
}
export class Square {
    Position: string;
    SquareType: SquareType;
    SquareColor: SquareColor;
    Html: string;
}
export class Position {
    Row: number;
    Column: number;
}
export class Home {
    Index: number;
    HomePointers: HomePointer[];
    IconColor: IconColor;
    Path: string[];
    WinnerNumber: number;
    AutoPlay: boolean;
    IsPlayer: boolean;
    PlayState: PlayState
}
export class HomePointer {
    Index: number;
    Position: string;
    DefaultPosition: string;
    State: PointerState;
    TotalSiblings: number;
    InnerIndex: number;
}