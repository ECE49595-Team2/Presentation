"use client";
import Slide from "../slide";
import * as lucide from "lucide-react";

export default function DemoSlide() {

    return (
        <Slide
            data-background-color="orange"
        >
            <h1
                style={{
                    color: 'white',
                    fontSize: '8rem',
                }}
            >Demo</h1>
        </Slide>
    )
}