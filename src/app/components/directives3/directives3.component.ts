import { Component } from '@angular/core'

@Component({
  selector: 'app-directives3',
  templateUrl: './directives3.component.html',
  styleUrls : ["./directives3.component.scss"]
})
export class Directives3Component {

  //part ngIf
  public isShow : boolean = false
  public isConnect : boolean = false


  show(){
    this.isShow = true
  }

  hide(){
    this.isShow = false
  }

  connect(){
    this.isConnect = true
  }

  disconnect(){
    this.isConnect = false
  }



  //part ngFor
  public listPiments : any[] = [
    { id : 1, name : "Poivron", scoville : "0 - 100", categ : "light" },
    { id : 2, name : "Anaheim", scoville : "500 - 1000", categ : "light" },
    { id : 3, name : "Ancho", scoville : "1000 - 1500", categ : "medium" },
    { id : 4, name : "Chimayo", scoville : "2500 - 5000", categ : "medium" },
    { id : 5, name : "Fatali", scoville : "125 000 - 325 000", categ : "hot" },
    { id : 6, name : "Scorpion", scoville : "1 250 000", categ : "hot" },
    { id : 7, name : "Regret", scoville : "9 000 000", categ : "extreme" },
    { id : 8, name : "capsaïcine pur", scoville : "10 000 000 - 14 000 000", categ : "elemental" },
    
  ]

  public listButtonsSorting : any[] = [
    { humanName : "Light score", value : "light" },
    { humanName : "Medium score", value : "medium" },
    { humanName : "Hot score", value : "hot" },
    { humanName : "Extreme score", value : "extreme" },
    { humanName : "Elemental score", value : "elemental" },
  ]

  public valueFilter : string = ""

  setFilterName(filterName : string)
  {
    this.valueFilter = filterName
  }



  //part ngStyle
  getColor(categ : string)
  {
    switch(categ)
    {
      case "light":
        return "green"

      case "medium":
        return "yellow"

      case "hot":
        return "orange"

      case "extreme":
        return "red"

      case "elemental":
        return "brown"

      default: 
        return "black"

    }
  }


  
  //part ngClass
  public classAdded : string = ""
  getClass(categ : string)
  {
    switch(categ)
    {
      case "light":
        return "card-panel green lighten-2" + " " + this.classAdded

      case "medium":
        return "card-panel yellow black-text" + " " + this.classAdded

      case "hot":
        return "card-panel orange black-text" + " " + this.classAdded

      case "extreme":
        return "card-panel red" + " " + this.classAdded

      case "elemental":
        return "card-panel brown" + " " + this.classAdded
        
      default: 
        return "card-panel black" + " " + this.classAdded

    }
  }

  addBold(){
    this.classAdded = "bold"
  }

  remBold(){
    this.classAdded = ""
  }

  public isActive : boolean = false
  activeTeal()
  {
    this.isActive = !this.isActive
  }



  //part directive custom
  public colorText : string = ""
  public fontSizeText : string = ""
  public colorBackground : string = ""

}
