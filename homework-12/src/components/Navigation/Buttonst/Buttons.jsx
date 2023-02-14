import { Button } from "@mui/material";

import "./buttons.scss"

const buttonsNavigation = [
    { title: 'About Us', url: '#AboutUs' },
    { title: 'Docs', url: '#Docs' },
    { title: 'Contacts', url: '#Contacts' },
    { title: 'AboutUs', url: '#AboutUs' },
    { title: 'Blog', url: '#Blog' },
]

export const Buttons = () => {
    return (
        <>
            {buttonsNavigation.map((btn, index) => (
                <Button
                    className="btn-nav"
                    style={{margin: "2px"}}
                    key={index}
                    variant="contained"
                    href={btn.url}
                >
                    {btn.title}
                </Button>
            ))}
        </>
    )
}