var notas = [8, 9 ,3]

 
   for (let i = 0; i <=2; i++){
    console.log("Sua nota", i+1, "foi :", notas[i])
}


media = ((notas[0] + notas[1] + notas[2])/3);
console.log("Sua media:", media)

if (media >= 7){
    console.log("Aprovado!")
} 
else {
    console.log("Reprovado!")
}
