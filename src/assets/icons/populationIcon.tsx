type PopulationProps = {
    width?: number
    color?: string
}

export function PopulationIcon({ width = 24, color = "black" }: PopulationProps) {

    return <svg width={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.45 11.4479C11.9473 11.1733 11.3707 11.0174 10.7578 11.0174H9.3012C8.67112 11.0174 8.07971 11.1822 7.5676 11.4709C6.49065 12.0772 5.76331 13.2315 5.76331 14.5553V15.6467H14.2957V14.5553C14.2957 13.2143 13.5496 12.0479 12.45 11.4479Z" fill={color} />
        <path d="M16.4726 10.0479H15.2616C14.5546 10.0479 13.8956 10.2568 13.3429 10.617C13.6085 10.7912 13.8581 10.9947 14.0882 11.2248C14.9777 12.1143 15.4675 13.2971 15.4675 14.5553V15.0686H19.9999V13.5752C19.9999 11.6303 18.4175 10.0479 16.4726 10.0479Z" fill={color} />
        <path d="M4.73828 10.0479H3.52734C1.58242 10.0479 0 11.6303 0 13.5752V15.0686H4.59141V14.5553C4.59141 13.2971 5.08164 12.1143 5.97109 11.2248C6.19258 11.0033 6.43203 10.8064 6.68672 10.6365C6.12812 10.2646 5.4582 10.0479 4.73828 10.0479Z" fill={color} />
        <path d="M15.8654 4.7428C15.8592 4.7428 15.8527 4.74284 15.8465 4.74291C14.5356 4.75374 13.4784 5.88674 13.4898 7.2685C13.5012 8.6437 14.5666 9.75491 15.869 9.75491C15.8752 9.75491 15.8816 9.75487 15.8879 9.75479C16.5307 9.74948 17.1305 9.4787 17.5769 8.99225C18.0129 8.51709 18.25 7.891 18.2446 7.2292C18.2332 5.85401 17.1678 4.7428 15.8654 4.7428Z" fill={color} />
        <path d="M4.13101 4.7428C4.1248 4.7428 4.11835 4.74284 4.1121 4.74291C2.80124 4.75374 1.74406 5.88674 1.75546 7.2685C1.76679 8.6437 2.83222 9.75491 4.1346 9.75491C4.14085 9.75491 4.14726 9.75487 4.15351 9.75479C4.79624 9.74948 5.39609 9.4787 5.84249 8.99225C6.27855 8.51709 6.51566 7.891 6.51019 7.2292C6.49882 5.85401 5.43343 4.7428 4.13101 4.7428Z" fill={color} />
        <path d="M10.0297 4.3533C8.51836 4.3533 7.28906 5.65213 7.28906 7.24901C7.28906 8.40291 7.93125 9.40135 8.8582 9.86619C9.21367 10.0447 9.61094 10.1443 10.0297 10.1443C10.4484 10.1443 10.8457 10.0447 11.2012 9.86619C12.1281 9.40135 12.7703 8.40291 12.7703 7.24901C12.7703 5.65213 11.541 4.3533 10.0297 4.3533Z" fill={color} />
    </svg>
}
