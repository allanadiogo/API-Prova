export function Tabuada(numero){
    let x= []
    let a= 0;
    for(let cont = 0; cont <= 10; cont++){
        x[a]= cont * numero
        a++
    }
    return x;
}