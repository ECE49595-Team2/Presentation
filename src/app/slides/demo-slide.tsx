"use client";
import Slide from "../slide";

export default function DemoSlide() {

    return (
        <Slide
            data-background-color="orange"
        >
            <a href="https://stocksensai.com"
                data-preview-link>
                <h1
                    style={{
                        color: 'white',
                        fontSize: '8rem',
                        textShadow: 'none'
                    }}
                >Demo</h1>
            </a>
        </Slide >
    )
}