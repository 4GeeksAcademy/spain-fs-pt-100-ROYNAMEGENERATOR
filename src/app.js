import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";





  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const dom = ['.es', '.com', '.io', '.net'];

  let newarray = []
  pronoun.forEach(el => {
    adj.forEach(val => {
      noun.forEach(del => {
        dom.forEach(al => {
          console.log(`${el}${val}${del}${al}`)
          newarray.push(`${el}${val}${del}${al}`)




        })


      })
    })
  })


  console.table(newarray)

  
  const filterItems = (query) => {
    return newarray.filter(
      (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
  };

  console.log(filterItems(".es"))

  let ES = []
  ES.push(filterItems(".es"))
  console.log(ES)
    
  let com =[]
  com.push(filterItems(".com"))
  console.log(com)
    
  let io =[]
  io.push(filterItems(".io"))
  console.log (io)

 let net =[]
 net.push(filterItems(".net"))
 console.log (net)


let resultado = []
resultado.push(filterItems(".es"))
resultado.push(filterItems(".com"))
resultado.push(filterItems(".io"))
resultado.push(filterItems(".net"))
console.table(resultado);




     document.querySelector("#excuse").innerHTML = resultado
     
  





