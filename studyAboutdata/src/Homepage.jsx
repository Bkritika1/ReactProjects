import { header, cards, hero } from '../src/data2';

export default function Homepage() {
    return (
        <>
            <div className='wrapper'>
                <header>
                    <h2>Logo</h2>
                    <nav>
                        <ul>
                            {header.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </nav>
                </header>
                <main>
                    <hero>
                        {hero.map((item, index) => {
                           return <h1 key={index}>{item.heading}</h1>
                        })}
                    </hero>
                    <div className='cards' style={{display:'flex', gap:'10px'}}>
                        {cards.map((card, index) => {
                            return <div style={{border:'1px solid'}} key={index}>
                                {/* <img src={card.img} /> */}
                                <h2>{card.heading}</h2>
                                <p>{card.para}</p>
                            </div>
                        })}
                    </div>
                </main>
            </div>
        </>
    );
}
