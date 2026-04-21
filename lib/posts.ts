import { Post } from "@/types";

const posts: Post[] = [
    {
        slug: "ciao-mondo",
        title: "Ciao Mondo!",
        date: "2026-04-21",
        abstract: "Il mio primo articolo scritto con Next.js. Scopriamo insieme come funziona questo framework.",
        content: `Benvenuto nel mio blog! Questo è il primo articolo e sono molto emozionato di condividere
questo percorso con te. Next.js è un framework React che permette di costruire applicazioni
web moderne con un'ottima esperienza di sviluppo. In questo blog esploreremo insieme
tanti argomenti legati al mondo del web development.`,
        author: "Mario Rossi",
    },
    {
        slug: "app-router-nextjs",
        title: "Capire l'App Router di Next.js",
        date: "2026-04-18",
        abstract: "L'App Router è la nuova modalità di routing introdotta in Next.js 13. Vediamo come funziona.",
        content: `Con Next.js 13 è stato introdotto l'App Router, basato sulla cartella app/.
A differenza del vecchio Pages Router, ogni cartella rappresenta un segmento dell'URL
e ogni file page.tsx diventa la pagina corrispondente. I layout condivisi si definiscono
in layout.tsx e si applicano automaticamente a tutte le pagine figlie. Questo rende
la gestione delle rotte molto più intuitiva e scalabile.`,
        author: "Mario Rossi",
    },
    {
        slug: "typescript-nei-progetti-react",
        title: "Perché usare TypeScript con React",
        date: "2026-04-10",
        abstract: "TypeScript aggiunge tipizzazione statica a JavaScript, rendendo il codice più sicuro e manutenibile.",
        content: `TypeScript è diventato lo standard de facto nei progetti React moderni. Grazie alla
tipizzazione statica, gli errori vengono rilevati già durante la scrittura del codice,
prima ancora di eseguirlo. Le interfacce ci permettono di definire la forma degli oggetti
che passiamo come props, rendendo i componenti più leggibili e facili da usare. In questo
articolo vedremo come configurare TypeScript in un progetto Next.js e i pattern più utili.`,
        author: "Mario Rossi",
    },
];

function getAllPosts(): Post[] {

    return posts.sort((a, b) => a.date > b.date ? -1 : 1)
}

function getPostBySlug(slug: string): Post | undefined {
    return posts.find((post) => post.slug === slug)
}

export { getAllPosts, getPostBySlug }