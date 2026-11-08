const Logo = () => {
    return (

        <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 `}
        >
            <rect
                x="5"
                y="5"
                width="90"
                height="90"
                rx="24"
                fill="var(--color-surface, #151920)"
                stroke="var(--color-interactive, #262C38)"
                strokeWidth="4"
            />

            <polygon points="30,28 70,28 50,57" fill="#E2E2E6" />

            <path
                d="M28 28 L50 67 L72 28"
                stroke="var(--color-primary, #7C8CFF)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <circle cx="50" cy="40" r="7.5" fill="var(--color-primary, #7C8CFF)" />
        </svg>

    )
}
export default Logo