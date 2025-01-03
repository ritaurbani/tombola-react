import { useState } from 'react'


//index parte da 0 quindi incremento

function App() {

  //creo array di numeri da 1-90 ()
  const tombolaNumbersArray = Array.from({ length: 90 }, (_, index) => index + 1);

  const [isExtracted, setIsExtracted] = useState(false)

  //Estraggo numero
    const getRandomNumber = (min, max) => {
      const randomNumber = Math.floor(Math.random() * (max - min) + min)
      return randomNumber
    }

    // creo array di numeri rimasti dopo extraction
   

  return (
    <>
      <div className='d-flex justify-content-between'>
        <div>
          {/* Utilizzo map per creare un elemento per ogni numero */}
          {tombolaNumbersArray.map((number, index) => (
            <div 
              key={index}
              className='m-2'>
              {number}
            </div>
          ))}
        </div>
        <div>
          <button className='m-4' onClick={{getRandomNumber}}>Extract Number</button>
        </div>
      </div>
    </>
  )
}

export default App