export function EmojiItem({ title, symbol, keywords }) {
  return (
    <div className='card'>
      <h5 className='card-header text-center'>{title}</h5>
      <div className='card-body text-center'>
        <h1>{symbol}</h1>
        <p className='card-text'>{keywords}</p>
      </div>
    </div>
  );
}
