import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: "reducidor2"
})

export class ReducidorPipe2 implements PipeTransform{
	transform(valor: string,palabras2show: number, texto:string){
		const words: string[] = valor.split(" ")
		let newValor:String=""
		for (let index = 0; index < words.length; index++) {
			
			newValor = newValor + words[index] + " "
			if(palabras2show-1==index){
				break
			}
		}

		
		return newValor + " " + texto
	}
}