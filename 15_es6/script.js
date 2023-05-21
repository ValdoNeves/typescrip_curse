// 1 - var , let e const
var x = 10
var y = 15

if(y > 10){
  var x = 5
  console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
  let a = 5
  console.log(a)
}

console.log(a)
// 2 - arrowfunction
const user = {
  name: "Valdo",
  sayUserName(){
    var self = this
    setTimeout(function(){
      // console.log(this) // não funciona
      // console.log("user name "+ this.name) // não funciona assim

      console.log(self) 
      console.log("user name "+ self.name) 
    },400)
  },
  sayUserNameArrow(){
    setTimeout(() => {
      console.log(this)
      console.log("user Arrow function: " + this.name)

    },200)
  }
}

user.sayUserName()
user.sayUserNameArrow()