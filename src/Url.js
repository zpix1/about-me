export const Url = ({ url, children }) => <>
    <a href={url} target="_blank" rel="noreferrer">
        {children}
    </a>
    <style jsx>{`
        a {
            color: inherit;
            text-decoration: underline;
        }
    `}</style>
</>;