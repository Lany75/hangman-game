const UnderscoreWord = (props) => {
  const letters = props.word.split('');
  const letterRegex = /[a-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]/

  return (
    <>
      {letters.map((l, index) => {
        if (letterRegex.test(l)) {
          return <div key={index}>_</div>
        }
        else {
          if (l === ' ') return <div key={index}>&nbsp;</div>
          else return <div key={index}>{l}</div>
        }
      })}
    </>
  )
}

export default UnderscoreWord;