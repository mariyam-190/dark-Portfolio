module.exports = {
    content: ["./index.html"],
    purge: [
        '*.html'
    ],
    theme: {
        colors: {
            'blak': '#121212',
            'dgry': '#2A2A2A',
            'greey': '#D5D5D5',
            'beeg': '#194264',
            'beeeg': '#C59968',
            'red': '#dc2626'
        },
        extend: {
            fontFamily: {
                'shadow': 'Shadows Into Light',
                'pacifico': 'Pacifico',
                'indie': 'Indie Flower',
                'amatic': 'Amatic SC'

            }
        },
    },
    plugins: [],
}

//npx tailwindcss -i src/style.css -o public/style.css --watch