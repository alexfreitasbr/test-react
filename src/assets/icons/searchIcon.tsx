type SearchProps = {
    width?: number
    color?: string
}

export function SearchIcon({ width = 24, color = "white" }: SearchProps) {

    return <svg width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 17.25C14.5637 17.25 17.25 14.5637 17.25 11.25C17.25 7.93629 14.5637 5.25 11.25 5.25C7.93629 5.25 5.25 7.93629 5.25 11.25C5.25 14.5637 7.93629 17.25 11.25 17.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.75 18.75L15.4875 15.4875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


}