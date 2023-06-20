
import './home.css';

const Home = ({ saludo1, responder }) => {


    return (
        <section className='fondoS'>
            <div className='charla'>
                <h1>{saludo1}</h1>
                <div className='botones'>
                    <button onClick={() => responder("buenas!")}>responder</button>
                </div>
            </div>

        </section >
    )
}

export default Home
