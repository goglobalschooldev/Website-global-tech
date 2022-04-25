import Link from 'next/link'

const Notfound = () => {
    return (
        <div className="errorpage">
            <h1 className='titleEror'>Ohh...</h1>
            <h2>That page cannot be found.</h2>
            <p className='text2Eror'>Go back to the <Link href="/"><a className='textEror'>HomePage</a></Link></p>
        </div>
    )
}

export default Notfound