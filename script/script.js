let nombrePlanetas = Array ('Tierra', 'Marte')
let distancia = [6, 3, '67']
const tamaño = [20, 30]
let i = 0


console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

while (i < nombrePlanetas.length) {
    console.log(i)
    console.log(nombrePlanetas[i])
    i++;
}

for (let ind = 0; ind < nombrePlanetas.length; ind++){
    console.log(nombrePlanetas[ind])
}

nombrePlanetas.forEach((value, index, array)  => {
    console.log('planeta', index, value)
});

nombrePlanetas.map((planetas, index) =>{ 
    return(
        console.log(`El planeta ${planetas} tiene tamaño de: ${tamaño[index]}`)
    )
})

