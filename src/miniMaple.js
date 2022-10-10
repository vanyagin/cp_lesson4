class MiniMaple{
    differentiation(expr, perem='x'){
        let r = /^([+-]([1-9][0-9]*\*)?(([a-z](\^\d+)?)|\d*))*$/gm
        if (expr.length > 0 && (expr[0] !== '-' || expr[0] !== '+')){
            if (expr[0] !== '+'){
                expr = expr.replace(/\s/g, '')
                expr = '+' + expr
            }
            if (!r.test(expr)) {
                throw Error('Input expression error!')
            }
        }
        let res = []
        let elems = expr.match(/(\-|\+)([^-+])+/gm);
        elems.forEach((value, index, array) => {
            if (value.search(perem) === -1) {
                delete array[index]
            }
        })
        console.log(elems)
        elems.forEach((value, index, array) => {
            if (value !== undefined) {
                let sign = value[0]
                let coef
                let pow
                if (value[1] === perem) {
                    if (sign === '-'){
                        coef = -1
                    }
                    else
                        coef = 1
                    if (value.search(/\^/) === -1)
                        pow = 1
                    else
                        pow = Number(value.match(/\d+/gm))
                }
                else{
                    if (sign === '-')
                        coef = Number('-'+value.match(/\d+/gm)[0])
                    else
                        coef = Number(value.match(/\d+/gm)[0])
                    if (value.search(/\^/) === -1)
                        pow = 1
                    else
                        pow = Number(value.match(/\d+/gm)[1])
                }
                if (pow === 1){
                    if (coef > 0)
                        res.push(`+${coef}`)
                    else
                        res.push(`${coef}`)
                }
                else {
                    let prod = coef * pow
                    if (pow === 2) {
                        if (prod > 0)
                            res.push(`+${prod}*${perem}`)
                        else
                            res.push(`${prod}*${perem}`)
                    } else {
                        if (prod > 0)
                            res.push(`+${prod}*${perem}^${pow - 1}`)
                        else
                            res.push(`${prod}*${perem}^${pow - 1}`)
                    }
                }
            }
        })

        res = res.toString()
        res = res.replace(/,/gm,'').replace(/^\+/gm, '')
        if (res.length === 0)
            return '0'

        return res
    }


}

export {MiniMaple}


// let r = /^([+-]([1-9][0-9]*\*)?(([a-z](\^\d+)?)|\d*))*$/gm
//
// let mm = new MiniMaple()
//
//
// let e = 'x^3-x^2 + x + y - 4*x + 9 + 9*y'
// let y = '4*x^3'
// console.log(mm.differentiation(y, 'y'))

