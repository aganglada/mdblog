import { h } from 'preact';

const Header = (props) => (
    <header className={props.styles.header}>
        <h1>{ props.title }</h1>
    </header>
);

export default Header;