type ToothProps = {
    width?:number, 
    height?:number,
    color?:string,
}

export function Tooth({width=34, height=66 , color="#52c551"}:ToothProps) {
    return <svg
        width={width}
        height={height}
        viewBox="0 0 13.229166 26.458334"
        id="svg37"
    >
        <defs id="defs34" />
            <path
                id="rect1806-56"
                style={{
                    fill:color,
                    fillOpacity: 1,
                    stroke: "#000047",
                    strokeWidth: 0.121549,
                    stopColor: "#000000",
                }}
                d="m 2.0554157,10.522862 1.9371754,13.118329 c 0.2230763,1.510644 1.1689067,2.756368 2.6208752,2.756368 h 0.1107711 c 1.4519684,0 2.3977988,-1.245724 2.6208752,-2.756368 L 11.282289,10.522862 6.668852,8.0159281 Z"
            />
            <path
                id="rect1806"
                style={{
                    opacity: 0.274336,
                    fill: "#000000",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.122344,
                    strokeDasharray: "none",
                    stopColor: "#000000",
                }}
                d="M 6.6697972,6.6929607 2.0554318,9.200485 2.4890792,12.134557 a 6.8967118,6.8967118 0 0 0 4.1255084,1.376675 6.8967118,6.8967118 0 0 0 4.2501784,-1.467485 l 0.419397,-2.8432448 z"
            />
            <path
                id="rect1806-5"
                style={{
                    opacity: 0.252212,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000047",
                    strokeWidth: 0.100831,
                    stopColor: "#000000",
                }}
                d="m 2.841773,11.661413 1.6069798,10.882313 c 0.1850556,1.253165 0.9696729,2.286562 2.174154,2.286562 h 0.091822 c 1.204481,0 1.9890982,-1.033397 2.174154,-2.286562 L 10.495862,11.661413 6.6687832,9.5817687 Z"
            />
            <circle
                style={{
                    fill: color,
                    fillOpacity: 1,
                    stroke: "#000047",
                    strokeWidth: 0.113738,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    stopColor: "#000000",
                }}
                id="path366-6"
                cx={6.6145835}
                cy={6.6145835}
                r={6.557714}
            />
            <circle
                style={{
                    opacity: 0.252212,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000047",
                    strokeWidth: 0.0990391,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    stopColor: "#000000",
                }}
                id="path366-6-7"
                cx={6.6145835}
                cy={6.6145835}
                r={5.7102208}
            />
    </svg>
}
