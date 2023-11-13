import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  /**
   * 
   * @param value number to transform
   * @param args prendra en premier args : l'exposant, en deuxieme : la tva appliquée, en troisième un texte en format array de string[]
   * @returns render string
   */
  transform(value: number, ...args: any[]): string {
    console.log(value)

    let result : string = ""

    if(args.length == 0){
      result = (value * value).toString()
    }
    else if(args.length == 1){
      result = Math.pow(value, args[0]).toString()
    }
    else if(args.length >= 2){
      value = Math.pow(value, args[0])
      value = value * ((args[1] / 100) + 1 )
      result = value.toString()

      if(args.length == 3){
        result = value + " " + args[2][0] + " " + args[2][1]
      }
    }

    return result
  }

}