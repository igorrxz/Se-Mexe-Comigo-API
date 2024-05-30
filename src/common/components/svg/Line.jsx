export default function Line({ width = 1170, height = 15, ...props }) {
    return (
        <svg {...props} width={width} height={height} viewBox="0 0 1170 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="7.5" x2="1170" y2="7.5" stroke="#EFF3F6" stroke-width="15" />
        </svg>
    )
}