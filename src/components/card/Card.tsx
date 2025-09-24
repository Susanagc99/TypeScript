import React from 'react'

interface CardProps {
  text: string,
  icon: string,
  color: "black" | "green" | "grey"
}

export const Card = ({text, icon, color}: CardProps) => {

  return (
    // <div className={color === "black" ? "card-black": "card-green"}>
    <div className='card-black'>
      <div className='card_leftSide'>
          
        <div className='card_leftSide--title'>
          {text}
        </div>

        <div className='card_leftSide--link'>
          <div className='card_leftSide--icon'>{icon}</div>
          <div className='card_leftSide--text'>{text}</div>
        </div>

      </div>

      <div className='card_rightSide'>
        {/* <Image className='card_rightSide--image' alt="dsnf" width={200} src={ }></Image> */}
      </div>
    </div>
  )
}
