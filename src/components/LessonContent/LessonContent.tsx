
import Image from 'next/image'

export default function LessonContent(arrayArg: string[]) {
  // use on each page of content
  // use parseInt()?
    arrayArg.map((el, i, array) => {
  
      let arraykey = Object.keys(el)
      let key = arraykey[0]
      if (key === 'image') {
        return <Image src={el} alt={'none'}/>
        // return <img src={el} alt={'none'}/>
      }
      else if (key === 'audio') {
        return <audio src={el} />
      }
      else if (key === 'text') {
        return <p>{el}</p>
    } else {
        return <p>error</p>
    }
}
    )
}

// export default ReturnReact