const path = require('path')

// Path + filename
console.log(__filename)

// Base file name gives only the filename
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// File Extension
console.log(path.extname(__filename))

// Path object 
console.log(path.parse(__filename))
console.log(path.parse(__filename).root)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).name)

// Concatenate 
console.log(path.join(__dirname, 'test', 'hello.html'))
