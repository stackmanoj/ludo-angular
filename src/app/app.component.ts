import { Component, OnInit } from '@angular/core';

import { Square, SquareColor, SquareType, Position, IconColor, Home, PointerState, HomePointer, PlayState } from './app.square';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  squares: Square[] = [];
  currentPosition: Position = { Row: 0, Column: 0 };
  homes: Home[] = [];
  diceHistory: number[] = [0, 0, 0];
  dice: number = 6;
  turn: number = 1;
  continuePlay: boolean = false;
  safePositions: string[] = ['14,7', '9-3', '7-2', '3-7', '2-9', '7-13', '9-14', '13-9'];
  allPointers: HomePointer[] = [];
  isSpinnerDisabled: boolean = false;
  delayTimes: any = { diceSpin: 500, changePosition: 200, autoPlay: 2000, gapBetweenNextAutoPlaySpin: 500 };
  //delayTimes: any = { diceSpin: 5, changePosition: 2, autoPlay: 20, gapBetweenNextAutoPlaySpin: 1 };
  //delayTimes: any = { diceSpin: 100, changePosition: 40, autoPlay: 400 , gapBetweenNextAutoPlaySpin: 100};
  autoPlayInterval;
  gameOver: boolean = false;
  movablePointers: HomePointer[] = [];
  totalMoves: any = { home1: 0, home2: 0, home3: 0, home4: 4 };
  isHome1: boolean = false;
  isHome2: boolean = false;
  isHome3: boolean = false;
  isHome4: boolean = false;
  isConfigured: boolean = false;
  
  ngOnInit() {
    var device;
    document.addEventListener("deviceready", function() { 
      alert(device.platform); 
      }, false); 
  }
   

  startPlay() {
    console.log(this.isHome1, this.isHome2, this.isHome3, this.isHome4)
    this.isConfigured = true;
    this.drawBoard();
  }

  replay() {
    if (confirm("Are you sure you want to replay?")) {
      window.location.reload();
    }
  }

  drawBoard() {
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 3, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 6, type: SquareType.Square, color: SquareColor.Green }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 2, type: SquareType.SquareWithBorder, color: SquareColor.Green }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Green }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Green }] });
    this.createSquare({ rowCount: 3, columns: [{ columnCount: 1, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Green }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Green }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Green }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: SquareType.Square, color: SquareColor.Red }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Green }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 6, type: SquareType.Square, color: SquareColor.Green }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Red }, { columnCount: 4, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 3, type: SquareType.Square, color: SquareColor.Final }, { columnCount: 6, type: SquareType.SquareWithBorder, color: SquareColor.White }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 5, type: SquareType.SquareWithBorder, color: SquareColor.Red }, { columnCount: 3, type: SquareType.Square, color: SquareColor.Final }, { columnCount: 5, type: SquareType.SquareWithBorder, color: SquareColor.Yellow }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 3, type: SquareType.Square, color: SquareColor.Final }, { columnCount: 4, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Yellow }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Blue }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 6, type: SquareType.Square, color: SquareColor.Yellow }] });
    this.createSquare({ rowCount: 3, columns: [{ columnCount: 1, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.Blue }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Yellow }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Yellow }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 2, type: SquareType.SquareWithBorder, color: SquareColor.Blue }, { columnCount: 1, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Yellow }, { columnCount: 4, type: SquareType.Square, color: SquareColor.White }, { columnCount: 1, type: SquareType.Square, color: SquareColor.Yellow }] });
    this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: SquareType.Square, color: SquareColor.Blue }, { columnCount: 3, type: SquareType.SquareWithBorder, color: SquareColor.White }, { columnCount: 6, type: SquareType.Square, color: SquareColor.Yellow }] });
    this.drawStars(['3-7', '7-13', '3-7', '9-3', '13-9']);
    this.homes.push({
      Index: 1, IconColor: IconColor.Blue,
      HomePointers: [{ Index: 1, Position: '11-2', DefaultPosition: '11-2', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '11-5', DefaultPosition: '11-5', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-2', DefaultPosition: '14-2', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-5', DefaultPosition: '14-5', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      //HomePointers: [{ Index: 1, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      Path: ['14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '14-8', '13-8', '12-8', '11-8', '10-8', '9-8'],
      WinnerNumber: 0,
      AutoPlay: !this.isHome1,
      IsPlayer: false,
      PlayState: PlayState.ReadyToDice
    })
    this.homes.push({
      Index: 2, IconColor: IconColor.Red,
      HomePointers: [{ Index: 1, Position: '2-2', DefaultPosition: '2-2', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '2-5', DefaultPosition: '2-5', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '5-2', DefaultPosition: '5-2', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '5-5', DefaultPosition: '5-5', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      //HomePointers: [{ Index: 1, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      Path: ['7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7'],
      WinnerNumber: 0,
      AutoPlay: !this.isHome2,
      IsPlayer: false,
      PlayState: PlayState.ReadyToDice
    })
    this.homes.push({
      Index: 3, IconColor: IconColor.Green,
      HomePointers: [{ Index: 1, Position: '2-11', DefaultPosition: '2-11', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '2-14', DefaultPosition: '2-14', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '5-11', DefaultPosition: '5-11', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '5-14', DefaultPosition: '5-14', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      Path: ['2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '7-8'],
      WinnerNumber: 0,
      AutoPlay: !this.isHome3,
      IsPlayer: false,
      PlayState: PlayState.ReadyToDice
    })
    this.homes.push({
      Index: 4, IconColor: IconColor.Yellow,
      HomePointers: [{ Index: 1, Position: '11-11', DefaultPosition: '11-11', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '11-14', DefaultPosition: '11-14', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-11', DefaultPosition: '14-11', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-14', DefaultPosition: '14-14', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
      Path: ['9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '8-14', '8-13', '8-12', '8-11', '8-10', '8-9'],
      WinnerNumber: 0,
      AutoPlay: !this.isHome4,
      IsPlayer: false,
      PlayState: PlayState.ReadyToDice
    })
    //console.log(this.homes)
    for (let i = 0; i < this.homes.length; i++) {
      for (let j = 0; j < this.homes[i].HomePointers.length; j++) {
        this.allPointers.push(this.homes[i].HomePointers[j]);
      }
    }
    if (this.homes.find(m => m.Index == this.turn).AutoPlay) {
      this.spinDice(true);
    }
    // this.autoPlayInterval = setInterval(function ($this) {
    //   if (!$this.isSpinnerDisabled) {
    //     let isAutoplay = $this.homes.find(m => m.Index == $this.turn).AutoPlay;
    //     $this.spinDice(isAutoplay);
    //   }
    // }, this.delayTimes.autoPlay, this);

  }

  createSquare(obj: any) {
    for (let i = 0; i < obj.rowCount; i++) {
      this.currentPosition.Row = this.currentPosition.Row + 1;
      this.currentPosition.Column = 0;
      for (let j = 0; j < obj.columns.length; j++) {
        for (let k = 0; k < obj.columns[j].columnCount; k++) {
          this.currentPosition.Column = this.currentPosition.Column + 1;
          this.squares.push({
            SquareColor: obj.columns[j].color, SquareType: obj.columns[j].type,
            Html: '&nbsp;', Position: this.currentPosition.Row + '-' + this.currentPosition.Column
          });
        }
      }
    }
  }

  drawStars(obj: string[]) {
    for (let j = 0; j < obj.length; j++) {
      this.getSquareByPosition(obj[j]).Html = "<i class='fa fa-star-o'></i>";
    }
  }

  getSquareByPosition(position: string): Square {
    return this.squares.find(m => m.Position == position);
  }

  spinDice(isAutoPlay) {
    let interval = setInterval(() => {
      let rendomNum = this.getRandomInt(1, 6, false);
      this.dice = rendomNum;
    }, this.delayTimes.diceSpin / 10);
    setTimeout(() => {
      this.isSpinnerDisabled = true;
      clearInterval(interval);
      let rendomNum = this.getRandomInt(1, 6, true);
      this.dice = rendomNum;
      this.diceHistory.splice(0, 1);
      this.diceHistory.push(this.dice);
      this.continuePlay = this.dice == 6 ? true : false;
      if (this.turn == 1) {
        this.totalMoves.home1++;
      }
      else if (this.turn == 2) {
        this.totalMoves.home2++;
      }
      else if (this.turn == 3) {
        this.totalMoves.home3++;
      }
      else if (this.turn == 4) {
        this.totalMoves.home4++;
      }
      this.changePlayState(PlayState.ReadyToMove);
      if (isAutoPlay) {
        this.movePointers(-1);
      }
      else {
        this.findMovablePointers(this.turn - 1);
        if (this.movablePointers.length == 1) {
          this.movePointers(this.movablePointers[0].Index - 1);
        }
      }
    }, this.delayTimes.diceSpin);
  }

  changePlayState(state: PlayState) {
    var currentHome = this.homes.find(m => m.Index == this.turn);
    currentHome.PlayState = state;
  }

  clickPointer(index) {
    this.movePointers(index - 1);
  }

  getRandomInt(min, max, checkForSix) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (checkForSix && num == 6 && this.diceHistory[1] == 6 && this.diceHistory[2] == 6) {
      max--;
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return num;
  }

  findMovablePointers(homeIndex: number) {
    let detailList = [];
    for (let i = 0; i < this.homes[homeIndex].HomePointers.length; i++) {
      let expectedIndex = -1;
      if (this.homes[homeIndex].HomePointers[i].State == PointerState.AtHome && this.dice == 6) {
        expectedIndex = 0;
      }
      else if (this.homes[homeIndex].HomePointers[i].State == PointerState.OnTheWay) {
        let expectedIndex1 = this.homes[homeIndex].Path.indexOf(this.homes[homeIndex].HomePointers[i].Position) + this.dice;
        if (expectedIndex1 <= 56) {
          expectedIndex = expectedIndex1;
        }
      }
      if (expectedIndex > -1) {
        detailList.push(this.homes[homeIndex].HomePointers[i]);
      }
    }
    this.movablePointers = detailList;
    if (this.movablePointers.length == 0) {
      this.isSpinnerDisabled = false;
      this.changeTurn();
    }
    return detailList;
  }
  logMovement(data) {
    console.log(data);
  }
  movePointers(pointerIndex: number) {
    let homeIndex = this.turn - 1;
    let pointer;
    let attackablePointer;
    let pointerInfo = this.findPointerToMove(homeIndex, pointerIndex);
    pointer = pointerInfo.pointer;
    attackablePointer = pointerInfo.attackablePointer;
    if (pointer) {
      let oldPosition = pointer.Position;
      let newPosition = '';
      if (pointer.State == PointerState.AtHome) {
        newPosition = this.homes[homeIndex].Path[0];
        this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1, PointerIndex: pointer.Index, CurrentPosition: pointer.Pointer, NextPosition: newPosition });
        this.movePointer(newPosition, pointer)
        pointer.State = PointerState.OnTheWay;
        setTimeout(() => {
          this.adjustMultiplePointersInOneSquare();
          this.changeTurn();
        }, 0);
      }
      else {
        let currentPositionIndex = this.homes[homeIndex].Path.indexOf(oldPosition) + 1;
        let j = 0;
        this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1, PointerIndex: pointer.Index, CurrentPosition: oldPosition, NextPosition: this.homes[homeIndex].Path[currentPositionIndex + this.dice - 1] });
        for (let i = currentPositionIndex; i < currentPositionIndex + this.dice; i++) {
          setTimeout(function ($this, index) {
            $this.movePointer($this.homes[homeIndex].Path[index], pointer);
            if (index == 56) {
              pointer.State = PointerState.Reached;
              this.continuePlay = true;
            }
          }, j * this.delayTimes.changePosition, this, i);
          j++;
        }
        setTimeout(() => {
          if (attackablePointer) {
            this.putAttackedPointerToDefaultPosition(attackablePointer);
          }
          else {
            this.adjustMultiplePointersInOneSquare();
            this.changeTurn();
          }
        }, (j - 1) * this.delayTimes.changePosition);
      }
    }
    else {
      this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1 });
      this.changeTurn();
    }
    // if (!pointer || !this.continuePlay) {
    //   this.turn = this.turn == 4 ? 1 : this.turn + 1;
    // }

  }

  changeTurn() {
    this.changePlayState(PlayState.ReadyToDice);
    this.isSpinnerDisabled = false;
    let winnerHomes = this.homes.filter(m => m.WinnerNumber > 0);
    let reachedPointers = this.homes[this.turn - 1].HomePointers.filter(m => m.State == PointerState.Reached).length;
    if (reachedPointers == 4) {
      this.homes[this.turn - 1].WinnerNumber = winnerHomes.length + 1;
      winnerHomes = this.homes.filter(m => m.WinnerNumber > 0);
    }
    let runningHomes = this.homes.filter(m => m.WinnerNumber == 0);
    if (winnerHomes.length == 3) {
      runningHomes[0].WinnerNumber = 4;
      clearInterval(this.autoPlayInterval);
      this.gameOver = true;
      this.isSpinnerDisabled = true;
      return;
    }
    else {
      if (runningHomes.length > 0) {
        if (!this.continuePlay) {
          let arr = runningHomes.map(({ Index }) => Index);
          arr.sort((a, b) => a - b);
          let expectedTurn = this.turn == arr[arr.length - 1] ? 1 : this.turn + 1;
          let arrItem = arr.find(m => m >= expectedTurn);
          if (!arrItem) {
            arrItem = arr[0];
          }
          if (arrItem) {
            this.turn = arrItem;
          }
          else {
            debugger;
          }
        }
      }
      else {
        clearInterval(this.autoPlayInterval);
        this.gameOver = true;
        return;
      }
    }
    if (this.homes[this.turn - 1].AutoPlay && !this.autoPlayInterval) {
      setTimeout(() => {
        this.spinDice(true);
      }, this.delayTimes.gapBetweenNextAutoPlaySpin);
    }
  }

  putAttackedPointerToDefaultPosition(attackablePointerInfo) {
    let currentPositionIndex = this.homes[attackablePointerInfo.homeIndex - 1].Path.indexOf(attackablePointerInfo.pointer.Position) + 1;
    this.logMovement({ Attack: true, HomeIndex: attackablePointerInfo.homeIndex, PointerIndex: attackablePointerInfo.pointer.Index, CurrentPosition: attackablePointerInfo.pointer.Position, NextPosition: attackablePointerInfo.pointer.DefaultPosition });
    let k = 0;
    for (let i = currentPositionIndex - 2; i >= 0; i--) {
      setTimeout(function ($this, index) {
        $this.movePointer($this.homes[attackablePointerInfo.homeIndex - 1].Path[index], attackablePointerInfo.pointer);
      }, k * this.delayTimes.changePosition, this, i);
      k++;
    }
    setTimeout(() => {
      this.movePointer(attackablePointerInfo.pointer.DefaultPosition, attackablePointerInfo.pointer);
      attackablePointerInfo.pointer.State = PointerState.AtHome;
      this.continuePlay = true;
      this.changeTurn();
    }, k * this.delayTimes.changePosition);
  }

  movePointer(newPosition, pointer) {
    if (newPosition && pointer) {
      pointer.Position = newPosition;
    }
    this.movablePointers = [];
  }

  findPointerToMove(homeIndex: number, pointerIndex: number): any {
    let foundPointer = { pointer: null, attackablePointer: null };
    if (this.dice == 6) {
      if (pointerIndex > -1) {
        foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(m => m.State == PointerState.AtHome && m.Index - 1 == pointerIndex), attackablePointer: null };
      }
      else {
        foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(m => m.State == PointerState.AtHome), attackablePointer: null };
      }

    }
    if (!foundPointer.pointer) {
      foundPointer = this.findSafePointer(homeIndex, pointerIndex);
    }
    // if (!foundPointer.pointer) {
    //   foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(m => m.State == PointerState.OnTheWay), attackablePointer: null };
    // }
    return foundPointer;
  }

  findSafePointer(homeIndex: number, pointerIndex: number): any {
    let foundPointer = { pointer: null, attackablePointer: null };
    let safePointers = [];
    let attackerPointers = [];
    let normalPointers = [];
    let onTheWayPointers = this.homes[homeIndex].HomePointers.filter(m => m.State == PointerState.OnTheWay)
    let attackablePositions = this.getAttackablePointers(homeIndex);
    for (let i = 0; i < onTheWayPointers.length; i++) {
      let currentPosition = onTheWayPointers[i].Position;
      let currentIndex = this.homes[homeIndex].Path.indexOf(currentPosition);
      let expectedPosition = this.homes[homeIndex].Path[currentIndex + this.dice];
      if (expectedPosition) {
        let expectedIndex = this.homes[homeIndex].Path.indexOf(expectedPosition);
        let attackablePointer = attackablePositions.find(m => m.pointer.Position == expectedPosition);
        if (attackablePointer) {
          attackerPointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex, attackablePointer: attackablePointer });
        }
        if (this.safePositions.indexOf(expectedPosition) > -1 || expectedIndex > 50) {
          safePointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex });
        }
        normalPointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex });
      }
    }
    if (pointerIndex > -1) {
      let pntr = attackerPointers.find(m => m.pointer.Index - 1 == pointerIndex);
      if (pntr) {
        foundPointer = { pointer: pntr.pointer, attackablePointer: pntr.attackablePointer };
      }
      else {
        pntr = normalPointers.find(m => m.pointer.Index - 1 == pointerIndex);
        if (pntr) {
          foundPointer = { pointer: pntr.pointer, attackablePointer: pntr.attackablePointer };
        }
      }
    }
    else {
      if (attackerPointers.length > 0) {
        attackerPointers.sort((a, b) => b.expectedIndex - a.expectedIndex);
        foundPointer = { pointer: attackerPointers[0].pointer, attackablePointer: attackerPointers[0].attackablePointer };
      }
      else if (safePointers.length > 0) {
        safePointers.sort((a, b) => b.expectedIndex - a.expectedIndex);
        foundPointer = { pointer: safePointers[0].pointer, attackablePointer: null };
      }
      else if (normalPointers.length > 0) {
        normalPointers.sort((a, b) => b.expectedIndex - a.expectedIndex);
        foundPointer = { pointer: normalPointers[0].pointer, attackablePointer: null };
      }
    }
    return foundPointer;
  }

  getAttackablePointers(homeIndex: number): any[] {
    let otherHomes = this.homes.filter(m => m.Index != homeIndex + 1);
    let pointers: any[] = [];
    for (let i = 0; i < otherHomes.length; i++) {
      let onTheWayPointers = otherHomes[i].HomePointers.filter(m => m.State == PointerState.OnTheWay
        && this.safePositions.indexOf(m.Position) == -1 && otherHomes[i].Path.indexOf(m.Position) <= 50);
      let onTheWayPointers1 = otherHomes[i].HomePointers.filter(m => m.State == PointerState.OnTheWay);
      let onTheWayPointers2 = otherHomes[i].HomePointers.filter(m => m.State == PointerState.OnTheWay
        && this.safePositions.indexOf(m.Position) == -1);
      let onTheWayPointers3 = otherHomes[i].HomePointers.filter(m => m.State == PointerState.OnTheWay
        && this.safePositions.indexOf(m.Position) == -1 && otherHomes[i].Path.indexOf(m.Position) <= 50);
      for (let j = 0; j < onTheWayPointers.length; j++) {
        pointers.push({ pointer: onTheWayPointers[j], homeIndex: otherHomes[i].Index });
      }
    }
    return pointers;
  }

  setPointerPosition(pointerObj: HomePointer): any {
    let arr = pointerObj.Position.split('-');
    let top = 0;
    let left = 0;
    let fontSize = 100;
    top = arr[0] == '1' ? 1 : (1 + (6.66 * (parseInt(arr[0]) - 1)));
    left = arr[1] == '1' ? 1 : (1 + (6.66 * (parseInt(arr[1]) - 1)));
    if (pointerObj.TotalSiblings > 1 && pointerObj.TotalSiblings <= 4) {
      fontSize = 75;
      if (pointerObj.InnerIndex == 1) {
        top = top - 1;
        left = left - 1;
      }
      else if (pointerObj.InnerIndex == 2) {
        top = top + 2;
        left = left + 2;
      }
      else if (pointerObj.InnerIndex == 3) {
        top = top + 2;
        left = left - 1;
      }
      else if (pointerObj.InnerIndex == 4) {
        top = top - 1;
        left = left + 2;
      }
    }
    else if (pointerObj.TotalSiblings > 4 && pointerObj.TotalSiblings <= 9) {
      fontSize = 50;
      if (pointerObj.InnerIndex == 1) {
        top = top - 1;
        left = left - 1;
      }
      else if (pointerObj.InnerIndex == 2) {
        top = top - 1;
        left = left + 1;
      }
      else if (pointerObj.InnerIndex == 3) {
        top = top - 1;
        left = left + 3;
      }
      else if (pointerObj.InnerIndex == 4) {
        top = top + 1;
        left = left - 1;
      }
      else if (pointerObj.InnerIndex == 5) {
        top = top + 1;
        left = left + 1;
      }
      else if (pointerObj.InnerIndex == 6) {
        top = top + 1;
        left = left + 3;
      }
      else if (pointerObj.InnerIndex == 7) {
        top = top + 3;
        left = left - 1;
      }
      else if (pointerObj.InnerIndex == 8) {
        top = top + 3;
        left = left + 1;
      }
      else if (pointerObj.InnerIndex == 9) {
        top = top + 3;
        left = left + 3;
      }
      else {
        top = top - 1;
        left = left - 1;
      }
    }
    return { 'top': top + '%', 'left': left + '%', 'font-size': fontSize + '%' };
  }

  clickManual(num: number) {
    this.dice = num;
    this.continuePlay = this.dice == 6 ? true : false;
    this.diceHistory.splice(0, 1);
    this.diceHistory.push(this.dice);
    this.movePointers(-1);
  }

  adjustMultiplePointersInOneSquare() {
    var result = this.groupBy(this.allPointers, function (item) {
      return [item.Position];
    });
    //result = result.filter(m => m.length > 1);
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        result[i][j].TotalSiblings = result[i].length;
        result[i][j].InnerIndex = j + 1;
      }
    }
  }

  groupBy(array, f) {
    var groups = {};
    array.forEach(function (o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    })
  }

}