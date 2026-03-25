tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#020617', 
                surface: '#0f172a',    
                primary: '#1018b9',    
                primaryHover: '#1018b9',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        }
    }
}