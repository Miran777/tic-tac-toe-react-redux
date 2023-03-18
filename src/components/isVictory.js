
const eq = (a, b, c) => {
    return a != null && a == b && a == c
}


export const isVictory = (array) => {
    if( eq(array[0].value, array[1].value, array[2].value) ) return array[0].value

    if( eq(array[3].value, array[4].value, array[5].value) ) return array[3].value
    
    if( eq(array[6].value, array[7].value, array[8].value) ) return array[6].value

    if( eq(array[0].value, array[3].value, array[6].value) ) return array[0].value

    if( eq(array[1].value, array[4].value, array[7].value) ) return array[1].value
    
    if( eq(array[2].value, array[5].value, array[8].value) ) return array[2].value

    if( eq(array[0].value, array[4].value, array[8].value) ) return array[0].value
    
    if( eq(array[2].value, array[4].value, array[6].value) ) return array[2].value

    return null
}