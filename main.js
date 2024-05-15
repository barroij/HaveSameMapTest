import v8_natives from 'v8-natives'

"use strict";

function accesProp(v) {
    return v.x + v.y
}

//---------------------------------------------------------------------------------------
function main() {

    console.log('creating vNI')
    const vNI = { x : 0.5, y : 1 }

    console.log('creating vIN')
    const vIN = { x : 1, y : 0.5 }






    console.log(' ')
    console.log(`v8_natives.haveSameMap(vIN, vNI) =  ${v8_natives.haveSameMap(vIN, vNI)}`)
    console.log(' ')

    console.log('---------------------------------- ')
    console.log('--- v8_natives.debugPrint(vNI) --- ')
    v8_natives.debugPrint(vNI)
    console.log(' ')
    console.log('---------------------------------- ')
    console.log(' ')
    console.log('---------------------------------- ')
    console.log('--- v8_natives.debugPrint(vIN) --- ')
    v8_natives.debugPrint(vIN)
    console.log(' ')
    console.log('---------------------------------- ')

    //const vII = { x : 1, y : 1 }
    //const vNN = { x : 0.5, y : 0.5 }

    //console.log(`v8_natives.haveSameMap(vII, vIN) =  ${v8_natives.haveSameMap(vII, vIN)}`)
    //console.log(`v8_natives.haveSameMap(vII, vIN) =  ${v8_natives.haveSameMap(vII, vIN)}`)
    //console.log(`v8_natives.haveSameMap(vII, vNI) =  ${v8_natives.haveSameMap(vII, vNI)}`)
    //console.log(`v8_natives.haveSameMap(vNN, vIN) =  ${v8_natives.haveSameMap(vNN, vIN)}`)
    //console.log(`v8_natives.haveSameMap(vNN, vNI) =  ${v8_natives.haveSameMap(vNN, vNI)}`)
    //console.log(`v8_natives.haveSameMap(vIN, vNI) =  ${v8_natives.haveSameMap(vIN, vNI)}`)
}

main()
