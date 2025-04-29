import Image from "next/image";
function TitleSlide() {
    return (
        <section
            data-background-color="#f0f0f0"
        >
            <h1
                style={{
                    textTransform: 'none',
                }}
            >StockSensAI</h1>
            <Image src="/logo.svg" alt="StockSensAI Logo" width={200} height={200} />
            <h2
                style={{
                    textTransform: 'none',
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '3rem',
                    color: '#F4B950',
                }}
            >Final Presentation</h2>
            <p
                style={{
                    fontSize: '1.5rem',
                    color: 'rgb(180, 178, 178)',
                    marginTop: '4rem',
                }}
            >Brett Heckman, Lane Crowder, Kevin DeWall</p>
        </section>
    )
}

export default TitleSlide;