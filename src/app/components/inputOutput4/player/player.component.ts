import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent {

  @Output() banPlayer : EventEmitter<number> = new EventEmitter<number>()
  @Output() followPlayer : EventEmitter<{id : number}> = new EventEmitter<{id : number}>()

  @Input() id : number = 0
  @Input() ranked : number = 0
  @Input() pseudo : string = ""
  @Input() win : number = 0
  @Input() loose : number = 0
  @Input() money : number = 0


  bannir(id : number){
    //fait tomber le vase
    //je poucrave
    this.banPlayer.emit(id)
  }


  follow(id : number){
    this.followPlayer.emit({id: id})
  }

}
