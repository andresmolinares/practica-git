import { EmojiItem } from './EmojiItem';

export function EmojiList({ datos }) {
  let renderEmojis = datos.map((emoji) => {
    return (
      <div className='col-3' key={emoji.title}>
        <EmojiItem
          title={emoji.title}
          symbol={emoji.symbol}
          keywords={emoji.keywords}
        />
      </div>
    );
  });

  return <div className='row py-5'>{renderEmojis}</div>;
}
