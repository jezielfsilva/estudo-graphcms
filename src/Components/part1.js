import React from 'react';

class First extends React.Component {
    render() {
        const item = this.props?.customFragment;
        return (
            <div>
                <div className="container-nav">
                    <nav className="box-nav">
                        <figure className="box-logo">Logo</figure>
                        <div className="box-menu">
                            <ul className="menu">
                                <li>Features</li>
                                <li>FAQs</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="box-buttons">
                            <button className="click">Sign in</button>
                            <button className="click2">Sign up</button>
                        </div>
                    </nav>
                </div>
                <section className="container-title">
                    <h1 className="main-title">{item?.page[0]?.customFragment[0]?.fragments[0]}</h1>
                </section>
            </div>
        )
    }
}

export default First;