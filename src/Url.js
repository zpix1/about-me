export const Url = ({ url, children }) => <>
    <a href={url}>
        {children}
    </a>
    <style jsx>{`
        a {
            color: inherit;
            text-decoration: underline;
        }
    `}</style>
</>;