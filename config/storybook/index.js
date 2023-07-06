const obj = {
	'cls': true,
	'red': false,
	'kek': true
}
const res = Object.entries(obj)
console.log(res)

const resFilter = res.filter(([cls, value]) => !!value)
console.log('resFilter', resFilter)

const resMap = resFilter.map(([cls, value]) => cls)
console.log(resMap)
console.log(...resMap)
const resJoin = resMap.join(' ')
console.log(resJoin)