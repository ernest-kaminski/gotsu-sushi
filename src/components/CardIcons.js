import React, {useState} from 'react'
import "./CardIcons.css"

function CardIcons() {

  const [iconNumber, setIconNumber] = useState(0);

  const iconChosen = (e) => {
    if(e === iconNumber){
      setIconNumber(0);
    }else{
      setIconNumber(e);
    }
  }

  return (
    <div className='card-icons-container'>
        <div className={iconNumber === 1 ? 'chosen-icon' : 'single-icon'} onClick={() => iconChosen(1)}>
            <a href="#"><svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" id='icon'/></svg></a>
            <span>Gotówka</span>
        </div>
        <div className={iconNumber === 2 ? 'chosen-icon' : 'single-icon'} onClick={() => iconChosen(2)}>
            <a href="#"><svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z" id='icon'/></svg></a>
            <span>Karta płatnicza</span>
        </div>
        <div className={iconNumber === 3 ? 'chosen-icon' : 'single-icon'} onClick={() => iconChosen(3)}>
             <a href='#'><svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792.000000 947.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,947.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" id='icon'></g></svg></a>
             <span>PayU</span>
        </div>
    </div>
  )
}

export default CardIcons