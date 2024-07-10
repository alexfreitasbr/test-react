export function toLocalFormat(value:string | number | undefined){
    if(typeof value ===  'undefined') return null
    if(typeof value === 'string')  return parseInt(value).toLocaleString('pt-BR')
    return value.toLocaleString('pt-BR')
}